import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { globalStyles } from '../styles/global'

export default function Graphdisplay( { navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Graphdisplay Screen to display graphs</Text>
        <Text>{ navigation.getParam('detail') }</Text>
            <Image source={require('../graphs/test.png')} />
        </View>
    )
}
