import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../reducers/homePageVideos";
import { getVideoComments } from "../reducers/getVideoComments";

const initialState = {
    activeSidebarMenu: '',
    activeExploreMenu: '',
    homeVideos: [],
    nextPageToken: '',
    loading: false,
    searchQuery: '',
    homeCategoryId: '',
    relatedVideos: [],
    relatedVideosNextPageToken : '',
    videoCommentsLoading: false,
    videoComments: [],
    vidoeCommentsNextPageToken: ''
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
        }
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
    }
})

export const { changeCategory, updateLoading, clearHomeVideos, clearVideoComments, clearRelatedVideos } = youtubeSlice.actions;
export default youtubeSlice.reducer;