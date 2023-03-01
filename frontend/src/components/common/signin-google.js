import React, { useCallback, useContext } from "react"
import { css } from "@emotion/react";
import { Button, Icon } from "semantic-ui-react";
import { AuthContext } from "../../misc/auth-conetxt";
import { getFirebaseUser } from "../../firebase/utility";

const Layout = ( { params } ) =>
{
  return (
    <div css={params.style}>
       <Button className={`button-google`} color={`google plus`} onClick={params.onClick}>
            <Icon name={`google`}/>Login with Google Account
        </Button>
    </div>
  )
}

const Style = ( params ) => css
`
`

const SignInGoogle = ( props ) => 
{
    const { signInGoogle } = useContext( AuthContext );
    const onClick = useCallback( async() =>
    {
        const loginUser = await getFirebaseUser();
        if( loginUser === null )
        {
            signInGoogle();
        }
    }, []);
    const styleParams=
    {
    }
    const params = 
    {
        style   : Style( styleParams ),
        onClick : onClick,
        // selectedValue : selectedValue,
    }
    return <Layout params={params}  />
};

export default SignInGoogle;