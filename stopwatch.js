import React from 'react';
import StopwatchItem from './stopwatchItem';


export default class Stopwatch extends React.Component{

  render(){
    return(
      <View>
        <Text>Hello World!</Text>
        <StopwatchItem />
      </View>
    );
  }
}