import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height * 0.8,
        width: Dimensions.get('window').width * 0.9,
        justifyContent: "flex-start",
        alignSelf: "center"
    },
    titleTextStyle: {
        fontSize: 23,
        fontWeight: "bold",
        borderColor: "#F39C12",
        borderWidth: 5,
        borderRadius: 20,
        padding: 10,
        width: "50%",
    },
    contentTextStyle: {
        borderColor: "#D35400",
        borderWidth: 5,
        borderRadius: 20,
        fontSize: 18,
        padding: 5,
        width: "80%",
        height:Dimensions.get('window').height * 0.3,
        marginVertical: 10,
    },

    btn: {
        padding: 5,
        margin: 3,
        backgroundColor: 'black',
        borderRadius: 50,
        width: Dimensions.get('window').width * 0.3,
    },
    btnText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    }
});

export default styles;