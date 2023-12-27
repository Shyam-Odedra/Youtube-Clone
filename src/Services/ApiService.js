const BASE_URL = 'https://www.googleapis.com/youtube/v3';
export default class ApiService {

    async getHomeVideos(nextPageToken, categoryId) {
        let URL = `${BASE_URL}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=20&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w&pageToken=${nextPageToken}`;
        if(categoryId){
            URL = `${BASE_URL}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=20&videoCategoryId=${categoryId}&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w&pageToken=${nextPageToken}`;
        }
        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }

            const videoData = await response.json();
            // console.log('videoData', videoData);

            // console.log('finalData', finalData);
            return videoData;
        } catch (error) {
            console.error('Error fetching data:', error.message);
            throw error; // Rethrow the error to handle it at the higher level if needed
        }
    }

    async getVideoChannelInfo(channelId) {
        const URL = `${BASE_URL}/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w`;
        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }

            const channelInfo = await response.json();
            // console.log('channelInfo', channelInfo);
            return channelInfo;
        } catch (error) {
            console.error('getVideoChannelInfo - Error :', error.message);
            throw error; // Rethrow the error to handle it at the higher level if needed
        }
    }

    async getSearchResults(query,nextPageToken) {
        const URL = `${BASE_URL}/search?q=${query}&part=snippet&maxResults=25&pageToken=${nextPageToken}&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w`;
        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('getSearchResults - Error :', error.message);
            throw error;
        }
    }

    async getVideoDetails(videoId) {
        const URL = `${BASE_URL}/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w`;
        try {
            const response = await fetch(URL); 

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('getVideoDetails - Error :', error.message);
            throw error;
        }
    }

    async getVideoComments(videoId) {
        const URL = `${BASE_URL}/commentThreads?part=snippet,replies&maxResults=50&videoId=${videoId}&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w`;
        try {
            const response = await fetch(URL); 

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('getVideoComments - Error :', error.message);
            throw error;
        }
    }
    
}