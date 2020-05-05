import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles, Situation } from '../styles/global'

export default function Boardchoices( { navigation }) {

    const situationIdx = navigation.getParam('situationIdx');
    const preflopActionIdx = navigation.getParam('preflopActionIdx');
    const heroPositionIdx = navigation.getParam('heroPositionIdx');
    const villainPositionIdx = navigation.getParam('villainPositionIdx');
    const boardTypesIdx = navigation.getParam('boardTypesIdx');

    return (
        <View style={globalStyles.container}>
            <TouchableOpacity>
                <Text>Situation ID: {preflopActionIdx},{heroPositionIdx},{villainPositionIdx},{boardTypesIdx}, aka {situationIdx}</Text>
            </TouchableOpacity>
        </View>
    )
}
