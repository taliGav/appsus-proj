export default {
    props: ['info'],
    template: `
            <section class="note-preview txt-preview">
            <div class="txt-preview-details">
                <h3>{{info.title}}</h3>
                <p>{{info.txt}}</p>
                <!-- <h3  @click="edit">{{info.title}}</h3>
                <h4  @click="edit">{{info.txt}}</h4> -->
                <!-- < v-for="opt in info.opts" :value="opt" /> -->
            </div>
        </section>`,
    data() {
        return {
        };
    },
    methods: {},
    computed: {
    },
    created() {
        console.log(this.info);
    }
};