import { RegisterForm } from './RegisterForm/RegisterForm';
import { StyledTitle, StyledWrapper } from './RegisterPage.styled';

export const RegisterPage = () => {
    return (
        <StyledWrapper>
            <StyledTitle>Sign Up</StyledTitle>
            <RegisterForm />
        </StyledWrapper>
    );
};
