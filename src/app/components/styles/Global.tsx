"use client"

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`    
    *, 
    *::before, 
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
    }
    
    body {
        min-height: 100vh;
        background: hsla(210, 17%, 98%, 1);
        background: linear-gradient(270deg, hsla(210, 17%, 98%, 1) 41%, hsla(0, 0%, 100%, 1) 100%);
        background: -moz-linear-gradient(270deg, hsla(210, 17%, 98%, 1) 41%, hsla(0, 0%, 100%, 1) 100%);
        background: -webkit-linear-gradient(270deg, hsla(210, 17%, 98%, 1) 41%, hsla(0, 0%, 100%, 1) 100%);
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F8F9FA", endColorstr="#FFFFFF", GradientType=1 );
        padding-bottom: 2em;
        position: relative;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
`

export default GlobalStyles
