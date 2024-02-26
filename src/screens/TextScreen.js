import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [form, setForm] = useState({
        name: '',
        password: ''
    });
    const {name, password} = form

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter Name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setForm({...form, name: newValue})}
            />
            <Text style={styles.text}>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                type="password"
                value={password}
                onChangeText={(newValue) => setForm({...form, password: newValue})}
            />
            {password.length < 6 && <Text style={styles.passwordText}>Password must be longer than 5 characters</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 5
    },
    text: {
        marginVertical: 5,
    },
    passwordText: {
        color: 'red',
    }
});

export default TextScreen;