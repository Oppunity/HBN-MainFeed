import React, {Component} from 'react';  
import {View,Text, StyleSheet, Fragment, TouchableOpacity} from 'react-native';  
import { Header, SearchBar } from 'react-native-elements'; 
import {FilterHeader} from './index'
import Icon from 'react-native-vector-icons/Ionicons';
import  { PopularFeed }  from './index';
  
class PopularScreen extends Component{  
    static navigationOptions = {
  // Hide the header from AppNavigator stack
  title: 'Title',
};
      
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
  const { navigate } = this.props.navigation;
    
        return(  
           
             
            <View style = {{width:100 + "%", height: 100 + "%", backgroundColor:'black'}}>
                    <FilterHeader/> 

                   
                   
                    <PopularFeed/>
                  
            </View>  
           
        );  
    }  
}  
PopularScreen.navigationOptions={  
tabBarIcon:({tintColor, focused})=>(  
            <Icon  
                name={'md-flash'}  
                color={tintColor}  
                size={25}  
            />  

            ),
};

    
     




      
 

  



export default PopularScreen;
const styles = StyleSheet.create({  
    
    headerText: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
        marginTop: 10
    },
    
   
    searchBar: {
      
     borderRadius: 20,
     alignContent: 'center',
     width: 350,
     top: 20,
     height: 15,
    
        
    },

    tabBar: {
      top: 40,
      height: 100 + '%'  
    },
    
    
    top:
    {
     width: 300,
     height: 30,
     flexDirection: 'row',
     justifyContent: 'center',
     left: 32,
    
    }

     
});  

