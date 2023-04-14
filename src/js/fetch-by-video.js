import axios from 'axios';
import Notiflix from 'notiflix';

const filmId = 594767;
const KEY = '58645e23389326a2e8ed75695b9e1b79';

async function fetchTrailer() {
  const url = `https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=${KEY}&language=en-US`;

  try {
    const response = await axios.get(url);
    const trailers = response.data.results;

    const youtubeTrailer = trailers.find(trailer => trailer.site === 'YouTube');

    if (!youtubeTrailer) {
      throw Notiflix.Notify.failure('Trailer not found') ;
    }

    const youtubeLink = `https://www.youtube.com/watch?v=${youtubeTrailer.key}`;

    return youtubeLink;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch trailer');
  }
}


async function initPlayer() {
  const API_KEY = 'AIzaSyBWjasHUQ-evzof4liEduGpmLNQv1Y-kOE';

  const trailerLink = await fetchTrailer();

  const container = document.querySelector('#player-container');

  const player = new YT.Player(container, {
    height: '360',
    width: '640',
    videoId: trailerLink.match(/[^v=]+$/)[0],
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      player.stopVideo();
    }
  }
}

const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = initPlayer;
// https://www.youtube.com/watch?v=