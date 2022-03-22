import { ReactChild } from 'react';
import { StyledText, StyledWrapper } from './Label.styled';

type LabelProps = {
    children: ReactChild[] | ReactChild;
    labelText: string;
};

export const Label = ({ children, labelText }: LabelProps) => {
    return (
        <StyledWrapper>
            <StyledText>{labelText}</StyledText>
            {children}
        </StyledWrapper>
    );
};
