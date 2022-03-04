export default {
    props: ['info','id'],
    template: `
            <section class="note-preview txt-preview">
            <div class="txt-preview-details" >
                <h3 class="note-title" @keyup="updateTitle" contenteditable="true">{{info.title}}</h3>
                <p  class="note-text" @keyup="updateTxt" contenteditable="true">{{info.txt}}</p>
            </div>
        </section>`,
    data() {
        return {
            newTitle: '',
            newTxt:''
        };
    },
    methods: {
        updateTitle(ev){
            console.log('event', ev);
            console.log('h3.id',this.id);
            console.log('h3.value',this.info.title);
            console.log('h3 updated',ev.currentTarget.textContent);
            this.newTitle = ev.currentTarget.textContent
            console.log('h3.newTitle',this.newTitle);
            this.$emit('selected', this.id);
        },
        updateTxt(ev){
            console.log('event', ev);
            console.log('h3.id',this.id);
            console.log('h3.value',this.info.txt);
            console.log('h3 updated',ev.currentTarget.textContent);
            this.newTxt = ev.currentTarget.textContent
            console.log('h3.newTitle',this.newTxt);
            this.$emit('selected', this.id);
        }
    },
    computed: {
    },
    created() {
        console.log(this.info);
    }
};