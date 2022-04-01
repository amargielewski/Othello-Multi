import {
    StyledGameInfoContainer,
    StyledGamesContainer,
    StyledGamesTitle,
    StyledUserAvatar,
    StyledUserContainer,
    StyledUsernameText,
    StyledWrapper,
} from './UserPage.styled';

export const UserPage = () => {
    return (
        <StyledWrapper>
            <StyledUserContainer>
                <StyledUserAvatar />
                <StyledUsernameText>Username</StyledUsernameText>
            </StyledUserContainer>
            <StyledGameInfoContainer>
                <StyledGamesTitle>Your last 10 game</StyledGamesTitle>
                <StyledGamesContainer></StyledGamesContainer>
            </StyledGameInfoContainer>
        </StyledWrapper>
    );
};
