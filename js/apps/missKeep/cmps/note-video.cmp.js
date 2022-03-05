export default {
    props: ['info'],
    template: `
        <section class="note-preview img-preview">
            <div class="img-preview-details">
                <h3>{{info.title}}</h3>
                <img class="video" :src="info.url">
                <!-- <img class="video" width="400" height="300" :src="info.url"> -->
                <!-- <img :src="imgUrl"  /> -->
            </div>
        </section>`,
    data() {
        return {
        };
    },
    methods: {},
    computed: {}
}



// function renderVideo(videos) {
//     // var strHTML = '';
//     var strHTML = videos.map(video => {
//         return `<button class="card" onclick="onSelectVideo('${video.title}')">
//                     <img class="card-img" src="${video.url}">
//                     <div class="card-info">
//                         <h4>${video.title}</h4>
//                         <small>${video.disc}</small>
//                     </div>
//                 </button>`;
//     }).join('');
//     var videosContainers = document.querySelector(".list-of-videos");
//     videosContainers.innerHTML = strHTML;
//     var currVideo =videos[0].id
//     var videoPlayer =`<iframe class="video" width="840" height="630" src="https://www.youtube.com/embed/${currVideo}"></iframe>`
//     var videoPlayerContainers = document.querySelector(".video-player-area");
//     videoPlayerContainers.innerHTML = videoPlayer;
// }


// <!-- <img class="video" width="400" height="300" :src="https://www.youtube.com/embed/${this.info.url}"> -->
