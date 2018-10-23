
import {createStackNavigator} from 'react-navigation';
import listMovie from './components/listMovie';
import detailMovie from './components/detailMovie';
export default RootStack = createStackNavigator(
    {
        list: {
            screen: listMovie,
            navigationOptions: {
              title:'Movie Explorer'
              }
        },
        detail : {
            screen: detailMovie,
            navigationOptions: {
              title: 'Movie Detail'
              }
        }
    },
    {
        initialRouteName:'list'
    }
);
