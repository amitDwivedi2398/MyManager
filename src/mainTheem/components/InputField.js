import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
  color,
  placeholderTextColor,
  autoComplete
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
        value={value}
        color={color}
        onChangeText={onChangeText}
          placeholder={label}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          autoComplete={autoComplete}
          style={{flex: 1, paddingVertical: 0}}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
        value={value}
        color={color}
        onChangeText={onChangeText}
          placeholder={label}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0}}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#AD40AF', fontWeight: '700'}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}
