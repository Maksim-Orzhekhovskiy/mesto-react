import logo from "../images/logo.svg"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Фотография Жака-Ива Кусто" className="header__logo"/>
        </header>
    )
}

export default Header;
