export default {
    props: ['info', 'id'],
    template: `
            <section class="note-preview txt-preview">
            <div class="txt-preview-details" >
                <h3 class="note-title" @keyup="update" contenteditable="true">{{info.title}}</h3>
                <p  class="note-text" @keyup="update" contenteditable="true">{{info.txt}}</p>
                <!-- <h3 class="note-title" @keyup="updateTitle" contenteditable="true">{{info.title}}</h3>
                <p  class="note-text" @keyup="updateTxt" contenteditable="true">{{info.txt}}</p> -->
            </div>
        </section>`,
    data() {
        return {
            newTitle: this.info.title,
            newTxt: this.info.txt
        };
    },
    methods: {
        update(ev) {
            // console.log('event', ev);
            // console.log('srcElement:', ev.srcElement);
            // console.log('target:', ev.target);
            // console.log('current target:', ev.currentTarget);
            // console.log('current target:', ev.path[0].localName);
            // console.log('h3.id',this.id);
            // console.log('h3.savedValue',this.info.title);
            // console.log('h3 updated',ev.currentTarget.textContent);
            if (ev.path[0].localName === 'h3') this.newTitle = ev.currentTarget.textContent;
            if (ev.path[0].localName === 'p') this.newTxt = ev.currentTarget.textContent;
            this.$emit('update', this.id, this.newTitle, this.newTxt);
            },
            // updateTitle(ev){
            //     console.log('event', ev);
            //     // console.log('h3.id',this.id);
            //     // console.log('h3.savedValue',this.info.title);
            //     // console.log('h3 updated',ev.currentTarget.textContent);
            //     this.newTitle = ev.currentTarget.textContent;
            //     // console.log('h3.newTitle',this.newTitle);
            //     this.$emit('update', this.id, this.newTitle);
            // },
            // updateTxt(ev){
            //     console.log('event', ev);
            //     console.log('p.id', this.id);
            //     console.log('p.savedValue', this.info.txt);
            //     console.log('p updated', ev.currentTarget.textContent);
            //     this.newTxt = ev.currentTarget.textContent;
            //     console.log('p.newTitle', this.newTxt);
            //     this.$emit('update', this.id, this.newTxt);
            // }
        },
        computed: {
        },
        created() {
            console.log(this.info);
        }
    };