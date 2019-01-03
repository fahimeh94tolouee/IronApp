import React, { Component } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { Card, CardSection } from './common';

class AdvertismentItem extends Component {

  render(){
    const { title, location, uuid, thumbID } = this.props.advertisment;
    const {descriptionStyle, titleStyle, categoryStyle } = styles;
    return(
      <Card>
        <CardSection>
        <Image
          style={styles.imageStyle}
          source={{uri: `https://iron.platform.atro1.com:1235/api/thumb/${thumbID}/advertise/${uuid}`}}
        />
        </CardSection>
        <CardSection style={descriptionStyle}>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {
          <CardSection>
            <Text style={categoryStyle}>{location}</Text>
          </CardSection>
          // <CardSection />
          // <CardSection>
          //   <Text>{manufacturer}</Text>
          // </CardSection>
          }
        </CardSection>
      </Card>
    );
  }
}

export default AdvertismentItem;


const styles = {
  descriptionStyle:{
    flexDirection:'column',
    alignItems:'flex-end'
  },
  imageStyle:{
    width: 100,
    height: 100,
    borderRadius: 5
  },
  titleStyle:{
    fontWeight:'700',
    color:'#4E4E4E',
    fontSize:12
  },
  categoryStyle:{
    fontWeight:'500',
    color:'#4C4C4C',
    fontSize:10
  }
}
