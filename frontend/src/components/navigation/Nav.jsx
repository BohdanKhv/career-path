import { SearchField } from '../';
import './styles/Nav.css';


const Nav = ({}) => {
    return (
        <>
        <nav className="main-nav">
            <div className="container nav-wrapper">
                <SearchField/>
            </div>
        </nav>
        </>
    )
}

export default Nav