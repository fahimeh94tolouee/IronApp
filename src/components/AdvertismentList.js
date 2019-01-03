import React, { Component } from 'react';
import _ from 'lodash';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect, shallowEqual } from 'react-redux';
import { SearchBar } from './common';
import AdvertismentItem from './AdvertismentItem';
import { fetchAds } from '../actions';

class AdvertismentList extends Component {
  state = this.props.advertise.ads

  componentWillMount() {
    // _.each(this.props.advertise, (this.props.type) => { //prop is key here
    //   this.props.fetchAds(this.prop.type);
    // });
    this.props.fetchAds(this.props.type);
  }

//   searchFilterFunction = text => {
//   const newData = this.props.array.filter(item => {
//     const itemData = `${item.title.toUpperCase()}
//     ${item.location.toUpperCase()}`;
//      const textData = text.toUpperCase();
//
//      return itemData.indexOf(textData) > -1;
//   });
//   this.setState({ data: newData });
// };
  //
  // componentWillReceiveProps(nextProps) {
  //   this.data = nextProps.advertise.ads;
  //   nextProps.fetchAds(nextProps.type)
  // }

  // componentWillReceiveProps(nextProps) {
  //   // if (!shallowEqual(nextProps, this.props)) {
  //   //   this.recomputeState(nextProps);
  //   // }
  //   // console.log(nexProps);
  //   this.data = nextProps.advertise.ads;
  // }
  render() {
    const {isFetching, error, ads} = this.props.advertise;
    if(isFetching){
      return(
              <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                  <ActivityIndicator size={'large'} />
              </View>
      )
    }
    else {
        return (
          <View>
          <SearchBar
            // onChangeText={text => this.searchFilterFunction(text)}
            // onClear={someMethod}
            placeholder='نام غرفه، محصول، کارخانه ...' />
            <FlatList
              data = {ads}
              renderItem = {({ item }) => (
                  <AdvertismentItem
                    advertisment = {item}
                  />
                )}
              keyExtractor={item => item.uuid}
            />
          </View>
        );
    }
  }
}

const mapStateToProps = state => {
  return { advertise: state.advertise};
};

const mapDispatchToProps = (dispatch) => ({
  fetchAds: type => dispatch(fetchAds(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdvertismentList);
