export default {
    props: ['info'],
    template: `
            <section class="txt-preview">
            <datalist :id="listId" class="txt-preview-details">
                <option v-for="opt in info.opts" :value="opt" />
            </datalist>
            <h3>{{info.txt}}</h3>
            <!-- <label>
                {{info.label}}
                <input type="text" v-model="val" @change="reportVal" :list="listId" />
            </label>   -->
        </section>`,
    data() {
        return {
        };
    },
    methods: {},
    computed: {
        listId() {
          return "list" + this._uid;
        }
      },
      created(){
        console.log(this.info);
        console.log(this._uid);
      }    
    }

// {
//     id: "n101",
//     type: "note-txt",
//     isPinned: true,
//     info: {
//         txt: "Fullstack Me Baby!"
//     }
// },
