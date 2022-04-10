import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import OnBoard from './OnBoard';
import Home from '../Home/Home';

const OnBoardControl = () => {
    const [showOnBoard, setShowOnBoard] = useState(true);

    const handleOnBoardFinish = () => {
    setShowOnBoard(false);
    }
  return (
    <>
    {showOnBoard &&   <OnBoard handleDone={handleOnBoardFinish}/>}
    {!showOnBoard &&   <Home/>}
    </>
  )
}

export default OnBoardControl

const styles = StyleSheet.create({})