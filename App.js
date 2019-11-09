/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Dimensions, Button} from 'react-native'
import IJKPlayerView from "react-native-easy-ijkplayer"

const {width, height} = Dimensions.get('window')

export default class App extends Component {
    state={
        showIndicator:true
    }
    _play = () => {
        this.RNTIJKPlayerRef.play()
    }

    _pause = () => {
        this.RNTIJKPlayerRef.pause()
    }

    _stop = () => {
        this.RNTIJKPlayerRef.stop()
    }

    _seekTo =  () => {
        this.RNTIJKPlayerRef.seekTo(60)
    }
    _getDuration =  () => {
        this.RNTIJKPlayerRef.getDuration((err, duration) => {
            console.log(err)
            console.log(duration)
        })
    }

    _getSize = () => {
        this.RNTIJKPlayerRef.getSize((err, size) => {
            console.log(err)
            console.log(size)
        })
    }
    _onPrepared = (event) => {
        this.setState({showIndicator:false})
    }
    _onLoadProgressUpdate = ({nativeEvent: {loadProgress}}) => {
    }

    _onProgressUpdate = ( progress) => {
        console.log('progress in app',progress)
    }

    _onInfo = (info) => {
    }

    _onError = (error) => {
    }

    _onComplete = () => {
    }

    render() {
        const {showIndicator}= this.state
        return (
            <>
                <IJKPlayerView
                    ref={(ref) => this.RNTIJKPlayerRef = ref}
                    options={{
//                         url: "http://192.168.101.109:8089/2.mp4",
                        url:"http://img.elleshop.com.cn/media/product/14994134515891.mp4",
                        // url={"http://192.168.2.225:8089/lalala.mp4"}
                        // url: "http://img.elleshop.com.cn/media/product/14994134515891.mp4",
                        autoPlay: 1,
                    }}
                    showIndicator={showIndicator}
                    onComplete={this._onComplete}
                    onPrepared={this._onPrepared}
                    onError={this._onError}
                    onInfo={this._onInfo}
                    onProgressUpdate={this._onProgressUpdate}
                    onLoadProgressUpdate={this._onLoadProgressUpdate} // only support IOS
                />
                <Button
                    onPress={this._play}
                    title={"start"}
                />
                <Button
                    onPress={this._pause}
                    title={"pause"}
                />
                <Button
                    onPress={this._stop}
                    title={"stop"}
                />
                <Button
                    onPress={this._seekTo}
                    title={"seek"}
                />
                <Button
                    onPress={this._getDuration}
                    title={"get Duration"}
                />
                <Button
                    onPress={this._getSize}
                    title={"get Size"}
                />
            </>
        )
    }
}



