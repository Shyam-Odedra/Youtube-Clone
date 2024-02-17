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

    const hours = matches && matches[1] ? parseInt(matches[1]) : 0;
    const minutes = matches && matches[2] ? parseInt(matches[2]) : 0;
    const seconds = matches && matches[3] ? parseInt(matches[3]) : 0;

    const totalMinutes = hours * 60 + minutes;

    if (totalMinutes < 60) {
        const formattedMinutes = totalMinutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        return `"${formattedMinutes}:${formattedSeconds}"`;
    }

    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    const s = seconds;

    const formattedHours = h.toString().padStart(2, '0');
    const formattedMinutes = m.toString().padStart(2, '0');
    const formattedSeconds = s.toString().padStart(2, '0');

    return `"${formattedHours}:${formattedMinutes}:${formattedSeconds}"`;

}

export const formatYouTubeSubscribers = (subscribers) => {
    if (subscribers >= 1000000) {
        return (subscribers / 1000000).toFixed(1) + "M";
    } else if (subscribers >= 1000) {
        return (subscribers / 1000).toFixed(1) + "K";
    } else {
        return subscribers.toString();
    }
}