import React, { useEffect, useState } from "react";
// import apiClient from "../auth/auth";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "../styles/NavBar.module.scss";
import { useHistory, useParams, Link } from "react-router-dom";
import SpotifyLogin from "./SpotifyLogin";
import logo from '../logo.png';
// import logo from '../spotifinderlogo.png';

function NavBar({ user, setUser }) {
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });


    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };
    
    // handle logout component
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        //   window.localStorage.removeItem("token");
          history.push(`/`);
        }
      });
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.logo} >
                    <img className={classes.logo} src={logo} />
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    {
                    !user || user?.id === null ?
                    <>
                    <ul>
                        <li>
                            <Link to="/login" onClick={menuToggleHandler} >Log In</Link>
                        </li>
                        <li>
                            <Link to="/signup" onClick={menuToggleHandler}>Sign Up!</Link>
                        </li>
                    </ul>
                    </>
                    : (user?.id && user?.spotify_id === null) ?
                    <>
                    <ul>
                        <li>
                            <a href="/spotify/login" onClick={menuToggleHandler}>Link Spotify</a>
                        </li>
                        <li>
                            <Link to="/#" onClick={handleLogoutClick}>Logout</Link>
                        </li>
                    </ul>
                    </>
                    :
                    <ul>
                        <li>
                            <Link to="/browse" onClick={menuToggleHandler}>Browse</Link>
                        </li>
                        <li>
                            <Link to="/profile" onClick={menuToggleHandler}>{user.name} </Link>
                        </li>
                        <li>
                            <Link to="/#" onClick={handleLogoutClick}>Logout</Link>
                        </li>
                    </ul>
                    }
                    {user?.image ? 
                    <>
                    <img src={user.image} className={classes.header__content_img}></img>
                    </>
                    : null}
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default NavBar;
