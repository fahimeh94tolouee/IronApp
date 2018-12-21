import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    sahdowRadius: 2,
    backgroundColor:'white',
    // elevation: 1,
    margin:10,
    // alignItems:'flex',
    flexDirection:'row-reverse'
  }
};

export { Card };
