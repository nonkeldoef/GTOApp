import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import HandStrength from '../screens/handstrength';
import GraphDisplay from '../screens/graphdisplay';


const screens = {
    Home: {
        screen: Home
    },
    HandStrength: {
        screen: HandStrength
    },
    GraphDisplay: {
        screen: GraphDisplay
    }

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);