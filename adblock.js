setInterval(() => {
  if (document.getElementsByClassName("ytp-ad-text").length > 0) {
    const video = document.getElementsByClassName(
      "video-stream html5-main-video",
    )[0];
    video.play();
    video.pause();
    video.currentTime = video.duration;
  }
}, 500);
