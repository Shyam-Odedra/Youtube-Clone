import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../Services/ApiService";
import { parseChannelDetails } from "../../utils/parseChannelDetails";

export const getChannelDetails = createAsyncThunk(
    'youtube/getChannelDetail',
    async (channelId ,{ getState }) => {
        const ApiServices = new ApiService();
        const { items: channelInfo } = await ApiServices.getVideoChannelInfo(channelId);
        
        const parsedChannelDetails = await parseChannelDetails(channelInfo);
        return { channelDetails: parsedChannelDetails };
    }
);