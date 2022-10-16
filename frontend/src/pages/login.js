import React from "react";
import { css } from "@emotion/react";
import cupple from "/src/images/cupple.png";
import onsenMonkeys from "/src/images/onsen-monkeys.png";
import oke from "/src/images/oke.png";
import drinkingBoy from "/src/images/drinking-boy.png";
import roten from "/src/images/roten.png";

const Layout = ( { params } ) =>
{
    return (
        <div css={params.style}>
            <div className={`header`}></div>
            <div className={`container`}>
                <div className={`container-left`}>
                    <img src={roten} alt="roten" />
                    <form action="POST">
                        <p>Create Account</p>
                        <label for="email">E-mail</label>
                        <input name="email" type="email" />
                        <label for="password">Password</label>
                        <input name="password" type="password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className={`container-right`}>
                    <img className={`oke`} src={oke} alt="oke" />
                    <img className={`onsen-monkeys`} src={onsenMonkeys} alt="onsen-monkeys" />
                    <img className={`cupple`} src={cupple} alt="cupple"  />
                    <img className={`drinkingBoy`} src={drinkingBoy} alt="drinkingBoy" />
                </div>
            </div>
        </div>
    );
}

const Style = ( params ) => css`
    .container{
        display: flex;
    }
    form
    {
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    form p{
        text-align: center;
        font-weight: bold;
      }
    form button
    {
    background-color: rgba(45, 45, 45, 0.7);
    opacity: 0.6;
    cursor: pointer;
    height: 2.5rem;
    border: none;
    }
    .container-left
    {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;
    }
    .container-left img
    {
        position: absolute;
        top: 2%;
        left: 5%;
        width: 50px;
    }
    .container-right
    {
        background-color: #C1D6EB;
        height: 100vh;
        width: 100%;
        text-align: center;
        position: relative;
    }
    .onsen-monkeys
    {
        width: 100%;
        max-width: 520px;
        margin-top: 110px;
    }
    .oke{
        position: absolute;
        top: 10%;
        right: 3%;
    }
    .drinkingBoy{
        position: absolute;
        bottom: 20%;
        right: 0;
        width: 100%;
        max-width: 250px;
    }
    .cupple 
    {
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        max-width: 256px;
        display: block;
    }
    input
    {
    height: 2rem;
    margin-top: -30px;
    }
`;

const Login = ( { props } ) => 
{  
    const styleParams=
    {
    }
    const params = 
    {
        style : Style( styleParams ),
    }
    return <Layout params={params}  />
};

export default Login;