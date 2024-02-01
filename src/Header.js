import logo from './logo.svg';
function Header() {
    return (
        <nav className="nav">
            <div className='container nav-flex'>
                <img src={logo} className="App-logo" alt="logo" />
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
            </div>
        </nav>
    )
  }

  export default Header;