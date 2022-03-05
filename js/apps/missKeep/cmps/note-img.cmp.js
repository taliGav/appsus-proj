export default {
    props: ['info'],
    template: `
        <section class="note-preview img-preview">
            <div class="img-preview-details">
                <h3 class="note-title" @keyup="update" contenteditable="true">{{info.title}}</h3>
                <img :src="info.url"  />
                <!-- <img :src="imgUrl"  /> -->
            </div>
        </section>`,
    data() {
        return {
            newTitle: ''
        };
    },
    methods: {},
    computed: {
        update(ev) {
            if (ev.path[0].localName === 'h3') this.newTitle = ev.currentTarget.textContent;
            this.$emit('update', this.id, this.newTitle);
            },

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