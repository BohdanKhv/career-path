import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { closeIcon } from '../../../assets/img/icons'
import { IconButton } from '../../'
import './styles/Drawer.css'

const Drawer = ({children, side, icon, label, secondary, isOpen, setIsOpen}) => {
    const navigate = useNavigate()

    const handleResize = () => {
        setIsOpen && setIsOpen(window.innerWidth > 768)
    }

    useEffect(() => {
        setIsOpen && window.addEventListener('resize', handleResize)

        return () => {
            setIsOpen && window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div
            className={`drawer${side ? ` drawer-${side}`: ' drawer-left'}${isOpen ? ' drawer-open' : ''}`}
        >
            <div>
                {(icon || label) &&
                    <div className="drawer-header">
                        {icon && 
                        <div 
                            onClick={() => {
                                if(document.querySelector('.close-drawer') && window.innerWidth < 768) {
                                    document.querySelector('.close-drawer').click();
                                }
                                navigate('/')
                            }} 
                            className="drawer-header-icon">{icon}</div>
                        }
                        {label && 
                        <div className={`drawer-header-label${secondary ? '' : ' fs-3'}`}>
                            {label} 
                            {secondary &&
                                <div className="drawer-header-secondary">
                                    {secondary}
                                </div>
                            }
                        </div>}
                        {(window.innerWidth < 768 && isOpen) &&
                            <div className="flex align-center">
                                <IconButton
                                    icon={closeIcon}
                                    color="secondary"
                                    size="sm"
                                    onClick={() => setIsOpen(false)}
                                />
                            </div>
                        }
                    </div>
                }
                {children}
            </div>
        </div>
    )
}

export default Drawer