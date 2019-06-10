import React, {Component} from 'react';
import {Text, View, Button, ActivityIndicator, TextInput} from 'react-native';
import {styles} from "./styles";


export default class Profile extends Component {
    state = {
        user: {
            name: "",
            firstName: "",
            lastName: "",
            email: ""

        }
    }

    onChangeFirstName = firstName => {
        this.setState({
                user: {
                    ...this.state.user,
                    firstName: firstName
                }
            },
            () =>
                this.setState({
                    user: {
                        ...this.state.user,
                        name: this.state.user.firstName + " " + this.state.user.lastName
                    }
                })
        );
    }

    onChangeLastName = lastName => {
        this.setState({
                user: {
                    ...this.state.user,
                    lastName: lastName
                }
            }, () =>
                this.setState(
                    {
                        user: {
                            ...this.state.user,
                            name: this.state.user.firstName + " " + this.state.user.lastName
                        }
                    })
        );
    }

    onChangeEmail = email => {
        this.setState({
            user: {
                ...this.state.user,
                email: email
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.props.updatedProfile.data.name}
                </Text>
                <Text style={styles.welcome}>
                    First Name
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.user.firstName}
                    onChangeText={this.onChangeFirstName}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                />
                <Text style={styles.welcome}>
                    Last Name
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.user.lastName}
                    onChangeText={this.onChangeLastName}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                />
                <Text style={styles.welcome}>
                    Email
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.user.email}
                    onChangeText={this.onChangeEmail}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                />
                <Button
                    title={'Submit'}
                    onPress={() => this.props.updateProfile(this.state.user)}
                />
                {this.props.isLoading && <ActivityIndicator/>}
            </View>
        );
    }
}