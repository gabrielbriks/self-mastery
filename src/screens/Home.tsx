import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, TouchableOpacity} from 'react-native';
import Svg, { Text as TextSvg } from "react-native-svg";
import { NavigationStackProp } from 'react-navigation-stack';
import { theme } from '../styles/theme';

export function Home() {

  const navigation = useNavigation<any>();

  async function handleMedo() {
    navigation.navigate('Medo');
  }

  async function handleTristeza() {
    navigation.navigate('Tristeza');
  }

  async function handleSaudade() {
    navigation.navigate('Saudade');
  }

  async function handleVergonha() {
    navigation.navigate('Vergonha');
  }
  



  return (
    <View style={styles.container} >
    <Text style={styles.titleHeader}>Self-Mastery</Text>
      <ScrollView style={styles.ScrollViewContent} showsVerticalScrollIndicator={false}>
        
         
          <View style={styles.containerBgCard}>            
            <Image 
              style={styles.stretch} 
              source={require('../images/medo-removebg-preview.png')}
            />

            <TouchableOpacity onPress={handleMedo}>
              <View style={styles.cardEmotionMedo}>
                <Text style={styles.textCard}>Medo</Text>
              </View>
            </TouchableOpacity >
          </View>
        
        <View style={styles.containerBgCard}>
          <Image 
            style={styles.stretch} 
            source={require('../images/tristeza-removebg-preview.png')} 
          />
          
          <TouchableOpacity onPress={handleTristeza}>
            <View style={styles.cardEmotionTristeza}>
              <Text style={styles.textCard}>Tristeza</Text>
            </View>
          </TouchableOpacity >
        </View>

        <View style={styles.containerBgCard}>
          <Image 
            style={styles.stretch} 
            source={require('../images/saudade-removebg-preview.png')} 
          />

          <TouchableOpacity onPress={handleSaudade}>
            <View style={styles.cardEmotionSaudade}>
              <Text style={styles.textCard}>Saudade</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerBgCard}>
          <Image 
            style={styles.stretch} 
            source={require('../images/vergonha-removebg-preview.png')} 
          />
          <TouchableOpacity onPress={handleVergonha}>
            <View style={styles.cardEmotionVergonha}>
              <Text style={styles.textCard}>Vergonha</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleHeader:{
    color: '#FF9900',
    textShadowColor: "#000",
    textShadowOffset: {
      width: 1,
      height: 1 ,
    },
    shadowOpacity: 0.20,
    textShadowRadius: 1.41,
    
    elevation: 3,
    fontFamily: theme.fonts.chewyRegular,
    fontSize: 28,
    marginTop: 38
  },
 
  container: {
    flex: 1,
    backgroundColor: '#eff9f8',
    alignItems: 'center',
   

  },
  ScrollViewContent: {
    flex: 1,
    textAlign: 'justify',
    marginTop: 25
  },
  containerBgCard: {
     flex: 1,
     maxWidth: 600,
     maxHeight: 180,
     padding: 10,
     marginBottom: 35,
     flexDirection: 'column',
     flexWrap: 'wrap',
  },
  cardEmotionMedo: {
    backgroundColor: '#e83b32',
    width: 263.95,
    height: 153,
    borderRadius: 12,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 25,
    // marginTop: 28,
    position: 'relative'
  },
  cardEmotionTristeza: {
    backgroundColor: '#1f2eb2',
    width: 263.95,
    height: 153,
    borderRadius: 12,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 25,
  },
  cardEmotionSaudade: {
    backgroundColor: '#b845ff',
    width: 263.95,
    height: 153,
    borderRadius: 12,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 25,
  },
  cardEmotionVergonha: {
    backgroundColor: '#f09552',
    width: 263.95,
    height: 153,
    borderRadius: 12,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 25,
  },
  textCard:{
    flex: 1,
    fontFamily: theme.fonts.chewyRegular,
    color: '#fff',
    fontSize: 38,
    textAlign: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: 50,
    marginLeft: 25,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
  },
  stretch: {
    width: 96,
    height: 122,
    marginTop: 65,
    position: 'absolute',
    zIndex:1
    
  },
});