import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Drawer, DrawerItem, Nav, BottomNavigationBar } from '../'
import { gridIcon, homeIcon } from '../../assets/img/icons'


const NavContainer = ({children}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.scrollTo(0, 0)
        if(
            location.pathname !== '/' && 
            !location.pathname.includes('categories')
        ) {
            navigate('/');
        }

        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        }
        , false);

        return () => {
            window.removeEventListener('resize', () => {
                setWindowWidth(window.innerWidth);
            }
            , false);
        }
    }, [location.pathname, navigate]);

    return (
        <>
        {windowWidth <= 768 ? 
            children
        :
        <>
        <div className="flex h-100">
            { windowWidth > 768 && (
            <div className="side-bar-width">
                <Drawer
                    isOpen
                    icon={homeIcon}
                    label={`Home`}
                    // secondary="Welcome to the home page"
                >
                    <div className="border-bottom">
                        <DrawerItem 
                            label="Home"
                            icon={homeIcon}
                            to="/"
                            active={location.pathname === '/'}
                        />
                        <DrawerItem 
                            label="Categories" 
                            icon={gridIcon}
                            to={`/categories`}
                            active={location.pathname.includes('/categories')}
                        />
                    </div>
                </Drawer>
            </div>
            )}
            <div className="flex-grow-1 w-100 w-min-0">
                <div className="flex flex-column">
                    <Nav/>
                    <div className="mx-w-2xl mx-auto w-100 pb-5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
        </>
        }
        { windowWidth <= 768 && (
            <BottomNavigationBar />
        )}
        </>
    )
}

export default NavContainer