import React, { useState } from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

const ModifyMarkerModal = ({ categories }) => {
    const [markerName, setMarkerName] = useState("last name");
    const [markerDescription, setMarkerDescription] = useState("last description");
    const [indexOfCategories, setIndexOfCategories] = useState("");

    return (
        <View style={styles.view_modify}>
            <View style={styles.box_modify}>
                <Text style={styles.title_modify}>Modify a spot</Text>
                <TextInput
                    onChangeText={(text) => setMarkerName(text)}
                    value={markerName}
                    style={styles.input_text}>
                </TextInput>
                <TextInput
                    onChangeText={(text) => setMarkerDescription(text)}
                    value={markerDescription}
                    style={styles.input_text}>
                </TextInput>
                <ModalDropdown options={categories} onSelect={(index) => {
                    setIndexOfCategories(index)
                }} style={styles.modalDropdown}/>
                <TouchableOpacity onPress={() => {

                }} style={styles.touchableBtn}>
                    <Text style={styles.touchableText}>Modify</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view_modify: {
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box_modify: {
        width: 300,
        height: 350,
        backgroundColor: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title_modify: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#000",
        textAlign: 'center',
    },
    input_text: {
        width: '85%',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        borderWidth: 1,
    },
    modalDropdown: {
        width: '85%',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        borderWidth: 1,
        height: 35,
    },
    touchableBtn: {
        width: '85%',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        backgroundColor: '#FFA723',
        borderRadius: 5,
        marginBottom: 10,
    },
    touchableText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
});

export default ModifyMarkerModal;