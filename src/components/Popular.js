import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

class Popular extends Component{
     
    render(){
      

         activity = '· 3 hours ago';
         organizationName = 'Gamma Phi Beta';
         organizationHandle = '@usdgphi';
         interactions = '3,856 Interactions';

        return(
                  <View style = {{flex:1, width: 100 + "%", backgroundColor:'black'}}> 
            
           
            <View style = {styles.eventContainer}> 

                <TouchableOpacity>  
                <Image style = {styles.organizationPic} 
                source = {{uri: "https://pbs.twimg.com/profile_images/1020070183485018113/WQIbuyjF_400x400.jpg"}}/>
                </TouchableOpacity>
                
                <View style = {styles.trendingContainer}> 

                <Text style = {styles.trending} >Trending on campus </Text> 
                <Text style = {styles.activity}> {activity} </Text>

                </View>
                <View style = {styles.nameContainer}>
                <Text style = {styles.organizationName}> {organizationName} </Text>
                <Text style = {styles.organizationHandle}> {organizationHandle} </Text>
                </View>

               <View style = {styles.interactionContainer}>
               <Text style = {styles.interactions}> {interactions} </Text>
               </View>

               
                    

            </View>

        </View>
    )
}

}
export default Popular; 

const styles = StyleSheet.create({


    activity:
    {   
        color: 'gray',
        fontSize: 14,
        fontWeight:'300'
    },

    commentIcon:{
        
        position: 'absolute',
        left: 80,
        top: 100,
        color: 'gray',
        
    },
    
   
    date:{
      position: 'absolute',
        left: 75,
        top: 70,
        color: 'gray',
        fontSize: 14,
        fontWeight:'200'  
    },
     

    dislikeIcon:
    {
        
        position: 'absolute',
        left: 250,
        top: 100,
        color: 'gray',
        
    },
    
     eventContainer: {
        width: 100 + "%",
        height: 130,
        backgroundColor: 'black',
        flexDirection: "row",
        borderColor: 'gray',
        borderBottomWidth: 0.4
        },


    eventDescription: {
      position: 'absolute',
        left: 10,
        top: 70,
        color: 'white',
        fontSize: 16,
        fontWeight:'300'  
    },

    likeIcon:{
        position: 'absolute',
        left: 160,
        top: 100,
        color: 'gray',
        
    },

    interactionContainer: {
        position: 'absolute',
        top: 75,
        height: 40,
        width: 150,
        left: 10,
        flexDirection:'row',
        
        },

        interactions: {
            fontSize: 16,
            color: 'cyan',
            fontWeight: '300',
            
        },

    nameContainer: {
        position: 'absolute',
        top: 40,
        height: 40,
        width: 300,
        flexDirection:'row'
    },

    organizationHandle:
    {
       color: 'gray',
        fontSize: 16,
        fontWeight:'200',
        color: 'cyan',
        left: 20
    },

     organizationPic: {
        height: 90,
        width: 90,
        borderRadius: 15,
        top: 20,
        left: 270,
        borderWidth: 1,
        borderColor: 'white'
       
        
    },

    organizationName:
    {
        color: 'white',
        fontSize: 16,
        fontWeight:'400',
        left: 10
        
    },

     
    trending: {
        
        color: 'gray',
        fontSize: 14,
        fontWeight:'300'
    },

     trendingContainer: {
        position: 'absolute',
        top: 20,
        height: 30,
        width: 250,
        flexDirection:'row',
        left: 10
        
        },

     
       

});
