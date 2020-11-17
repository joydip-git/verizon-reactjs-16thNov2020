import { ReactHeader } from './ReactHeader'
import { ReactDescription } from './ReactDescription'
import React from 'react'

const App = () => {
    // const headerElement = ReactHeader();
    // const descriptionElement = ReactDescription();

    //React element
    // const appDesign = React.createElement(
    //     'div',
    //     { id: 'appDiv' },
    //     [headerElement, descriptionElement]
    // );

    // const appDesign = (
    //     <div>
    //         {headerElement}
    //         <br />
    //         {descriptionElement}
    //     </div>
    // );
    const appDesign = (
        <div>
            <ReactHeader />
            <br />
            <ReactDescription />
        </div>
    )
    //returning complete app design (series of React element nested inside the App element) from this component
    return appDesign;
}
export default App;