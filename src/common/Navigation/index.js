import { toAuthor, toTasks } from "../../routes";
import { NavItem, Nav, StyledNavLink, NavList } from "./styled";


export const Navigation = () => (
        <Nav>
            <NavList>
                <NavItem>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
                </NavItem>
            </NavList>
        </Nav>
);