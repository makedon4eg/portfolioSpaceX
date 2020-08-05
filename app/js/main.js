var instance = new vidbg('.video-title', {
  mp4: 'app/video/world.mp4', // URL or relative path to MP4 video
  webm: 'app/video/world.webm', // URL or relative path to webm video
  poster: 'app/img/poster.jpg', // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
});
var rellax = new Rellax('.falcon');