import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../reducers/homePageVideos";
import { getVideoComments } from "../reducers/getVideoComments";
import { getSearchResults } from "../reducers/getSearchResults";

const initialState = {
    activeSidebarMenu: '',
    activeExploreMenu: '',
    homeVideos: [],
    nextPageToken: '',
    loading: false,
    searchQuery: '',
    homeCategoryId: 'all',
    relatedVideos: [],
    relatedVideosNextPageToken : '',
    videoCommentsLoading: false,
    videoComments: [],
    vidoeCommentsNextPageToken: '',
    userInfo: {},
    searchResults: [],
}

export const youtubeSlice = createSlice({
    name: 'youtube',
    initialState,
    reducers: {
        updateLoading: (state, action) => {
            state.loading = action.payload;
        },
        changeCategory: (state, action) => {
            state.homeCategoryId = action.payload
        },
        clearHomeVideos: (state, action) => {
            state.homeVideos = []
            state.nextPageToken = ''
        },
        clearVideoComments: (state, action) => {
            state.videoComments = []
            state.vidoeCommentsNextPageToken = ''
        },
        clearRelatedVideos: (state, action) => {
            state.relatedVideos = []
            state.relatedVideosNextPageToken = ''
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        clearUserInfo: (state, action) => {
            state.userInfo = {};
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        clearSearchQuery: (state, action) => {
            state.searchQuery = '';
        },
        clearSearchVideos: (state, action) => {
            state.searchResults = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getHomePageVideos.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
            state.homeVideos = action.payload.parsedData;
            state.nextPageToken = action.payload.nextPageToken
            state.loading = false
        })
        builder.addCase(getVideoComments.pending, (state, action) => {
            state.videoCommentsLoading = true;
        })
        builder.addCase(getVideoComments.fulfilled, (state, action) => {
            state.videoComments = action.payload.parsedData;
            state.vidoeCommentsNextPageToken = action.payload.nextPageToken
            state.videoCommentsLoading = false;
        })
        builder.addCase(getSearchResults.fulfilled, (state, action) => {
            state.searchResults = action.payload.searchResults;
        })
    }
})

export const { changeCategory, updateLoading, clearHomeVideos, clearVideoComments, clearRelatedVideos, clearUserInfo, setUserInfo, setSearchQuery, clearSearchQuery, clearSearchVideos } = youtubeSlice.actions;
export default youtubeSlice.reducer;