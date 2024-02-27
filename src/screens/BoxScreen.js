import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {

    return (
        <View style={styles.viewContainer}>
            <View style={styles.box1}><Text>Child 1</Text></View>
            <View style={styles.box2}><Text>Child 2</Text></View>
            <View style={styles.box3}><Text>Child 3</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: 200,
        width: 350
    },
    box1: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    },
    box2: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        alignSelf: 'flex-end'
    },
    box3: {
        width: 100,
        height: 100,
        backgroundColor: 'violet'
    }
});

export default BoxScreen;