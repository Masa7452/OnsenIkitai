import { css } from "@emotion/react";
import React, { memo } from "react";
import FeatureModal from "./feature-modal";
import MapModal from "./map-modal";
import PrefectureModal from "./prefecture-modal";

const Layout = ( { params } )=> 
{
    return (
        <div>
            {params.mode === `prefecture` &&
                <PrefectureModal setSearchMode={params.setSearchMode} />}
            {params.mode === `feature` &&
                <FeatureModal setSearchMode={params.setSearchMode} />}

            {params.mode === `map` &&
                <MapModal setSearchMode={params.setSearchMode} />}
        </div>
    );
}

const Style = ( params ) => css`
`;

const SearchModal = memo(( props ) => 
{
    const styleParams=
    {
    }
    const params = 
    {
        mode          : props.mode,
        setSearchMode : props.setSearchMode,
    }
    return <Layout params={params} />
});

export default SearchModal;