//reactheader --> component
const reactheader = () => {
    //data
    const headerContent = 'Introduction to React JS'
    //HTML element
    const reactHeaderDesign = document.createElement('h2');
    //styles
    reactHeaderDesign.style.fontFamily = 'Segoe UI';
    reactHeaderDesign.style.backgroundColor = 'burlywood'
    reactHeaderDesign.style.border = '2px solid blue'
    //content of the element
    reactHeaderDesign.innerHTML = headerContent;

    //returning design/element of this component
    return reactHeaderDesign;
}
export default reactheader;
/**
 * module.exports={
 *   ['default']:reactheader
 * }
 */