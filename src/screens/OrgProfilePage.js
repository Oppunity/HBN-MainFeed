import React, {Component } from 'react';
import {View, Image, Text, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import {Container, Button} from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';
import RatingFeed from '../components/RatingFeed.js';
import EventProfileFeed from '../components/EventProfileFeed';
import { Header } from 'react-native-elements';
//import { Storage } from 'aws-amplify'

//Storage.configure( { level: 'public' } );




var {width, height} = Dimensions.get('window')




class OrgProfilePage extends Component { 

    
  static navigationOptions = {
    
  };

  constructor(props)
  {
    super(props)

    this.state = {
      numColumnss:2, 

      following: false, 
      buttonMessage:'Follow',
      backgroundColor: 'dodgerblue',
      borderColor: 'dodgerblue',
      image: [], 
      currentUser: [],
      photos: null, 
      IDENTITYID: '',
      orgpicname: [],

      mediaimages: [
        {key: "https://imagesvc.timeincapp.com/v3/fan/image?url=https://sircharlesincharge.com/wp-content/uploads/getty-images/2019/08/1155488502.jpeg&c=sc&w=3200&h=2161"},
        {key: "https://imagesvc.timeincapp.com/v3/fan/image?url=http://hoopshabit.com/wp-content/uploads/getty-images/2018/08/1177700375.jpeg&c=sc&w=3200&h=2133"},
        {key: "https://ca-times.brightspotcdn.com/dims4/default/005e42c/2147483647/strip/true/crop/1881x1254+167+0/resize/2400x1600!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc4%2F4d%2F6f2af18facb11af03780ba411f27%2Fla-xpm-photo-2013-dec-07-la-sp-lakers-kobe-20131208"},
        {key: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZtmoLkn47r5W0CkDozqYmczNXdE3EPrQIMSglzMfwIh5MJQwsQ&s"},
        {key: "https://www.usnews.com/dims4/USNEWS/505905e/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Fb9%2F2fc427b3844714ea7625b953afa909%2Fmedia%3A046dd960b1284430b40e7802080e3f76Lakers_Pacers_Basketball_09540.jpg"},
        {key: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Forlandomagicdaily.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1188070037.jpeg&c=sc&w=736&h=485"},
        {key: "https://imagesvc.timeincapp.com/v3/fan/image?url=https://lakeshowlife.com/wp-content/uploads/getty-images/2018/08/1194978120.jpeg&c=sc&w=3200&h=2133"}
      ], 
     
      CheckInItems: [
        {id: '1', orgname: 'NSBE @NSBE', eventname: 'Study Jam', day: '- 45minutes ago', orgpicture: 'https://facebook.github.io/react/logo-og.png', arrow: 'https://etc.usf.edu/clipart/70300/70314/70314_258_c-2b_b_md.gif'},
        {id: '2', orgname: 'NSBE @NSBE', eventname: 'Tail Gate', day: '- 45minutes ago', orgpicture: 'https://facebook.github.io/react/logo-og.png', arrow: 'https://etc.usf.edu/clipart/70300/70314/70314_258_c-2b_b_md.gif'},
        {id: '3', orgname: 'NSBE @NSBE', eventname: 'Alumni Panel', day: '- 45minutes ago', orgpicture: 'https://facebook.github.io/react/logo-og.png', arrow: 'https://etc.usf.edu/clipart/70300/70314/70314_258_c-2b_b_md.gif'},
        {id: '4', orgname: 'NSBE @NSBE', eventname: 'Group Panel', day: '- 45minutes ago', orgpicture: 'https://facebook.github.io/react/logo-og.png', arrow: 'https://etc.usf.edu/clipart/70300/70314/70314_258_c-2b_b_md.gif'},
        {id: '5', orgname: 'NSBE @NSBE', eventname: 'Dance', day: '- 45minutes ago', orgpicture: 'https://facebook.github.io/react/logo-og.png', arrow: 'https://etc.usf.edu/clipart/70300/70314/70314_258_c-2b_b_md.gif'},
        {id: '6', orgname: 'NSBE @NSBE', eventname: 'Study Jam', day: '- 45minutes ago', orgpicture: 'https://facebook.github.io/react/logo-og.png', arrow: 'https://etc.usf.edu/clipart/70300/70314/70314_258_c-2b_b_md.gif'},
        {id: '7', orgname: 'NSBE @NSBE', eventname: 'Study Jam', day: '- 45minutes ago', orgpicture: 'https://facebook.github.io/react/logo-og.png', arrow: 'https://etc.usf.edu/clipart/70300/70314/70314_258_c-2b_b_md.gif'},
        {id: '8', orgname: 'NSBE @NSBE', eventname: 'Study Jam', day: '- 45minutes ago', orgpicture: 'https://facebook.github.io/react/logo-og.png', arrow: 'https://etc.usf.edu/clipart/70300/70314/70314_258_c-2b_b_md.gif'},

      ],

      FlatListItems: [
        { id: '1',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '... to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '2',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '... to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '3',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '... to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '4',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '... to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '5',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '... to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '6',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '... to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '7',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '... to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '8',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '... to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '9',  value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '... to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '10', value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '... to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '11', value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '... to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'},
        { id: '12', value: 'NSBE @NSBE', day: '- 45 minutes ago', uri: 'https://facebook.github.io/react/logo-og.png', like: 'https://images.8tracks.com/cover/i/010/026/698/flat_800x800_075_t.u2-9531.jpg?rect=0,0,800,800&q=98&fm=jpg&fit=max', likenum: '999+', dislike: 'http://ih2.redbubble.net/image.34476280.0296/fc,220x200,black.u1.jpg', disnum: '999+', reply: 'reply', view: 'view all comments', replyingto: '... to @BSU Post', comment: 'This event was great. Having apple, google, and amazon at the event was amazing. Being able to increase my network was the best part of the experience. #Network=Networth',commentpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYBbhjPvFAYmC2dwzgqNZ7I8jzs_pmMSlcFQHOyCgWebW7UeuUw&s'}],
      activeIndex:0
    }
  }

 updateFollow = () => {

      if(!this.state.following) { 
      this.setState((prevState, props) => {
          return {
                
	            backgroundColor: 'black',
                borderColor: 'gray',
                
                following: true,
                buttonMessage: 'Following',
                    
          };
      });
  
  } else {

      this.setState((prevState,props) => {
          return { 
              	
	            backgroundColor: 'dodgerblue',
                borderColor: 'dodgerblue',
                
                following: false,
                buttonMessage: 'Follow',
                  
      };
  });

  } 
}


  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
    );
  };

  segmentClicked = (index) => {
    this.setState({
      activeIndex: index
    })
  }


   renderSectionZero = () => {
  console.log('images render: ',  this.state.image)  
  return(
    <View style={{paddingBottom: 325, marginTop: 20,  borderWidth: 1}}> 
    <FlatList 
    data={this.state.image}
    numColumns = {this.state.numColumnss}
    key={this.state.numColumnss}
    renderItem={ ({ item }) => (
        <TouchableOpacity style={[ {width:(width) / 2}, {height: (width) / 2}, {marginBottom: 3},
          item % 2 !==0 ? {paddingLeft:3} : {paddingLeft:0}
        ]}>
        <Image source={{uri: item}} style={{flex: 1,  width: undefined, height: undefined}} />
        </TouchableOpacity>
  )
  } 
  keyExtractor={(items, index, numColumns) => index.toString()} />
  </View>
      )
    
  }


  renderSectionOne = () => {
    return (
      <View style={{paddingBottom: 325, marginTop: 20,  borderWidth: 1}}> 

        <FlatList 
        data={this.state.FlatListItems}
        ItemSeparatorComponent={this.FlatListItemSeparator}
        renderItem={({ item }) => (
          <View style={{ flex: 1, marginRight: 25 , height: 220, borderWidth: 1}}>
           
            <View style={{ flexDirection: 'row', marginRight: 10, height: 150,  borderWidth: 1}}> 
                <Image source={{ uri: item.uri }} style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 10, marginTop: 5,}} /> 
                  
                  <View style = {{ flexDirection: 'row',  borderWidth: 1, marginRight: 10,height: 30, width: 260}}>
                   <Text style={{ fontSize: 15, color: 'grey',  marginLeft: 5, }}> 
                    {item.replyingto}
                    </Text>
                  <Text style={{ fontSize: 13, color: 'grey', marginLeft: 25 }}> 
                   {item.day}
                  </Text>

              </View> 
                  <View style = {{ borderWidth: 1, position: 'absolute', marginLeft: 65, marginTop: 25, width: 250, height: 100}}>
                  <Text style={{ fontSize: 14.5, color: 'white'}}> 
                  {item.comment}
                  </Text>
              </View> 
            </View>

           
            
                  <View style={{ flexDirection: 'row', borderWidth: 1, height: 30, marginRight: 20, marginLeft: 140 }}> 

                    <Text style={{ fontSize: 15, color: 'grey', marginRight: 30 }}> 
                     {item.view}
                    </Text>

                    
                  </View>
          
          <View style={{ flexDirection: 'row', height: 40, marginRight:10,  borderWidth:1, marginLeft: 60}}>

          <Text style={{ fontSize: 15, color: 'grey', marginLeft: 10 }}> 
      {item.likenum}
          </Text>
        <Image source={{ uri: item.like }} style={{ width: 25, height: 25, borderRadius: 10, }} /> 


          <Text style={{ fontSize: 15, color: 'grey', marginLeft: 10  }}> 
      {item.disnum}
          </Text>
          <Image source={{ uri: item.dislike }} style={{  width: 25, height: 25, borderRadius: 10,}} />


          <Text style={{ fontSize: 15, color: 'grey', marginLeft: 10 }}> 
      {item.disnum}
          </Text>
          <Image source={{ uri: item.commentpic }} style={{width: 25, height: 25, borderRadius: 10,}} />
         </View>

        
        </View> 
        )}
        keyExtractor={(item, index) => index.toString()}
        />
        
          </View> 

    )
        
}

renderSectionTwo = () => {
  return (
    <View style = {{flexDirection: 'vertical', borderColor: 'white',  width: 100 + "%", height: 100 + "%", backgroundColor:'black', paddingBottom: 430, paddingTop: 20, bottom: 50}}>
         <Text style = {{textAlign: 'center', fontSize: 18, color: 'white', top: 0}}> Ratings and Reviews </Text>
         <RatingFeed />

         
    </View>
  )

}

renderSectionThree = () => {
    
    return(
  <View style={{flex: 1, marginBottom: 325, marginVertical: 20}}> 
  <FlatList 
  data={mediaimages}
  numColumns = {this.state.numColumnss}
  key={this.state.numColumnss}
  renderItem={ ({ item }) => (
      <TouchableOpacity style={[ {width:(width) / 2}, {height: (width) / 2}, {marginBottom: 3},
        item % 2 !==0 ? {paddingLeft:3} : {paddingLeft:0}
      ]}>
      <Image source={{uri: item.key}} style={{flex: 1,  width: undefined, height: undefined}} />
      </TouchableOpacity>
)
} 
keyExtractor={(items, index, numColumns) => index.toString()} />
</View>
    )
}

renderSectionFourth = () => {
  return (
    <View style={{flex: 1, marginBottom: 325, marginRight: 20, borderColor:'cyan', marginTop: 25}}> 
    <FlatList 
    data={this.state.CheckInItems}
    ItemSeparatorComponent={this.FlatListItemSeparator}
    renderItem={({ item }) => (
      <View style={{ borderColor:'red' , height: 100, marginRight: 20 }}>
           
            <View style={{ flex: 1, flexDirection: 'row', borderColor: 'blue', }}> 
            <Image source={{ uri: item.orgpicture }} style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 10, marginTop: 25, borderWidth: 1, borderColor: 'white'}} /> 
            <Text style={{ marginBottom: 10, fontSize: 15, color: 'grey', width: '100%', marginLeft: 10, marginTop: 15,}}> 
      {item.orgname}
          </Text> 
          </View>
          <View style={{flexDirection: 'row', borderColor: 'green',  marginBottom:5}}>
          <Text style={{ fontSize: 18, color: 'white', width: 200, marginLeft: 75, marginTop: -60}}> 
            {item.eventname}
            </Text>
            </View>

            <View>
            <TouchableOpacity>
            <Image source={{ uri: item.arrow }} style={{ width: 60, height: 30, borderRadius: 10,  bottom: 35, right: 20, borderWidth: 1, borderColor: 'white', position: 'absolute'}} />
            </TouchableOpacity>
            
            </View>
           
        </View> 
        )}
        keyExtractor={(item, index, numColumns) => index.toString()}
        />
          </View> 
  )

}
  renderSection = () => {
    if(this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionZero()}
        </View>
      )
    }
    if(this.state.activeIndex == 1) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionOne()}
        </View>
      )
    }
    if(this.state.activeIndex == 2) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
          {this.renderSectionTwo()}
        </View>
      )
    }
    if(this.state.activeIndex == 3) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionThree()}
        </View>
      )
    }
    if(this.state.activeIndex == 4) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionFourth()}
        </View>
      )
    }
  }
  
  render() { 
const {navigate} =this.props.navigation;
  return (
    <Container style={{flex: 1, backgroundColor: "black"}}> 
    

        <View style={{width: '100%', height: '45%', backgroundColor: "black", top: 20}}>
        <Text style={{textAlign: 'center', marginTop: 0, fontWeight: '500',  color: 'white', fontSize: 20}}>  NSBE </Text>

        <View style={{flexDirection: 'row'}}>

        <Image source={{uri: 'https://www.eng.auburn.edu/student-organizations/org-pictures/pqYqtzkA.jpeg'}}
       style={{width: 90, height: 90, borderRadius: 45, marginTop: 5, marginLeft: 15}} />
     

     <View style = {{borderWidth: 1,  height: 80, width: 80, top: 20}}>
     <Text style={{fontSize: 16, fontWeight: '700', color: 'white', textAlign: 'center', }}>  9.4
    </Text>
     

         <Text style={{ fontSize: 16, color: 'white', textAlign: 'center',  top: 3}}> Rating  </Text> 

           <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
          
       style={{width: 30, height: 30, borderRadius: 10, left: 25, top: 15}} /> 
       
    </View>


          <View style = {{borderWidth: 1, height: 80, width: 80, top: 20}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Followers')}> 
                    <Text style={{fontSize: 16, fontWeight: '700', color: 'white', textAlign: 'center', }}>  3,764
                    </Text>
                    <Text style={{fontSize: 16, color: 'white', textAlign: 'center', top: 3}}>  Followers
                    </Text>
               </TouchableOpacity>
           </View>

           <View style = {{borderWidth: 1, height: 80, width: 80, top: 20, left: 10}}>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('Followers')}> 
              <Text style={{fontSize: 16, fontWeight: '700', color: 'white', textAlign: 'center', }}>  354
              </Text>
              <Text style={{  fontSize: 16, color: 'white', textAlign: 'center',  top: 3 }}>  Following
              </Text>
              </TouchableOpacity>

              </View>
              </View>
     
    
      
      <View style={{flexDirection: 'row', marginTop: 10, left: 185, position: 'absolute', top: 100}} > 

       

        <TouchableOpacity 
        onPress = {() => this.props.navigation.navigate('Setting')}
        style={{backgroundColor:'black',  borderColor: 'dimgray', padding: 5, width: 140, justifyContent: 'center', borderRadius: 5, borderWidth: 1, left: 25,  }}
                           >
          
                           <Text style = {{color: 'white', fontWeight: '500', textAlign: 'center'}}> Settings </Text>
                </TouchableOpacity>
          

        </View>

        <View style={{ marginTop: 10}}>
           <Text style={{ color: 'white', fontWeight: '700', left: 10}}> NSBE </Text>
          <Text style={{ color: '#42a5f5', fontWeight: 'bold', left: 10}}>Organization </Text> 
          </View>


          <View style={{flexDirection: 'column', marginTop: 5, height: 85}}>

  
          <Text style={{ color: 'white', left: 10}}> The purpose of NSBE is "to increase the number of culturally responsible Black Engineers who excel academically, succeed professionally and positively impact the community." </Text> 

          <View style = {{flexDirection: 'row', marginTop: 10, left: 10, bottom: 10}}>
              <TouchableOpacity style={{backgroundColor:this.state.backgroundColor,  borderColor:this.state.borderColor, padding: 5, width: 140, justifyContent: 'center', borderRadius: 5, borderWidth: 1, left: 10, top: 10}}
                            onPress={this.updateFollow}>
          
                           <Text style = {{color: 'white', fontWeight: '500', textAlign: 'center'}}> {this.state.buttonMessage} </Text>

               </TouchableOpacity>


                <TouchableOpacity style={{backgroundColor:'mediumturquoise', position: 'absolute',  padding: 7, width: 140, justifyContent: 'center', borderRadius: 5, borderWidth: 1, left: 200, top: 8, }}
                           >
          
                           <Text style = {{color: 'white', fontWeight: '500', textAlign: 'center'}}> Message </Text>
                </TouchableOpacity>
          </View> 

          </View>

          <View >
            <View style={{flexDirection: 'row', height: 90, justifyContent: 'space-around',  marginTop: 35, borderTopWidth: 0.3, borderTopColor: "gray" }}> 
              <TouchableOpacity 
              onPress={()=> this.segmentClicked(0)}
              active={this.state.activeIndex == 0}>
                <Icon 
                size= {35}
                name="ios-calendar"
                style={[this.state.activeIndex == 0 ? {color: "#42a5f5"} : {color: 'white'}]} />

              </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=> this.segmentClicked(1)}
              active={this.state.activeIndex == 1}>
                <Icon 
                size= {35}
                name="ios-paper"
                style={[this.state.activeIndex == 1 ? {color: "#42a5f5"} : {color: 'white'}]} />

              </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=> this.segmentClicked(2)}
              active={this.state.activeIndex == 2}>
                <Icon 
                size= {35}
                name="ios-star-half"
                style={[this.state.activeIndex == 2 ? {color: "#42a5f5"} : {color: 'white'}]} />

              </TouchableOpacity>
              
            </View>
            
            </View>
            
          </View>
          {this.renderSection()}
    </Container>
  )
}
}

export default OrgProfilePage; 
  