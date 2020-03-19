import React, {Component} from 'react';  
import {View,Text, TouchableOpacity} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
import  { BlogFeed, FilterHeader}  from './index';



 class BlogScreen extends Component{  
    render() {  
        return(  
            <View style = {{backgroundColor: 'black'}}>
             <FilterHeader/>

                <BlogFeed />
            </View>  
        )  
    }  
}  
BlogScreen.navigationOptions={  
            tabBarIcon:({tintColor, focused})=>(  
            <Icon  
                name={'md-phone-portrait'}  
                color={tintColor}  
                size={25}  
            />  
        )  
}  

export default BlogScreen;