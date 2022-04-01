import { FormEvent, useState } from 'react';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import { Label } from '../../../components/Label/Label';
import { StyledForm, StyledLink } from './RegisterForm.styled';

export const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(username, password, confirmPassword);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Label labelText="Username">
                <Input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </Label>
            <Label labelText="Password">
                <Input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Label>
            <Label labelText="Confirm password">
                <Input
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            </Label>
            <Button>Submit</Button>
            <StyledLink to="/login">Already have account? Sign in</StyledLink>
        </StyledForm>
    );
};
