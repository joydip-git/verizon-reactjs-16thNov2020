import React from 'react'
export const ReactDescription = () => {
    //data
    const desciptionContent = `
    React JS is a library.
    It helps you build components.
    It uses Virtual DOM
    `;

    //style
    const divStyle = {
        fontFamily: 'Segoe UI',
        border: '2px solid blue',
        fontSize: 'medium',
        backgroundColor: 'azure',
        margin: '10px',
        borderRadius: '3px'
    }

    //React element
    // const reactDescriptionDesign = React.createElement(
    //     'div',
    //     { id: 'descDiv', style: divStyle },
    //     desciptionContent
    // );
    const reactDescriptionDesign = (
        <div id='descDiv' style={divStyle}>
            {desciptionContent}
        </div>
    );
    //returning React element of this component
    return reactDescriptionDesign;
}