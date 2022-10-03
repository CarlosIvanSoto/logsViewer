import React from "react"
import { View } from 'react-native'
import Home from "./Home"
import LogList from './LogList'
import { Route, Routes, Navigate } from 'react-router-native'
import NavBar from "./NavBar"
import getToken from "../hooks/getToken"

const Main = () => {
    const {token, notification} = getToken()
    return (
        <View style={{flex:1}}>
            <Routes>
                <Route path='/' element={<Navigate to="/home" />}/>
                <Route path='/logs' element={<LogList/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>
            <NavBar/>
        </View>
    )
}

export default Main