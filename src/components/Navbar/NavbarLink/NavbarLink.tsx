import {
    StyledLink,
    StyledMenuLinkText,
    StyledWrapper,
} from './NavbarLink.styled';
import { paths } from 'constants/paths';
import { ReactNode } from 'react';

type PathsType = keyof typeof paths;

type NavbarLinkProps = {
    linkTo: PathsType;
    linkText: string;
    icon: ReactNode;
};

export const NavbarLink = ({
    linkTo = 'main',
    linkText,
    icon,
}: NavbarLinkProps) => {
    return (
        <StyledWrapper>
            <StyledLink to={paths[linkTo]}>
                <StyledMenuLinkText>{linkText}</StyledMenuLinkText>
                {icon}
            </StyledLink>
        </StyledWrapper>
    );
};
