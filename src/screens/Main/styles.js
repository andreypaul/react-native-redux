import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20
    },
    errorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60
    },
    userListContainer: {
        flexDirection:'row',
        alignItems: 'center',
        height: 80,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    }
});