import React, {Component} from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';
import { styles } from "./styles";
import { user } from "../../consts";

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.user.firsName} {this.props.user.lastName}</Text>
        <Button title={'Get User Data'} onPress={this.props.getProfile}/>
        {this.props.isLoading && <ActivityIndicator/>}
      </View>
    );
  }
}
