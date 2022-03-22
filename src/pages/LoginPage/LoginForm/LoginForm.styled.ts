import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const LinkUnderlineAnimation = css`
    position: relative;
    ::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: -5px;
        left: 0;
        background: ${({ theme }) => theme.colors.primary_text};
        transform-origin: bottom right;
        transition: transform 0.3s ease-out;
    }
    :hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 32px 0;
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.primary_text};
    text-decoration: none;
    align-self: center;
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    ${LinkUnderlineAnimation};
`;
