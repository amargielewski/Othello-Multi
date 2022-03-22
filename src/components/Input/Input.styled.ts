import styled, { css } from 'styled-components';

export const StyledInput = styled.input<{
    appereance: 'text' | 'password';
}>`
    width: 100%;
    outline: none;
    border: 2px solid #fff;
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    padding: 8px 10px;
    border-radius: ${({ theme }) => theme.borderRadius.primary}px;

    ${({ appereance }) =>
        appereance === 'password' &&
        css`
            padding-right: 45px;
        `};

    :focus {
        border: 2px solid orange;
    }
`;

export const StyledInputWrapper = styled.div`
    position: relative;
`;

export const StyledIconBox = styled.div`
    cursor: pointer;
    height: 100%;
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 24px;
    color: black;
    display: flex;
    align-items: center;
`;
