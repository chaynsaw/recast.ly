import API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  data = 
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    part: 'snippet',
    contentType: 'application/json',
    success: callback,
    query: options.query,
    max: options.max,
    key: options.key,
    // error: errorCB || function(error) {
    //   console.error('chatterbox: Failed to fetch messages', error);
    // }
  });
};

export default searchYouTube;
