import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View,StatusBar,Image,ImageBackground,TouchableOpacity } from 'react-native'
import {Colors} from '../../src/constants'
import Buttons from '../components/Buttons'


const Onboarding = ({navigation}) => {
    return (
        <View style={{flex:1,backgroundColor:Colors.white}} >
            <StatusBar barStyle="dark-content" hidden = {true} backgroundColor="#047d9a" />
            {/* handshake image */}
            {/* <View style={{flex:3,backgroundColor:'#ddd'}} > */}
            <ImageBackground source={require('../assets/images/handshake.png')}
                style={{flex:1, justifyContent:'center', width:'100%',backgroundColor:'#fff'}} >
            

                        {/* button and text */}
                        {/* <View style={{flex:2,backgroundColor:'#fff'}} > */}
                            {/* Text part */}
                <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start', alignItems:'center',paddingTop:70}} >
                    <Text style={{fontFamily:'OpenSans-Bold',color:'#fff',fontSize:24}} >Welcome to Byslogims portal</Text>
                    <Text style={{maxWidth:'74%', fontFamily:'OpenSans-Medium',color:"#fff",fontSize:16, textAlign:'center',paddingTop:19}} >Ministry Of Local Government Chieftaincy & Community Development</Text>
                </View>   

                {/* Button */}
                <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}} >
                    {/* <TouchableOpacity style={{justifyContent:'center',width:'90%',backgroundColor:Colors.primary,height:50,marginBottom:30,borderRadius:10}} 
                    onPress={()=>navigation.navigate("Login")}
                    >
                        <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',fontFamily:'OpenSans-SemiBold',color:Colors.white}} >Get Started</Text>
                    </TouchableOpacity> */}
                    {/* <Buttons style={{paddingTop:20}} btn_text={"Get Started"} on_press={()=>navigation.navigate("Login")} />
                    <Buttons style={{marginTop:-20}} btn_text={"Get Started"} on_press={()=>navigation.navigate("Login")} /> */}
                 
               

                <View style={{flexDirection:'column',alignItems:'center',width:'95%'}} >
                    <TouchableOpacity  onPress={()=>navigation.navigate("Login")} style={[styles.social_btn,{width:340,marginBottom:26,borderColor:'#3f5c94'}]} >
                        <Image style={styles.social_img} source={require('../assets/images/light-logo.png')} />
                        <Text style={{width:'80%',textAlign:'center',fontSize:17,fontFamily:'OpenSans-Medium',color:"#000",fontWeight:'bold'}} >Login With Passcode </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>alert("still in progress")} style={[styles.social_btn,{backgroundColor:"#007ec7",width:340,marginBottom:40,borderColor:'#3f5c94'}]} >
                        <Image style={styles.social_img} source={require('../assets/images/facebook_icon.png')} />
                        <Text style={{width:'80%',textAlign:'center',fontSize:17,fontFamily:'OpenSans-Medium',color:"#fff",fontWeight:"bold"}} >Login With facebook </Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity onPress={()=>console.log("facebook login")} style={[styles.social_btn,{width:340,marginBottom:50}]} >
                        <Image style={styles.social_img} source={require('../assets/images/facebook_icon.png')} />
                        <Text style={{width:'80%',textAlign:'center',fontSize:17,fontFamily:'OpenSans-Medium',color:"#000",fontWeight:"690"}} ></Text>
                    </TouchableOpacity> */}

                    <Text style={{fontFamily:'OpenSans-Medium',fontSize:10,color:'#fff'}} >Bayelsa State Ministry of Local Government Chieftaincy & Community Development</Text>
                    {/* <Text style={{fontSize:18,fontFamily:'OpenSans-SemiBold',color:'#333'}} >Sign Up</Text> */}
                </View>
                
                
                    

                 



                </View>
                {/* <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start', alignItems:'center',paddingBottom:-100}} >
                    <Text style={{fontFamily:'OpenSans-Bold',color:'#e7feff',fontSize:14}} >Don't Have Meter/Accout?</Text>
                    <Text style={{maxWidth:'50%', fontFamily:'OpenSans-Medium',color:"#e7feff",fontSize:16, textAlign:'center',paddingTop:10}} >Request for Accout Number</Text>
                </View>  */}
                     {/* </View> */}
            </ImageBackground>
                {/* </View> */}
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
        fontFamily:'OpenSans-Medium',
        paddingLeft:20,
    },
    social_btn:{
        height:47,
        width:'100%',
        borderWidth:1,
        borderRadius:25,
        borderColor:'#fff',
        backgroundColor:"#fff",
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    social_img:{
        width:31,
        height:31,
        borderRadius:20,
        marginLeft:15
    }
})