import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  FlatList,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProfileSetuppage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [isSkillsDropdownVisible, setIsSkillsDropdownVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState('');
  const skills = [
    'User Experience',
    'User Research',
    'User Testing',
    'User Interface',
  ];

  const handleUpdate = () => {
    // Implement update logic here
    console.log('Update button clicked');
  };
  const handleSkillSelect = skill => {
    setSelectedSkill(skill);
    setIsSkillsDropdownVisible(false);
  };

  return (
    <View style={styles.topprofilecontainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
        <View style={styles.profileheader}>
          <Image
            source={require('./Home/Assetb/BackButton.png')}
            style={styles.profileimage1}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.profileaccountText}>Profile Setup</Text>
      <View style={styles.profilecontainer1}>
        <Image
          source={require('./Home/Assetb/Rectangle1496.jpg')}
          style={styles.profileimage3}
        />
        <Image
          source={require('./Home/Assetb/user.png')}
          style={styles.profileimage2}
        />
        <TouchableOpacity style={styles.profileuploadButton}>
          <Text style={styles.profileuploadButtonText}>
            Upload Profile Picture
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileuploadButtons}>
          <Text style={styles.profileuploadButtonText}>
            Upload Profile Video
          </Text>
        </TouchableOpacity>
        <Text style={styles.profilelabel}>Name</Text>
        <TextInput
          style={styles.profileinput}
          placeholder="Enter your name"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.profilelabel}>Skills</Text>
        <TouchableOpacity
          style={styles.profileinput}
          onPress={() => setIsSkillsDropdownVisible(true)}>
          <Text style={styles.profileskillstext}>
            {selectedSkill || 'Select relevant skills'}
          </Text>
        </TouchableOpacity>
        <Modal
          visible={isSkillsDropdownVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsSkillsDropdownVisible(false)}>
          <View style={styles.profiledropdownContainer}>
            <FlatList
              data={skills}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.profiledropdownItem}
                  onPress={() => handleSkillSelect(item)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>

        <Text style={styles.profilelabel}>Bio</Text>
        <TextInput
          style={styles.profileinputs}
          placeholder="Tell something about yourself"
          value={bio}
          onChangeText={setBio}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topprofilecontainer: {
    flex: 1,
    padding: 140,
  },
  profilecontainer1: {
    flex: 1,
    padding: 100,
  },
  profileheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileimage1: {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 80,
    top: -55,
  },
  profileaccountText: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: '700',
    left: 170,
    top: -55,
    color: '#7B7A7C',
  },
  profilemoreVertIcon: {
    marginRight: 10,
    marginTop: 40,
  },
  profileimage2: {
    width: 50,
    height: 50,
    marginTop: -69,
    marginLeft: 20,
  },
  profileimage3: {
    width: 90,
    height: 90,
    marginTop: 20,
  },
  profileuploadButton: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 24,
    marginTop: -69,
    marginLeft: 140,
    width: 124,
  },
  profileuploadButtons: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 24,
    marginTop: 12,
    marginLeft: 140,
    width: 124,
  },
  profileuploadButtonText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 9.6,
    fontWeight: '600',
  },
  profilelabel: {
    width: 266,
    height: 20,
    marginTop: 20,
    fontSize: 16,
    fontWeight: '500',
    color: '#7B7A7C',
  },
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   borderRadius: 5,
  //   padding: 10,
  //   marginTop: 5,
  // },
  profileinputs: {
    width: 315,
    height: 84,
    borderWidth: 1,
    borderColor: '#7B7A7C',
    color: 'rgba(123, 122, 124, 0.50)',
    borderRadius: 11,
    padding: 10,
    marginTop: 5,
    height: 100,
  },
  // resetPassword: {
  //   marginTop: 20,
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   textAlign: 'right',
  // },
  profileupdateButton: {
    backgroundColor: '#D9D9D9',
    padding: 15,
    borderRadius: 40,
    marginTop: 30,
    alignItems: 'center',
    width: 120,
    marginLeft: 110,
  },
  profileupdateButtonText: {
    color: ' #7B7A7C',
    fontWeight: 'bold',
    fontSize: 20,
  },
  //skills
  profileinput: {
    width: 315,
    height: 40,
    borderWidth: 1,
    borderColor: '#7B7A7C',
    color: '#7B7A7C',
    borderRadius: 11,
    padding: 10,
    marginTop: 5,
    justifyContent: 'center',
  },

  profileskillstext: {
    color: '#7B7A7C',
  },

  profiledropdownContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginTop: 480,
    width: 250,
    height: 163,
    marginLeft: 40,
  },
  profiledropdownItem: {
    backgroundColor: '#F3F3F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ProfileSetuppage;
