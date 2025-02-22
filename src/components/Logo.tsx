import { Link } from "react-router-dom"
import logo from "/assets/logo.svg";

const Logo = () => {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      <img src={logo} alt="Logo" style={{ height: 40 }} />
    </Link>
  )
}

export default Logo
