import React, { Component, Fragment  } from "react";
import { Text, FlatList, StyleSheet, View, ImageBackground} from "react-native";
import { Popular } from '../screens/index';


class PopularFeed extends Component {
    _renderPopular({ item }) {
       return <Popular item = {item}/>;
    }

_returnKey(item){
    return item.toString();
}
    render() {
        eventType = 'Greek Life';
        uploadDate = '· 4 hours ago';
        event =  'Delta Tau Delta Dunk Tank Rush Event';
        return (

       
       <Fragment>
       <View style = {styles.topEvent}> 
      <ImageBackground
        style = {styles.container}
        source={{uri: 'https://images.squarespace-cdn.com/content/v1/564d1fbae4b045ed5292ffc9/1462572779341-BLBZUUC3WOIN2OBW0CQ4/ke17ZwdGBToddI8pDm48kFtPFaAF7tSZpO7llWCblURZw-zPPgdn4jUwVcJE1ZvWtDnkPNm-8ta7nBjlqj-zQs1HrCktJw7NiLqI-m1RSK4p2ryTI0HqTOaaUohrI8PIstizuL05MX7ygxxxu6C0zmP1Nws1euwykyhNA17lRtgKMshLAGzx4R3EDFOm1kBS/image-asset.jpeg'}}/>

        <View style = {styles.eventContainer}> 
        <Text style = {styles.eventType}> {eventType}  </Text>
        <Text style = {styles.uploadDate}> {uploadDate} </Text>
        </View>
        <View style = {styles.nameContainer}> 
        <Text style = {styles.event}> {event} </Text>
        </View>
        
        </View>

        <View style = {styles.flatList}> 
        <FlatList
            data = {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
            keyExtractor={this._returnKey}
            renderItem={this._renderPopular}
             />
        </View>
       </Fragment>

        );        
    }
}


export default PopularFeed;

const styles =  StyleSheet.create({
    container:{
        height: 100 + '%',
        width: 100 + '%'
    },
    
    event: {
         color: 'white',
        fontSize: 26,
        fontWeight: '900',
        fontFamily: 'Avenir-Roman',
        position: 'absolute',
        lineHeight: 30,
        left: 10
    },

    eventType: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Avenir-Roman',
        position: 'absolute',
        top: 50,
        left: 10
    },

    eventContainer:{
      
        position: 'absolute',
        top: 20,
        left: 10,
        height: 200,
        width: 320,
     
       
    },

    eventDescription: {
       fontWeight: 'bold',
        fontFamily: 'Avenir-Roman',
        position: 'absolute',
        top: 40,
        left: 10
    }, 
    

    flatList: {
        
        borderColor: 'white'
    },
    
    nameContainer:{
       height: 100,
        width: 300,
        position: 'absolute',
        top: 100,
        left: 10
    },

    topEvent:{
        
        borderColor: 'white',
        height: 200,
        width: 100 + '%',
               
    },

    uploadDate: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Avenir-Roman',
        position: 'absolute',
        top: 50,
        left: 200
        
    }

})