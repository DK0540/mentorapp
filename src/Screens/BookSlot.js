import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

export default function BookSlot() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedFromTime, setSelectedFromTime] = useState(null);
  const [selectedToTime, setSelectedToTime] = useState(null);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [timePickerType, setTimePickerType] = useState(null);
  const currentDate = moment();

  const showTimePicker = type => {
    setTimePickerType(type);
    setTimePickerVisible(true);
  };

  const handleTimeConfirm = selectedTime => {
    if (timePickerType === 'from') {
      setSelectedFromTime(selectedTime);
    } else if (timePickerType === 'to') {
      setSelectedToTime(selectedTime);
    }
    setTimePickerVisible(false);
  };
  const handleSendRequest = () => {};
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Image
            onPress={goBack}
            source={require('./Home/Assetb/BackButton.png')}
            style={styles.backButton}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}> Book a slot </Text>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.filterLabel}>Date:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Array.from(
            {length: currentDate.daysInMonth() - currentDate.date() + 1},
            (_, index) => (
              <View key={index} style={styles.dateBox}>
                <View
                  style={[
                    styles.dateRectangle,
                    selectedDate === currentDate.date() + index &&
                      styles.selectedDateRectangle,
                  ]}
                  onTouchEnd={() =>
                    setSelectedDate(currentDate.date() + index)
                  }>
                  <Text
                    style={[
                      styles.dateText,
                      selectedDate === currentDate.date() + index &&
                        styles.selectedDateText,
                    ]}>
                    {currentDate.date() + index}
                  </Text>
                  <Text
                    style={[
                      styles.monthText,
                      selectedDate === currentDate.date() + index &&
                        styles.selectedDateText,
                    ]}>
                    {currentDate.format('MMM')}
                  </Text>
                </View>
              </View>
            ),
          )}
        </ScrollView>
      </View>
      <View style={styles.timeContainer}>
        <TouchableOpacity onPress={() => showTimePicker('from')}>
          <View style={styles.timeBox}>
            <Text style={styles.filterLabel}></Text>
            <Text style={styles.selectedTimeText}>
              {selectedFromTime
                ? moment(selectedFromTime).format('hh:mm A')
                : 'Select time'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showTimePicker('to')}>
          <View style={styles.timeBox}>
            <Text style={styles.filterLabel}></Text>
            <Text style={styles.selectedTimeText}>
              {selectedToTime
                ? moment(selectedToTime).format('hh:mm A')
                : 'Select time'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.timeContainer}>
        <TouchableOpacity onPress={() => showTimePicker('from')}>
          <View style={styles.timeBox}>
            <Text style={styles.filterLabel}></Text>
            <Text style={styles.selectedTimeText}>
              {selectedFromTime
                ? moment(selectedFromTime).format('hh:mm A')
                : 'Select time'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showTimePicker('to')}>
          <View style={styles.timeBox}>
            <Text style={styles.filterLabel}></Text>
            <Text style={styles.selectedTimeText}>
              {selectedToTime
                ? moment(selectedToTime).format('hh:mm A')
                : 'Select time'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.timeContainer}>
        <TouchableOpacity onPress={() => showTimePicker('from')}>
          <View style={styles.timeBox}>
            <Text style={styles.filterLabel}></Text>
            <Text style={styles.selectedTimeText}>
              {selectedFromTime
                ? moment(selectedFromTime).format('hh:mm A')
                : 'Select time'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showTimePicker('to')}>
          <View style={styles.timeBox}>
            <Text style={styles.filterLabel}></Text>
            <Text style={styles.selectedTimeText}>
              {selectedToTime
                ? moment(selectedToTime).format('hh:mm A')
                : 'Select time'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.timeContainer}>
        <TouchableOpacity onPress={() => showTimePicker('from')}>
          <View style={styles.timeBox}>
            <Text style={styles.filterLabel}></Text>
            <Text style={styles.selectedTimeText}>
              {selectedFromTime
                ? moment(selectedFromTime).format('hh:mm A')
                : 'Select time'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showTimePicker('to')}>
          <View style={styles.timeBox}>
            <Text style={styles.filterLabel}></Text>
            <Text style={styles.selectedTimeText}>
              {selectedToTime
                ? moment(selectedToTime).format('hh:mm A')
                : 'Select time'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.timeContainer}>
        <TouchableOpacity onPress={() => showTimePicker('from')}>
          <View style={styles.timeBox}>
            <Text style={styles.filterLabel}></Text>
            <Text style={styles.selectedTimeText}>
              {selectedFromTime
                ? moment(selectedFromTime).format('hh:mm A')
                : 'Select time'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showTimePicker('to')}>
          <View style={styles.timeBox}>
            <Text style={styles.filterLabel}></Text>
            <Text style={styles.selectedTimeText}>
              {selectedToTime
                ? moment(selectedToTime).format('hh:mm A')
                : 'Select time'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => navigation.navigate('bookconfirm')}>
          <Text style={styles.sendButtonText}>Send Request</Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={() => setTimePickerVisible(false)}
      />
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
    marginTop: 30,
  },
  backButton: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },

  dateContainer: {
    marginTop: 10,
  },
  dateBox: {
    marginRight: 10,
    alignItems: 'center',
  },
  dateRectangle: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    padding: 10,
    width: 50,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  monthText: {
    fontSize: 12,
  },
  selectedDateRectangle: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  selectedDateText: {
    color: 'white',
  },

  //timeslot
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    height: 80,
  },
  timeBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    padding: 10,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  selectedTimeText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },

  //button

  sendButton: {
    marginTop: 20,
    left: 85,
    width: 185,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexShrink: 0,
    backgroundColor: '#D9D9D9',
  },
  sendButtonText: {
    fontSize: 20.276,
    fontFamily: 'Inter',
    color: '#7B7A7C',
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 28.966,
    letterSpacing: -0.239,
  },
});
