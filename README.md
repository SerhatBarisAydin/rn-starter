# 🛫 Airport Companion App

> **Not:** Bu proje aktif geliştirme aşamasındadır. Mevcut versiyon final versiyon değildir. Önümüzdeki günlerde yeni özellikler ve iyileştirmeler eklenecektir.

[![React Native](https://img.shields.io/badge/React%20Native-0.76.2-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~52.0.7-black.svg)](https://expo.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-11.8.1-orange.svg)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Airport Companion App, seyahat eden kullanıcılar için havalimanı deneyimini kolaylaştırmak amacıyla geliştirilmiş modern bir mobil uygulamadır. React Native, Expo ve Firebase teknolojileri kullanılarak cross-platform desteği ile iOS ve Android platformlarında çalışabilecek şekilde tasarlanmıştır. Uygulama, yapay zeka destekli chatbot (Dialogflow), harita entegrasyonu ve gerçek zamanlı konum takibi gibi gelişmiş özellikler sunar.

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknoloji Stack](#-teknoloji-stack)
- [Proje Yapısı](#-proje-yapısı)
- [Kurulum](#-kurulum)
- [Yapılandırma](#-yapılandırma)
- [Kullanım](#-kullanım)
- [Geliştirme](#-geliştirme)
- [Build ve Deploy](#-build-ve-deploy)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)

## ✨ Özellikler

### Mevcut Özellikler
- 🔐 **Kullanıcı Kimlik Doğrulama**: Firebase Authentication ile güvenli giriş sistemi
- 📱 **Cross-Platform Destek**: iOS ve Android için tek kod tabanı (Expo SDK 52)
- 🎨 **Modern UI/UX**: UI Kitten ve React Native Elements ile profesyonel arayüz tasarımı
- 🔄 **Real-time Veri Senkronizasyonu**: Firebase Realtime Database/Firestore entegrasyonu
- 🗺️ **Gelişmiş Harita Özellikleri**: React Native Maps entegrasyonu
- 📍 **Konum Takibi**: Expo Location ile gerçek zamanlı konum servisleri
- 🤖 **AI Chatbot**: Dialogflow entegrasyonu ile akıllı sohbet asistanı
- 📐 **Coğrafi Hesaplamalar**: Turf.js ile gelişmiş coğrafi analiz ve hesaplamalar
- 📸 **Kamera ve Galeri**: Fotoğraf çekme ve galeri erişimi
- 📄 **Döküman Yönetimi**: Döküman seçme ve yükleme özellikleri
- 🎨 **Özelleştirilebilir Temalar**: Eva Design System entegrasyonu
- 🔄 **State Yönetimi**: Redux Toolkit ile merkezi state yönetimi

### Planlanan Özellikler
- ✈️ Gerçek zamanlı uçuş bilgileri API entegrasyonu
- 🗺️ Havalimanı içi interaktif harita navigasyonu
- 📢 Push bildirimleri ve uyarılar
- 🎫 Dijital boarding pass yönetimi
- 🏪 Havalimanı içi servis ve mağaza rehberi
- 🌍 Çoklu dil desteği
- 📊 Seyahat geçmişi ve istatistikler
- 🔔 Uçuş gecikme ve gate değişikliği bildirimleri

## 🛠 Teknoloji Stack

### Frontend Framework & Core
- **React Native 0.76.2**: Cross-platform mobil uygulama framework'ü
- **Expo SDK 52.0.7**: React Native geliştirme platformu ve araç seti
- **React 18.3.1**: UI bileşenleri için JavaScript kütüphanesi
- **JavaScript/JSX**: Ana programlama dili

### UI Kütüphaneleri & Design System
- **@ui-kitten/components 5.3.1**: Eva Design System tabanlı UI bileşenleri
- **@eva-design/eva 2.2.0**: Eva Design System teması
- **@rneui/themed & @rneui/base 4.0.0-rc.8**: React Native Elements UI kütüphanesi
- **react-native-svg 15.12.0**: SVG desteği
- **expo-linear-gradient 14.0.2**: Gradient efektleri

### Navigasyon
- **@react-navigation/native 7.1.8**: Ana navigasyon framework'ü
- **@react-navigation/native-stack 7.3.12**: Stack navigasyon
- **react-navigation 4.4.4**: Eski navigasyon desteği
- **react-navigation-stack 2.10.4**: Stack navigasyon eski versiyon
- **react-native-screens 4.4.0**: Native ekran optimizasyonu
- **react-native-gesture-handler 2.20.2**: Gesture yönetimi
- **react-native-safe-area-context 4.12.0**: Güvenli alan yönetimi
- **@react-native-community/masked-view 0.1.11**: Masked view bileşeni

### State Management
- **@reduxjs/toolkit 2.8.2**: Modern Redux state yönetimi
- **react-redux 9.2.0**: React-Redux bağlantısı
- **redux-thunk 3.1.0**: Asenkron Redux işlemleri
- **@react-native-async-storage/async-storage 1.24.0**: Yerel depolama

### Backend & Servisler
- **Firebase 11.8.1**: Backend servisleri
  - Firebase Authentication: Kullanıcı kimlik doğrulama
  - Firebase Realtime Database / Firestore: NoSQL veri tabanı
  - Firebase Cloud Messaging: Push bildirimleri
  - Firebase Storage: Medya dosyaları saklama

### AI & Chatbot
- **react-native-dialogflow 3.2.2**: Google Dialogflow entegrasyonu (AI chatbot)

### Harita & Konum
- **react-native-maps 1.18.0**: Harita görselleştirme
- **expo-location 18.0.10**: Konum servisleri ve GPS
- **@mapbox/polyline 1.2.1**: Polyline encoding/decoding
- **@turf/turf 7.2.0**: Coğrafi hesaplamalar ve analiz

### Medya & Döküman
- **expo-camera 16.0.18**: Kamera erişimi ve fotoğraf çekme
- **expo-image-picker 16.1.4**: Galeri ve resim seçimi
- **expo-document-picker 13.0.3**: Döküman seçme

### Animasyon & Efektler
- **react-native-reanimated 3.16.1**: Yüksek performanslı animasyonlar

### Diğer Özellikler
- **expo-font 13.0.4**: Özel font yönetimi
- **expo-splash-screen 0.29.24**: Splash screen yönetimi
- **expo-status-bar 2.0.0**: Status bar kontrolü

### Geliştirme Araçları
- **@babel/core 7.20.0**: JavaScript derleyici
- **Expo CLI**: Geliştirme ve build araçları
- **npm/yarn**: Paket yöneticisi

## 🚀 Kurulum

### Ön Gereksinimler

Aşağıdaki yazılımların sisteminizde kurulu olması gerekmektedir:

- **Node.js** (v14 veya üzeri) - [İndir](https://nodejs.org/)
- **npm** veya **yarn** - Node.js ile birlikte gelir
- **Expo CLI** - `npm install -g expo-cli`
- **Git** - [İndir](https://git-scm.com/)

### iOS Geliştirme için (Opsiyonel)
- **Xcode** (macOS gerektirir)
- **CocoaPods** - `sudo gem install cocoapods`

### Android Geliştirme için (Opsiyonel)
- **Android Studio**
- **Android SDK**
- **JDK 11** veya üzeri

### Adım Adım Kurulum

1. **Projeyi Klonlayın**
   ```bash
   git clone https://github.com/js-lover/airport-companion-app.git
   cd airport-companion-app
   git checkout File-Architecture
   ```

2. **Bağımlılıkları Yükleyin**
   ```bash
   # npm kullanıyorsanız
   npm install

   # veya yarn kullanıyorsanız
   yarn install
   ```

   **Not**: Proje toplam 37 bağımlılık içermektedir. Kurulum birkaç dakika sürebilir.

3. **Expo CLI'yi Yükleyin** (eğer kurulu değilse)
   ```bash
   npm install -g expo-cli
   # veya
   npm install -g @expo/cli
   ```

4. **iOS için Ek Kurulum** (Sadece macOS)
   
   iOS simülatörü için Xcode'un kurulu olması gerekmektedir:
   ```bash
   # Xcode Command Line Tools'u yükleyin
   xcode-select --install
   ```

5. **Android için Ek Kurulum**
   
   Android Studio ve Android SDK'nın kurulu olması gerekmektedir. [Android Studio Kurulum Rehberi](https://docs.expo.dev/workflow/android-studio-emulator/)

## ⚙️ Yapılandırma

### Firebase Kurulumu

1. **Firebase Console'da Proje Oluşturun**
   - [Firebase Console](https://console.firebase.google.com/) adresine gidin
   - "Add project" butonuna tıklayın
   - Proje adını girin ve adımları takip edin

2. **Firebase Yapılandırma Dosyasını Düzenleyin**
   
   `firebaseConfig.js` dosyasını açın ve kendi Firebase proje bilgilerinizle doldurun:

   ```javascript
   // firebaseConfig.js
   import { initializeApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';
   import { getFirestore } from 'firebase/firestore';
   import { getStorage } from 'firebase/storage';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID"
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getFirestore(app);
   export const storage = getStorage(app);
   ```

3. **Firebase Authentication'ı Etkinleştirin**
   - Firebase Console'da "Authentication" bölümüne gidin
   - İstediğiniz giriş yöntemlerini etkinleştirin (Email/Password, Google, vb.)

4. **Firestore Database Oluşturun**
   - Firebase Console'da "Firestore Database" bölümüne gidin
   - "Create database" butonuna tıklayın
   - Test modunda veya production modunda başlatın

### Dialogflow Kurulumu (AI Chatbot)

Uygulama, kullanıcılarla doğal dil etkileşimi için Google Dialogflow kullanmaktadır.

1. **Dialogflow Konsol'a Gidin**
   - [Dialogflow Console](https://dialogflow.cloud.google.com/) adresine gidin
   - Google hesabınızla giriş yapın

2. **Yeni Agent Oluşturun**
   - "Create Agent" butonuna tıklayın
   - Agent adını girin (örn: "AirportCompanion")
   - Varsayılan dili seçin (Türkçe veya İngilizce)
   - Zaman dilimini ayarlayın

3. **Intent'leri Oluşturun**
   
   Havalimanı asistanı için örnek intent'ler:
   - **FlightInfo**: Uçuş bilgileri sorguları
   - **DirectionsRequest**: Yön tarifi istekleri
   - **ServiceInquiry**: Servis bilgileri
   - **EmergencyHelp**: Acil durum yardımı

4. **Dialogflow Anahtarlarını Alın**
   - Dialogflow Console'da ayarlar simgesine tıklayın
   - "Service Account" bölümüne gidin
   - JSON key dosyasını indirin

5. **Uygulamaya Entegre Edin**
   ```javascript
   // Dialogflow yapılandırması
   import Dialogflow from 'react-native-dialogflow';
   
   const dialogflowConfig = {
     clientEmail: "your-client-email@project-id.iam.gserviceaccount.com",
     privateKey: "YOUR_PRIVATE_KEY",
     projectId: "your-project-id"
   };
   
   Dialogflow.setConfiguration(
     dialogflowConfig.clientEmail,
     dialogflowConfig.privateKey,
     Dialogflow.LANG_TURKISH, // veya Dialogflow.LANG_ENGLISH
     dialogflowConfig.projectId
   );
   ```

### Harita API Kurulumu

1. **Google Maps API Key** (Android için)
   - [Google Cloud Console](https://console.cloud.google.com/) adresine gidin
   - "APIs & Services" > "Credentials" bölümüne gidin
   - "Create Credentials" > "API Key" seçin
   - API key'i kopyalayın ve `app.json` dosyasına ekleyin:
   ```json
   {
     "expo": {
       "android": {
         "config": {
           "googleMaps": {
             "apiKey": "YOUR_GOOGLE_MAPS_API_KEY"
           }
         }
       }
     }
   }
   ```

2. **Apple Maps** (iOS için)
   - iOS için ek yapılandırma gerekmemektedir
   - Apple Maps varsayılan olarak kullanılır

### Ortam Değişkenleri

Hassas bilgileri korumak için `.env` dosyası oluşturun:

```bash
# .env

# Firebase Configuration
FIREBASE_API_KEY=your_api_key_here
FIREBASE_AUTH_DOMAIN=your_auth_domain_here
FIREBASE_PROJECT_ID=your_project_id_here
FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
FIREBASE_APP_ID=your_app_id_here
FIREBASE_MEASUREMENT_ID=your_measurement_id_here

# Dialogflow Configuration
DIALOGFLOW_CLIENT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
DIALOGFLOW_PRIVATE_KEY=your_private_key_here
DIALOGFLOW_PROJECT_ID=your_dialogflow_project_id

# Maps API
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Optional: Other API Keys
AVIATION_API_KEY=your_aviation_api_key_here
```

**Not:** `.env` dosyasını `.gitignore` dosyasına eklemeyi unutmayın!

**.gitignore'a ekleyin:**
```
# Environment variables
.env
.env.local
.env.development
.env.production
```

## 💻 Kullanım

### Geliştirme Modunda Çalıştırma

1. **Expo Geliştirme Sunucusunu Başlatın**
   ```bash
   npm start
   # veya
   expo start
   ```

   Bu komut Metro Bundler'ı başlatır ve Expo Dev Tools'u tarayıcınızda açar.

2. **Uygulamayı Çalıştırın**
   
   Expo Dev Tools tarayıcınızda açılacaktır. Aşağıdaki seçeneklerden birini kullanabilirsiniz:

   - **iOS Simulator** (macOS): Terminal'de `i` tuşuna basın veya:
     ```bash
     npm run ios
     # veya
     expo start --ios
     ```
   
   - **Android Emulator**: Terminal'de `a` tuşuna basın veya:
     ```bash
     npm run android
     # veya
     expo start --android
     ```
   
   - **Web Browser**: Terminal'de `w` tuşuna basın veya:
     ```bash
     npm run web
     # veya
     expo start --web
     ```
   
   - **Fiziksel Cihaz**: Expo Go uygulamasıyla QR kodu tarayın
     - [iOS için Expo Go](https://apps.apple.com/app/expo-go/id982107779)
     - [Android için Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Mevcut NPM Scriptleri

```json
{
  "scripts": {
    "start": "expo start",           // Metro bundler'ı başlat
    "android": "expo start --android", // Android'de çalıştır
    "ios": "expo start --ios",         // iOS'ta çalıştır
    "web": "expo start --web"          // Web'de çalıştır
  }
}
```

### Hızlı Komutlar

```bash
# Tüm seçenekleri görmek için
npm start

# Cache'i temizleyerek başlat
expo start -c

# Belirli bir port ile başlat
expo start --port 19001

# Tunnel bağlantısı ile başlat (fiziksel cihazlar için)
expo start --tunnel

# LAN bağlantısı ile başlat
expo start --lan

# Localhost ile başlat
expo start --localhost
```

## 🔧 Geliştirme

### Kod Yapısı ve Standartları

- **ESLint**: Kod kalitesi için ESLint kurallarını takip edin
- **Prettier**: Kod formatlaması için Prettier kullanın
- **Naming Conventions**: 
  - Bileşenler: PascalCase (örn: `FlightCard.js`)
  - Fonksiyonlar ve değişkenler: camelCase (örn: `getUserData()`)
  - Sabitler: UPPER_SNAKE_CASE (örn: `API_BASE_URL`)
  - Dosya ve klasörler: kebab-case (örn: `flight-details.js`)

### Yeni Bir Özellik Ekleme

1. **Feature Branch Oluşturun**
   ```bash
   git checkout -b feature/yeni-ozellik-adi
   ```

2. **Gerekli Dosyaları Oluşturun**
   - Screen bileşeni (`src/screens/`)
   - İlgili component'ler (`src/components/`)
   - Servis fonksiyonları (`src/services/`)
   - Navigation güncellemeleri

3. **Değişiklikleri Commit Edin**
   ```bash
   git add .
   git commit -m "feat: yeni özellik açıklaması"
   ```

4. **Pull Request Oluşturun**
   ```bash
   git push origin feature/yeni-ozellik-adi
   ```

### Git Commit Mesajı Formatı

Conventional Commits standardını kullanın:

- `feat:` - Yeni özellik
- `fix:` - Hata düzeltmesi
- `docs:` - Dokümantasyon değişikliği
- `style:` - Kod formatlaması
- `refactor:` - Kod yeniden yapılandırma
- `test:` - Test ekleme/düzeltme
- `chore:` - Yapılandırma ve build değişiklikleri

## 📦 Build ve Deploy

### Production Build

#### iOS için Build

```bash
# Expo build service kullanarak
expo build:ios

# EAS Build kullanarak (önerilen)
eas build --platform ios
```

#### Android için Build

```bash
# APK build
expo build:android -t apk

# AAB build (Google Play için)
expo build:android -t app-bundle

# EAS Build kullanarak (önerilen)
eas build --platform android
```

### App Store'a Yükleme

1. **iOS için**
   - Apple Developer hesabı gereklidir
   - Xcode ile build alın veya Expo build service kullanın
   - App Store Connect'te uygulama oluşturun
   - TestFlight üzerinden test edin
   - Review için gönderin

2. **Android için**
   - Google Play Console hesabı gereklidir
   - Signed APK/AAB oluşturun
   - Google Play Console'da uygulama oluşturun
   - Internal test track'e yükleyin
   - Review için gönderin

### Over-the-Air (OTA) Updates

Expo Updates kullanarak uygulama mağazalarını bypass ederek küçük güncellemeler gönderebilirsiniz:

```bash
expo publish
```

## 🧪 Test

### Test Çalıştırma

```bash
# Tüm testleri çalıştır
npm test

# Watch modunda çalıştır
npm test -- --watch

# Coverage raporu oluştur
npm test -- --coverage
```

### Test Yazma

Jest ve React Native Testing Library kullanarak test yazın:

```javascript
// Example: Button.test.js
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button title="Click Me" />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('handles press events', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Click Me" onPress={onPressMock} />
    );
    
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
```

## 🤝 Katkıda Bulunma

Katkılarınızı memnuniyetle karşılıyoruz! Katkıda bulunmak için:

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

### Katkıda Bulunma Kuralları

- Kod kalitesi standartlarına uyun
- Yeni özellikler için test yazın
- Dokümantasyonu güncel tutun
- Pull request açıklamalarında değişiklikleri detaylı açıklayın
- Responsive tasarım prensiplerine uyun

## 🐛 Sorun Bildirme

Bir hata buldunuz mu? Lütfen aşağıdaki bilgileri içeren bir issue açın:

- Hatanın açıklaması
- Hatayı yeniden oluşturma adımları
- Beklenen davranış
- Ekran görüntüleri (varsa)
- Cihaz bilgileri (iOS/Android versiyonu, cihaz modeli)
- React Native ve Expo versiyonları

## ❓ Sık Sorulan Sorular (FAQ)

### Genel Sorular

**S: Expo nedir ve neden kullanılıyor?**
A: Expo, React Native geliştirmeyi kolaylaştıran bir framework ve platform setidir. Native kod yazmadan birçok özelliğe erişim sağlar ve geliştirme sürecini hızlandırır.

**S: Uygulama hem iOS hem de Android'de çalışır mı?**
A: Evet, tek kod tabanı ile her iki platformda da çalışır.

**S: Offline modda çalışır mı?**
A: Şu anda tam offline destek bulunmamaktadır, ancak AsyncStorage ile bazı veriler yerel olarak saklanmaktadır. Tam offline mod gelecek güncellemelerde planlanmaktadır.

### Teknik Sorular

**S: Firebase yapılandırması nasıl yapılır?**
A: [Yapılandırma](#-yapılandırma) bölümündeki Firebase Kurulumu adımlarını takip edin.

**S: Dialogflow chatbot nasıl entegre edilir?**
A: Dialogflow Kurulumu bölümünde detaylı adımlar bulunmaktadır.

**S: Harita özelliği neden çalışmıyor?**
A: Google Maps API key'inizin doğru yapılandırıldığından ve gerekli API'lerin aktif olduğundan emin olun.

**S: Konum izinleri nasıl alınır?**
A: Expo Location, otomatik olarak izin isteyecektir. Ancak `app.json` dosyasında ilgili izinlerin tanımlandığından emin olun.

### Hata Giderme

**S: "Metro Bundler" hatası alıyorum**
A: Cache'i temizleyin: `expo start -c` veya `npm start -- --reset-cache`

**S: Bağımlılık yükleme hataları**
A: node_modules klasörünü silin ve tekrar yükleyin:
```bash
rm -rf node_modules
npm install
```

**S: iOS simülatör başlamıyor**
A: Xcode'un güncel olduğundan ve Command Line Tools'un yüklü olduğundan emin olun.

**S: Android emulator yavaş çalışıyor**
A: Android Studio'da AVD Manager'dan emulator performans ayarlarını kontrol edin ve RAM/CPU ayarlarını artırın.

## 🔧 Sorun Giderme

### Yaygın Hatalar ve Çözümleri

#### 1. Metro Bundler Başlamıyor
```bash
# Cache'i temizle
expo start -c

# Node modules'ü yeniden yükle
rm -rf node_modules
npm install

# Watchman cache'ini temizle (macOS)
watchman watch-del-all
```

#### 2. Firebase Bağlantı Hatası
- `firebaseConfig.js` dosyasındaki bilgilerin doğru olduğundan emin olun
- Firebase Console'da projenin aktif olduğunu kontrol edin
- İnternet bağlantınızı kontrol edin

#### 3. Dialogflow Hatası
- Service account JSON dosyasının doğru yüklendiğinden emin olun
- Dialogflow API'nin Google Cloud'da aktif olduğunu kontrol edin
- Private key formatının doğru olduğundan emin olun

#### 4. Harita Görünmüyor
- Google Maps API key'in geçerli olduğundan emin olun
- API key'in Maps SDK for iOS/Android için yetkilendirildiğinden emin olun
- `app.json` dosyasında API key'in doğru tanımlandığından emin olun

#### 5. Konum Servisleri Çalışmıyor
```json
// app.json - İzinlerin tanımlı olduğundan emin olun
{
  "expo": {
    "ios": {
      "infoPlist": {
        "NSLocationWhenInUseUsageDescription": "Bu uygulama konumunuzu kullanarak..."
      }
    },
    "android": {
      "permissions": [
        "ACCESS_FINE_LOCATION",
        "ACCESS_COARSE_LOCATION"
      ]
    }
  }
}
```

#### 6. Kamera/Galeri Erişim Hatası
Gerekli izinlerin `app.json` dosyasında tanımlı olduğundan emin olun:
```json
{
  "expo": {
    "ios": {
      "infoPlist": {
        "NSCameraUsageDescription": "Bu uygulama kamera erişimi gerektirir",
        "NSPhotoLibraryUsageDescription": "Bu uygulama galeri erişimi gerektirir"
      }
    },
    "android": {
      "permissions": [
        "CAMERA",
        "READ_EXTERNAL_STORAGE",
        "WRITE_EXTERNAL_STORAGE"
      ]
    }
  }
}
```

#### 7. Redux State Güncellenmiyor
- Redux DevTools ile state değişikliklerini izleyin
- Actions ve reducers'ın doğru tanımlandığından emin olun
- Redux Thunk middleware'inin yapılandırıldığından emin olun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## ⚡ Performans Optimizasyonu

### Genel İpuçları

1. **Reanimated Kullanımı**: Ağır animasyonlar için `react-native-reanimated` kullanın
2. **Memoization**: Gereksiz re-render'ları önlemek için `React.memo`, `useMemo`, `useCallback` kullanın
3. **FlatList Optimizasyonu**: Uzun listeler için `getItemLayout`, `removeClippedSubviews` kullanın
4. **Image Optimization**: Görselleri optimize edin ve lazy loading kullanın
5. **Bundle Size**: Kullanılmayan import'ları temizleyin

### Redux Optimizasyonu

```javascript
// Selector'lar için reselect kullanın
import { createSelector } from '@reduxjs/toolkit';

const selectFlights = state => state.flights.data;
const selectFilter = state => state.flights.filter;

export const selectFilteredFlights = createSelector(
  [selectFlights, selectFilter],
  (flights, filter) => flights.filter(flight => 
    flight.destination.includes(filter)
  )
);
```

### Harita Performansı

```javascript
// Marker'ları optimize edin
<MapView>
  {markers.map(marker => (
    <Marker
      key={marker.id}
      coordinate={marker.coordinate}
      tracksViewChanges={false} // Performans için önemli
    />
  ))}
</MapView>
```

## 🎨 Tasarım Sistemi

Proje Eva Design System kullanmaktadır. Tutarlı bir kullanıcı deneyimi için aşağıdaki prensiplere uyun:

### Renk Paleti

```javascript
// src/styles/colors.js
export const colors = {
  primary: '#0066CC',
  secondary: '#6C757D',
  success: '#28A745',
  danger: '#DC3545',
  warning: '#FFC107',
  info: '#17A2B8',
  light: '#F8F9FA',
  dark: '#343A40',
  white: '#FFFFFF',
  black: '#000000'
};
```

### Typography

```javascript
// src/styles/typography.js
export const typography = {
  h1: { fontSize: 32, fontWeight: 'bold' },
  h2: { fontSize: 28, fontWeight: 'bold' },
  h3: { fontSize: 24, fontWeight: '600' },
  h4: { fontSize: 20, fontWeight: '600' },
  body: { fontSize: 16, fontWeight: 'normal' },
  caption: { fontSize: 14, fontWeight: 'normal' },
  small: { fontSize: 12, fontWeight: 'normal' }
};
```

### Spacing

```javascript
// src/styles/spacing.js
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48
};
```

## 🔐 Güvenlik

### Best Practices

1. **API Anahtarlarını Gizleyin**: `.env` dosyası kullanın ve asla commit etmeyin
2. **Firebase Rules**: Production'da güvenlik kurallarını sıkılaştırın
3. **HTTPS**: Tüm API çağrılarında HTTPS kullanın
4. **Kullanıcı Girişi**: Input validasyonu her zaman yapın
5. **Sensitive Data**: Hassas bilgileri AsyncStorage'da şifreleyin

### Firebase Security Rules Örneği

```javascript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Kullanıcılar sadece kendi verilerine erişebilir
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Genel veriler herkes okuyabilir, sadece auth kullanıcılar yazabilir
    match /flights/{flightId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 📚 Kaynak ve Referanslar

### Resmi Dokümantasyonlar
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Navigation](https://reactnavigation.org/docs/getting-started)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [UI Kitten](https://akveo.github.io/react-native-ui-kitten/)
- [Dialogflow Documentation](https://cloud.google.com/dialogflow/docs)

### Öğrenme Kaynakları
- [React Native Tutorial](https://reactnative.dev/docs/tutorial)
- [Expo Guides](https://docs.expo.dev/guides/overview/)
- [Firebase for Mobile](https://firebase.google.com/docs/guides)
- [Redux Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview)

### Topluluk ve Destek
- [React Native Community](https://github.com/react-native-community)
- [Expo Forums](https://forums.expo.dev/)
- [Stack Overflow - React Native](https://stackoverflow.com/questions/tagged/react-native)
- [Reddit - r/reactnative](https://www.reddit.com/r/reactnative/)

## 🌟 Öne Çıkan Özellikler ve Kullanım Örnekleri

### 1. AI Chatbot Kullanımı

```javascript
import Dialogflow from 'react-native-dialogflow';

const ChatBot = () => {
  const sendMessage = async (text) => {
    try {
      const result = await Dialogflow.requestQuery(
        text,
        (response) => console.log(response),
        (error) => console.error(error)
      );
      return result;
    } catch (error) {
      console.error('Dialogflow error:', error);
    }
  };

  return (
    <View>
      <TextInput 
        placeholder="Bir şey sorun..."
        onSubmitEditing={(e) => sendMessage(e.nativeEvent.text)}
      />
    </View>
  );
};
```

### 2. Harita Entegrasyonu

```javascript
import MapView, { Marker, Polyline } from 'react-native-maps';

const AirportMap = () => {
  const [region, setRegion] = useState({
    latitude: 41.2615,
    longitude: 28.7413,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      showsUserLocation
      showsMyLocationButton
    >
      <Marker
        coordinate={{ latitude: 41.2615, longitude: 28.7413 }}
        title="İstanbul Havalimanı"
        description="İstanbul Airport"
      />
    </MapView>
  );
};
```

### 3. Konum Takibi

```javascript
import * as Location from 'expo-location';

const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Konum izni verilmedi');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return location;
};
```

### 4. Redux Store Kullanımı

```javascript
// store.js
import { configureStore } from '@reduxjs/toolkit';
import flightsReducer from './slices/flightsSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    flights: flightsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Component'te kullanım
import { useSelector, useDispatch } from 'react-redux';

const FlightList = () => {
  const flights = useSelector((state) => state.flights.data);
  const dispatch = useDispatch();
  
  // ...
};
```

## 👥 Ekip ve Katkıda Bulunanlar

### Proje Sahibi
- **Geliştirici**: [js-lover](https://github.com/js-lover)

### Katkıda Bulunanlar
Katkıda bulunan herkese teşekkür ederiz! 🙏

[Katkıda bulunmak için tıklayın](#-katkıda-bulunma)

## 🙏 Teşekkürler

Bu proje aşağıdaki açık kaynak projelerden ve teknolojilerden faydalanmaktadır:

### Core Technologies
- [React Native](https://reactnative.dev/) - Cross-platform mobil geliştirme
- [Expo](https://expo.dev/) - React Native geliştirme platformu
- [Firebase](https://firebase.google.com/) - Backend servisleri

### UI & Design
- [UI Kitten](https://akveo.github.io/react-native-ui-kitten/) - Eva Design System
- [React Native Elements](https://reactnativeelements.com/) - UI component kütüphanesi
- [React Native SVG](https://github.com/react-native-svg/react-native-svg) - SVG desteği

### Navigation & State
- [React Navigation](https://reactnavigation.org/) - Navigasyon çözümü
- [Redux Toolkit](https://redux-toolkit.js.org/) - State yönetimi
- [React Redux](https://react-redux.js.org/) - React-Redux binding

### Maps & Location
- [React Native Maps](https://github.com/react-native-maps/react-native-maps) - Harita entegrasyonu
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/) - Konum servisleri
- [Turf.js](https://turfjs.org/) - Coğrafi hesaplamalar

### AI & Other Services
- [Dialogflow](https://cloud.google.com/dialogflow) - AI Chatbot
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) - Animasyonlar

## 📞 İletişim ve Destek

### Proje İletişimi

- **GitHub Repository**: [airport-companion-app](https://github.com/js-lover/airport-companion-app)
- **GitHub Issues**: [Sorun Bildir](https://github.com/js-lover/airport-companion-app/issues)
- **GitHub Discussions**: [Tartışmalara Katıl](https://github.com/js-lover/airport-companion-app/discussions)

### Sosyal Medya

- **Twitter**: [@js-lover] (varsa ekleyin)
- **LinkedIn**: [LinkedIn Profile] (varsa ekleyin)

### Destek Alma

Sorularınız için:
1. Önce [FAQ](#-sık-sorulan-sorular-faq) bölümüne bakın
2. [Sorun Giderme](#-sorun-giderme) bölümünü kontrol edin
3. GitHub Issues'da benzer sorunları arayın
4. Yeni bir issue açın veya discussion başlatın

## 📊 Proje İstatistikleri

- **React Native Version**: 0.76.2
- **Expo SDK**: 52.0.7
- **Firebase**: 11.8.1
- **Total Dependencies**: 37+
- **Platform Support**: iOS, Android, Web
- **Min iOS Version**: iOS 13.0+
- **Min Android Version**: Android 5.0+ (API 21)

## 🗺️ Yol Haritası

### ✅ Tamamlanan (v1.0)
- [x] Temel proje yapısı
- [x] Firebase entegrasyonu
- [x] UI Kitten design system
- [x] Redux state yönetimi
- [x] Navigasyon sistemi
- [x] Dialogflow chatbot entegrasyonu
- [x] Harita görselleştirme
- [x] Konum servisleri
- [x] Kamera ve döküman yönetimi

### 🚧 Geliştirme Aşamasında (v1.1)
- [ ] Gerçek zamanlı uçuş API entegrasyonu
- [ ] Kullanıcı profil yönetimi ve düzenleme
- [ ] Push notification implementasyonu
- [ ] Havalimanı detay sayfaları
- [ ] Boarding pass QR kod tarayıcı
- [ ] Unit ve integration testleri

### 📋 Planlanan (v1.2)
- [ ] Offline mod ve caching
- [ ] Çoklu dil desteği (TR, EN, DE, FR)
- [ ] Dark mode / Light mode toggle
- [ ] Havalimanı içi AR navigasyon
- [ ] Uçuş rezervasyon sistemi
- [ ] Havalimanı servis rezervasyonları

### 🔮 Uzun Vadeli (v2.0+)
- [ ] AI destekli seyahat planlama asistanı
- [ ] Sosyal özellikler (arkadaş ekleme, seyahat paylaşımı)
- [ ] Havalimanı lounge erişimi ve rezervasyonu
- [ ] Sadakat programı entegrasyonları
- [ ] Apple Watch ve Wear OS desteği
- [ ] Tablet optimize edilmiş arayüz
- [ ] Web versiyonu tam özellik desteği

## 📈 Versiyon Geçmişi

### v1.0.0 (Mevcut - Geliştirme)
- İlk versiyon
- Temel özellikler implementasyonu
- File Architecture branch oluşturuldu
- Core dependencies kurulumu

## 🔄 Güncelleme Notları

### Son Güncellemeler
- **2026-01**: Proje başlatıldı
- **2026-01**: Temel yapı ve bağımlılıklar eklendi
- **2026-01**: README dokümantasyonu tamamlandı

## 🌐 Dil Seçenekleri

Bu README Türkçe olarak hazırlanmıştır. İngilizce versiyon için:
- English version: [README_EN.md](README_EN.md) _(yakında)_

## 🎯 Hedef Kitle

Bu uygulama aşağıdaki kullanıcı grupları için tasarlanmıştır:

- ✈️ **Sık Seyahat Edenler**: Havalimanı deneyimini kolaylaştırmak isteyenler
- 🌍 **İş Seyahati Yapanlar**: Zaman yönetimi kritik olan profesyoneller
- 👨‍👩‍👧‍👦 **Aileler**: Çocuklu aileler için navigasyon ve bilgi desteği
- 🎒 **Turistler**: Yeni havalimanlarında yön bulmak isteyenler
- ♿ **Özel İhtiyaç Sahibi Yolcular**: Erişilebilirlik özellikleri kullananlar

## 💡 Kullanım Senaryoları

1. **Uçuş Öncesi**: Terminal, gate ve check-in bilgileri
2. **Havalimanında**: Gerçek zamanlı navigasyon ve servis bulma
3. **Transit**: Bağlantı uçuşları ve bekleme süreleri yönetimi
4. **Acil Durum**: Hızlı yardım ve bilgi erişimi
5. **Alışveriş ve Yemek**: Mağaza ve restoran önerileri

## 🔒 Gizlilik ve Veri Güvenliği

- Kullanıcı verileri Firebase güvenlik kuralları ile korunmaktadır
- Konum verileri sadece kullanıcı izni ile erişilir
- Kişisel bilgiler şifrelenerek saklanır
- GDPR ve KVKK uyumlu veri işleme
- Detaylı bilgi için: [Privacy Policy](PRIVACY.md) _(yakında)_

## 📜 Lisans Bilgileri

MIT License

Copyright (c) 2026 js-lover

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

<div align="center">

### 🚀 Built with ❤️ by [js-lover](https://github.com/js-lover)

**Star ⭐ this repo if you find it useful!**

[Report Bug](https://github.com/js-lover/airport-companion-app/issues) · 
[Request Feature](https://github.com/js-lover/airport-companion-app/issues) · 
[Contribute](https://github.com/js-lover/airport-companion-app/pulls)

</div>

---

**Not**: Bu README aktif olarak geliştirilmektedir ve proje ilerledikçe güncellenecektir.

**Son Güncelleme**: 27 Ocak 2026  
**Doküman Versiyonu**: 1.0.0  
**Proje Durumu**: 🚧 Aktif Geliştirme
