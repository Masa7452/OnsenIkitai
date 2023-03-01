import React from "react";
import { css } from "@emotion/react";
import cupple from "/src/images/cupple.png";
import onsenMonkeys from "/src/images/onsen-monkeys.png";
import oke from "/src/images/oke.png";
import drinkingBoy from "/src/images/drinking-boy.png";
import roten from "/src/images/roten.png";
import { useLocalState } from "../hook/use-local-state";
import SignInGoogle from "../components/common/signin-google";
import Page from "./page";

const Layout = ( { params } ) =>
{
    return (
        <div css={params.style}>
            <div className={`container`}>
                <div className={`container-left`}>
                    <img src={roten} alt="roten" />
                    <div className={`login-panel`}>
                        <div className={`login-panel-caption`}>
                            Welcome to OnsenIkitai
                        </div>
                        <div className={`login-panel-desc`}>
                            Find your best place to relax
                        </div>
                        <div className={`button-base`}>
                            <div className={`button`}>
                                <SignInGoogle />
                            </div>
                        </div>
                    </div>
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
    .login-panel
    {
        background-color :white;
        text-align:center;
        border-radius:8px;
        margin:auto;
        height:200px;
        width:300px;
        box-shadow:0px 10px 10px rgba(180, 180, 180, 0.2);
    }
    .login-panel-caption
    {
        padding-top:50px;
        font-size:20px;
        font-weight:bold;
        padding-bottom:0px;
    }
    .login-panel-desc
    {
        margin-top:5px;
        font-size:13px;
        font-weight:bold;
    }
    .button-base
    {
        margin-top:25px;
    }
    .button
    {
        // width:90%;
        text-align:center;
        font-size:12px !important;
    }
    .container-left
    {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;
        background-color :#f5f5f5;
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
    const state = useLocalState(
    {
        mailAdress  : ``,
        password    : ``,
        mode        : `Login`
    })
    const styleParams=
    {
    }
    const params = 
    {
        style : Style( styleParams ),
        mailAdress : state.mailAdress,
        password : state.password,
        mode     : state.mode,
    }
    return (
        <Page>
            <Layout params={params}  />
        </Page> 
    )
};

export default Login;