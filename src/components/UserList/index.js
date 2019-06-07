import React from 'react';
import {Image, Text, View, Button} from "react-native";
import {styles} from "./styles";
import moment from 'moment'
import "moment/locale/ru";

export const UserList = ({item}) => {
    return (
        <View key={item.id} style={styles.container}>
            <Image
                source={{uri: item.avatar}}
                style={styles.avatar}
            />
            <Text>
                {'\t'}{item.name}
                {'\n'}{'\t'}{item.email}
            </Text>
        </View>
    )
}