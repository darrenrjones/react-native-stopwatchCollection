
import {connect} from 'react-redux';


export class StopwatchItem extends React.Component {

  render(){

    return(
      <View class="container">

        <h1 class="title">Stopwatch</h1>

        <h1 id="timerLabel">00:00:00</h1>
        <View class="buttoncontainer">
            <button id="startBtn" class="buttons" onclick="start()">start</button>
            <button id="stop" class="buttons" onclick="stop()">stop</button>
            <button id="reset" class="buttons" onclick="reset()">reset</button>
        </View>


      </View>

    );

  }
}

export default connect()(StopwatchItem);