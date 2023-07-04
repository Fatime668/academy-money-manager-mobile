import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Dropdown from './utils/dropdown';
import { openDatabase } from 'react-native-sqlite-storage';
import DateTimeFormatExample from './DateTimeFormatExample';

const db = openDatabase({ name: 'mydb.db', createFromLocation: 1 });

const App = () => {
  const dropdownOptions1 = ['Option 1.1', 'Option 1.2', 'Option 1.3'];
  const [selectedOption1, setSelectedOption1] = useState('Kredit götürmə məqsədi');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('0');
  const [note, setNote] = useState('');

  const handleOptionSelect1 = (option:any) => {
    setSelectedOption1(option);
    console.log('Selected option 1:', option);
  };

  const onChange = (selectedDate:any) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  const showDateTimePicker = () => {
    setShowPicker(true);
  };

  const addNewOperation = async () => {
    const operationDate = date.toISOString();
    const operationCategory = category;
    const operationType = type;
    const operationAmount = Number(amount);
    const operationNote = note;

    (await db).transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS operations (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, category TEXT, type TEXT, amount REAL, note TEXT)',
        []
      );
      tx.executeSql(
        'INSERT INTO operations (date, category, type, amount, note) VALUES (?, ?, ?, ?, ?)',
        [operationDate, operationCategory, operationType, operationAmount, operationNote],
        (_, results) => {
          if (results.rowsAffected > 0) {
            console.log('Operation added successfully');
            resetForm();
          } else {
            console.log('Failed to add operation');
          }
        },
        (_, error) => {
          console.log('Error adding operation:', error);
        }
      );
    });
  };

  const resetForm = () => {
    setCategory('');
    setType('');
    setAmount('0');
    setNote('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps="handled">
        <View>
          <Text>Date:</Text>
          <View>
            <Button onPress={showDateTimePicker} title="Open DateTime Picker" />
            <DateTimePickerModal
              isVisible={showPicker}
              mode="datetime"
              date={date}
              onConfirm={onChange}
              onCancel={() => setShowPicker(false)}
            />
          </View>

          <View>
            <Text>Category:</Text>
            <Dropdown options={dropdownOptions1} defaultOption={selectedOption1} onSelect={handleOptionSelect1} />
          </View>

          <View>
            <Text>Type:</Text>
            <TextInput style={styles.input} value={type} onChangeText={setType} />
          </View>

          <View>
            <Text>Note:</Text>
            <TextInput style={styles.input} value={note} onChangeText={setNote} />
          </View>

          <View>
            <Text>Amount:</Text>
            <TextInput style={styles.input} value={amount} onChangeText={setAmount} />
          </View>

          <Button title="Add" onPress={addNewOperation} />
        </View>
          <View style={styles.box}>
            
          </View>
      </ScrollView> */}
      <DateTimeFormatExample/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
  box:{
    backgroundColor:"#ccc",
    width:"100%",
    height:100
  }
});

export default App;
