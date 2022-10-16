import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Button, Pressable, StyleSheet} from 'react-native';

const useTimer = () => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  const interval = useRef<number | null>(null);
  const stopTimer = () => clearInterval(interval.current as number);
  const resetTimer = () => {
    stopTimer();
    setSecondsElapsed(0);
  };

  useEffect(() => {
    interval.current = setInterval(() => {
      setSecondsElapsed(seconds => seconds + 1);
    }, 1000);

    return stopTimer;
  }, []);

  return [secondsElapsed, stopTimer, resetTimer] as [
    number,
    () => void,
    () => void,
  ];
};

const Timer = () => {
  const [secondsElapsed, stopTimer, resetTimer] = useTimer();

  return (
    <View>
      <Text>Seconds elapsed are {secondsElapsed}</Text>
      <Pressable onPress={() => stopTimer()} style={styles.btn}>
        <Text style={styles.btnText}>Stop Timer</Text>
      </Pressable>
      {/* <Button title="Stop Timer" onPress={() => stopTimer()} /> */}
      <Button title="Reset Timer" onPress={() => resetTimer()} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
  },
});

export default Timer;
