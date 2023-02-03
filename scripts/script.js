let eventBus = new Vue()

Vue.component('columns', {
    data() {
        return {
            displayForm: true,
            cards: [[],[],[]],
        }
    },
    template:
    `
    <div class="list-notes">
    <div class="row-col">
        <create-card></create-card>
        <div class="col" @click="lengthColumn">
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
        lengthColumn(){
            this.displayForm = false
            let countFirst = this.cards[0].length
            let countSecond = this.cards[1].length
            console.log(countFirst);
            console.log(countSecond);
            if(countFirst >= 3){
                this.displayForm = false
            }else{
                this.displayForm = true
            }
            if(countSecond >= 5){
                this.displayForm = false
            }else{
                this.displayForm = true
            }
        }
    },
    mounted() {
        eventBus.$on('card-submitted', card => {
            this.cards[0].push(card)
            //console.log(this.cards)
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
        <div class="cardOne"  v-for="card in cards[0]">
            <p>{{ card.title }}</p>
        <div class="ul">
               <p @click="donePoint(card.note1)" v-for="points in card.notes">{{ points.pointTitle }} </p>
        </div>
        </div>
           </div>

    </div>
    `,
    methods: {
        donePoint(note){
            //console.log(note)
        }
    },
})

Vue.component('create-card', {
    props: {
        displayForm: Boolean
    },
    template:`
    <div class="forms-create-card">
    <form class="text-form-card" @submit.prevent="onSubmit" >
    <label for="title">Заголовок</label>
    <input v-model="title" id="title" type="text" placeholder="Заголовок">
    <label for="note">Введите свои заметки</label>
        <input v-model="note1.pointTitle" id="note" type="text" placeholder="1 пункт">
        <input v-model="note2.pointTitle" id="note" type="text" placeholder="2 пункт">
        <input v-model="note3.pointTitle" id="note" type="text" placeholder="3 пункт">
        <input v-model="note4.pointTitle" id="note" type="text" placeholder="4 пункт">
        <input v-model="note5.pointTitle" id="note" type="text" placeholder="5 пункт">
    <button type="submit" :disabled="displayForm">Создать</button>
    <p v-if="errors.length">
 <ul>
   <li v-for="error in errors">{{ error }}</li>
 </ul>
</p>

    </form>
    </div>
    `,
    data(){
        return{
            title: null,
            pointStatus: false,
            note1: {
                pointTitle: ''
            },
            note2: {
                pointTitle: ''
            },
            note3: {
                pointTitle: ''
            },
            note4: {
                pointTitle: ''
            },
            note5: {
                pointTitle: ''
            },
            errors: []

        }
    },
    methods: {

        onSubmit() {
            if (this.note1 && this.note2 && this.note3) {
                let createCard = {
                    title: this.title,
                    notes: [
                        {
                            pointTitle: this.note1.pointTitle,
                            pointStatus: this.pointStatus
                        },
                        {
                            pointTitle: this.note2.pointTitle,
                            pointStatus: this.pointStatus
                        },
                        {
                            pointTitle: this.note3.pointTitle,
                            pointStatus: this.pointStatus
                        },
                        {
                            pointTitle: this.note4.pointTitle,
                            pointStatus: this.pointStatus
                        },
                        {
                            pointTitle: this.note5.pointTitle,
                            pointStatus: this.pointStatus
                        },
                    ],
                }
                eventBus.$emit('card-submitted', createCard)
                this.title = null,
                    this.notes = []
            } else {
                if (!this.note1) this.errors.push("Заполните первый пункт!")
                if (!this.note2) this.errors.push("Заполните второй пункт!")
                if (!this.note3) this.errors.push("Заполните третий пункт!")
            }
        }
    }
})

let app = new Vue({
    el: '#app',

})