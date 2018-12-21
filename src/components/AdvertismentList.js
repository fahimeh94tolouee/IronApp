import React, { Component } from 'react';
import {FlatList} from 'react-native';
import { connect } from 'react-redux';
import AdvertismentItem from './AdvertismentItem';

class AdvertismentList extends Component {
  render() {
    return (
      <FlatList
        data = {this.props.advertise}
        renderItem = {({ item }) => (
            <AdvertismentItem
              advertisment = {item}
            />
          )}
        keyExtractor={item => item.uuid}
      />
    );
  }
}

const mapStateToProps = state => {
  return { advertise: state.advertise };
};

export default connect(mapStateToProps)(AdvertismentList);
