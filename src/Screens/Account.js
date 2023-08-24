import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const Account = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdate = () => {
    // Implement update logic here
    console.log('Update button clicked');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./Home/Assetb/BackButton.png')}
          style={styles.image1}
        />
        <Text style={styles.accountText}>Account</Text>
      </View>
      <Image
        source={require('./Home/Assetb/Rectangle1496.png')}
        style={styles.image3}
      />
      <Image source={require('./Home/Assetb/user.png')} style={styles.image2} />
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload Profile Picture</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter updated name"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Enter a Short Bio"
        value={bio}
        onChangeText={setBio}
      />
      <Text style={styles.label}>Mobile number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your updated number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your updated email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity onPress={handleUpdate}>
        <Text style={styles.resetPassword}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image1: {
    width: 30,
    height: 30,
    marginTop: 40,
  },
  accountText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 40,
    color: '#7B7A7C',
  },
  moreVertIcon: {
    marginRight: 10,
    marginTop: 40,
  },
  image2: {
    width: 50,
    height: 50,
    marginTop: -54,
    marginLeft: 5,
  },
  image3: {
    width: 60,
    height: 60,
    marginTop: 20,
  },
  uploadButton: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 5,
    marginTop: -43,
    marginLeft: 120,
    width: 200,
  },
  uploadButtonText: {
    textAlign: 'center',
    color: '#7B7A7C',
  },
  label: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7B7A7C',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    height: 100,
  },
  resetPassword: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  updateButton: {
    backgroundColor: '#D9D9D9',
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  updateButtonText: {
    color: ' #7B7A7C',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Account;
