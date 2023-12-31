import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../Services/ApiService";
import { parseVideos } from "../../utils/parseVideos";

export const getRelatedVideos = createAsyncThunk(
    'youtube/getRelatedVideos',
    async (videoId ,{ getState }) => {
        const ApiServices = new ApiService();
        const { youtube: { relatedVideosNextPageToken, relatedVideos } }  = getState();

        const { items, nextPageToken } =await ApiServices.getSearchResults(videoId);
        const parsedVideoData = await parseVideos(items);
        const filterVideos = parsedVideoData.filter(item => item?.videoDuration > "1:20")
        return { parsedData: [...homeVideos, ...filterVideos], nextPageToken };
    }
);