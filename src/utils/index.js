export const convertViewCount = (viewCount) => {                                                                                                                  
    viewCount = parseInt(viewCount);

    if (viewCount >= 1000000) {
        return (viewCount / 1000000).toFixed(2) + 'M';
    } else if (viewCount >= 1000) {
        return (viewCount / 1000).toFixed(2) + 'k';
    } else {
        return viewCount.toString();
    }
}

export const convertDuration = (duration) => {
    const regex = /PT(\d+H)?(\d+M)?(\d+S)?/;
    const matches = duration?.match(regex);


    const hours = matches?.[1] ? parseInt(matches?.[1]) : 0;
    const minutes = matches?.[2] ? parseInt(matches?.[2]) : 0;
    const seconds = matches?.[3] ? parseInt(matches?.[3]) : 0;

    if (hours === 0) {
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    if (minutes === 0) {
        return `00:${seconds.toString().padStart(2, '0')}`;
    }

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    const formattedResult = `${m}:${s.toString().padStart(2, '0')}`;

    return formattedResult;
}