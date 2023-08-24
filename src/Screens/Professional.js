import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Professional = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.topprofessionalcontainer}>
      <View style={styles.professionalheader}>
        <Image
          source={require('./Home/Assetb/BackButton.png')}
          style={styles.professionalimage1}
        />
        <Text style={styles.professionalheaderText}>Profile Setup</Text>
      </View>

      <View style={styles.professionalcontainer}>
        <Text style={styles.professionalInfoText}>Professional Info</Text>
        <View style={styles.professionalbox}>
          <Text style={styles.professionalboxHeading}>
            Sr. User experience designer
          </Text>
          <Text style={styles.professionalboxSubHeading}>
            Delhi Technological University, Delhi
          </Text>
          <Text style={styles.professionalboxSubHeading1}>2021-2023</Text>
          <Image
            source={require('./Home/Assetb/border_color.png')}
            style={styles.professionalimage6}
          />
        </View>

        <View style={styles.professionalboxprofessional}>
          <TouchableOpacity
            onPress={() => navigation.navigate('addexperiencepage')}>
            <Image
              source={require('./Home/Assetb/add.png')}
              style={styles.professionalimage8}
            />
          </TouchableOpacity>
          <Text style={styles.professionaladdExperienceText}>
            Add Experience
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topprofessionalcontainer: {
    flex: 1,
    padding: 10,
  },
  professionalheader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  professionalcontainer: {
    flex: 1,
    padding: 32,
    marginLeft: -8,
    marginTop: 270,
  },
  professionalimage1: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 65,
    left: 10,
  },
  professionalheaderText: {
    position: 'absolute',
    left: 110,
    fontSize: 20,
    fontWeight: '700',
    top: 65,
    color: '#7B7A7C',
  },

  professionalInfoText: {
    marginTop: -75,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#7B7A7C',
  },
  professionalbox: {
    backgroundColor: '#D9D9D9',
    padding: 20,
    marginTop: 25,
    borderRadius: 15,
  },
  professionalboxprofessional: {
    width: 338,
    height: 86,
    backgroundColor: 'transparent',
    padding: 20,
    marginTop: 25,
    borderRadius: 15,
    borderColor: '#D9D9D9',
    borderWidth: 5,
  },
  professionalboxHeading: {
    width: 209,
    height: 20,
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  professionalboxSubHeading: {
    width: 209,
    height: 20,
    fontSize: 10,
    fontWeight: '500',
    color: '#000',
    marginTop: 5,
  },
  professionalboxSubHeading1: {
    width: 109,
    height: 20,
    fontSize: 10,
    fontWeight: '500',
    color: '#000',
    marginTop: 5,
  },
  professionalimage6: {
    position: 'absolute',
    width: 24,
    height: 24,
    resizeMode: 'cover',
    left: 290,
    top: 40,
  },

  professionalexperienceImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  professionalimage8: {
    position: 'absolute',
    width: 31.524,
    height: 31.524,
    resizeMode: 'cover',
    top: -20,
    left: 120,
  },
  professionaladdExperienceText: {
    position: 'absolute',
    width: 183,
    height: 28,
    left: 110,
    top: 40,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    color: '#7B7A7C',
  },
});
export default Professional;
