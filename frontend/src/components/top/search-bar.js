import { navigate } from "gatsby";
import React, { useRef } from "react";
import { Search } from "semantic-ui-react";
import { updateKeyword } from "../../redux/reducer/search-criteria";
import store from "../../redux/store";

const SearchBar = ( props ) => 
{
    const inputText = useRef(``);
    return (
        <Search
            className={`input-field`}
            placeholder='Keyword...'
            onKeyPress={async (e, data) => {
                if( e.code === `Enter` )
                {
                    console.log('エンター');
                    console.log(store.getState());
                    navigate(`/list`, { state : { text : inputText.current } });
                }
            }}
            onSearchChange={( e, data ) => {
                store.dispatch( updateKeyword( data.value ) );
                inputText.current = data.value;
            }}
        />
    )
};

export default SearchBar;