import React, { useCallback } from "react";
import { css } from "@emotion/react";
import Header from "../components/common/header";
import SearchArea from "../components/top/search-area";
import OnsenList from "../components/list/onsen-list";
import { gql } from "@apollo/client";
import { requestQueryGraphql } from "../../utility";

const BOOKS = gql`
    query ($params: String!) {
        getBooksList( params: $params ) {
            title
            author
        }
    }
`

const Layout = ( { params } )=> 
{
    return (
        <div css={params.style}>
            <Header />
            <div className={`l-containers`}>
                <SearchArea />
                <div className={`select-area`}>
                    <div className={`result`}>
                        Result
                    </div>
                    <div className={`order`}>
                        {/* <div class="ui simple dropdown">
                                popular <i class="dropdown icon"></i>
                            <div class="menu">
                                <div class="item">new</div>
                                <div class="item">recomend</div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <OnsenList />
            </div>
        </div>
    );
}

const Style = ( params ) => css`
    background-color :#f0f0eb;
    min-height: 100vh;

    .l-containers
    {
        min-height: 80vh;
        // margin-bottom: 80px;
        width: 850px;
        margin-right: auto;
        margin-left: auto;
    }
    .select-area
    {
        display:flex;
        justify-content: space-between;
    }
    .result
    {
        margin-left:15px;
        font-size:20px;
    }
    .order
    {
        margin-right:15px;
        font-size:15px;
    }
`;

const List = ( props ) => 
{
    const fn = useCallback( async () =>
    {
        const params_ = { id: 1, name: '太郎' };
        const result = await requestQueryGraphql( BOOKS, params_ );
        console.log(result);
    }, []);
    fn();

    const styleParams=
    {
    }

    const params = 
    {
        style   : Style( styleParams ),
    }
    return (
        <Layout params={params}  />
    )
};

export default List;