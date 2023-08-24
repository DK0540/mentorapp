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

const Educational = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.topeducationcontainer}>
      <View style={styles.educationheader}>
        <TouchableOpacity onPress={goBack}>
          <Image
            source={require('./Home/Assetb/BackButton.png')}
            style={styles.educationimage1}
          />
        </TouchableOpacity>

        <Text style={styles.educationheaderText}>Profile Setup</Text>
      </View>

      <View style={styles.containereducation}>
        <Text style={styles.educationalInfoText}>Educational Info</Text>
        <View style={styles.educationbox}>
          <Text style={styles.educationboxHeading}>
            Master’s in Product Design
          </Text>
          <Text style={styles.educationboxSubHeading}>
            Delhi Technological University, Delhi
          </Text>
          <Text style={styles.educationboxSubHeading1}>2021-2023</Text>
          <Image
            source={require('./Home/Assetb/border_color.png')}
            style={styles.educationimage6}
          />
        </View>
        <View style={styles.educationbox}>
          <Text style={styles.educationboxHeading}>
            Bachelor’s in Mechanical Eng.
          </Text>
          <Text style={styles.educationboxSubHeading}>
            Pune University, Pune
          </Text>
          <Text style={styles.educationboxSubHeading1}>2017-2021</Text>
          <Image
            source={require('./Home/Assetb/border_color.png')}
            style={styles.educationimage7}
          />
        </View>
        <View style={styles.educationbox1}>
          <TouchableOpacity
            onPress={() => navigation.navigate('addeducationpage')}>
            <Image
              source={require('./Home/Assetb/add.png')}
              style={styles.educationimage8}
            />
          </TouchableOpacity>
          <Text style={styles.addEducationText}>Add Education</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topeducationcontainer: {
    flex: 1,
    padding: 10,
  },
  containereducation: {
    flex: 1,
    padding: 32,
    marginLeft: -8,
    marginTop: 170,
  },
  educationheader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  educationimage1: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 65,
    left: 10,
  },
  educationheaderText: {
    position: 'absolute',
    left: 110,
    fontSize: 20,
    fontWeight: '700',
    top: 65,
    color: '#7B7A7C',
  },
  educationalInfoText: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#7B7A7C',
  },
  educationbox: {
    backgroundColor: '#D9D9D9',
    padding: 20,
    marginTop: 25,
    borderRadius: 15,
  },
  educationbox1: {
    width: 338,
    height: 86,
    backgroundColor: 'transparent',
    padding: 20,
    marginTop: 25,
    borderRadius: 15,
    borderColor: '#D9D9D9',
    borderWidth: 5,
  },
  educationboxHeading: {
    width: 209,
    height: 20,
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  educationboxSubHeading: {
    width: 209,
    height: 20,
    fontSize: 10,
    fontWeight: '500',
    color: '#000',
    marginTop: 5,
  },
  educationboxSubHeading1: {
    width: 109,
    height: 20,
    fontSize: 10,
    fontWeight: '500',
    color: '#000',
    marginTop: 5,
  },
  educationimage6: {
    position: 'absolute',
    width: 24,
    height: 24,
    resizeMode: 'cover',
    left: 290,
    top: 40,
  },
  educationimage7: {
    position: 'absolute',
    width: 24,
    height: 24,
    resizeMode: 'cover',
    left: 290,
    top: 40,
  },
  educationimage8: {
    position: 'absolute',
    width: 31.524,
    height: 31.524,
    resizeMode: 'cover',
    top: -20,
    left: 120,
  },
  addEducationText: {
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

export default Educational;
