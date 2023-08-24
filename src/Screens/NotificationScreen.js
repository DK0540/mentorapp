import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const NotificationScreen = () => {
  const [doNotDisturb, setDoNotDisturb] = useState(false);
  const [notificationSound, setNotificationSound] = useState(false);
  const [vibrations, setVibrations] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  const handleStartTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setStartTime(selectedTime);
    }
    setShowStartTimePicker(false);
  };

  const handleEndTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setEndTime(selectedTime);
    }
    setShowEndTimePicker(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./Home/Assetb/BackButton.png')}
          style={styles.image}
        />
        <Text style={styles.notificationText}>Notification</Text>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.boxContent}>
          <Text style={styles.boxText}>Do not disturb</Text>
          <Switch
            style={styles.toggleButton}
            value={doNotDisturb}
            onValueChange={newValue => setDoNotDisturb(newValue)}
          />
        </View>
        <Image
          source={require('./Home/Assetb/Vector53.png')}
          style={styles.boxImage}
        />
        <Text style={styles.boxText}>Quiet hours</Text>
        <View style={styles.timeContainer}>
          <TouchableOpacity
            style={styles.timeBox}
            onPress={() => setShowStartTimePicker(true)}>
            <Text style={styles.timeText}>Start time</Text>
            <Text>{startTime.toLocaleTimeString()}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.timeBox}
            onPress={() => setShowEndTimePicker(true)}>
            <Text style={styles.timeText}>End time</Text>
            <Text>{endTime.toLocaleTimeString()}</Text>
          </TouchableOpacity>
        </View>
        {showStartTimePicker && (
          <DateTimePicker
            value={startTime}
            mode="time"
            is24Hour={true}
            display="spinner"
            onChange={handleStartTimeChange}
          />
        )}
        {showEndTimePicker && (
          <DateTimePicker
            value={endTime}
            mode="time"
            is12Hour={true}
            display="spinner"
            onChange={handleEndTimeChange}
          />
        )}
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.boxContent}>
          <Text style={styles.boxText}>Notification sound</Text>
          <Switch
            style={styles.toggleButton}
            value={notificationSound}
            onValueChange={newValue => setNotificationSound(newValue)}
          />
        </View>
        <Image
          source={require('./Home/Assetb/Vector53.png')}
          style={styles.boxImage}
        />
        <Text style={styles.boxTextv}>Vibrations</Text>
        <Switch
          style={styles.toggleButtonlast}
          value={vibrations}
          onValueChange={newValue => setVibrations(newValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 8,
    marginTop: 35,
  },
  notificationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 35,
    marginLeft: 35,
    color: '#7B7A7C',
  },
  boxContainer: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 15,
    marginBottom: 25,
  },

  boxText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7B7A7C',
  },

  toggleButton: {},

  boxImage: {
    width: 330,
    height: 5,
    marginBottom: 35,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  timeBox: {
    width: '48%',
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 8,
    marginTop: 20,
  },
  timeText: {
    color: '#7B7A7C',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 30,
    letterSpacing: -0.165,
  },
  boxContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  // ... (other styles)

  boxTextv: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7B7A7C',
    // marginBottom: vibration ? 20 : 0,
  },
  toggleButtonlast: {
    // marginBottom: vibration ? 20 : 0,
    bottom: 33,
  },
});

export default NotificationScreen;
