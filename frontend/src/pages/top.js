import React from "react";
import Header from "../components/common/header";
import Main from "../components/top/main";
import { css } from "@emotion/react";
import Page from "./page";
import { getAuth } from "firebase/auth";

const Layout = ( { params } ) =>
{
    return (
        <div css={params.style}>
            <Header />
            <Main />
        </div>
    );
}

const Style = ( params ) => css`
`;

const Top = ( { props } ) => 
{
    const styleParams=
    {
    }
    const params = 
    {
        style : Style( styleParams ),
    }
    return (
        <Page>
            <Layout params={params}  />
        </Page> 
    )
};

export default Top;