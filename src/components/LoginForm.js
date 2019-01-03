import React, {Component} from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, phoneNumberChanged, loginUser } from '../actions';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common'

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
    const { email, password, phoneNumber, navigation } = this.props;

    this.props.loginUser({ email, password, phoneNumber, navigation });
    // this.props.navigation.navigate("Main");
  }

  renderButton() {
  if (this.props.loading) {
      return <Spinner size="large" />;
    }
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

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
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

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({auth}) => {
  const { email, password, phoneNumber, error, loading } = auth;
   return { email, password, phoneNumber, error, loading };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, phoneNumberChanged, loginUser })(LoginForm);
