//reactdescription --> component
export const reactdescription = () => {
    //data
    const desciptionContent = `
    React JS is a library.
    It helps you build components.
    It uses Virtual DOM
    `;
    //HTML element
    const reactDescriptionDesign = document.createElement('div');
    //styles
    reactDescriptionDesign.style.fontFamily = 'Segoe UI';
    reactDescriptionDesign.style.backgroundColor = 'azure'
    reactDescriptionDesign.style.border = '2px solid blue'
    reactDescriptionDesign.style.fontSize = 'medium'
    reactDescriptionDesign.style.margin = '10px';
    reactDescriptionDesign.style.borderRadius='3px';
    //content
    reactDescriptionDesign.innerHTML = desciptionContent;

    //returning design/element of this component
    return reactDescriptionDesign;
}