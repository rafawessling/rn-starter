import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Rafaela'

    return (
    <View>
        <Text style={styles.titleStyle}>Getting started with React Native!</Text>
        <Text style={styles.subtitleStyle}>My name is {name}</Text>
    </View>)
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 45
    },
    subtitleStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen;