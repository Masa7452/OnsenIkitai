import React from "react";
import Header from "./Header";
// import { css } from "@emotion/react";

const Layout = ( { pageTitle, children } ) =>
{
    return (
        <div>
            <Header />
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
}

export default Layout;