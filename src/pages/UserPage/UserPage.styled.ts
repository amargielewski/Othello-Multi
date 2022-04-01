import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px 0;
`;

export const StyledUserAvatar = styled.img`
    width: 80px;
    height: 80px;
    background-color: white;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.circle}px;
`;

export const StyledUserContainer = styled.div`
    display: flex;
    gap: 0 30px;
    align-items: center;
    position: relative;

    ::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.primary_text}4b;
        bottom: -30px;
    }
`;

export const StyledUsernameText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.m}px;
`;

export const StyledGamesContainer = styled.div``;

export const StyledGamesTitle = styled.h2`
    align-self: center;
    font-size: ${({ theme }) => theme.fontSizes.s}px;
`;

export const StyledGameInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
