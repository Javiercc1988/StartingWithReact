import { Link, NavLink } from "react-router-dom";
import { NavbarLink } from "./NavbarLink";

export const Navbar = () => {
  const routes = [
    {
      id: 1,
      route: "/",
      title: "Home",
    },
    {
      id: 2,
      route: "login",
      title: "Login",
    },
    {
      id: 3,
      route: "about",
      title: "About",
    },
  ];
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary rounded-3"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            UseContext
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {routes.map((route) => {
                console.log(route);
                return <NavbarLink key={route.id} route={route.route} title={route.title} />;
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
