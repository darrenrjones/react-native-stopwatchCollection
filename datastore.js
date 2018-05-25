
export default class Stopwatch{

  constructor(props){
    super(props);

    let db = new Datastore();

    this.db.insert({'dataPoint1': 'one'},
     (err) => {if (err) {Alert.alert(err)}} );
  }





}