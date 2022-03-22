import { ReactChild } from 'react';
import { StyledButton } from './Button.styled';

type ButtonProps = {
    children: ReactChild | ReactChild[];
};

export const Button = ({ children }: ButtonProps) => {
    return <StyledButton>{children}</StyledButton>;
};
