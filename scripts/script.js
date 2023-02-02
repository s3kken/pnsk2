let eventBus = new Vue()

Vue.component('columns', {
    data() {
        return {
            cards: [],
            column1: []
        }
    },
    template:
    `
    <div class="list-notes">
    <div class="row-col">
        <create-card></create-card>
        <div class="col">
        <card :cards="cards"></card>
        </div>
        <div class="col">

        </div>
        <div class="col">

        </div>
    </div>
    </div>
    `,
    methods: {

    },
    mounted() {
        eventBus.$on('card-submitted', card => {
            this.cards.push(card)
        })
    }
})

Vue.component('card', {
    props: {
      cards: {
          type: Array
      }
    },
    template:`
    <div>
    <div>
        <div class="cardOne"  v-for="card in cards">
            <p>{{ card.title }}</p>
        <ul>
                <li>{{ card.note1 }}</li>
                <li>{{ card.note2 }}</li>
                <li>{{ card.note3 }}</li>
                <li>{{ card.note4 }}</li>
                <li>{{ card.note5 }}</li>
        </ul>
        </div>
           </div>

    </div>
    `,
    methods: {
    },
})

Vue.component('create-card', {

    template:`
    <div class="forms-create-card">
    <form class="text-form-card" @submit.prevent="onSubmit">
    <label for="title">Заголовок</label>
    <input v-model="title" id="title" type="text" placeholder="Заголовок">
    <label for="note">Введите свои заметки</label>
<!--    <textarea v-model="notes" id="note" placeholder="Пункты"></textarea>-->
        <input v-model="note1" id="note" type="text" placeholder="1 пункт">
        <input v-model="note2" id="note" type="text" placeholder="2 пункт">
        <input v-model="note3" id="note" type="text" placeholder="3 пункт">
        <input v-model="note4" id="note" type="text" placeholder="4 пункт">
        <input v-model="note5" id="note" type="text" placeholder="5 пункт">
    <button type="submit">Создать</button>
    </form>
    </div>
    `,
    data(){
        return{
            title: null,
            note1: null,
            note2: null,
            note3: null,
            note4: null,
            note5: null,
        }
    },
    methods:{
        onSubmit(){
            let createCard = {
                title: this.title,
                note1: this.note1,
                note2: this.note2,
                note3: this.note3,
                note4: this.note4,
                note5: this.note5,
            }
            eventBus.$emit('card-submitted', createCard)
            this.title = null,
            this.note1 = null,
            this.note2 = null,
            this.note3 = null,
            this.note4 = null,
            this.note5 = null
        }
    }
})

let app = new Vue({
    el: '#app',

})