const BASE_URL = 'https://www.googleapis.com/youtube/v3';
export default class ApiService {

    async getHomeVideos(nextPageToken, categoryId) {
        let URL = `${BASE_URL}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=40&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w&${nextPageToken ? `pageToken=${nextPageToken}` : ""}`;
        if (categoryId !== 'all') {
            URL = `${BASE_URL}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&videoCategoryId=${categoryId}&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w&${nextPageToken ? `pageToken=${nextPageToken}` : ""}`;
        }
        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }

            const videoData = await response.json();
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

    async getSearchResults(query) {
        const URL = `${BASE_URL}/search?q=${query}&part=snippet&maxResults=25&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w`;
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

    async getVideoComments(videoId, nextPageToken) {
        const URL = `${BASE_URL}/commentThreads?part=snippet,replies&maxResults=50&videoId=${videoId}&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w&${nextPageToken ? `pageToken=${nextPageToken}` : ""}`;
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

    async getFeatureChannels(channelId) {
        try {
            const URL = `${BASE_URL}/channelSections?part=snippet,contentDetails&channelId=${channelId}&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w`;
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('getFeatureChannels - Error :', error.message);
            throw error;
        }
    }

    async getChannelVideos(channelId, type) {
        try {
            let URL;
            if (type === 'latest') {
                URL = `${BASE_URL}/search?channelId=${channelId}&part=snippet&order=date&maxResults=50&type=video&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w`;
            } else {
                URL = `${BASE_URL}/search?channelId=${channelId}&part=snippet&order=viewCount&maxResults=50&type=video&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w`;
            }
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('getChannelVideos - Error :', error.message);
            throw error;
        }
    }

    async getChannelInfoWithCommunityPosts(channelId) {
        try {
            const url = `https://yt-api.p.rapidapi.com/channel/community?id=${channelId}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '1aa90e2eebmsh07631597fb77c44p141bf3jsn4c37b48e698d',
                    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
                }
            };

            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('getChannelInfoWithCommunityPosts - Error :', error.message);
        }
    }

    async getChannelPlaylists(channelId) {
        try {
            const URL = `${BASE_URL}/playlists?part=snippet,contentDetails&maxResults=50&channelId=${channelId}&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w`;
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('getChannelPlaylists - Error :', error.message);
            throw error;
        }
    }

}