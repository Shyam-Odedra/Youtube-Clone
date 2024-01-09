import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../Services/ApiService";
import { parseRelatedVideos } from "../../utils/parseRelatedVideos";
import { parseSearchResults } from "../../utils/parseSearchResults";

export const getSearchResults = createAsyncThunk(
    'youtube/getSearchResults',
    async ({ getState }) => {
        const ApiServices = new ApiService();
        const { youtube: { searchQuery } }  = getState();

        const { items } =await ApiServices.getSearchResults(searchQuery);
        const parsedVideoData = await parseSearchResults(items);
        return { searchResults: parsedVideoData };
    }
);