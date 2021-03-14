import styled from 'styled-components';
import { Link } from 'gatsby'

export const Nav = styled.nav`
    background:${({ active }) => active ? "hsla(0, 0%, 0%, 0.9)" : "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100% )"};
    height: 80px;
    display: flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    position: sticky;
    top:0;
    z-index: 999;
    @media screen and (max-width: 960px){
        background: ${({ click }) => click ? "#FFF" : "transparent"};
        transtion: 0.8 all ease;
    }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 95%;
  @media screen and (max-width: 960px){
    justify-content: center;
    background:hsla(0, 0%, 0%, 0.9);
  }
`

export const NavLogo = styled(Link)`
  color: #FFF;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  &:hover {
    color: #f5f543;
    text-decoration: none;
    transition: all 0.3s ease;
  }
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
      opacity: 1;
      transition: all 0.2s ease;
      background: #000;
  }
`

export const NavItem = styled.li`
  &:hover {
    background: #f5f543;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  height: 50%;
  font-family: "Ubuntu", sans-serif;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
  &:hover {
    color: #000;
    text-decoration: none;
    transition: all 0.3s ease;
  }
`