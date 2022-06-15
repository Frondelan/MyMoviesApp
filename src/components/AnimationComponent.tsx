import React from 'react';
import LottieView from 'lottie-react-native';

interface Props {
  imgName: string;
  width: number;
  height: number;
  marginBottom?: number;
  marginTop?: number;
}

export default function AnimationComponent(props: Props) {
  const {imgName, width, height, marginBottom, marginTop} = props;

  function AnimationSelector() {
    let dinamicPath;

    switch (imgName) {
      case 'loading':
        dinamicPath = require('../assets/loading.json');
        break;
      case 'mov':
        dinamicPath = require('../assets/mov.json');
        break;
      default:
        break;
    }
    return (
      <LottieView
        style={{
          width: width,
          height: height,
          marginBottom: marginBottom,
          marginTop: marginTop,
        }}
        source={dinamicPath}
        autoPlay
        loop={false}
      />
    );
  }

  return (
    <>
      <AnimationSelector />
    </>
  );
}
