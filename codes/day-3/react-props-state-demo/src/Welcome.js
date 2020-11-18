//import { Component } from 'react'

/*
class Welcome extends Component {
    render() {
        return <span>Welcome to class component</span>
    }
}
//console.log(Component.prototype)
*/
/**
 * properties={ messageValue:'Welcome to functional component', data:10, show:true, print:()=>{}}
 */
const Welcome = (properties) => {
    //properties.data = properties.data + 10;-->not possible
    //let x = properties.data + 10;-->possible
    const someValue = 100;
    const callPrint = () => {
        properties.print(someValue);
    }
    return (
        <span>
            Message:&nbsp;{properties.messageValue}
            <br />
            Data:&nbsp;{properties.data}
            <br />
            Show?&nbsp;{properties.show.toString()}
            <br />
            <button onClick={callPrint}>Call Print</button>
        </span>
    );
}
export default Welcome;
/**
 * {
 * type:'span',
 * key:null,
 * ref:null,
 * props:{
 *   messageValue:'',
 *   data:10,
 *   show:true,
 *   print:()=>{},
 *   children:[RE1,....,RE13]
 * }
 * }
 */