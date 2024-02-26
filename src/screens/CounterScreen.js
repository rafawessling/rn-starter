import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button title="Increase" onPress={() => setCounter(counter + 1)}/>
            <Button title="Decrease" onPress={() => setCounter(counter - 1)}/>
            <Text style={styles.titleText}>Current Count:</Text>
            <Text style={styles.counterText}>{counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        marginTop: 8
    },
    counterText: {
        fontSize: 36
    }
});

export default CounterScreen;