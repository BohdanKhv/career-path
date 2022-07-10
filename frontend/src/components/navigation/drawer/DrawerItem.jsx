import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '../../'
import './styles/DrawerItem.css'

const DrawerItem = ({children, label, icon, to, isTitle, size, droppable, isOpen, count, image, active }) => {
    const [open, setOpen] = useState(isOpen ? isOpen : false)

    const closeDrawer = () => {
        if (document.querySelector('.close-drawer') && window.innerWidth < 768) document.querySelector('.close-drawer').click();
    }

    return (
        <>
        {!droppable ? 
            isTitle ?
                <div 
                to={to || '/'} 
                className={`drawer-item${icon || image ? ' drawer-has-icon' : ''} drawer-item-title${size ? ` drawer-item-title-${size}` : ''}${active ? ' drawer-item-active' : ''}`}
                >
                    { icon && !image ? <span className="drawer-item-icon">{icon}</span> : null }
                    { !icon && image ? <div className="drawer-item-img"><Avatar image={image} size="sm" name={label} /></div> : null }
                    <span className="drawer-item-label">
                        {label}
                    </span>
                </div>
            :
                <Link 
                    to={to || '/'} 
                    className={`drawer-item${icon || image ? ' drawer-has-icon' : ''}${active ? ' drawer-item-active' : ''}`}
                    onClick={closeDrawer}
                >
                    { icon && !image ? <span className="drawer-item-icon">{icon}</span> : null }
                    { !icon && image ? <div className="drawer-item-img"><Avatar image={image} size="sm" name={label} /></div> : null }
                    <span className="drawer-item-label">
                        {label}
                    </span>
                    {count ? <div className="drawer-item-count">{count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div> : null}
                </Link>
        :
            <div className={open ? 'drawer-item-open' : undefined }>
                <div 
                    className={`drawer-item drawer-droppable-item${icon || image ? ' drawer-has-icon' : ''}${isTitle ? ' drawer-item-title' : ''}`}
                    onClick={() => setOpen(!open)}
                >
                    { icon && !image ? <span className="drawer-item-icon">{icon}</span> : null }
                    { !icon && image ? <div className="drawer-item-img"><Avatar image={image} size="sm" name={label} /></div> : null }
                    <span className="drawer-item-label">
                        {label}
                    </span>
                    <div className="drawer-item-drop">{droppable}</div> 
                </div>
                {open ?
                    <div className="drawer-item-children">
                        {children}
                    </div>
                : null}
            </div>
        }
        </>
    )
}

export default DrawerItem