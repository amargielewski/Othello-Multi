import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;
`;

export const StyledText = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.s}px;
`;
