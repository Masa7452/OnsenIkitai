import { navigate } from "gatsby";
import React, { useCallback, useRef } from "react";
import { Search } from "semantic-ui-react";
import { updateKeyword } from "../../redux/reducer/search-criteria";
import store from "../../redux/store";


const SearchBar = ( props ) => 
{
    const inputText = useRef(``);
    const onKeyPressSearch = useCallback( async() => 
    {
        navigate(`/list`, { state : { text : inputText.current } });
    }, []);
    return (
        <Search
            defaultOpen={true}
            className={`input-field`}
            placeholder='Keyword...'
            onKeyPress={async (e, data) => {
                if( e.code === `Enter` )
                {
                    onKeyPressSearch();
                }
            }}
            onSearchChange={( e, data ) => {
                store.dispatch( updateKeyword( data.value ) );
                inputText.current = data.value;
            }}
            showNoResults={false}
        />
    )
};

export default SearchBar;