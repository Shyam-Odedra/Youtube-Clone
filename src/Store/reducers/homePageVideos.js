import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../Services/ApiService";
import { parseVideos } from "../../utils/parseVideos";

export const getHomePageVideos = createAsyncThunk(
    'youtube/homePageVideos',
    async (isNext, { getState }) => {
        console.log('nextPageToken');
        const ApiServices = new ApiService();
        const { youtube: { nextPageToken: nextPageTokenState, homeVideos, homeCategoryId } }  = getState();

        const { items, nextPageToken } =await ApiServices.getHomeVideos(nextPageTokenState, homeCategoryId);
        const parsedVideoData = await parseVideos(items);
        console.log('parsedVideoData', parsedVideoData); 
        return { parsedData: [...homeVideos, ...parsedVideoData], nextPageToken };
        // const parsedVideoData = [];
        // const nextPageToken = '';
        // return { parsedData: [...homeVideos, ...parsedVideoData], nextPageToken };

    }
);