import { navigate } from "gatsby";
import React, { useRef } from "react";
import { Search } from "semantic-ui-react";
import { getOnsenList } from "../firebase/utility";

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
                    // await addNewOnsen();
                    const params = { prefecture : `Aichi` };
                    const result = await getOnsenList( params );

                    navigate(`/list`, { state : { text : inputText.current, onsenList : result } });
                }
            }}
            onSearchChange={( e, data ) => {
                inputText.current = data.value;
            }}
        />
    )
};

export default SearchBar;