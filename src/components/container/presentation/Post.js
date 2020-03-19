import React , {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import config from "../../../config";
import { withNavigation } from 'react-navigation';



type Props = {};

class Post extends React.Component {
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

      

    render(){
       // console.log(this.props.item);
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageSelection = 
            this.props.item % 2 == 0  
             ? "https://www.nsbe.org/getattachment/28832cde-2300-42ed-8121-e41f9f9d7c2d/nsbe46-save-the-date.aspx"
             : "https://image.slidesharecdn.com/nsbegeneralbody1-20-16-160121134003/95/usf-nsbe-gbm-1202016-1-638.jpg?cb=1453383709";
       
        const imageUri = imageSelection +  "=s" + imageHeight + "-c";

        const likeIcon = this.state.liked ? 'rgb(252,61,57)': null;
        const dislikeIcon = this.state.disliked ? 'rgb(252,61,57)': null;
        const { navigation } = this.props;
      

        return(          
 
            <View style = {{flex:1, width: 100 + "%", backgroundColor:'black', borderBottomWidth: 0.2, borderColor: 'dimgray'}}> 
                    
                <View style = {styles.userBar}>
                       
                   
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('OrgProfilePage')}>  
                        <Image style = {styles.organizationPic} 
                        source = {{uri: "https://www.nsbe.org/NSBE/media/Images/About%20NSBE/Torch%20Symbol/PNG/NSBELogo_Black_withName.png"}}/>
                        </TouchableOpacity>

                        
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

                        style = {{ fontWeight: '200', color: "white", fontSize: 15,  top: 0, }}>NSBE Networking Event 
                        </Text>
                        </TouchableOpacity>
                        </View>

                  
                                           
                </View>








                <View style = {styles.eventPicture}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('EventClick')}> 
                <Image source = {{uri: 'https://photos.smugmug.com/Events/2016/2016-NSBE-Professional/NSBE-PDC-Welcome-EPIC/i-6nswDpV/0/b92072ac/L/NSBE%20-%20PDC%20Welcome%20%26%20EPIC%20Networking%20Event%20%40%20Mimosa%20Grill%209-30-16%20by%20Jon%20Strayhorn%20020-L.jpg'}}
                style = {{ height: 100 + '%',
                width: 100+ '%'}}/>
                </TouchableOpacity>
                
                </View>

                

            
               
                    
              
                

                    




                <View style = {styles.iconBar}>
                  

                    

                   <TouchableOpacity onPress = {this.updateLikes}>
                        
                    <Icon style = {styles.likeIcon} name = "thumbs-o-up" size={20} />

                    </TouchableOpacity>

                   
                    <Text style = {{color: 'gray', left: 5}}> {this.state.likes}  </Text>
                  



                    
                    

                    <TouchableOpacity onPress = {this.updateDislikes}>

                    <Icon style = {styles.dislikeIcon} name = "thumbs-o-down" size={20} />

                    </TouchableOpacity>

                    

                    <Text style = {{color: 'gray', left: 5}}> {this.state.dislikes}  </Text>

                 


                    
                    
                    <TouchableOpacity>
                   
                    <Icon style = {styles.commentIcon} name = "comment-o" size={20} />

                    </TouchableOpacity>

                    <TouchableOpacity>

                    <Text style = {{color: 'gray', left: 5}}> {this.state.comments}  </Text>

                    </TouchableOpacity>



                        <TouchableOpacity 
                        style = {{right: -140}}
                        onPress = {() => this.props.navigation.navigate('RatingScreen')}> 
                       

                       <Image style = {styles.ratingIcon} 
                        source = {config.images.fireIcon}/>

                        </TouchableOpacity>

                </View>


                </View>
           
        );
    }
}

const styles = StyleSheet.create({
   

    activity: {
        color: "gray",
        fontSize: 13
    },

    commentBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        borderColor: 'rgb(233,233,233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        
    },

    commentIcon: {
       marginLeft: 50,
       color: "gray"
    },


    dislikeIcon:{
        marginLeft: 50,
        color:"gray"
    },


    eventName: {
        marginLeft: 10,
        color: 'white',
        fontSize: 18,
        fontWeight:'300'
    },

    eventDescription: {
        
        borderColor: 'white',
        height: 40,
        width: 280,
        position: "absolute",
        bottom: 15,
        left: 80,
        
    },
    
    eventPicture: {
        height: 180,
        top: 0,
        width: 200 + '%',
        marginRight: 1,
        bottom: 20
    },
    

    headerText: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
        marginTop: 10
    },


    iconBar: {
        height: 50,
        width: 100 + "%",
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderColor: "gray",
        top: 15
        
    },

    likeIcon:{
        marginLeft: 40,
        color: "gray"
    },

     organizationBar: {
        height: 30,
        width: 280,
        flexDirection: 'row',
        alignItems: 'flex-start',
        top:10
        
    },


    organizationHandle: {
       
        color: 'cyan',
        fontSize: 16,
        
               
    },

    
    organizationName: {
        marginLeft: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        
    },

    
    organizationPic: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
        top: 10
        
        
       
    },


    rating: {
        position: "absolute",
        right: 40,
        color: "gray",
        fontSize: 14
            },
    
    ratingIcon: {
        position: "absolute",
        top: -5,
        right: 65,
        height: 30,
        width: 30,
    },
   
     tempNav: {
        width: 100 + "%",
        height: 56,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101011',
        borderBottomWidth: StyleSheet.hairlineWidth,
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


export default withNavigation(Post);



