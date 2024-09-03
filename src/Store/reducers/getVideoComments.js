import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../Services/ApiService";
import { parseVideoComments } from "../../utils/parseVideoComments";

export const getVideoComments = createAsyncThunk(
    'youtube/getVideoComments',
    async (videoId ,{ getState }) => {
        const ApiServices = new ApiService();
        const { youtube: { vidoeCommentsNextPageToken, videoComments } }  = getState();

        const { items, nextPageToken } =await ApiServices.getVideoComments(videoId, vidoeCommentsNextPageToken);
        const parsedVideoComments = await parseVideoComments(items);
        return { parsedData: [...videoComments, ...parsedVideoComments], nextPageToken };
    }
);