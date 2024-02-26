import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail'
import ForestImage from '../../assets/forest.jpg'
import MountainImage from '../../assets/mountain.jpg'
import BeachImage from '../../assets/beach.jpg'

const ImageScreen = () => {
    return (
        <View style={styles.viewContainer}>
            <ImageDetail title="Forest" imageSrc={ForestImage} imageScore="8"/>
            <ImageDetail title="Mountain" imageSrc={MountainImage} imageScore="9"/>
            <ImageDetail title="Beach" imageSrc={BeachImage} imageScore="9"/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 700
    }
})

export default ImageScreen