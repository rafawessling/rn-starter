import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSrc, imageScore }) => {
    return (
        <View style={styles.viewContainer}>
            <Image source={imageSrc} style={styles.imageStyle}/>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.bodyText}>Image score - {imageScore}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        alignItems: 'flex-end',
    },
    titleText: {
        fontSize: 20
    },
    bodyText: {
        fontSize: 18
    },
    imageStyle: {
        marginTop: 16
    }
})

export default ImageDetail