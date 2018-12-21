import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
    {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    // borderBottomWidth: 1,
    paddingRight: 15,
    paddingLeft:15,
    margin:4,
    paddingBottom:3,
    paddingTop:3,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row',
    // borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
