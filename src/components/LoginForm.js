import React, {Component} from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, phoneNumberChanged, loginUser } from '../actions';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common'

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onPhoneNumberChange(text) {
    this.props.phoneNumberChanged(text)
  }

  onButtonPress() {
    const { email, password, navigation } = this.props;

    this.props.loginUser({ email, password, navigation });
    // this.props.navigation.navigate("Main");
  }

  renderButton() {
  // if (this.props.loading) {
    //   return <Spinner size="large" />;
    // }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        ثبت نام
      </Button>
    );
  }

  render(){
    return(
      <View style={{marginTop:100, marginBottom: 100}}>
        <CardSection>
          <Input
            label="ایمیل"
            // palceholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="شماره موبایل"
            // palceholder="0912*******"
            onChangeText={this.onPhoneNumberChange.bind(this)}
            value={this.props.phoneNumber}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="رمز عبور"
            // palceholder="password"
            onChangeText = {this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>

        <CardSection style={{justifyContent:'center', marginTop:30}}>
          <Text style={{fontSize:18, color:'#6364d8', fontWeight:'bold'}}>ورود به حساب کاربری</Text>
        </CardSection>

      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    phoneNumber: state.auth.phoneNumber
  };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, phoneNumberChanged, loginUser })(LoginForm);
