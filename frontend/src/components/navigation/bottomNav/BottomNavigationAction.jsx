import { useNavigate } from 'react-router-dom'
import './styles/BottomNavigationAction.css'


const BottomNavigationAction = ({
    icon,
    label,
    to,
    active,
}) => {
    const navigate = useNavigate();

    return (
        <div
            className={`bottom-navigation-action ${active ? ' bottom-navigation-action-active' : ''}`}
            onClick={() => {
                navigate(to);
            }}
        >
            {icon &&
                <div className="bottom-navigation-action-icon">
                    {icon}
                </div>
            }
            <div className="bottom-navigation-action-label">
                {label}
            </div>
        </div>
    )
}

export default BottomNavigationAction