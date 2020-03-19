import React, { Component} from 'react';
import  Rating  from './Rating.js';
import { FlatList, View, Text, TouchableOpacity } from "react-native";



class RatingFeed extends Component{

name = ["overall rating", "attractiveness of guys","atractiveness of girls", "how acceptable is it to be blacked out", "food", "music", "diversity", ]

    _renderPost({ item }) {
       return <Rating item = {item}/>;
    }

_returnKey(item){
    return item.toString();
}
    render() {
        return (<View style = {{backgroundColor: 'black', height: '100%',  marginBottom: 80, top: 20, bottom: 40, paddingBottom: 60}}> 
        
        <FlatList
            data = {this.name}
            keyExtractor={this._returnKey}
            renderItem={this._renderPost}
             />

             <TouchableOpacity style = {{top: 20}} > 
         <Text style = {{textAlign: 'center', fontSize: 18, color: 'white', top: 20 }} > See all reviews  </Text>
         </TouchableOpacity>
        </View> 
        );        
    }
}

export default RatingFeed;