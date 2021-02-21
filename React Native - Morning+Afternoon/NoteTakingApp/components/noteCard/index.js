import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import AsyncStorage from '@react-native-community/async-storage';

const NoteCard = ({ noteData, navigation }) => {
    const deleteCard = async (id) => {
        let currentList = JSON.parse(await AsyncStorage.getItem("notesList"));

        for (var i in currentList) {
            if (currentList[i].id == id) {
                currentList.splice(parseInt(i), 1);

            }
        }
        await AsyncStorage.setItem("notesList", JSON.stringify(currentList));
        currentList = JSON.parse(await AsyncStorage.getItem("notesList"));
        navigation.reset({
            index: 0,
            routes: [{ name: "view-notes" }],
        });
    }

    return (
        <View style={styles.lineStyle}>
            <View style={styles.detailsContainer}>
                <Text style={styles.noteTitle}> {noteData.note.title} </Text>
                <TouchableOpacity onPress={() => deleteCard(noteData.id)} >
                    <Text style={styles.deleteBtn}>X</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.contentContainer}> {noteData.note.content} </Text>

        </View>
    );
}

export default NoteCard;