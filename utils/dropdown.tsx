import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import SvgUp from '../src/assets/svgs/ArrowUp';
import SvgDown from '../src/assets/svgs/ArrowDown';

const Dropdown = ({options, defaultOption, onSelect}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption || null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
        <Text style={styles.selectedOptionText}>
          {selectedOption || 'Select an option'}
        </Text>
        {isOpen ? <SvgUp /> : <SvgDown />}
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownOptions}>
          {options.map((option: any, index: any) => (
            <TouchableOpacity
              key={index}
              style={styles.optionItem}
              onPress={() => handleOptionSelect(option)}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 17,
  },
  selectedOptionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  dropdownOptions: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 8,
    maxHeight: 150,
    overflow: 'scroll',
  },
  optionItem: {
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 16,
  },
});

export default Dropdown;
