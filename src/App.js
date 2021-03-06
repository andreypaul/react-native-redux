import React from 'react';
import {StyleSheet, View} from 'react-native'
import DropdownAlert from "react-native-dropdownalert";
import {Router, Tabs} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import configureStore from './store';
import {MainTab, DashboardTab, ProfileTab} from "./router";

const store = configureStore();

export let dropdownAlert = DropdownAlert

function onDropdownRef(dropdown) {
    dropdownAlert = dropdown;
}

export const App = () => (
    <View style={styles.container}>
        <Provider store={store}>
            <Router>
                <Tabs
                    key="tabbar"
                    routeName="tabbar"
                    backToInitial
                    onTabOnPress={() => {
                        console.log('Back to initial and also print this');
                    }}
                    showLabel={true}
                    tabBarStyle={styles.tabBarStyle}
                    activeBackgroundColor="white"
                    inactiveBackgroundColor="rgba(255, 255, 255, 0.5)"
                >
                    {MainTab()}
                    {DashboardTab()}
                    {ProfileTab()}
                </Tabs>
            </Router>
        </Provider>
        <DropdownAlert
            ref={onDropdownRef}
            closeInterval={2000}
            successColor='rgba(10, 100, 50, 0.8)'
            showCancel={true}
        />
    </View>
);
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    tabBarStyle: {
        backgroundColor: '#FFF',
    }
});