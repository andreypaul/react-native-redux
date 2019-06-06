import React, { Component } from 'react';
import {Image, Text, View} from "react-native";
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
                {'\n'}{'\t'}created at: {moment(item.createdAt).format("DD.MM.YYYY")}
                {'\n'}{'\t'}id: {item.id}
            </Text>
        </View>
    )
}