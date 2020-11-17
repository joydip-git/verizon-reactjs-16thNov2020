//reactheader --> component
const reactheader = () => {
    //data
    const headerContent = 'Introduction to React JS'

    const reactHeaderDesign = document.createElement('h2');
    reactHeaderDesign.style.fontFamily = 'Segoe UI';
    reactHeaderDesign.style.backgroundColor = 'burlywood'
    reactHeaderDesign.style.border = '2px solid blue'
    reactHeaderDesign.innerHTML = headerContent;

    //design/element of this component
    return reactHeaderDesign;
}
export default reactheader;
/**
 * module.exports={
 *   ['default']:reactheader
 * }
 */