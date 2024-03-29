import {Button, Alert, StyleSheet, Text, View,KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React ,  { useEffect, useState } from 'react'
// import colors from '../../../assets/colors/colors';
import { useForm, Controller } from "react-hook-form";
// import email from "../LogInScreen/LogInScreen"
import { getAuth } from 'firebase/auth';
import {Picker} from '@react-native-picker/picker';

const OrderForm =()=> {
    // const {item} = route.params;
    const [selectedLanguage, setSelectedLanguage] = useState();
    const auth = getAuth();
     const { control, handleSubmit, formState: { errors } } = useForm({
 
  });

  
  
  // console.log(auth.currentUser.email)
 
const category = selectedLanguage;
const email = auth.currentUser.email;
// const price = item?.price;
// const destination = item?.destination;
console.log(email)


 const onSubmit = data => {
       data.email = email;
       data.category = category;
    //    data.price = price;
    //   data.destinationName = destination;
       fetch("https://fast-shelf-30203.herokuapp.com/jobs",{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data),            
        })
        .then( res => res.json())
        .then(result => console.log(result))
        alert('added')
     
     
     console.log(data)};
    // const handleOrder = (data, event) =>{
    //     data.price = price;
    //     data.packageName = name;

    //       fetch("https://stormy-woodland-20048.herokuapp.com/confirmOrder",{
    //         method: "POST",
    //         headers: {"content-type": "application/json"},
    //         body: JSON.stringify(data),            
    //     })
    //     .then( res => res.json())
    //     .then(result => console.log(result))
    //     console.log(data);

    // }

  return (
      <>
    <View style={styles.orderDetails}>
      <Text style={styles.orderText}>Submit Your Task</Text>
      {/* <Text style={styles.orderInfo}>{item.name}</Text>
      <Text style={styles.orderInfo}>${item.price}</Text> */}
    </View>
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
       <View style={styles.inputContainer}>
        <View>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Task Name"
          />
        )}
        name="taskName"
      />
      {errors.Name && <Text>This is required.</Text>}
      

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Task Details"
          />
        )}
        name="taskDetails"
      />
      <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Graphic Design" value="Graphic Design" />
  <Picker.Item label="Logo Design" value="Logo Design" />
</Picker>
      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Phone Number"
          />
        )}
        name="phoneNumber"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
     
        
       </View>
      


    </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
    orderDetails:{
        marginTop: 70,
        marginHorizontal: 40,
        
    },
    orderText:{
        fontSize: 30,
        // color: colors.black,
    },
    orderInfo:{
        fontSize: 20,
        // color: colors.orange,
    },
       inputContainer:{
        width: '80%'

    },
       container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
input:{
 backgroundColor: 'white',
 padding: 10,
 borderRadius: 10,
 marginTop: 5,
},
buttonContainer:{
  width: '60%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 40,
},
button:{
  width: '100%',
  backgroundColor: '#0782F9',
  padding: 15,
  borderRadius: 10,
  alignItems:'center',

},
buttonOutline:{
  backgroundColor: 'white',
  marginTop: 5,
  borderColor:'#0782F9',
  borderWidth: 2,
},
buttonText:{
 color: 'white',
 fontWeight: '700',
 fontSize: 16,
},
buttonOutlineText:{
 color: '#0782F9',
 fontWeight: '700',
 fontSize: 16,
},
})

export default OrderForm;