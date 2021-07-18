
import React, { useEffect, useState } from 'react'
import { ImageBackground, Text ,StyleSheet, View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo,setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=ef95a8a6c855642773cd1cd54373a6f6`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp});
                })
            .catch((error) => {
                console.warn(error);
          });
        }
    }, [props.zipCode])
       
       
    

    return( 
        <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}>
            <View style={styles.container}>
                <Text style={styles.innerText}>Zip Code IS {props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        flexDirection:'column',
        alignItems:'center',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
    innerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 23,
        paddingBottom: 15,
        textShadowOffset: {width: 2,height: 2},
        textShadowRadius: 10,
        textShadowColor:'black',
    },
    container: { 
        justifyContent: 'center',
        width: '100%', 
        height: '50%', 
        opacity: 0.5, 
        backgroundColor: '#012',
        alignItems: 'center',
    },

   });