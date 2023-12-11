const BASE_URL = 'https://www.googleapis.com/youtube/v3';
export default class ApiService {

    async getHomeVideos() {
        const URL = `${BASE_URL}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=20&key=AIzaSyADij8KO-aGZprbwOkJAjDpqHToyKsqb3w`;
        // const headers = {
        //     Authorization: `Bearer ${c}`,
        //     Accept: 'application/json'
        // }
        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }

            const videoData = await response.json();
            const finalData = this.extractVideoData(videoData);

            console.log('finalData', finalData);
            return finalData;
        } catch (error) {
            console.error('Error fetching data:', error.message);
            throw error; // Rethrow the error to handle it at the higher level if needed
        }
    }

    extractVideoData(apiResponse) {
        const videoData = apiResponse?.items?.map(item => {
            return {
                videoId: item.id,
                publishedAt: item.snippet.publishedAt,
                channelId: item.snippet.channelId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnailUrl: item.snippet.thumbnails.standard.url,
                channelTitle: item.snippet.channelTitle,
                categoryId: item.snippet.categoryId,
                contentDetails: item.contentDetails,
                statistics: item.statistics
            };
        });

        return videoData;
    }
}