import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";


export const Nav = styled.nav`
    background-color: teal;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`;

export const NavList = styled.ul`
    padding: 0px;
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    align-items: center;
    list-style: none;

    @media (max-width: 767px) {
        gap: 3px;
        flex-direction: column;
    }
`;

export const NavItem = styled.li`
    padding: 20px;
    cursor: pointer;
    transition: 0.5s;
    list-style: none;

    &:hover {
        transform: scale(1.02);
        font-weight: 700;
    }
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    list-style: none;

    &:active {
        color: white;
        text-decoration: underline;
    }

    &:hover {
        border-bottom: 1px solid;
    }

    &:focus-within {
        font-weight: 700;
    }
`;