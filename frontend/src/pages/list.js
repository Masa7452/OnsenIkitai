import React, { useCallback } from "react";
import { css } from "@emotion/react";
import Header from "../components/common/header";
import OnsenList from "../components/list/onsen-list";
import Page from "./page";
import SearchArea from "../components/common/search-area";
import { useMount, useUpdate } from "react-use";
import store from "../redux/store";
import { gql } from "@apollo/client";
import { requestQueryGraphql } from "../misc/utility";
import { useLocalState } from "../hook/use-local-state";

const queryListOnsen = gql`
    query listOnsen ($params: String!) {
        listOnsen( params: $params ) {
            status
            {
                code
                message
                api
                error
            }
            body
            {
                rating        
                area    
                postNumber    
                availableType 
                reasonOfRating
                minimumFee    
                onsenName     
                address1      
                address2      
                address3      
                url           
                isSauna       
                tatooStatus   
                created       
            }
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
                <OnsenList items={params.items} />
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
    const state = useLocalState(
    {
        items : [],    
    });
    const update = useUpdate();
    const styleParams=
    {
    }
    const requestLoadItems = useCallback( async () =>
    {
        const quriteria = store.getState().searchCriteria;
        const params = 
        {
            features    : quriteria.features,
            keyword     : quriteria.keyWord,
            areas       : quriteria.areas,
        }
        const result = await requestQueryGraphql( queryListOnsen, `listOnsen`, params );
        if( result.length === 0 )
        {
            return;
        }
        state.items = result;
        update();
    })
    const params = 
    {
        style : Style( styleParams ),
        items : state.items,
    }
    useMount( () =>
    {
        // ロードする処理
        requestLoadItems();
    });
    return (
        <Page>
            <Layout params={params}  />
        </Page> 
    )
};
export default List;