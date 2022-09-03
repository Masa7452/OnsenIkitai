import React from "react"
import { Link } from "gatsby";
import { Header as TopBar } from 'semantic-ui-react';
import { css } from "@emotion/react";

const styles = {
    topHeader: css`
        text-align: justify;
    `
}

const Layout = ( { params } ) =>
{
    return (
        <div className={styles.topHeader}>
            <TopBar as='h3' block>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </TopBar>
        </div>
    )
}

const Header = ( { props } ) => 
{  
    const styles = (  ) = css`
            text-align: justify;
        `
    }
    const params = 
    {
        styles : styles,
    }
    return <Layout params={params}  />
};

export default Header;