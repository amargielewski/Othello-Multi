import { LoginForm } from './LoginForm/LoginForm';
import { StyledTitle, StyledWrapper } from './LoginPage.styled';

export const LoginPage = () => {
    return (
        <StyledWrapper>
            <StyledTitle>Sign In</StyledTitle>
            <LoginForm />
        </StyledWrapper>
    );
};
