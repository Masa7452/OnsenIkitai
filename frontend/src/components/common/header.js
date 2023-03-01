import React, { useCallback } from "react"
import { Link, navigate } from "gatsby";
import { css } from "@emotion/react";
import { getAuth, signOut } from "firebase/auth";
import { useUpdate } from "react-use";

const auth = getAuth();

const Layout = ( { params } ) =>
{
  return (
    <div css={params.style}>
      <div className={`left-menu`}>
        <nav>
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/register" >Register Onsen</Link>
              </li>
            </ul>
        </nav> 
      </div>
      <div className={`right-menu`}>
        <nav>
          <ul>
            <li>
              {params.isLogin === true &&
                 <div className="menu">
                 <div className="ui simple dropdown item">
                   Profile
                   <i className="dropdown icon"></i>
                   <div className="menu">
                     <div className="item">Edit profile</div>
                     <div className="item" onClick={params.onClickLogin}>Logout</div>
                   </div>
                 </div>
               </div> 
              }
              {params.isLogin === false &&
                <div className={`login`} onClick={params.onClickLogin} >Login</div>
              }
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

const Style = ( params ) => css`
    height     : 60px;
    font-size  : 16px;
    width      :100%;

    a 
    {
      color:black;
    }

    ul {
      list-style:none;
    }

    .left-menu
    {
      float:left;
    }

    .right-menu
    {
      float  :right;
      margin-right: 20px;
    }

    .left-menu ul
    {
      display:flex;
    }

    .left-menu li
    {
      margin-right:20px;
    }

    .right-menu ul
    {
      display:flex;
    }

    .right-menu li
    {
      margin-right:20px;
    }

    .right-menu a
    {
      color:black;
    }
    .login
    {
      cursor: pointer;
    }
`

const Header = ( { props } ) => 
{
  const update = useUpdate();

  const onClickLogin = useCallback( async () =>
  {
    if( auth.currentUser === null )
    {
      navigate( `/login` );
      return;
    }
    await signOut( auth );
    update();
  }, []);

  const styleParams=
  {
  }
  const params = 
  {
      style         : Style( styleParams ),
      isLogin       : auth.currentUser !== null,
      // userIcon      : 
      onClickLogin  : onClickLogin
  }
  return <Layout params={params}  />
};

export default Header;