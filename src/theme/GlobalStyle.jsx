import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *,*::before,*::after{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    :root{
        //colors
        --very-dark-blue:${({ theme }) => theme.veryDarkBlue};
        --dark-blue:${({ theme }) => theme.darkBlue};
        --soft-violet:${({ theme }) => theme.softViolet};
        --white:${({ theme }) => theme.white};
        --slightly1:${({ theme }) => theme.slightly1};
        --slightly2:${({ theme }) => theme.slightly2};
        //Typography
        --font-size:${({ theme }) => theme.fontSize};
        --inter-font:${({ theme }) => theme.interFont};
        --lexend-dec-font:${({ theme }) => theme.lexendDecaFont};
    }

    html{
        font-size:var(-font-size);
        
    }
    
    body{
        background-color:var(--very-dark-blue);
        font-family:var(--inter-font);
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        padding:6rem 0;

        @media screen and (min-width:769px){
            height:100vh;
            padding: 0;
        
        }
    }

  
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 769px) {
    max-width: 90%;
  }
`;

export default GlobalStyle;
