import React, { Component } from 'react';
import { EventComment } from './presentation';
import { FlatList, Text, Fragment, View } from "react-native";


class EventCommentFeed extends Component{
    _renderComment({ item }) {
       return <EventComment item = {item}/>;
    }
_returnKey(item){
    return item.toString();
}
    render() {
        return (
           
        <FlatList
            data = {[1,2,3,4,5,6,7,8,9,10]}
            keyExtractor={this._returnKey}
            renderItem={this._renderComment}
             />

     
        
         
        );        
    }
}

export default EventCommentFeed;