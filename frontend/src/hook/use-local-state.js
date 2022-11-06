import { useRef } from "react";

export const useLocalState = ( state ) =>
{
    const state_ = useRef( state );
    return state_.current;
}