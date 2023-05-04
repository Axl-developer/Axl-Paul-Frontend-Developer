import styled from "styled-components";
    
export const SocialContent = styled.div`
    background:#090909;

    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    @media(min-width:720px){
        display: flex;
        justify-content: center;
        margin: auto;
        height: 100%;

        flex-direction: column;
        align-items: center;
    }
`;