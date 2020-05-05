// TODO: Put board pickers on the first pages per group, render options depending on spot picked. How? if statements? another file to set all conditions, and make a function to check which condition is true?
// fe. if {situationIdx} = 0352 show options for SRP BTN vs BB Paired boards before proceeding to handstrength options
// TODO: change boardchoices.js to handstrength.js

import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {

    const preflopAction = ['SRP','3BP','4BP']
    const heroPosition = ['UTG','MP','CO','BTN','SB','BB']
    const villainPosition = ['UTG','MP','CO','BTN','SB','BB']
    const boardTypes = ['Trips','Paired','Mono','AT+', 'A9-','2BW','1BW','Rags']
    const [preflopActionIdx, setpreflopActionIdx] = useState('');
    const [heroPositionIdx, setheroPositionIdx] = useState('');
    const [villainPositionIdx, setvillainPositionIdx] = useState('');
    const [boardTypesIdx, setboardTypesIdx] = useState('');
    const situationIdx = [preflopActionIdx,heroPositionIdx,villainPositionIdx,boardTypesIdx];

    const pressHandler = () => {
        navigation.navigate('BoardChoices',{
        preflopActionIdx: preflopActionIdx,
        heroPositionIdx: heroPositionIdx,
        villainPositionIdx: villainPositionIdx,
        boardTypesIdx: boardTypesIdx,
        situationIdx: situationIdx,
        });
    }

    return (
        <View style={globalStyles.container}>
          <View>
            <Text style={globalStyles.titleText}>Pick your Spot + BoardType</Text>
            <Text>Situation ID: {preflopActionIdx},{heroPositionIdx},{villainPositionIdx},{boardTypesIdx}</Text>
              <CustomPicker
                  label='Preflop Action'
                  data={preflopAction}
                  currentIndex={preflopActionIdx}
                  onSelected={setpreflopActionIdx}
              />
              <CustomPicker
                  label='Hero Position'
                  data={heroPosition}
                  currentIndex={heroPositionIdx}
                  onSelected={setheroPositionIdx}
              />
              <CustomPicker
                  label='Villain Position'
                  data={villainPosition}
                  currentIndex={villainPositionIdx}
                  onSelected={setvillainPositionIdx}
              />
              <CustomPickerBoards
                  label='Board Types'
                  data={boardTypes}
                  currentIndex={boardTypesIdx}
                  onSelected={setboardTypesIdx}
              />
          </View>

          <View style={globalStyles.container}>
            <TouchableOpacity>
              <Text style={styles.nextButton} onPress={(pressHandler)}>NEXT</Text>
            </TouchableOpacity>
          </View>
            
        </View>
    )
}

function CustomPicker({ label, data, currentIndex, onSelected }) {
    return (
      <>
        <Text style={styles.title}>{label}</Text>
        <View style={styles.wrapperHorizontal}>
          <FlatList
            bounces
            horizontal
            data={data}
            keyExtractor={(item, idx) => String(item)}
            renderItem={({ item, index }) => {
              const selected = index === currentIndex;
              return (
                <TouchableOpacity onPress={() => onSelected(index)}>
                  <View
                    style={[
                      styles.itemStyleHorizontal,
                      selected && styles.itemSelectedStyleHorizontal
                    ]}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: selected ? "black" : "grey",
                        fontWeight: selected ? "bold" : "normal"
                      }}
                    >
                      {item + ""}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </>
    );
  }

function CustomPickerBoards({ label, data, currentIndex, onSelected }) {
    return (
      <>
        <Text style={styles.title}>{label}</Text>
        <View style={styles.wrapperHorizontalBoards}>
          <FlatList
            style
            bounces
            horizontal
            data={data}
            keyExtractor={(item, idx) => String(item)}
            renderItem={({ item, index }) => {
              const selected = index === currentIndex;
              return (
                <TouchableOpacity onPress={() => onSelected(index)}>
                  <View
                    style={[
                      styles.itemStyleHorizontalBoard,
                      selected && styles.itemSelectedStyleHorizontalBoard
                    ]}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: selected ? "black" : "grey",
                      }}
                    >
                      {item + ""}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ecf0f1",
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center'
    },
    wrapperHorizontal: {
      height: 60,
      color: "black",
      marginBottom: 12
    },
    wrapperHorizontalBoards: {
      height: 60,
      color: "black",
      marginBottom: 12
    },
    itemStyleHorizontal: {
      fontSize: 14,
      marginRight: 10,
      height: 40,
      padding: 10,
      borderWidth: 1,
      borderColor: "grey",
      borderRadius: 10,
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: 'lightblue'
    },
    itemSelectedStyleHorizontal: {
      borderWidth: 1,
      borderColor: "#DAA520",
      backgroundColor: 'green'
    },
    itemStyleHorizontalBoard: {
      fontSize: 14,
      marginRight: 5,
      height: 40,
      padding: 7,
      borderWidth: 1,
      borderColor: "grey",
      borderRadius: 10,
      textAlign: "center",
      justifyContent: 'center',
      backgroundColor: 'lightblue',
    },
    itemSelectedStyleHorizontalBoard: {
      borderWidth: 1,
      borderColor: "#DAA520",
      backgroundColor: 'green',
    },
    platformContainer: {
      marginTop: 8,
      borderTopWidth: 1
    },
    platformContainerTitle: {
      marginTop: 8
    },
    title: {
      fontWeight: "bold",
      marginVertical: 4
    },
    text: {
        paddingTop: 10,
        fontSize: 24,
        textAlign: 'center',
    },
    choiceContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 10,
        flexDirection: 'column',
    },
    nextButton: {
      backgroundColor: 'darkblue',
      color: 'white',
      borderRadius: 10,
      padding: 10
    }

});