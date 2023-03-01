import React from "react";
import { css } from "@emotion/react";
import { AuthProvider } from "../misc/auth-conetxt";

const Layout = ( { params } )=> 
{
    return (
        <div css={params.style}>
            {params.child}
        </div>
    );
}

const Style = ( params ) => css`
`;

const Page = ( props ) => 
{
    const styleParams=
    {
    }

    const params = 
    {
        style   : Style( styleParams ),
        child   : props.children,
    }
    return (
        <AuthProvider>
            <Layout params={params}  />
        </AuthProvider>
    )
};

export default Page;