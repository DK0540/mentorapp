import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import profileData from 'mentor/profileData.json';
import {useNavigation} from '@react-navigation/native';

const Profilepage = () => {
  const navigation = useNavigation();
  const {user, icons, skills, performance, languages} = profileData;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Image source={{uri: icons.backButton}} style={styles.inputIcon4} />
      </TouchableOpacity>
      <View>
        <Image
          source={{uri: user.backgroundImage}}
          style={styles.backgroundImage}
        />
        <Image source={{uri: user.userImage}} style={styles.inputIcon5} />
        <Text style={styles.editText}>{user.editText}</Text>
      </View>

      <View style={styles.firstCard}>
        <View style={styles.card1}>
          <Text style={styles.cardTitle}>45$/</Text>
          <Text style={styles.cardTitles}>Call</Text>

          <TouchableOpacity onPress={() => navigation.navigate('bookSlot')}>
            <Text style={styles.cardText1}>Book</Text>
          </TouchableOpacity>

          <Image source={{uri: icons.chat}} style={styles.inputIcon} />
        </View>
      </View>
      <View style={styles.card2}>
        <Text style={styles.cardTitle1}>{user.userName}</Text>
        <Image source={{uri: icons.bookmark}} style={styles.inputIcon3} />
        <Image source={{uri: icons.work}} style={styles.inputIcon1} />
        <Image source={{uri: icons.school}} style={styles.inputIcon2} />
        <Text style={styles.cardText2}>{user.userRole}</Text>
        <Text style={styles.cardText3}>{user.userEducation}</Text>
        <Text style={styles.cardText4}>Bio</Text>
        <Text style={styles.cardText5}>{user.userBio}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle2}>Skills</Text>
        <Text style={styles.cardText6}>{skills.skills1}</Text>
        <Text style={styles.cardText7}>{skills.skills2}</Text>
        <Text style={styles.cardText8}>{skills.skills3}</Text>
        <Text style={styles.cardText9}>{skills.skills4}</Text>
        <Text style={styles.cardText10}>{skills.skills5}</Text>
        <Text style={styles.cardText11}>{skills.skills6}</Text>
        <Text style={styles.cardText12}>{skills.skills7}</Text>
        <Text style={styles.cardText13}>{skills.skills8}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle3}>Performance Statistics</Text>
        <Text style={styles.cardText14}>{performance.attendance}</Text>
        <Text style={styles.cardText15}>Overall Attendance</Text>
        <Text style={styles.cardText16}>{performance.ratings}</Text>
        <Text style={styles.cardText17}>Average Ratings</Text>
        <Text style={styles.cardText18}>{performance.sessionsCompleted}</Text>
        <Text style={styles.cardText19}>Sessions Completed</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle4}>Language</Text>
        <Text style={styles.cardText20}>{languages.language1}</Text>
        <Text style={styles.cardText21}> - {languages.proficiency1}</Text>
        <Text style={styles.cardText22}>{languages.language2}</Text>
        <Text style={styles.cardText23}> - {languages.proficiency2}</Text>
      </View>
      <View>
        <Text>Footer</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: 'white',
    marginTop: -15,
  },
  editText: {
    position: 'absolute',
    width: 106,
    height: 22,
    color: '#7B7A7C',
    fontSize: 16,
    lineHeight: 21.1,
    top: 65,
    left: 300,
  },
  backgroundImage: {
    position: 'absolute',
    width: 430,
    height: 578,
    left: -20,
    top: -30,
    zIndex: -10,
  },
  card: {
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  card1: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  card2: {
    width: 353,
    height: 278,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  card3: {
    width: 350,
    height: 122,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    elevation: 3,
  },
  firstCard: {
    marginTop: 290,
  },
  cardTitle: {
    height: 20,
    fontSize: 21,
    //fontStyle: 'normal',
    //textAlign: 'center',
    fontWeight: '500',
    lineHeight: 23.2,
    letterSpacing: -0.149,
    top: 10,
    left: -3,
  },
  cardTitles: {
    position: 'absolute',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16.2,
    top: 28,
    left: 60,
  },
  cardTitle1: {
    width: 188,
    height: 29,
    fontSize: 24,
    color: '#7B7A7C',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  cardTitle2: {
    display: 'flex',
    width: 147,
    height: 24,
    flexDirection: 'column',
    color: '#7B7A7C',
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '600',
  },
  cardTitle3: {
    display: 'flex',
    flexDirection: 'column',
    width: 188,
    height: 23,
    color: '#7B7A7C',
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '600',
  },
  cardTitle4: {
    display: 'flex',
    flexDirection: 'column',
    width: 188,
    height: 25,
    color: '#7B7A7C',
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '600',
  },

  cardText1: {
    color: '#7B7A7C',
    fontSize: 15.276,
    fontWeight: '700',
    lineHeight: 28.966,
    letterSpacing: -0.239,
    marginLeft: 125,
    marginTop: -20,
    backgroundColor: '#D9D9D9',
    textAlign: 'center',
    width: 100,
    height: 35,
    borderRadius: 10,
  },
  cardText2: {
    position: 'absolute',
    width: 238,
    height: 42,
    color: '#7B7A7C',
    fontSize: 14,
    lineHeight: 21.1,
    left: 69,
    top: 60,
  },
  cardText3: {
    width: 238,
    height: 42,
    color: '#7B7A7C',
    fontSize: 14,
    lineHeight: 21.1,
    marginLeft: 55,
    marginTop: -26,
  },
  cardText4: {
    width: 238,
    height: 42,
    color: '#7B7A7C',
    fontSize: 16,
    lineHeight: 21.1,
    marginLeft: 15,
    marginTop: 20,
    fontWeight: '600',
  },
  cardText5: {
    width: 280,
    height: 62,
    color: '#7B7A7C',
    fontSize: 14,
    lineHeight: 21.1,
    marginLeft: 18,
    marginTop: -14,
    letterSpacing: -0.198,
    textAlign: 'justify',
  },
  cardText6: {
    display: 'flex',
    width: 52,
    height: 26,
    backgroundColor: '#D9D9D9',
    color: '#7B7A7C',
    borderRadius: 17,
    textAlign: 'center',
    gap: 10,
    fontSize: 16,
    lineHeight: 23,
    letterSpacing: -0.165,
    marginTop: 13,
  },
  cardText7: {
    display: 'flex',
    width: 52,
    height: 26,
    backgroundColor: '#D9D9D9',
    color: '#7B7A7C',
    borderRadius: 17,
    textAlign: 'center',
    gap: 10,
    fontSize: 16,
    lineHeight: 23,
    letterSpacing: -0.165,
    marginTop: -25,
    marginLeft: 64,
  },
  cardText8: {
    display: 'flex',
    width: 70,
    height: 26,
    backgroundColor: '#D9D9D9',
    color: '#7B7A7C',
    borderRadius: 17,
    textAlign: 'center',
    gap: 10,
    fontSize: 16,
    lineHeight: 23,
    letterSpacing: -0.165,
    marginTop: -25,
    marginLeft: 129,
  },
  cardText9: {
    display: 'flex',
    width: 49,
    height: 26,
    backgroundColor: '#D9D9D9',
    color: '#7B7A7C',
    borderRadius: 17,
    textAlign: 'center',
    gap: 10,
    fontSize: 16,
    lineHeight: 23,
    letterSpacing: -0.165,
    marginTop: -25,
    marginLeft: 212,
  },
  cardText10: {
    display: 'flex',
    width: 48,
    height: 26,
    backgroundColor: '#D9D9D9',
    color: '#7B7A7C',
    borderRadius: 17,
    textAlign: 'center',
    gap: 10,
    fontSize: 16,
    lineHeight: 23,
    letterSpacing: -0.165,
    marginTop: -25,
    marginLeft: 272,
  },
  cardText11: {
    display: 'flex',
    width: 69,
    height: 26,
    backgroundColor: '#D9D9D9',
    color: '#7B7A7C',
    borderRadius: 17,
    textAlign: 'center',
    gap: 10,
    fontSize: 16,
    lineHeight: 23,
    letterSpacing: -0.165,
    marginTop: 10,
  },
  cardText12: {
    display: 'flex',
    width: 54,
    height: 26,
    backgroundColor: '#D9D9D9',
    color: '#7B7A7C',
    borderRadius: 17,
    textAlign: 'center',
    gap: 10,
    fontSize: 16,
    lineHeight: 23,
    letterSpacing: -0.165,
    marginTop: -25,
    marginLeft: 82,
  },
  cardText13: {
    display: 'flex',
    width: 65,
    height: 26,
    backgroundColor: '#D9D9D9',
    color: '#7B7A7C',
    borderRadius: 17,
    textAlign: 'center',
    gap: 10,
    fontSize: 16,
    lineHeight: 23,
    letterSpacing: -0.165,
    marginTop: -25,
    marginLeft: 148,
  },
  cardText14: {
    width: 51.29,
    height: 51.29,
    borderRadius: 13.677,
    backgroundColor: '#D9D9D9',
    color: '#7B7A7C',
    textAlign: 'center',
    lineHeight: 50,
    marginTop: 20,
    marginLeft: 10,
  },
  cardText15: {
    width: 95.742,
    height: 47.871,
    color: '#7B7A7C',
    textAlign: 'center',
    fontSize: 13.677,
    lineHeight: 17.097,
    marginTop: 10,
    marginLeft: -10,
  },
  cardText16: {
    width: 51.29,
    height: 51.29,
    borderRadius: 13.677,
    backgroundColor: '#D9D9D9',
    color: '#7B7A7C',
    textAlign: 'center',
    lineHeight: 50,
    marginTop: -110,
    marginLeft: 130,
  },
  cardText17: {
    width: 95.742,
    height: 47.871,
    color: '#7B7A7C',
    textAlign: 'center',
    fontSize: 13.677,
    lineHeight: 17.097,
    marginLeft: 110,
    marginTop: 10,
  },
  cardText18: {
    width: 51.29,
    height: 51.29,
    borderRadius: 13.677,
    backgroundColor: '#D9D9D9',
    color: '#7B7A7C',
    textAlign: 'center',
    lineHeight: 50,
    marginTop: -109,
    marginLeft: 250,
  },
  cardText19: {
    width: 95.742,
    height: 47.871,
    color: '#7B7A7C',
    textAlign: 'center',
    fontSize: 13.677,
    lineHeight: 17.097,
    marginLeft: 230,
    marginTop: 10,
  },
  cardText20: {
    width: 86,
    height: 31,
    color: '#7B7A7C',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 17.097,
    marginLeft: -9,
    marginTop: 21,
  },

  cardText21: {
    width: 121,
    height: 31,
    color: '#7B7A7C',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 17.097,
    marginLeft: 90,
    marginTop: -31,
  },
  cardText22: {
    width: 86,
    height: 31,
    color: '#7B7A7C',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 17.097,
    marginLeft: -13,
    marginTop: 21,
  },
  cardText23: {
    width: 121,
    height: 31,
    color: '#7B7A7C',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 17.097,
    marginLeft: 65,
    marginTop: -31,
  },
  inputIcon: {
    width: 42,
    height: 42,
    marginLeft: 260,
    marginTop: -38,
  },
  inputIcon1: {
    width: 32,
    height: 32,
    marginLeft: 0,
    marginTop: 14,
  },
  inputIcon2: {
    width: 32,
    height: 32,
    marginLeft: 0,
    marginTop: 15,
  },
  inputIcon3: {
    width: 32,
    height: 32,
    marginLeft: 270,
    marginTop: -40,
  },
  inputIcon4: {
    position: 'absolute',
    width: 32,
    height: 32,
    marginLeft: 0,
    top: 55,
  },
  inputIcon5: {
    position: 'absolute',
    width: 203,
    height: 203,
    left: 80,
    top: 55,
  },
});

export default Profilepage;
