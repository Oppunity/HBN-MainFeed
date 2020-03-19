import React , {Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';

import RatingFeed from '../components/RatingFeed'

export default class RatingScreen extends Component{
    render(){
        return(
            <View> 
            <RatingFeed/>
            </View>
        )
    }
    
}