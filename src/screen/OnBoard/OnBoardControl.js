import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import OnBoard from './OnBoard';
import Home from '../Home/Home';
import Login from '../Authentication/Login/Login';

const OnBoardControl = () => {
    const [showOnBoard, setShowOnBoard] = useState(true);

    const handleOnBoardFinish = () => {
    setShowOnBoard(false);
    }
  return (
    <>
    {showOnBoard &&   <OnBoard handleDone={handleOnBoardFinish}/>}
    {!showOnBoard &&   <Login/>}
    </>
  )
}

export default OnBoardControl

const styles = StyleSheet.create({})