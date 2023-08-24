import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();
  return (
    <View style={styles.footerContainer}>
      <Image
        source={require('./Home/Assetb/b.jpg')}
        style={styles.footerBackground}
      />
      <Image
        onPress={() => navigation.navigate('chatScreen')}
        source={require('./Home/Assetb/n.png')}
        style={styles.footerImage2}
      />
      <Image
        source={require('./Home/Assetb/c.png')}
        style={styles.footerImage3}
      />
      <Image
        source={require('./Home/Assetb/h.png')}
        style={styles.footerImage4}
      />

      <TouchableOpacity
        style={styles.footerImage5}
        onPress={() => navigation.navigate('chatScreen')}>
        <Image
          style={styles.footerImage5}
          source={require('./Home/Assetb/m.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 61,
    height: 61,
  },

  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerBackground: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  footerImage2: {
    position: 'absolute',
    top: 30,
    bottom: 20,
    left: 40,
    width: 32,
    height: 32,
    resizeMode: 'cover',
  },
  footerImage3: {
    position: 'absolute',
    top: -1,
    bottom: 20,
    left: '39%',
    width: 91,
    height: 91,
    resizeMode: 'cover',
    borderRadius: 2,
  },
  footerImage4: {
    position: 'absolute',
    top: 30,
    bottom: 20,
    left: '52.5%',
    marginLeft: -25,
    width: 32,
    height: 32,
    resizeMode: 'cover',
  },
  footerImage5: {
    position: 'absolute',
    top: 16,
    bottom: 20,
    right: 20,
    width: 32,
    height: 32,
    resizeMode: 'cover',
  },
});
