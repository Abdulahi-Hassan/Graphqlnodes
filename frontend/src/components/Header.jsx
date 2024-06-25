import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="menu">
        <Link to='/' className="logo">Logo</Link>
        <ul>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/newposts">NewPosts</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
