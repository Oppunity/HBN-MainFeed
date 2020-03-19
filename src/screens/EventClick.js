import React , { Component } from 'react';
import {KeyboardAvoidingView, TextInput, View, ScrollView, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import EventCommentFeed from '../components/container/EventCommentFeed'


class EventClick extends React.Component{
    constructor(props) {
        super(props);

        
        this.state = {
            liked: false, 
            disliked: false,
            screenWidth: Dimensions.get("window").width,
            likes:0,
            dislikes:0,
            comments: 0,

            
            
            eventComment: null,
            
           
         };

         

   
     updateLikes = () => {

      if(!this.state.liked) { 
      this.setState((prevState, props) => {
          return {
              likes: prevState.likes + 1,
              liked: true,             
          };
      });
  
  } else {

      this.setState((prevState,props) => {
          return { 
              likes: prevState.likes - 1,
              liked: false,
              iconColour: "white"
              
      };
  });

  } 
}


  updateDislikes = () => {

      if(!this.state.disliked) { 
      this.setState((prevState, props) => {
          return {
              dislikes: prevState.likes + 1,
              disliked: true,
              iconColour:"red"
          };
      });
  
  } else {

      this.setState((prevState,props) => {
          return { 
              dislikes: prevState.dislikes - 1,
              disliked: false,
              iconColour:"white"
      };
  });

  } 
}

    }

    render(){

        return(
                
                  <KeyboardAvoidingView style = {{flex:1, width: 100 + "%", backgroundColor:'black'}}> 
                  <ScrollView> 
           
            <View style = {styles.userBar}> 
                       
            <Image style = {{alignItems: 'center', top: 5,  height: 60, width: 60, left: -5, borderColor: 'white', borderWidth: 1, borderRadius: 30}} source =  {{uri: 'https://www.nsbe.org/NSBE/media/Images/About%20NSBE/Torch%20Symbol/PNG/NSBELogo_Black_withName.png'}}>
            </Image>

             <View style = {styles.organizationBar}> 

                        <TouchableOpacity>
                        <Text style = {styles.organizationName}>NSBE  </Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <Text style = {styles.organizationHandle}>@nsbe  </Text>
                        </TouchableOpacity>

                        <Text style = {styles.activity}> · 45 minutes ago </Text>
                        </View>
                   
                <View style = {styles.eventDescription}>
                        <TouchableOpacity   onPress={() => this.props.navigation.navigate('EventClick')} >
                        <Text 

                        style = {{marginLeft: 10, fontWeight: '200', color: "white", fontSize: 15,  position: "absolute", top: 0}}>
                        NSBE Networking Event in UC 103 @ 12:30 pm
                        </Text>
                        </TouchableOpacity>
                        </View>
                        
                  
                                           
                </View>

                

               
               
               <View style = {{ height: 250, width: 100+'%',  marginBottom: 10}}> 
                <TouchableOpacity> 
           
              <Image
              style = {{width: 100 + '%', height: 100 + '%', top: 15}}
              source = {{uri: 'https://photos.smugmug.com/Events/2016/2016-NSBE-Professional/NSBE-PDC-Welcome-EPIC/i-6nswDpV/0/b92072ac/L/NSBE%20-%20PDC%20Welcome%20%26%20EPIC%20Networking%20Event%20%40%20Mimosa%20Grill%209-30-16%20by%20Jon%20Strayhorn%20020-L.jpg'}}> 
             
              
              </Image> 
                </TouchableOpacity>

                </View>

                <View style = {styles.iconBar}>
                  

                    

                   <TouchableOpacity onPress = {this.updateLikes}>
                        
                    <Icon style = {styles.likeIcon} name = "thumbs-o-up" size={20} />

                    </TouchableOpacity>

                   
                    <Text style = {{color: 'gray', top: 12}}> {this.state.likes}  </Text>
                  

                    

                    <TouchableOpacity onPress = {this.updateDislikes}>

                    <Icon style = {styles.dislikeIcon} name = "thumbs-o-down" size={20} />

                    </TouchableOpacity>

                    

                    <Text style = {{color: 'gray', top: 12}}> {this.state.dislikes}  </Text>

                 


                    
                    
                    <TouchableOpacity>
                   
                    <Icon style = {styles.commentIcon} name = "comment-o" size={20} />

                    </TouchableOpacity>

                    <TouchableOpacity>

                    <Text style = {{color: 'gray', top:12}}> {this.state.comments}  </Text>

                    </TouchableOpacity>

            </View>

              <View style = {styles.details}>
              <Text style = {{color: 'white', top: 5, left: 5, right: 5, fontWeight: '200', font: 18, }}>The National Society of Black Engineers’ 46th Annual Convention (#NSBE46) will take place March 25–29, 2020 in San Antonio, Texas,  at the Henry B. Gonzalez Convention Center. The Convention demonstrates NSBE’s commitment to lead the United States to graduate 10,000 Black Engineers annually by 2025.  </Text>
              </View>

            <View style = {{flexDirection: 'row', height: 60, top: 30, borderColor: 'white'}}> 
            <TouchableOpacity>
            <Image style = {{left: 10, height: 40, width: 40, borderRadius: 20}} source = {{uri: 'https://live.staticflickr.com/1279/4703365225_8c898c7530_b.jpg'}}/>
            </TouchableOpacity>
            
           <TextInput 
           placeholder = 'Add a comment...'
           placeholderTextColor= "gray" 
           value = {this.state.eventComment}
           style = {{ paddingLeft: 15, color: 'white', width: 280, height: 40, left: 25, borderRadius: 20, borderColor: 'dimgray', backgroundColor: 'transparent', borderWidth: 1}}
           //onChangeText={eventComment => this.setState({ eventComment })}
           > 
           </TextInput>

           <TouchableOpacity> 
           <Text style = {{left: -28, top: 10, color: 'dodgerblue'}}> Post </Text>
           </TouchableOpacity>

            </View>

            <View style = {{top: 30,  width: 100 + '%', height: 400, borderColor: 'white'}}>
           <EventCommentFeed/>
            </View>
           

              
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

}
export default EventClick; 

const styles = StyleSheet.create({


    activity:
    {   
        color: 'white',
        fontSize: 14,
        fontWeight:'300'
    },

 
     blogContainer: {
        width: 100 + "%",
        height: 300,
        backgroundColor: 'black',
        flexDirection: "row",
        borderBottomWidth: 0.4,
        borderColor: 'gray'
        
        },

        blogTitle:
    {
        color: 'white',
        fontSize: 16,
        fontWeight:'bold',
        left: 10
        
    },



    commentIcon: {
       marginLeft: 100,
       color: "gray",
       top: 10
    },

    userBar: 
    {
        height: 50,
        //borderColor: 'white',
        borderWidth: 1,
        width: 100 + '%',
        flexDirection: 'row'
    },

     date:{
      position: 'absolute',
        left: 75,
        top: 70,
        color: 'white',
        fontSize: 14,
        fontWeight:'200'  
    },
     

    dislikeIcon:{
        marginLeft: 100,
        color:"gray",
        top: 10
    },

    details: { 
        textAlign: 'center',
        top: 20,
        height: 120,
          //borderColor: 'white',
        width: 90 + '%',
        left: 10,
        marginRight: 10,
        borderBottomWidth: 0.5,
        borderColor: 'dimgray'
    },

    eventDescription: {
        height: 40,
        width: 280,
        position: "absolute",
        bottom: 15,
        right: 12,
        
    },

     iconBar: {
        height: 35,
        width: 100 + "%",
        flexDirection: 'row',
        alignItems: 'flex-start',
        
        top: 10
        
    },

    organizationHandle: {
       
        color: 'cyan',
        fontSize: 16,
        
               
    },

    
    organizationName: {
        marginLeft: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        
    },


    
    interactionContainer: {
        position: 'absolute',
        top: 75,
        height: 40,
        width: 350,
        left: 10,
        flexDirection:'row',
        
        },

        interactions: {
            fontSize: 16,
            color: 'cyan',
            fontWeight: 'bold',
            
        },

        
    likeIcon:{
        marginLeft: 20,
        color: "gray",
        top: 10
    },

    organizationBar: {
        height: 30,
        width: 280,
        flexDirection: 'row',
        alignItems: 'flex-start',
        top:10
        
    },


    nameContainer: {
        position: 'absolute',
        top: 40,
        height: 100,
        width: 300,
        flexDirection:'row'
    },


   
    textContainer:{
      
        position: 'absolute',
        height: 95 + '%',
        width: 100 + '%',
        marginTop: 5,
              
    },
     
    trending: {
        
        color: 'white',
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

     userBar: {
        width: 100 + "%",
        height: 90,
        backgroundColor: 'black',
        flexDirection: "row",
        justifyContent: "center",
        borderColor: "gray",
        top: 20
       
        
    },
     
       

});
