import '../App.css'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className="navBar">
            <h1 className='head'>WebDev Blogs</h1>
            <div className="blogBar"><Link className='link' to='/'>Blogs</Link></div>
            <div className="contactBar"><Link className='link' to='/Contact'>Contact</Link></div>
            <div className="createBar"><Link className='link' to='/Create'>Create Blogs</Link></div>
        </div >
    );
}

export default Nav;