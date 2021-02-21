import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "center",
        alignSelf: "center",
    },
    textInputStyle: {
        borderColor: "#001f3f",
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
        padding: 5,
        width: "100%",
        marginBottom: 20,
    },
    loginTextStyle: {
        fontSize: 23,
        fontWeight: "bold",
        marginVertical: 20,
    },
    btn: {
        padding: 5,
        margin: 3,
        backgroundColor: '#2196F3',
        borderRadius: 20,
        width: "60%",
        alignSelf: "center",
    },
    btnText: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default styles;