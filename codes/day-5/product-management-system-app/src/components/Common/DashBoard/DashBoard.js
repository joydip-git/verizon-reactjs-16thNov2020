import React from 'react'
import { Link } from 'react-router-dom'

function DashBoard() {
    return (
        <>
            <h1>
                Product Management System
            </h1>
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <Link to='/home' className='btn btn-group'>
                        Home
                    </Link>

                    <Link to='/products' className="btn btn-group">
                        Products
                    </Link>
                    <Link to="/product/add" className="btn btn-group">
                        Add Product
                    </Link>
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
