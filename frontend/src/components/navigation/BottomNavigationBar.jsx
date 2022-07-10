import { useLocation } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction } from '../'
import { gridIcon, homeIcon } from '../../assets/img/icons'

const BottomNavigationBar = () => {
    const location = useLocation();

    return (
        <BottomNavigation>
            <BottomNavigationAction
                icon={homeIcon}
                label="Home"
                to="/"
                active={location.pathname === '/'}
            />
            <BottomNavigationAction
                icon={gridIcon}
                label="Categories"
                to="/categories"
                active={location.pathname.includes('/categories')}
            />
        </BottomNavigation>
    )
}

export default BottomNavigationBar