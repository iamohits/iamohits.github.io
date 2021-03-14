import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaSmile, FaStackOverflow } from 'react-icons/fa';

import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './navbar-elements';
import iamohit from "../../images/iamohit.png";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if (typeof window !== `undefined`) {
            if (window.scrollY >= 80) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }
    }

    useEffect(() => {
        changeNav();
        if (typeof window !== `undefined`) {
            window.addEventListener("scroll", changeNav)
        }
    })

    return (
        <>
            <IconContext.Provider value={{ color: "#141414" }}>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            {/* <NavIcon /> */}
                            <img src={iamohit} alt="Logo" width="48" style={{
                                maxWidth: 48,
                            }} /> &nbsp;
                            <div style={{ marginTop:-10
                            }}>IAMohit</div>

                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/"><FaHome />&nbsp;Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/about"><FaSmile />&nbsp;About Me</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/stackoverflow"><FaStackOverflow/>&nbsp;Stackoverflow</NavLinks>
                            </NavItem>
                            {/* <NavItem>
                                <NavLinks to="/passion">Passion</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/projects">Projects</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/expertise">Expertise</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/myresume">My Resume</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/contact">Contact Me</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/social">Social</NavLinks>
                            </NavItem> */}
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar