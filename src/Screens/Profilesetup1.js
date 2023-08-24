import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ProfileSetuppage from './ProfileSetuppage';
import Educational from './Educational';
import Professional from './Professional';

// import Educational from './Educational';
// import Professional from './Professional';

const Profilesetup1 = () => {
  const [currentScreen, setCurrentScreen] = useState('profsetuppage');

  const handleNext = () => {
    if (currentScreen === 'profsetuppage') {
      setCurrentScreen('educationpage');
    } else if (currentScreen === 'educationpage') {
      setCurrentScreen('professionalpage');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logos}>
          <View style={styles.line} />
          <View style={styles.line2} />
          <TouchableOpacity
            onPress={() => setCurrentScreen('profsetuppage')}
            style={[
              styles.logoWrapper,
              currentScreen === 'profsetuppage' && styles.activeLogo,
            ]}>
            <Image
              style={styles.logo}
              source={require('./Home/Assetb/account.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCurrentScreen('educationpage')}
            style={[
              styles.logoWrapper,
              currentScreen === 'educationpage' && styles.activeLogo,
            ]}>
            <Image
              style={styles.logo}
              source={require('./Home/Assetb/school.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCurrentScreen('professionalpage')}
            style={[
              styles.logoWrapper,
              currentScreen === 'professionalpage' && styles.activeLogo,
            ]}>
            <Image
              style={styles.logo}
              source={require('./Home/Assetb/apartment.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {currentScreen === 'profsetuppage' && <ProfileSetuppage />}
      {currentScreen === 'educationpage' && <Educational />}
      {currentScreen === 'professionalpage' && <Professional />}
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    width: 102,
    height: 2,
    backgroundColor: '#D9D9D9',
    left: 32,
    top: 16,
  },
  line2: {
    position: 'absolute',
    width: 100,
    height: 2,
    backgroundColor: '#D9D9D9',
    left: 168,
    top: 16,
  },
  logos: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 150,
    gap: 100,
  },
  logoWrapper: {
    borderRadius: 30,
    padding: 5,
    // backgroundColor: 'gray',
  },
  activeLogo: {
    backgroundColor: 'gray',
  },
  logo: {
    width: 24,
    height: 24,
  },
  //   nextButton: {
  //     marginTop: 20,
  //     padding: 10,
  //     backgroundColor: '#00f',
  //     borderRadius: 8,
  //   },
  //   buttonText: {
  //     color: 'white',
  //     fontSize: 16,
  //   },
  nextButton: {
    position: 'absolute',
    width: 158,
    height: 56,
    backgroundColor: '#D9D9D9',
    padding: 14,
    borderRadius: 40,
    top: 670,
    alignItems: 'center',
    left: 110,
  },
  buttonText: {
    color: ' #7B7A7C',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Profilesetup1;
