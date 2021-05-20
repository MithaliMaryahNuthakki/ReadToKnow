
import React, {Component} from 'react';
import {View,Text} from 'react-native';
import{createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Fontisto';
import Tech from './screens/Tech';
import Sports from './screens/Sports';
import Buisness from './screens/Buisness';
import Entertainment from './screens/Entertainment';
import Science from './screens/Science'; 
import Health from './screens/Health';
import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import EverythingNews from './screens/Everything/EverythingNews';

class App extends Component {
    render(){
      return <EverythingNews />;

    }
}
const TabNavigator= createMaterialBottomTabNavigator(
  {
    All : {screen:App,
      navigationOptions:{
        tabBarLabel:'Everything',
        activeColor: 'hotpink',
        inactiveColor: '#000000',
        barStyle:{
          backgroundColor:'white'
        },
        tabBarIcon:() => (
          <View>
            <MaterialIcons name={'grid-view'} size={25} style={{color:'black'}}/>
          </View>
        )

      }
    },
    Buisness : {screen:Buisness,
      navigationOptions:{
        tabBarLabel:'Buisness',
        activeColor: 'hotpink',
        inactiveColor: '#000000',
        barStyle:{
          backgroundColor:'white'
        },
        tabBarIcon:() => (
          <View>
            <FontAwesome5 name={'suitcase'} size={25} style={{color:'black'}}/>
          </View>
        )

      }
    },
    Health : {screen:Health,
      navigationOptions:{
        tabBarLabel:'Health',
        activeColor: 'hotpink',
        inactiveColor: '#000000',
        barStyle:{
          backgroundColor:'white'
        },
        tabBarIcon:() => (
          <View>
            <Icon name={'heartbeat-alt'} size={25} style={{color:'black'}}/>
          </View>
        )

      }
    },
    Sports : {screen:Sports,
      navigationOptions:{
        tabBarLabel:'Sports',
        activeColor: 'hotpink',
        inactiveColor: '#000000',
        barStyle:{
          backgroundColor:'white'
        },
        tabBarIcon:() => (
          <View>
            <FontAwesome name={'soccer-ball-o'} size={25} style={{color:'black'}}/>
          </View>
        )
        
      }
    },
    Entertainment : {screen:Entertainment,
      navigationOptions:{
        tabBarLabel:'Entertainment',
        activeColor: 'hotpink',
        inactiveColor: '#000000',
        barStyle:{
          backgroundColor:'white'
        },
        tabBarIcon:() => (
          <View>
            <MaterialIcons name={'local-movies'} size={25} style={{color:'black'}}/>
          </View>
        )

      }
    },
    Science : {screen:Science,
      navigationOptions:{
        tabBarLabel:'Science ',
        activeColor: 'hotpink',
        inactiveColor: '#000000',
        barStyle:{
          backgroundColor:'white'
        },
        tabBarIcon:() => (
          <View>
            <MaterialIcons name={'lightbulb-outline'} size={25} style={{color:'black'}}/>
          </View>
        )

      }
    },
    Tech : {screen:Tech,
      navigationOptions:{
        tabBarLabel:'Tech',
        activeColor: 'hotpink',
        inactiveColor: '#000000',
        barStyle:{
          backgroundColor:'white'
        },
        tabBarIcon:() => (
          <View>
            <FontAwesome name={'mobile'} size={25} style={{color:'black'}}/>
          </View>
        )
        
      }
    }
    
  }
);

export default createAppContainer(TabNavigator);