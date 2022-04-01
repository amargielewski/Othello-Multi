import { useState } from 'react';
import { Transition } from 'react-transition-group';

//Icons
import {
    PlayIcon,
    RulesIcon,
    CloseIcon,
    LogoutIcon,
    UserIcon,
    HamburgerIcon,
} from 'Icons';

//paths
import { paths } from 'constants/paths';

//styles
import {
    StyledLinkContainer,
    StyledLogoutButton,
    StyledMenuContainer,
    StyledMenuLinkText,
    StyledMenuToggleButton,
    StyledTitle,
    StyledTitleContainer,
    StyledWrapper,
} from './Navbar.styled';
import { NavbarLink } from './NavbarLink/NavbarLink';

export const Navbar = () => {
    const [displayMenu, setDisplayMenu] = useState(false);

    const handleMenuToggle = () => {
        setDisplayMenu(prev => !prev);
    };

    return (
        <Transition in={displayMenu} timeout={300}>
            {state => (
                <StyledWrapper>
                    <StyledMenuContainer>
                        <StyledTitleContainer>
                            <StyledTitle to={paths.main}>
                                Othello Game
                            </StyledTitle>
                            <StyledMenuToggleButton onClick={handleMenuToggle}>
                                {!displayMenu ? (
                                    <HamburgerIcon />
                                ) : (
                                    <CloseIcon />
                                )}
                            </StyledMenuToggleButton>
                        </StyledTitleContainer>

                        <StyledLinkContainer
                            className={state}
                            toggleVisibility={displayMenu}
                        >
                            <NavbarLink
                                icon={<PlayIcon />}
                                linkTo="main"
                                linkText="Game"
                            />
                            <NavbarLink
                                icon={<RulesIcon />}
                                linkTo="rules"
                                linkText="Rules"
                            />
                            <NavbarLink
                                icon={<UserIcon />}
                                linkText="Profile"
                                linkTo="user"
                            />
                            <StyledLogoutButton>
                                <StyledMenuLinkText>Logout</StyledMenuLinkText>
                                <LogoutIcon />
                            </StyledLogoutButton>
                        </StyledLinkContainer>
                    </StyledMenuContainer>
                </StyledWrapper>
            )}
        </Transition>
    );
};
