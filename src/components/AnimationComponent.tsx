import React from 'react';
import LottieView from 'lottie-react-native';

export default function AnimationComponent(props) {
  const {width, height, marginBottom} = props;
  return (
    <>
      <LottieView
        style={{width: width, height: height, marginBottom: marginBottom}}
        source={require('../assets/mov.json')}
        autoPlay
        loop={false}
      />
    </>
  );
}
