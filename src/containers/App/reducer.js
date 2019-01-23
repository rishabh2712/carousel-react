import {
SET_SLIDE
} from './actions'

const initialState = {
    total: [],
    active: null
}


export function slides(state = initialState, action) {
    switch (action.type) {
        case SET_SLIDE:
            return {
                ...state,
                total: action.total,
                active: action.active,
                slides: action.slides
            }
        default:
            return state
    }
}