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

                    <Link to='/home'>
                        <button className='btn btn-primary'>
                            Home
                        </button>
                    </Link>

                    <Link to='/products'>
                        <button className="btn btn-primary">
                            Products
                        </button>
                    </Link>
                    <Link to="/product/add">
                        <button className="btn btn-primary">
                            Add Product
                        </button>
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
