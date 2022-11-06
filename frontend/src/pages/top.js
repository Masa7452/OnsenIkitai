import React from "react";
import Header from "../components/common/header";
import Main from "../components/top/main";
import { css } from "@emotion/react";

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
    return <Layout params={params}  />
};

export default Top;