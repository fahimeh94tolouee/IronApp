import React , {Component} from 'react';
import { View } from 'react-native';
import { SearchBar as SBar} from 'react-native-elements';

const SearchBar = ({ placeholder }) => {
  const { inputStyle, containerStyle } = styles;
  return (
    <View>
      <SBar
        containerStyle={containerStyle}
        inputStyle={inputStyle}
        round
        lightTheme
        icon={{ type: 'material', color: '#fda503', name: 'search' }}
        // onChangeText={someMethod}
        // onClear={someMethod}
        placeholder={placeholder} />
      </View>
  );
};

export {SearchBar};

const styles = {
  inputStyle :{
    textAlign: 'right',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#A0A0A0',
    flexDirection: 'row-reverse'
  },
  containerStyle: {
    backgroundColor: 'white'
  }
}
