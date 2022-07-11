import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import { homeIcon, gridIcon } from '../../assets/img/icons'
import "./styles/Sidebar.css"


const Sidebar = () => {

  return (
    <div className="sidebar side-bar-width">
      <div className="flex flex-col justify-between flex-grow-1">
        <div className="sidebar-top">
          <NavLink to="/about" className="logo">
            {/* {logo} */}
            <p className="mt-4 pb-2">
              Logo
            </p>
          </NavLink>
          <NavLink to="/" className="sidebar-item">
            {homeIcon}
            <span>Home</span>
          </NavLink>
          <NavLink to="/categories" className="sidebar-item">
            {gridIcon}
            <span>Categories</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar