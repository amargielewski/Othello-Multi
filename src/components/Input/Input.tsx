import { InputHTMLAttributes, useState } from 'react';
import { EyeIcon } from '../../Icons/EyeIcon';
import { EyeOffIcon } from '../../Icons/EyeOffIcon';
import { StyledIconBox, StyledInput, StyledInputWrapper } from './Input.styled';

type InputProps = {
    type?: 'text' | 'password';
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ type = 'text', ...props }: InputProps) => {
    const [togglePassword, setTogglePassword] = useState(false);

    if (type === 'text')
        return (
            <StyledInput
                appereance={type}
                type={'text'}
                {...props}
                autoComplete="off"
            />
        );
    if (type === 'password')
        return (
            <StyledInputWrapper>
                <StyledInput
                    appereance={type}
                    autoComplete="off"
                    type={togglePassword ? 'text' : 'password'}
                    {...props}
                />
                <StyledIconBox onClick={() => setTogglePassword(prev => !prev)}>
                    {togglePassword ? <EyeOffIcon /> : <EyeIcon />}
                </StyledIconBox>
            </StyledInputWrapper>
        );
    return null;
};
