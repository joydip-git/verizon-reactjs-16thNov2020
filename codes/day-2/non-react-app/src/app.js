//import { reactheader } from "./reactheader";
import reactheader from './reactheader'
import { reactdescription } from './reactdescription'

export const app = () => {
    const headerElement = reactheader();
    const descriptionElement = reactdescription();
    
    //HTML element
    const appDesign = document.createElement('div');
    //content
    appDesign.appendChild(headerElement);
    appDesign.appendChild(descriptionElement);
    
    //returning complete app design/element from this component
    return appDesign;
}
//export const add = (a, b) => (a + b);
//export default function sub(a, b) { return (a - b) };
//export default app;