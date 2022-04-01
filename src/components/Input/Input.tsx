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
        return <StyledInput appereance={type} type={'text'} {...props} />;
    if (type === 'password')
        return (
            <StyledInputWrapper>
                <StyledInput
                    appereance={type}
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
