export default {
    props: ['note'],
    template: `
        <section class="note-preview">
            <div class="note-preview-details">
                <h3>{{note.id}}</h3>
                <h3>{{note.type}}</h3>
                <h3>{{note.info.txt}}</h3>
                <h4>{{note.isPinned}}</h4>
            </div>
        </section>`,
    data() {
        return {
        };
    },
    methods: {},
    computed: {}
}

// {
//     id: "n102",
//     type: "note-video",
//     info: {
//     url: "http://some-img/me",
//     title: "Bobi and Me"
//     },
//     style: {
//     backgroundColor: "#00d"
//     }
//    },


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