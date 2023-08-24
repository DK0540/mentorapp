import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function BookConfirm() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./Home/Assetb/BackButton.png')}
          style={styles.backButton}
        />
        <Text style={styles.headerText}>Book a slot</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require('./Home/Assetb/Ok.jpg')}
          style={styles.centerImage}
        />
        <Text style={styles.centerText}>
          Request sent to your mentor! We'll holler when they give the nod. Stay
          tuned for the green light, buddy!
        </Text>
        <View style={styles.bottomBackButton}>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => navigation.navigate('bookSlot')}>
            <Image
              source={require('./Home/Assetb/arrow_back.png')}
              style={styles.bottomBackArrow}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginTop: 50,
  },
  headerText: {
    marginLeft: 10,
    marginTop: 50,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#7B7A7C',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerImage: {
    width: 128,
    height: 128,
    resizeMode: 'contain',
    marginBottom: 80,
  },
  centerText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 70,
    color: '#7B7A7C',
  },

  //back button

  bottomBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 8,
    marginTop: 25,
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBackArrow: {
    width: 60,
    height: 20,
    marginRight: 5,
  },
  sendButtonText: {
    color: '#7B7A7C',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
