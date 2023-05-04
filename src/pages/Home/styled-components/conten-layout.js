import styled from 'styled-components';

export const Content = styled.div`
    position:relative;
    @media(min-width:720px){
        display: flex;
        align-items: center;
    }
    @media(min-width:1200px){
        justify-content: center;
    }
`;
