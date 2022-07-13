import "./styles/Header.css"

const Header = ({label}) => {
    return (
        <div className="header">
            <h1 className="header-title text-menu filter-shadow">
                {label}
            </h1>
        </div>
    )
}

export default Header