import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    background: transparent;
    color: ${({ theme }) => theme.colors.primary_text};
    border: 1px solid ${({ theme }) => theme.colors.primary_text};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    cursor: pointer;
    transition: 0.5s ease-in;
    border-radius: ${({ theme }) => theme.borderRadius.primary}px;

    :hover {
        color: ${({ theme }) => theme.colors.primary_background};
        background-color: ${({ theme }) => theme.colors.primary_text};
    }
`;
