import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        topRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        upcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        }

    }
});


export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, topRatedMovies, upcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;