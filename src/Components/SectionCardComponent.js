import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SectionCardComponent = ({
  IconSource,
  title,
  onPress,
  width = 100,
  height = 100, // default square size
  backgroundColor
}) => {
  return (
    <View style={[styles.container, { width: width, height: height, backgroundColor: backgroundColor }]}>
      <Pressable style={styles.pressable} onPress={onPress}>
        <Image style={styles.image} source={IconSource} resizeMode="contain" />
        {title && <Text style={styles.title}>{title}</Text>}
      </Pressable>
    </View>
  );
};

export default SectionCardComponent;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  pressable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  image: {
    width: '60%',
    height: '60%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'green',
    
  },
  title: {
    marginTop: 4,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});