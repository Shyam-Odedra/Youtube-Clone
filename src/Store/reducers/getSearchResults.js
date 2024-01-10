import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../Services/ApiService";
import { parseSearchResults } from "../../utils/parseSearchResults";

export const getSearchResults = createAsyncThunk(
    'youtube/getSearchResults',
    async (videoId,{ getState }) => {
        const ApiServices = new ApiService();
        const { youtube: { searchQuery } }  = getState();

        const { items } =await ApiServices.getSearchResults(searchQuery);
        const parsedVideoData = await parseSearchResults(items);
        return { searchResults: parsedVideoData };
    }
);