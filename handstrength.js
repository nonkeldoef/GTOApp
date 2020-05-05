import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global'

export default function Boardchoices( { navigation }) {

    const {heroPos} = navigation.getParam.heroPos;

    return (
        <View style={globalStyles.container}>
            <Text>Situation ID: {heroPos}</Text>
        </View>
    )
}
