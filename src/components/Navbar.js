import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
// import { ImBlog } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import myImg from "../Assets/my_photo-min.jpg";
import {
  NAV_LINKS_ARY,
  ICON_BREAKPOINT_WIDTH,
  PROFESSIONAL_TITLE,
  GITHUB_URL,
} from "./navbar-data";

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return windowSize;
  };

  const size = useWindowSize();

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="logo-text d-flex"
          style={{ marginBottom: "2px" }}
        >
          <img src={myImg} className="img-fluid logo" alt="brand" />
          {PROFESSIONAL_TITLE}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {NAV_LINKS_ARY.map((item, idx) => (
              <Nav.Item key={idx}>
                <Nav.Link
                  as={Link}
                  to={item.to}
                  onClick={() => updateExpanded(false)}
                  className="navbar-item-text"
                >
                  <div className="flex flex-row items-center">
                    {size.width > ICON_BREAKPOINT_WIDTH ? item.icon : null}{" "}
                    {item.text}
                  </div>
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item className="fork-btn">
              <Button
                href={GITHUB_URL}
                target="_blank"
                className="fork-btn-inner"
              >
                <div className="flex flex-row items-center">
                  {size.width > ICON_BREAKPOINT_WIDTH ? (
                    <CgGitFork
                      style={{ fontSize: "1.2em", marginRight: "5px" }}
                    />
                  ) : null}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </div>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
