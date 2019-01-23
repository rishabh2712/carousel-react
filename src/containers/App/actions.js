
export const SET_SLIDE = 'SET_SLIDE'

export function setSlide(active, total, arr) {
    return {
        type: SET_SLIDE,
        active, total,
        slides: arr
    }
}