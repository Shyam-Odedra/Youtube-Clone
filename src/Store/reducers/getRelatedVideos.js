import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../Services/ApiService";
import { parseRelatedVideos } from "../../utils/parseRelatedVideos";

export const getRelatedVideos = createAsyncThunk(
    'youtube/getRelatedVideos',
    async (videoId ,{ getState }) => {
        const ApiServices = new ApiService();
        const { youtube: { relatedVideosNextPageToken, relatedVideos } }  = getState();

        const { items, nextPageToken } =await ApiServices.getSearchResults(videoId, relatedVideosNextPageToken);
        const parsedVideoData = await parseRelatedVideos(items);
        return { parsedData: [...relatedVideos, ...parsedVideoData], nextPageToken };
    }
);