import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    Image,
    RefreshControl,
    Modal,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { styles } from "./styles";
import { UserList } from "../../components/UserList";

export default class Main extends Component {
    state = {
        modalVisible: false
    }

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
                <TouchableOpacity
                    style={styles.footerButton}
                    onPress={() => {
                        this.setState({modalVisible: true})
                    }}>
                    <Text style={{color: 'white'}}>
                        Show Modal
                    </Text>
                </TouchableOpacity>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.modalWrap}>
                        <View style={styles.modalContainer}>
                            <Text>Hello World!</Text>
                            <TouchableOpacity
                                onPress={() => this.setState({modalVisible: false})}>
                                <Text>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}