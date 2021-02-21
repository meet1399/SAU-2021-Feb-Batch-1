import React, { useState } from "react";
import { TextInput, View } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import Button from "./button";
import styles from "./styles";
const NewCard = ({ navigation }) => {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");

    const submitNote = async () => {
        var newNote = {
            "title": noteTitle,
            "content": noteContent
        }
        var notesList = await AsyncStorage.getItem("notesList");
        notesList = JSON.parse(notesList);
        if (notesList === null) {
            notesList = [
                {
                    id: "1",
                    note: newNote,
                }
            ]
        } else {
            let noteId = notesList.length + 1;
            notesList.push(
                {
                    id: noteId,
                    note: newNote,
                }
            )
        }
        await AsyncStorage.setItem('notesList', JSON.stringify(notesList));
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.titleTextStyle} placeholder="Title" onChangeText={setNoteTitle} />
            <TextInput multiline style={styles.contentTextStyle} placeholder="Description" onChangeText={setNoteContent} />
            <Button title="Add Note" action={submitNote} />


        </View>
    );
}

export default NewCard;