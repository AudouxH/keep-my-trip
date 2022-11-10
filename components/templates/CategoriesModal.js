import React, { useEffect, useState } from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    Image,
} from 'react-native';

import store_categories from '../functionals/store_categories';
import get_categories from '../functionals/get_categories';
import input_icon from '../../assets/input_icon.png';
import trash_icon from '../../assets/bin_icon.png';

const CategoriesModal = ({ categories, setCategories, COLORS }) => {
    const [newCategory, setNewCategory] = useState("");
    const [isChange, setIsChange] = useState(false);

    const deleteElement = (index) => {
        const array = categories;
        array.splice(index, 1);
        return (array);
    }

    useEffect(() => {
        if (categories.length >= 0) {
            store_categories(categories);
        }
        get_categories(setCategories);
        setIsChange(false);
    }, [isChange]);

    return (
        <View style={styles.view_categories}>
            <View style={styles.box_categories}>

                <Text style={styles.title_categories}>List of categories</Text>

                <View style={styles.view_input}>
                    <TextInput
                        onChangeText={(text) => setNewCategory(text)}
                        style={styles.input_text} placeholder='new category'>
                    </TextInput>
                    <TouchableOpacity onPress={() => {
                        if (newCategory.length) {
                            setCategories(category => [...category, newCategory])
                            setIsChange(true)
                        }
                    }} style={styles.input_touchable}>
                        <Image source={input_icon} style={styles.input_icon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.list_categories}>
                    {categories ?
                        categories.map((category, index) => {
                            return (
                                <View key={index} style={styles.view_category}>
                                    <View style={styles.view_text}>
                                        <Text style={{color: COLORS[index], fontSize: 20}}>{category}</Text>
                                    </View>
                                    {
                                        index != 0 ? 
                                        <TouchableOpacity onPress={() => {
                                            setCategories(deleteElement(index));
                                            setIsChange(true);
                                        }} style={styles.touchable_category}>
                                        <Image source={trash_icon} style={styles.trash_icon} />
                                    </TouchableOpacity>
                                    : <View style={styles.touchable_category}></View>
                                    }
                                </View>
                            )
                        }) :
                        null
                    }
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view_categories: {
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box_categories: {
        width: 300,
        height: 400,
        backgroundColor: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    title_categories: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#000",
        textAlign: 'center',
    },
    view_input: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input_touchable: {
        borderWidth: 1,
        paddingBottom: 9,
        paddingTop: 9,
        paddingLeft: 9,
        paddingRight: 9,
    },
    input_icon: {
        width: 20,
        height: 20,
    },
    input_text: {
        width: '70%',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        borderWidth: 1,
    },
    list_categories: {
        width: '100%',
        height: 250,
        display: 'flex',
        flexDirection: 'column',
    },
    view_category: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    view_text: {
        width: '70%',
        height: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_category: {
        textAlign: 'center',
    },
    touchable_category: {
        width: '20%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    trash_icon: {
        width: 20,
        height: 20,
    }
});

export default CategoriesModal;