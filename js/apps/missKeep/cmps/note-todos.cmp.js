export default {
    props: ['info'],
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

//    {
//     id: "n103",
//     type: "note-todos",
//     info: {
//     label: "Get my stuff together",
//     todos: [
//     { txt: "Driving liscence", doneAt: null },
//     { txt: "Coding power", doneAt: 187111111 }
//     ]
//     }
   