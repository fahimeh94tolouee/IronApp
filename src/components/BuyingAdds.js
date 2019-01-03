import React , {Component} from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, CardSection, Button, SearchBar } from './common';
import AdvertismentList from './AdvertismentList';

class BuyingAdds extends Component {
  render() {
    return(
      <View>
        <AdvertismentList type="buy"/>
      </View>
    );
  }
}

export default BuyingAdds;
