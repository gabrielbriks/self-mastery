import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { theme } from '../styles/theme';

type statusPlayear = {
  isPlaying: boolean;
}

export function Vergonha() {
  
  const navigation = useNavigation();
  const video = useRef<any | null>();
  const [status, setStatus] = useState<statusPlayear | any | {}>({});

  return (
    <View style={styles.container} >
      <ScrollView style={styles.scrollViewContent} >

        <View style={styles.cardEmotion}>
          <Image 
            style={styles.stretch}
            source={require('../images/vergonha-removebg-preview.png')} 
          />  
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.textTitle}> Vergonha </Text>

          <Text style={styles.textDescriptionTitle}> Significado </Text>

          <Text style={styles.textDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>

          <Text style={styles.textDescriptionTitle}> Assista o Video </Text>

          <View style={styles.containerPlayer}>
            <Video
              ref={video}
              style={styles.video}
              source={{
                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={status => setStatus(status)}
            />
            <View style={styles.buttonPlayer}>
              <Button
                title={status.isPlaying ? 'Pause' : 'Play'}
                onPress={() =>
                  status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                }
                color={'#f09552'}
              />
            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  scrollViewContent: {
    flex: 1,
    backgroundColor: '#eff9f8'
  },
  
  cardEmotion: {
    // flex: 1,
    backgroundColor: '#f09552',
    maxWidth: 2040,
    maxHeight: 500,
    minHeight: 280,
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerDescription: {
    margin: 10
  },
 
  textTitle:{
    fontFamily: theme.fonts.chewyRegular,
    color: '#000',
    fontSize: 38,
    textAlign: 'center',
    marginTop: 50,
    marginLeft: 15
    
  },
  textDescription:{
    fontFamily: theme.fonts.robotoRegular,
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    margin: 15
  },
  textDescriptionTitle:{
    fontFamily: theme.fonts.robotoBold,
    fontWeight: '700',
    color: '#000',
    fontSize: 20,
    textAlign: 'left',
    marginTop: 50,
    marginLeft: 10,
  },
  stretch: {
    width: 100,
    height: 132,
    // marginTop: 65,
    // position: 'absolute',
    // zIndex:1
    
  },

  containerPlayer: {
    // flex: 1,
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 50,
    // backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
    maxHeight: 520,
    maxWidth: 400,
  },
  buttonPlayer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});