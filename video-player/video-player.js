const video = document.getElementById('forest-video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// on click of video pause and play
 toggleVideoStatus = () => {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}
toggleIcon = () => {
    if (video.paused) {
       play.innerHTML = '<i class = "fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class = "fa fa-pause fa-2x"></i>'
    }
}
// update progress bar
updateProgress = () => {
    progress.value = (video.currentTime / video.duration) * 100
    
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    
   let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }
    timestamp.innerHTML =  mins +':' + seconds
}
// set video location
setVideoProgress = () => {
   video.currentTime = (+progress.value* video.duration)/100
}

/// no property to stop a video
/// best way is to resent the current time of the video to 0
/// also add pause to stop it at beginning 
stopVideo = () => {
    video.currentTime = 0
    video.pause()
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', toggleIcon);
video.addEventListener('play', toggleIcon);
video.addEventListener('timeupdate', updateProgress);

/// on click of of play button 
play.addEventListener('click', toggleVideoStatus)

stop.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)

