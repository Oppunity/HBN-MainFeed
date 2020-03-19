import React, { Component, Fragment  } from "react";
import { Text, FlatList, StyleSheet, View, ImageBackground, } from "react-native";
import { Blog } from '../screens/index';


class BlogFeed extends Component {
    _renderBlog({ item }) {
       return <Blog item = {item}/>;
    }

_returnKey(item){
    return item.toString();
}
    render() {
        return (

    
        <View style = {styles.flatList}> 
        
        <FlatList
            data = {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
            keyExtractor={this._returnKey}
            renderItem={this._renderBlog}
             />
             
        </View>
      

        );        
    }
}


export default BlogFeed;

const styles =  StyleSheet.create({
   
    flatList: {
        
        borderColor: 'white'
        },
    
    

    header:{
        
        borderColor: 'gray',
        height: 35,
        width: 100 + '%',
        borderBottomWidth: 0.4
               
    },

    

})