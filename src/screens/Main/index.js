import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, RefreshControl } from 'react-native';
import { styles } from "./styles";

export default class Main extends Component {
    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.contacts.data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(_, index) => index.toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.isLoading}
                            onRefresh={this.props.getContacts}
                        />
                    }
                    renderItem={({item}) => <UserList item={item}/>}
                />
            </View>
        );
    }
}

const UserList = ({item}) => {
    return (
        <View key={item.id} style={styles.userListContainer}>
            <Image
                source={{uri: item.avatar}}
                style={styles.avatar}/>
            <Text>{'\t'}{item.name}</Text>
        </View>
    )
}
