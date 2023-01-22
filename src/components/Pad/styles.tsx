import styled from "styled-components"


export const BoxPad = styled.div`
    display: flex;
    height: 100%;
    width: 60%;    
    padding: 30px; 
    box-sizing: border-box;
    background: #FFFFFF;

    h1 {
        margin-top: 0;
        color: #747474;
    }
    
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }
    
    p {
        margin: 2px 0 3px 0;
        font-size: small;
        color: #848484;
    }
    
    label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #747474;
        padding: 3px 0 2px;
    }

    div {
        color: #848484;
        margin: 0 0 4px;
        font-size: smaller;
    }
    
    input {
        padding: 2px 6px 0;
        box-sizing: border-box;
        height: 40px;
        width: 100%;
        font-size: medium;
        border: 2px solid #c5bdbd;
        border-radius: 3px;
        margin-top: 2px;
    }

    input[type=submit] {
        background: #3d93c9;
        border-color: #C3E0F6;
        cursor: pointer;
        color: #FFFFFF;
        font-size: large;
        font-weight: bold;
    }
    
    input:focus {
        outline: none;
        border: 2px solid #C3E0F6;
    }
    
    .amount {
        box-sizing: border-box;
        border-radius: 3px;
        padding: 0 6px;
        display: flex;
        width: 100%;
        align-items: center;
        border: 2px solid #c5bdbd;
        
        input {
            border: 0;
        }
        &:focus {
            border: 2px solid #C3E0F6;
        }
    
    }
`
