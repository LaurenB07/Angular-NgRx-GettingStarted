import { createAction, createReducer, on } from "@ngrx/store";

export const ProductReducer = createReducer(
    { showProductCode: true},
    on(createAction('[Product] Toggle Product Code'), state => {
        console.log('original state' + JSON.stringify(state));
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    })
)