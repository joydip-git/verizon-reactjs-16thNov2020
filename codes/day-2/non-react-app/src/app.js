//import { reactheader } from "./reactheader";
import reactheader from './reactheader'
import { reactdescription } from './reactdescription'

export const app = () => {
    const headerElement = reactheader();
    const descriptionElement = reactdescription();

    const appDesign = document.createElement('div');
    appDesign.appendChild(headerElement);
    appDesign.appendChild(descriptionElement);

    return appDesign;
}
//export const add = (a, b) => (a + b);
//export default function sub(a, b) { return (a - b) };
//export default app;