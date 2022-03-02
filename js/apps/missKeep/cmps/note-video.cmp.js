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