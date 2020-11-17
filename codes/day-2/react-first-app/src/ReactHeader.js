import React from 'react'

export const ReactHeader = () => {
    const headerContent = 'Introduction to React JS Library'

    //style object
    const headerStyle = {
        fontFamily: 'Segoe UI',
        backgroundColor: 'burlywood',
        border: '2px solid blue'
    }
    //React element
    //<h2>content</h2>
    // const reactHeaderDesign = React.createElement(
    //     'h2',
    //     { id: 'headerH2', style: headerStyle },
    //     headerContent
    // );

    const reactHeaderDesign = (
        <h2 id='headerH2' style={headerStyle}>
            {headerContent}           
        </h2>
    );

    //returning React element of this component
    return reactHeaderDesign;
}

// React.createElement('tr')
// React.createElement('tbody')

// React.createElement('table')

//let design = <table><thead><tr><td></td><td></td></tr></thead></table>