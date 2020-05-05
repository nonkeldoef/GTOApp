import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LoginScreen({ route, navigation }){
  const [preflopAction, setPreflopAction] = useState(null);
  const [heroPos, setHeroPos] = useState(null);
  const [villainPos, setVillainPos] = useState(null);
  const [boardType, setBoardType] = useState(null);
  const [boardDetail, setBoardDetail] = useState(null);
  const [boardDetails, setBoardDetails] = useState([]);
  const preflopActions = ['SRP', '3BP', '4BP'];
  const heroPositions = ['UTG', 'MP', 'CO', 'BTN', 'SB', 'BB'];
  const villainPositions = ['UTG', 'MP', 'CO', 'BTN', 'SB', 'BB'];
  const boardTypes = ['Trips', 'Paired', 'Mono', 'AT+', 'A9-', '2BW', '1BW', 'Rags'];

  const handleNextScreen = () => {
    const choices = {
      preflopAction: preflopAction,
      heroPos: heroPos,
      villainPos: villainPos,
      boardType: boardType,
      boardDetail: boardDetail,
    };

    navigation.navigate('HandStrength', {choices: choices});
  };

  const handleButtonPress = (value, type) => {
    switch (type) {
      case 'preflopAction':
        setPreflopAction(value);
        break;

      case 'heroPos':
        setHeroPos(value);
        break;

      case 'villainPos':
        setVillainPos(value);
        break;

      case 'boardType':
        setBoardType(value);
        break;

      case 'boardDetail':
        setBoardDetail(value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    //SRP_BTNvsBB
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[0]
    )
      setBoardDetails(['Trips']);
    else 
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[1]
    )
      setBoardDetails(['AAx','2BW (JJ+)','Paired AJJ+/TTx&99x','A88-','Rags+1BW(-BW99)']);
    else 
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[2]
    )
      setBoardDetails(['Axx','Kxx','Mono Rest']);
    else 
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[3]
    )
      setBoardDetails(['AHH','AT+(-AHH)']);
    else 
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[4]
    )
      setBoardDetails(['A8-A9','A7-']);
    else 
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[5]
    )
      setBoardDetails(['3BW','2BW FD','2BW R']);
    else 
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[6]
    )
      setBoardDetails(['KLL','TLL-QLL','HMM Tx','HMM Jx','HML Tx','HML J+R','HML J7x FD','HML 1BW9-8x FD','HML 1BW7-6x FD']);
    else 
    if (
      preflopAction === preflopActions[0] &&
      heroPos === heroPositions[3] &&
      villainPos === villainPositions[5] &&
      boardType === boardTypes[7]
    )
      setBoardDetails(['5LL', '6LL','MMM','MXL wS','MXL noS']);
    else 

    setBoardDetails([]);
  }, [preflopAction, heroPos, villainPos, boardType]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Preflop Action: {preflopAction}</Text>
      <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20 }}>
        {preflopActions.map(function (item, i) {
          return (
            <TouchableOpacity
              key={i}
              style={{
                width: 60,
                height: 50,
                backgroundColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => handleButtonPress(item, 'preflopAction')}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text>Hero Pos: {heroPos}</Text>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 20,
          flexWrap: 'wrap',
        }}
      >
        {heroPositions.map(function (item, i) {
          return (
            <TouchableOpacity
              key={i}
              style={{
                width: 60,
                height: 50,
                backgroundColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => handleButtonPress(item, 'heroPos')}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text>Villain Pos: {villainPos}</Text>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 20,
          flexWrap: 'wrap',
        }}
      >
        {villainPositions.map(function (item, i) {
          return (
            <TouchableOpacity
              key={i}
              style={{
                width: 60,
                height: 50,
                backgroundColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => handleButtonPress(item, 'villainPos')}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text>BoardType: {boardType}</Text>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 20,
          flexWrap: 'wrap',
        }}
      >
        {boardTypes.map(function (item, i) {
          return (
            <TouchableOpacity
              key={i}
              style={{
                width: 60,
                height: 50,
                backgroundColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => handleButtonPress(item, 'boardType')}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text>BoardDetail: {boardDetail}</Text>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 20,
          flexWrap: 'wrap',
        }}
      >
        {boardDetails.map(function (item, i) {
          return (
            <TouchableOpacity
              key={i}
              style={{
                width: 60,
                height: 50,
                backgroundColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => handleButtonPress(item, 'boardDetail')}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Button
              onPress={(handleNextScreen)}
              title='Pick Handstrength'
            />
    </View>
  );
}