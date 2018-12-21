import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from './common';

class AdvertismentItem extends Component {
  render(){
    const { title, category, manufacturer, imagesID } = this.props.advertisment;
    const {imageStyle, descriptionStyle, titleStyle, categoryStyle } = styles;
    return(
      <Card>
        <CardSection>
          <Image
            style={imageStyle}
            source={require("./img/galvanizeh.png")}
          />
        </CardSection>
        <CardSection style={descriptionStyle}>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          <CardSection>
            <Text style={categoryStyle}>{category}</Text>
          </CardSection>
          <CardSection />
          <CardSection>
            <Text>{manufacturer}</Text>
          </CardSection>
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
    fontSize:15
  },
  categoryStyle:{
    fontWeight:'500',
    color:'#4C4C4C',
    fontSize:14
  }
}
