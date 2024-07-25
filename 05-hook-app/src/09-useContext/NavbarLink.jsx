import { NavLink } from "react-router-dom";

export const NavbarLink = ({ route, title }) => {
  return (
    <NavLink
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      to={route}
    >
      {title}
    </NavLink>
  );
};
