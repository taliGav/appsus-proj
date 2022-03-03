export default {
    props: ['info'],
    template: `
        <section class="note-preview img-preview">
            <div class="img-preview-details">
                <h3>{{info.title}}</h3>
                <img :src="info.url"  />
                <!-- <img :src="imgUrl"  /> -->
            </div>
        </section>`,
    data() {
        return {
        };
    },
    methods: {},
    computed: {
        // imgUrl() {
        //     return this.info.url;
        // },

    }
}

// {
//     id: "n102",
//     type: "note-img",
//     info: {
    //     url: "http://some-img/me",
    //     title: "Bobi and Me"
//     },
//     style: {
//     backgroundColor: "#00d"
//     }
//    },