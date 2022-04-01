import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpoints } from 'constants/breakpoints';

export const StyledWrapper = styled.div``;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0 10px;
    color: ${({ theme }) => theme.colors.primary_text};
    font-size: ${({ theme }) => theme.fontSizes.s}px;
    padding: 10px 20px;
    border-radius: ${({ theme }) => theme.borderRadius.primary}px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    transition: 0.4s ease-in;

    @media (max-width: ${breakpoints.s}px) {
        font-size: ${({ theme }) => theme.fontSizes.xs}px;
        padding: 5px 10px;
    }

    &.active {
        background-color: ${({ theme }) => theme.colors.primary_text};
        color: ${({ theme }) => theme.colors.primary_background};
    }

    :hover {
        background-color: ${({ theme }) => theme.colors.primary_text};
        color: ${({ theme }) => theme.colors.primary_background};
    }
`;

export const StyledMenuLinkText = styled.p`
    font-size: 24px;
`;
