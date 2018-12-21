import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
// import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, addNavigationHelpers } from 'react-navigation';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';


// const HomeStack = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Details: { screen: DetailsScreen },
// });
//
// const SettingsStack = createStackNavigator({
//   Settings: { screen: SettingsScreen },
//   Details: { screen: DetailsScreen },
// });

const main = createBottomTabNavigator(
  {
    Profile: { screen: Profile },
    Home: { screen: HomePage },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName, iconType;
        if (routeName === 'Profile') {
          iconName = 'user';
          iconType = 'font-awesome'
        } else if (routeName === 'Home') {
          iconName = 'home';
          iconType = 'font-awesome';
        }


        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} type={iconType} color={tintColor}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#fda503',
      inactiveTintColor: 'gray',
    },
  }
);

const AppNavigator = createAppContainer(createStackNavigator(
  {
    Main: {
      screen: main,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginForm,
      navigationOptions: {
        header: null
      }
     }
  },
  {
    initialRouteName: "Login"
  }
));

export default class Nav extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}

// const mapStateToProps = state => ({
//   navigation: state.nav,
// })
// export default connect(mapStateToProps, null)(Nav)
