import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";


export const Nav = styled.nav`
    background-color: teal;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`;

export const ListItem = styled.li`
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
        font-weight: 700;
    }
`;