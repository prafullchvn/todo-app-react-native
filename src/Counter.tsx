import React, {useState} from 'react';
import {Button} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Button
      title={`clicked ${count} times`}
      onPress={() => setCount(oldCount => oldCount + 1)}
    />
  );
};

export default Counter;
