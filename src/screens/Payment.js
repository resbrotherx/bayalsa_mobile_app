import React, {useContext, useState } from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput,TouchableOpacity,Image, Modal, SafeAreaView } from 'react-native';
import {Card} from "react-native-shadow-cards";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../constants/AuthContext'


const Payment = ({ route, navigation }) => {
  const {userInfo, userInfos, splashLoading} = useContext(AuthContext);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const data = 'Railway Div.Directo'
  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && { color: 'blue' }]}>
  //         Dropdown label
  //       </Text>
  //     );
  //   }
  //   return null;
  // };
  const goback = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={{backgroundColor:"#fff",borderWidth:1,borderColor:"#007ec7"}}>
        <View style={{flexDirection:'row',width:'100%',marginTop:1}} >
                          
                            <Text style={{textAlign:'center',alignItems:"center",justifyContent:"center",marginLeft:'39%', fontSize:24,fontFamily:'OpenSans-Medium',color:"#000",fontWeight:"bold"}} >Profile </Text>
                        
                        
                        <TouchableOpacity onPress={()=>alert("Loading Settings.....")} style={{ marginBottom:0}} >
                        <Image style={{fontFamily:'OpenSans-Medium',marginLeft:'48%', width:40,height:40,fontWeight:"bold"}}  source={require('../assets/images/settings.png')} />
                           
                        </TouchableOpacity>

                       
                    </View>
    <Card style={{width:"100%",marginTop:20}}>
    <View style={{flexDirection:'row',width:'100%',marginTop:1}} >
                        <TouchableOpacity onPress={()=>navigation.navigate("Paymentform")} style={[styles.social_btn,{backgroundColor:"#fff",width:200,marginBottom:25,borderColor:'green'}]} >
                            
                            <Text style={{width:'80%',textAlign:'center',fontSize:17,fontFamily:'OpenSans-Medium',color:"#000",fontWeight:"bold"}} >Check Grade </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={()=>alert("Downloading.....")} style={[styles.social_btn,{backgroundColor:"green",width:200,marginBottom:0,borderColor:'#007ec7'}]} >
                            
                            <Text style={{width:'80%',textAlign:'center',fontSize:17,fontFamily:'OpenSans-Medium',color:"#fff",fontWeight:"bold"}} >Download Payslip  </Text>
                        </TouchableOpacity>

                       
                    </View>


    {/* <Text style={{color:'#000',fontSize:18,fontWeight:'bold',marginLeft:5}}>Customer Info</Text> */}
    <Text style={{color:'#000',fontSize:16,fontWeight:'bold',marginLeft:5}}>BIO-DATA</Text>
    <View style={styles.container}>
      <Text style={[styles.label,{ color: '#aeaeae',marginLeft:48,marginTop:-4 }]}>
          First Name
        </Text>
        
      <TextInput
        style={[styles.dropdown, isFocus && { borderColor: '#007ec7'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        value='Patrick Francis'
        editable={false}
        selectTextOnFocus={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <AntDesign
            style={[styles.icon,{backgroundColor:"green",marginTop:-43,
            marginLeft:14,textAlign:"center", borderRadius:8,padding:6,width:30}]}
            color={isFocus ? '#fff' : '#fff'}
            background={"#007ec7"}
            name="user"
            size={15}
          />
    </View>
    <View style={styles.container}>
      <Text style={[styles.label,{ color: '#aeaeae',marginLeft:48,marginTop:-4 }]}>
          Surname
        </Text>
        
      <TextInput
        style={[styles.dropdown, isFocus && { borderColor: '#007ec7'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        value='Prince'
        editable={false}
        selectTextOnFocus={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <AntDesign
            style={[styles.icon,{backgroundColor:"green",marginTop:-43,
            marginLeft:14,textAlign:"center", borderRadius:8,padding:6,width:30}]}
            color={isFocus ? '#fff' : '#fff'}
            background={"#007ec7"}
            name="user"
            size={15}
          />
    </View>
    <View style={styles.container}>
      <Text style={[styles.label,{ color: '#aeaeae',marginLeft:48,marginTop:-4 }]}>
          Contact
        </Text>
        
      <TextInput
        style={[styles.dropdown, isFocus && { borderColor: '#007ec7'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        value="080923634"
        editable={false}
        selectTextOnFocus={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <AntDesign
            style={[styles.icon,{backgroundColor:"green",marginTop:-43,
            marginLeft:14,textAlign:"center", borderRadius:8,padding:6,width:30}]}
            color={isFocus ? '#fff' : '#fff'}
            background={"#007ec7"}
            name="phone"
            size={15}
          />
    </View>


    <Text style={{color:'#000',fontSize:16,fontWeight:'bold',marginLeft:5}}>CAREER DATA</Text>
    <View style={styles.container}>
      <Text style={[styles.label,{ color: '#aeaeae',marginLeft:48,marginTop:-4 }]}>
          First Appointment Date
        </Text>
        
      <TextInput
        style={[styles.dropdown, isFocus && { borderColor: '#007ec7'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        value="apr-15-1997"
        editable={false}
        selectTextOnFocus={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <AntDesign
            style={[styles.icon,{backgroundColor:"green",marginTop:-43,
            marginLeft:14,textAlign:"center", borderRadius:8,padding:6,width:30}]}
            color={isFocus ? '#fff' : '#fff'}
            background={"#007ec7"}
            name="user"
            size={15}
          />
    </View>
    <View style={styles.container}>
      <Text style={[styles.label,{ color: '#aeaeae',marginLeft:48,marginTop:-4 }]}>
      First Appointment Grade
        </Text>
        
      <TextInput
        style={[styles.dropdown, isFocus && { borderColor: '#007ec7'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        value="S G L"
        placeholder="useless placeholder"
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <AntDesign
            style={[styles.icon,{backgroundColor:"green",marginTop:-43,
            marginLeft:14,textAlign:"center", borderRadius:8,padding:6,width:30}]}
            color={isFocus ? '#fff' : '#fff'}
            background={"#007ec7"}
            name="user"
            size={15}
          />
    </View>
    <View style={styles.container}>
      <Text style={[styles.label,{ color: '#aeaeae',marginLeft:48,marginTop:-4 }]}>
      First Appointment Rank
        </Text>
        
      <TextInput
        style={[styles.dropdown, isFocus && { borderColor: '#007ec7'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        value="890"
        placeholder="useless placeholder"
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <AntDesign
            style={[styles.icon,{backgroundColor:"green",marginTop:-43,
            marginLeft:14,textAlign:"center", borderRadius:8,padding:6,width:30}]}
            color={isFocus ? '#fff' : '#fff'}
            background={"#007ec7"}
            name="phone"
            size={15}
          />
    </View>


    <Text style={{color:'#000',fontSize:16,fontWeight:'bold',marginLeft:5}}>ACADEMIC DATA</Text>
    <View style={styles.container}>
      <Text style={[styles.label,{ color: '#aeaeae',marginLeft:48,marginTop:-4 }]}>
      First Appointment Qualification
        </Text>
        
      <TextInput
        style={[styles.dropdown, isFocus && { borderColor: '#007ec7'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        value=""
        placeholder="useless placeholder"
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <AntDesign
            style={[styles.icon,{backgroundColor:"green",marginTop:-43,
            marginLeft:14,textAlign:"center", borderRadius:8,padding:6,width:30}]}
            color={isFocus ? '#fff' : '#fff'}
            background={"#007ec7"}
            name="user"
            size={15}
          />
    </View>
    <View style={styles.container}>
      <Text style={[styles.label,{ color: '#aeaeae',marginLeft:48,marginTop:-4 }]}>
          Highest Qualification
        </Text>
        
      <TextInput
        style={[styles.dropdown, isFocus && { borderColor: '#007ec7'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        value='908'
        placeholder="useless placeholder"
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <AntDesign
            style={[styles.icon,{backgroundColor:"green",marginTop:-43,
            marginLeft:14,textAlign:"center", borderRadius:8,padding:6,width:30}]}
            color={isFocus ? '#fff' : '#fff'}
            background={"#007ec7"}
            name="user"
            size={15}
          />
    </View>
    <View style={styles.container}>
      <Text style={[styles.label,{ color: '#aeaeae',marginLeft:48,marginTop:-4 }]}>
      Conversation Rank
        </Text>
        
      <TextInput
        style={[styles.dropdown, isFocus && { borderColor: '#007ec7'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        value=''
        placeholder="useless placeholder"
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <AntDesign
            style={[styles.icon,{backgroundColor:"green",marginTop:-43,
            marginLeft:14,textAlign:"center", borderRadius:8,padding:6,width:30}]}
            color={isFocus ? '#fff' : '#fff'}
            background={"#007ec7"}
            name="phone"
            size={15}
          />
    </View>
    </Card>
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    
  },
  dropdown: {
    height: 60,
    borderColor: 'gray',
    backgroundColor:'#f6f6f6',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 17,
    paddingLeft:60,
    color:"#1b1b1b",
    // left:10,
    
  },
  icon: {
    
  },
  label: {
    position: 'absolute',
    backgroundColor: '#f6f6f6',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  social_btn:{
    height:47,
    borderWidth:1,
    borderRadius:25,
    borderColor:'#fff',
    backgroundColor:"#fff",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginLeft: 3,
    marginBottom:20
},
  iconStyle: {
    width: 20,
    height: 20,
    color:"#fff",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  modalContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0, .6)',
  },
  modalView:{
    flex:1,
    backgroundColor:"white",
    borderRadius:20,
    margin:20,
    padding:20,
    alignItems:'center',
  },
  title:{
    marginBottom:20,
    color:'dodgerblue',
    fontWeight:'bold',
    textWeight:'bold',
    textAlign:'center',
    fontSize:18,
  },
  checkboxContainer:{
    flexDirection:'row',
    marginVertical:30,
    alignItems:'center',
  },
  checkbox:{
    width:30,
    height:30,
    marginRight:20,
  },
    continueButton:{
      marginTop:20,
      padding:20,
      borderRadius:18,
  },
});