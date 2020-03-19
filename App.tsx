import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';  
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import MainFeedPage from './src/screens/MainFeedPage'
import EventClick from './src/screens/EventClick'
import RatingScreen from './src/screens/RatingScreen'
import OrgProfilePage from './src/screens/OrgProfilePage'
import  PopularScreen   from './src/screens/PopularScreen';
import BlogScreen from './src/screens/BlogScreen'


const MainFeedTabs = createMaterialTopTabNavigator(  
    {  

        Events: {
            screen: MainFeedPage,
            navigationOptions: 
            {
                title: 'Events'}
             },


        

        Blog: {
            screen:BlogScreen,
            navigationOptions: 
            {
                title: 'Blogs'}
             },
       
        
    },

    { 
        tabBarOptions: {  
            activeTintColor: 'cyan',  
            showIcon: true,  
            showLabel:true,  
            style: {  
                backgroundColor:'black'  
            },

            indicatorStyle: {
            backgroundColor: 'cyan',
        },
        },  
    }) 

const StackNavigator = createStackNavigator({
  MainFeedPage:{
  screen: MainFeedTabs,
        navigationOptions: ({navigation}) => {  //destructure the navigation property here 
            return {
                headerShown: true,

                headerStyle: { backgroundColor: 'black' , marginBottom: 100},

                headerTitleStyle: { color: 'white' },

                title: "king_dayydayy",

                
                     
            }
        }
  },

  EventClick:{
    screen: EventClick,
      navigationOptions: ({navigation}) => {  //destructure the navigation property here 
            return {
                headerShown: true,

                headerStyle: { backgroundColor: 'black' },

                headerTitleStyle: { color: 'white' },

                title: null,

                headerLeft: () =>
                <TouchableOpacity
                onPress={() => navigation.navigate('MainFeedPage')}
                style={{left: 20}}>
                <Icon name="ios-arrow-back" type="Ionicons" size={30} color="white" />
                </TouchableOpacity>
                     
            }
        }
  },

  RatingScreen: {
    screen: RatingScreen,
    navigationOptions: ({navigation}) => 
    {
      return{
        headerShown: true,
        headerStyle: { backgroundColor: 'black'},
        headerTitleStyle: { color: 'white'},
        title: null,

        headerLeft: () => 
        <TouchableOpacity
        onPress = {() => navigation.navigate('MainFeedPage')}
        style = {{left: 20}}>
        <Icon name = "ios-arrow-back" type = "Ionicons" size= {30} color = "white"/>
        </TouchableOpacity>
             }
    }
                },

      OrgProfilePage: {
    screen: OrgProfilePage,
    navigationOptions: ({navigation}) => 
    {
      return{
        headerShown: true,
        headerStyle: { backgroundColor: 'black'},
        headerTitleStyle: { color: 'white'},
        title: null,

        headerLeft: () => 
        <TouchableOpacity
        onPress = {() => navigation.navigate('MainFeedPage')}
        style = {{left: 20}}>
        <Icon name = "ios-arrow-back" type = "Ionicons" size= {30} color = "white"/>
        </TouchableOpacity>
             }
    }
                },



},
{
  initialRoute: 'MainFeedPage',
  defaultNavigationOptions: {
      headerStyle: {
      backgroundColor: '#fff'
  },
  headerTintColor: '#2E36FF'
}
}

)

export default function App() {
  return (
    <Router/>
  );
}


const Router = createAppContainer(StackNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
