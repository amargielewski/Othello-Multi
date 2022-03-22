import { FormEvent, useState } from 'react';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import { Label } from '../../../components/Label/Label';
import { StyledForm, StyledLink } from './LoginForm.styled';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
            <Button>Submit</Button>
            <StyledLink to="/signup">Click to create an account</StyledLink>
        </StyledForm>
    );
};
