import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import BoardChoices from '../screens/boardchoices';
import GraphDisplay from '../screens/graphdisplay';
import BoardRender from '../screens/boardrender';


const screens = {
    Home: {
        screen: Home
    },
    BoardChoices: {
        screen: BoardChoices
    },
    GraphDisplay: {
        screen: GraphDisplay
    },
    BoardRender: {
        screen: BoardRender
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);