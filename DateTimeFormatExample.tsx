import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Picker } from '@react-native-picker/picker';

const DateTimePickerExample = () => {
  const [selectedDate, setSelectedDate] = useState<any>('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('');
  const [formattedDate, setFormattedDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date:any) => {
    const formattedDate = moment(date).format(selectedFormat);
    setSelectedDate(date);
    setFormattedDate(formattedDate);
    hideDatePicker();
  };

  const handleFormatChange = (format:any) => {
    setSelectedFormat(format);
  };

  const handleGetYesterday = () => {
    const yesterday = moment(selectedDate).subtract(1, 'days');
    const formattedYesterday = yesterday.format(selectedFormat);
    setSelectedDate(yesterday);
    setFormattedDate(formattedYesterday);
  };

  const handleGetTomorrow = () => {
    const tomorrow = moment(selectedDate).add(1, 'days');
    const formattedTomorrow = tomorrow.format(selectedFormat);
    setSelectedDate(tomorrow);
    setFormattedDate(formattedTomorrow);
  };

  return (
    <View style={styles.container}>
      <Button title="Select Date" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TextInput
        placeholder="Selected Date"
        value={formattedDate}
        editable={false}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Get Yesterday" onPress={handleGetYesterday} />
        <Button title="Get Tomorrow" onPress={handleGetTomorrow} />
      </View>
      <Picker
        selectedValue={selectedFormat}
        style={styles.picker}
        onValueChange={handleFormatChange}
      >
       <Picker.Item label="YYYY-MM-DD HH:mm:ss" value="YYYY-MM-DD HH:mm:ss" />
<Picker.Item label="DD/MM/YYYY" value="DD/MM/YYYY" />
<Picker.Item label="MMM DD, YYYY" value="MMM DD, YYYY" />
<Picker.Item label="MMMM Do, YYYY" value="MMMM Do, YYYY" />
<Picker.Item label="YYYY-MM-DD" value="YYYY-MM-DD" />
<Picker.Item label="DD.MM.YYYY" value="DD.MM.YYYY" />
<Picker.Item label="DD/MMM/YYYY" value="DD/MMM/YYYY" />
<Picker.Item label="YYYY/MM/DD" value="YYYY/MM/DD" />
<Picker.Item label="DD.MM.YYYY HH:mm" value="DD.MM.YYYY HH:mm" />

        {/* Diğer formatları burada ekleyebilirsiniz */}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  picker: {
    width: 200,
    height: 40,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    width: '100%',
  },
});

export default DateTimePickerExample;
