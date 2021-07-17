
import React, { useState } from 'react'
import { ImageBackground, Text ,StyleSheet } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo,setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        <ImageBackground source={require('../jisoo.jpg')} style={styles.backdrop}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})