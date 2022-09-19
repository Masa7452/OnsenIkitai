import { css } from "@emotion/react";
import React, { memo } from "react";
import FeatureModal from "./FeatureModal";
import MapModal from "./MapModal";
import PrefectureModal from "./PrefectureModal";

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