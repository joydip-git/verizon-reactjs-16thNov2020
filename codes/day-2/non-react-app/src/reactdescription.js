//reactdescription --> component
export const reactdescription = () => {
    //data
    const desciptionContent = `
    React JS is a library.
    It helps you build components.
    It uses Virtual DOM
    `;

    const reactDescriptionDesign = document.createElement('div');

    reactDescriptionDesign.style.fontFamily = 'Segoe UI';
    reactDescriptionDesign.style.backgroundColor = 'azure'
    reactDescriptionDesign.style.border = '2px solid blue'
    reactDescriptionDesign.style.fontSize = 'medium'
    reactDescriptionDesign.style.margin = '10px';
    reactDescriptionDesign.style.borderRadius='3px';

    reactDescriptionDesign.innerHTML = desciptionContent;

    //design/element of this component
    return reactDescriptionDesign;
}