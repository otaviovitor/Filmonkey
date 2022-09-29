import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { HiMenu } from "react-icons/hi";

import "../style/components/navbar.sass";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(!open);

  const closeMenu = () => setOpen(false);

  console.log(open);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className={`navbar ${open ? "active" : "inactive"}`}>
      <div className="nav-container">
        <h2>
          <Link onClick={(e) => closeMenu()} to="/">
            {" "}
            FILMONKEY{" "}
          </Link>
        </h2>
        <HiMenu className="icon" onClick={openMenu} />
      </div>
      <div className={`nav ${open ? "active" : "inactive"}`}>
        <div className="navigation">
          <Link onClick={(e) => closeMenu()} to="/">
            INÍCIO
          </Link>
          <Link onClick={(e) => closeMenu()} to="#">
            FILMES
          </Link>
          <Link onClick={(e) => closeMenu()} to="#">
            SÉRIES
          </Link>
          <Link onClick={(e) => closeMenu()} to="#">
            MINHA LISTA
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque um filme"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button onClick={(e) => closeMenu()} type="submit">
            <GoSearch />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
