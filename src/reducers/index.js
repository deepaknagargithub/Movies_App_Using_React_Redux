
import {combineReducers} from 'redux'


import { Add_Movies, Add_Favourite, Remove_From_Favourite, Set_Show_Favourites } from "../actions"




var initialMoviesState = {
    list: [],
    favourites: [],
    showFavourite: false

}

export function movies(state = initialMoviesState, action) {




    // // if(action.type === Add_Movies) {
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // // }
    // // return state





    switch (action.type) {

        case Add_Movies:
            return {
                ...state,
                list: action.movies
            }
        case Add_Favourite:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case Remove_From_Favourite:

            const filteredArray = state.favourites.filter(movie => movie.Title !== action.movie.Title)

            return {
                ...state,
                favourites: filteredArray
            }

        case Set_Show_Favourites:

            return {
                ...state,
                showFavourite: action.val

            }


        default:
            return state
    }
}



var initialSearchState = {
    result: {}

};

export function search(state = initialSearchState, action) {

    return state

}

var initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}



// export default function rootReducer(state = initialRootState, action) {

//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }

// }



export default combineReducers ({

    movies,
    search

})






