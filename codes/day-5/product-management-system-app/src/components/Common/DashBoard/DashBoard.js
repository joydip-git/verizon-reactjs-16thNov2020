import React from 'react'

function DashBoard() {
    return (
        <>
            <h1>
                Product Management System
            </h1>
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <a href='#' className='btn btn-group'>
                        Home
                    </a>

                    <a href='#' className="btn btn-group">
                        Products
                    </a>
                    <a href="#" className="btn btn-group">
                        Add Product
                    </a>
                </div>
            </nav>
        </>
    )
}

export default DashBoard
/*
class Frag extends Component {
    render() {
        return this.props.children;
    }
}
*/
