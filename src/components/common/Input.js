import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        onChangeText={onChangeText}
        value={value}
        autoCorrect={false}
        placeholder={placeholder}
      />
    </View>
  );
};

export { Input };


 const styles = {
   labelStyle: {
     fontSize: 15,
     paddingRight: 20,
     flex: 1
   },
   inputStyle: {
     color: '#000',
     paddingRight: 5,
     paddingRight: 5,
     fontSize: 15,
     lineHeight: 23,
     flex: 2
   },
   containerStyle: {
     height: 60,
     flex: 1,
     margin:10,
     paddingRight: 20,
     paddingLeft: 20,
     flexDirection: 'row-reverse',
     alignItems: 'center',
     borderWidth: 1,
     borderRadius: 40,
     borderColor: '#ddd',
     backgroundColor: '#fff',
   }
 };
