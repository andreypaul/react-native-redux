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
    },
    modalWrap: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(0,0,0, 0.8)'
    },
    modalContainer: {
        alignItems:'center',
        justifyContent:'center',
        height: 200,
        width: 200,
        borderRadius: 20,
        marginTop: 22,
        backgroundColor: '#fff'
    },
    footerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato',
        height: 60,
        width: 250,
        borderRadius: 10,
        position:'absolute',
        alignSelf: 'center',
        bottom: 10
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE",
    },
    emptyListContainer: {
        height: 200,
        justifyContent:'center',
        alignItems:'center',
    }
});