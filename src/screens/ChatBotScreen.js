import { Button, Card } from '@rneui/base';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import dialogflowConfig from './dialogflow-key.json';
import dictionary from './Dictionary.json';

const ChatBotScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Merhaba! Size nasıl yardımcı olabilirim?',
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogflowReady, setIsDialogflowReady] = useState(false);

  useEffect(() => {
    initializeDialogflow();
  }, []);

  const initializeDialogflow = async () => {
    try {
      console.log('Dialogflow başlatılıyor...');
      
      // Konfigürasyon kontrolleri
      if (!dialogflowConfig.client_email || !dialogflowConfig.private_key || !dialogflowConfig.project_id) {
        throw new Error('Dialogflow konfigürasyonu eksik');
      }

      // Private key formatını kontrol et ve düzelt
      let privateKey = dialogflowConfig.private_key;
      if (privateKey && !privateKey.includes('\\n')) {
        // Private key'deki \n karakterlerini gerçek newline'lara çevir
        privateKey = privateKey.replace(/\\n/g, '\n');
      }

      console.log('Client Email:', dialogflowConfig.client_email);
      console.log('Project ID:', dialogflowConfig.project_id);
      console.log('Private Key başlangıcı:', privateKey ? privateKey.substring(0, 50) + '...' : 'Yok');

      await Dialogflow_V2.setConfiguration(
        dialogflowConfig.client_email,
        privateKey,
        Dialogflow_V2.LANG_ENGLISH,
        dialogflowConfig.project_id
      );
      
      setIsDialogflowReady(true);
      console.log('Dialogflow başarıyla başlatıldı');
    } catch (error) {
      console.error('Dialogflow başlatma hatası:', error);
      Alert.alert(
        'Kimlik Doğrulama Hatası',
        'Dialogflow kimlik doğrulaması başarısız. Service account ayarlarını kontrol edin.',
        [{ text: 'Tamam' }]
      );
    }
  };

  const generateMessageId = () => {
    return Date.now() + Math.random();
  };

  const addMessage = (text, isUser) => {
    const newMessage = {
      id: generateMessageId(),
      text,
      isUser,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const searchInDictionary = (userInput) => {
    const lowerInput = userInput.toLowerCase().trim();
    
    // Tam eşleşme kontrolü
    if (dictionary[lowerInput]) {
      return dictionary[lowerInput];
    }

    // Kısmi eşleşme kontrolü
    const matchedKey = Object.keys(dictionary).find(term => {
      const lowerTerm = term.toLowerCase();
      return lowerInput.includes(lowerTerm) || lowerTerm.includes(lowerInput);
    });

    return matchedKey ? dictionary[matchedKey] : null;
  };

  const sendToDialogflow = async (userInput) => {
    return new Promise((resolve, reject) => {
      console.log('Dialogflow\'a gönderiliyor:', userInput);
      
      Dialogflow_V2.requestQuery(
        userInput,
        (result) => {
          console.log('Dialogflow yanıtı:', result);
          
          if (result && result.queryResult && result.queryResult.fulfillmentText) {
            resolve(result.queryResult.fulfillmentText);
          } else {
            resolve('Üzgünüm, anlamadım. Lütfen farklı bir şekilde sorun.');
          }
        },
        (error) => {
          console.error('Dialogflow hatası:', error);
          reject(error);
        }
      );
    });
  };

  const sendMessage = async () => {
    const userInput = input.trim();
    if (userInput === '') return;

    // Kullanıcı mesajını ekle
    addMessage(userInput, true);
    setInput('');
    setIsLoading(true);

    try {
      let botResponse = null;

      // Önce dictionary'de ara
      const dictionaryResponse = searchInDictionary(userInput);
      
      if (dictionaryResponse) {
        //console.log('Dictionary\'den yanıt bulundu');
        botResponse = dictionaryResponse;
      } else if (isDialogflowReady) {
        // Dictionary'de bulunamazsa Dialogflow'a gönder
        console.log('Dialogflow\'a gönderiliyor...');
        try {
          botResponse = await sendToDialogflow(userInput);
        } catch (dialogflowError) {
          console.error('Dialogflow hatası:', dialogflowError);
          botResponse = 'Üzgünüm, şu anda sadece önceden tanımlanmış sorulara yanıt verebiliyorum. Lütfen farklı bir soru deneyin.';
        }
      } else {
        botResponse = 'Sistem henüz hazır değil. Lütfen birkaç saniye bekleyin.';
      }

      // Bot yanıtını ekle
      addMessage(botResponse, false);

    } catch (error) {
      console.error('Mesaj gönderme hatası:', error);
      addMessage(
        'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin veya internet bağlantınızı kontrol edin.',
        false
      );
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.isUser ? styles.userMessageContainer : styles.botMessageContainer,
      ]}
    >
      <View
        style={[
          styles.message,
          item.isUser ? styles.userMessage : styles.botMessage,
        ]}
      >
        <Text style={[
          styles.messageText,
          item.isUser ? styles.userMessageText : styles.botMessageText
        ]}>
          {item.text}
        </Text>
        <Text style={[
          styles.timestamp,
          item.isUser ? styles.userTimestamp : styles.botTimestamp
        ]}>
          {formatTime(item.timestamp)}
        </Text>
      </View>
    </View>
  );

  const clearChat = () => {
    Alert.alert(
      'Sohbeti Temizle',
      'Tüm mesajları silmek istediğinizden emin misiniz?',
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Sil',
          style: 'destructive',
          onPress: () => {
            setMessages([{
              id: generateMessageId(),
              text: 'Sohbet temizlendi. Size nasıl yardımcı olabilirim?',
              isUser: false,
              timestamp: new Date(),
            }]);
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ChatBot</Text>
        <TouchableOpacity onPress={clearChat} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Temizle</Text>
        </TouchableOpacity>
      </View>

      {/* Connection Status */}
      {!isDialogflowReady && (
        <View style={styles.statusContainer}>
          <ActivityIndicator size="small" color="#007AFF" />
          <Text style={styles.statusText}>Bağlanıyor...</Text>
        </View>
      )}

      {/* Messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.messagesList}
        showsVerticalScrollIndicator={false}
        inverted={false}
        ref={(ref) => {
          if (ref && messages.length > 0) {
            ref.scrollToEnd({ animated: true });
          }
        }}
      />

      {/* Loading Indicator */}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#007AFF" />
          <Text style={styles.loadingText}>Yazıyor...</Text>
        </View>
      )}

      {/* Input Container */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Mesajınızı yazın..."
          placeholderTextColor="#999"
          multiline
          maxLength={500}
          onSubmitEditing={sendMessage}
          returnKeyType="send"
          blurOnSubmit={false}
        />
        <TouchableOpacity
          style={[
            styles.sendButton,
            (!input.trim() || isLoading) && styles.sendButtonDisabled
          ]}
          onPress={sendMessage}
          disabled={!input.trim() || isLoading}
        >
          <Text style={[
            styles.sendButtonText,
            (!input.trim() || isLoading) && styles.sendButtonTextDisabled
          ]}>
            Gönder
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatBotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#007AFF',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  clearButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 15,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff3cd',
    borderBottomWidth: 1,
    borderBottomColor: '#ffeaa7',
  },
  statusText: {
    marginLeft: 8,
    color: '#856404',
    fontSize: 14,
  },
  messagesList: {
    padding: 15,
    paddingBottom: 10,
  },
  messageContainer: {
    marginVertical: 4,
  },
  userMessageContainer: {
    alignItems: 'flex-end',
  },
  botMessageContainer: {
    alignItems: 'flex-start',
  },
  message: {
    maxWidth: '85%',
    padding: 12,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  userMessage: {
    backgroundColor: '#007AFF',
    borderBottomRightRadius: 6,
  },
  botMessage: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 6,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#fff',
  },
  botMessageText: {
    color: '#333',
  },
  timestamp: {
    fontSize: 11,
    marginTop: 4,
    opacity: 0.7,
  },
  userTimestamp: {
    color: '#fff',
    textAlign: 'right',
  },
  botTimestamp: {
    color: '#666',
    textAlign: 'left',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  loadingText: {
    marginLeft: 8,
    color: '#666',
    fontSize: 14,
    fontStyle: 'italic',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#ccc',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  sendButtonTextDisabled: {
    color: '#999',
  },
});