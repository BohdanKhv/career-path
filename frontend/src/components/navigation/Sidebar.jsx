import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { homeIcon, jobIcon, hatIcon, homeFillIcon, jobFillIcon, hatFillIcon, logoIcon } from '../../assets/img/icons'
import "./styles/Sidebar.css"


const Sidebar = () => {
  const location = useLocation()

  return (
    <div className="sidebar side-bar-width">
      <div className="flex flex-col justify-between flex-grow-1">
        <div className="sidebar-top">
          <NavLink to="/about" className="logo">
            <span className="filter-shadow">
              {logoIcon}
            </span>
            <p className="mt-4 pb-2 bold">
              Pathify
            </p>
          </NavLink>
          <NavLink to="/" className="sidebar-item">
              {location.pathname === "/" ? homeFillIcon : homeIcon}
            <span>Home</span>
          </NavLink>
          <NavLink to="/jobs" className="sidebar-item">
            {location.pathname === "/jobs" ? jobFillIcon : jobIcon}
            <span>Jobs</span>
          </NavLink>
          <NavLink to="/education" className="sidebar-item">
            {location.pathname === "/education" ? hatFillIcon : hatIcon}
            <span>Education</span>
          </NavLink>
        </div>
        <div className="sidebar-footer">
          <p className="text-center bold">
            © 2020 Pathify
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar