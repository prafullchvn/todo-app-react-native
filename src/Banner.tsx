import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';

const Banner = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.pixabay.com/photo/2022/08/15/09/14/koyasan-temple-7387445_1280.jpg',
      }}
      style={[styles.topHalf, styles.flexCenter]}
      imageStyle={styles.img}>
      <Text style={styles.imageText}>Todos</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 50,
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topHalf: {
    height: '30%',
    width: '100%',
    display: 'flex',
  },
  imageText: {
    color: 'white',
    fontSize: 64,
  },
  img: {width: '100%', height: '100%'},
});

export default Banner;
