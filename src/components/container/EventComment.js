import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


class EventComment extends Component {
     constructor(props) {
        super(props);

        

        this.state = {
            liked: false, 
            disliked: false,
            screenWidth: Dimensions.get("window").width,
            likes:0,
            dislikes:0,
            comments: 0

         
           
         };
    }

render(){
    return(
        <View style = {{height: 100, width: 100 + "%", backgroundColor:'black', borderWidth: 1}}> 
            
           
            <View style = {styles.userBar}> 

                <TouchableOpacity>  
                <Image style = {styles.commenterPic} 
                source = {{uri: "https://ichef.bbci.co.uk/news/410/cpsprodpb/58C1/production/_101012722_gettyimages-873823678.jpg"}}/>
                </TouchableOpacity>
                
                <Text style = {styles.commenterName}> sharqueesha</Text>
                <Text style = {styles.commenterHandle}> @sharqueesha </Text>
                <Text style = {styles.date}> · 6 hours ago </Text>

              
                <Text style = {styles.comment}>i'm so excited for the nsbe convention!!! #HBN </Text>


                    
                   
                    
                    
            </View>

<View style = {{flexDirection: 'row', top: 5, left: 10, height: 30, width: 250}}> 
                    <TouchableOpacity> 
                    <Icon style = {styles.likeIcon} name = "thumbs-o-up" size={14} />
                    </TouchableOpacity>  

                    <TouchableOpacity> 
                    <Icon style = {styles.dislikeIcon} name = "thumbs-o-down" size={14} />
                     </TouchableOpacity>  

                     <TouchableOpacity>
                     <Text style = {{top: 5, left: 140, fontSize: 13, color: 'gray'}}> Reply </Text>
                     </TouchableOpacity>
                    </View>
           
                   

        </View>
    )
}

}
export default EventComment; 

const styles = StyleSheet.create({

    commentIcon:{
        
        position: 'absolute',
        left: 80,
        top: 100,
        color: 'gray',
        
    },
    
    commenterPic: {
        height: 30,
        width: 30,
        borderRadius: 15,
        top: 5,
        left: 10
       
        
    },

    commenterName:
    {
        marginLeft: 10,
        top: 5,
        color: 'white',
        fontSize: 14,
        fontWeight:'600'
    },

    commenterHandle:
    {
       
        top:5,
        color: 'gray',
        fontSize: 14,
        fontWeight:'200'
    },

     date:
    {   
        top:5,
        marginLeft: 10,
        color: 'gray',
        fontSize: 12,
        fontWeight:'200'
    },

    dislikeIcon:
    {
        
        
        left: 100,
        top: 5,
        color: 'gray',
        
    },
    

    likeIcon:{
        
        left: 35,
        top:5,
        color: 'gray',
        
    },

    replying:{
        position: 'absolute',
        left: 80,
        top: 40,
        color: 'gray',
        fontSize: 15,
        fontWeight:'200'
    },

    comment:
    {
      position: 'absolute',
        left: 45,
        top: 22,
        color: 'white',
        fontSize: 14,
        fontWeight:'300'  
    },

      userBar: {
        width: 100 + "%",
        height: 40,
        backgroundColor: 'black',
        flexDirection: "row",
        borderColor: "gray",
        
        },

        userHandle: {
            position: 'absolute',
            left: 160,
            top: 40,
            color: 'cyan',
            fontSize: 16,
            fontWeight:'300'
        }


});
