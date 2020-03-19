import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, Switch } from 'react-native';
import { PostFeed } from '../components/container';

import { FilterHeader } from './index' 
//import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';


class MainFeedPage extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
        
        isModalVisible: false,
        toggle1Clicked:'',
        toggle2Clicked:'',

        
         };
    }

    toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  toggleSwitch1 = () => {
    this.setState({ toggle1Clicked: !this.state.toggle1Clicked,
                   });
    };

    toggleSwitch2 = () => {
    this.setState({ toggle2Clicked: !this.toggle2Clicked });
    };
    
  

    render(){
      const { navigation } = this.props;
        return(
            <View style = {{flex:1, width:100 + "%", height: 100 + "%", backgroundColor:'black', paddingBottom: 10 }}>
             
             <FilterHeader/> 
             
            
            <PostFeed 
            style = {{ top: 100,}}
            navigation={navigation}/>

            
            
       </View>
            );
    }

  


}

const styles = StyleSheet.create(
    {
      actionButtonIcon: {
        fontSize: 30,
        height: 30, 
        
    
  
      //  color: 'white',
      },  
      actionButton: {
        marginTop:15,
          paddingTop:45,
          paddingBottom:15,
          marginLeft:30,
          marginRight:30,
      },
    
    }
      );


export default MainFeedPage; 

MainFeedPage.navigationOptions={  
tabBarIcon:({tintColor, focused})=>(  
            <Icon  
                name={'ios-calendar'}  
                color={tintColor}  
                size={25}  
            />  

            ),
};
