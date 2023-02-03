let eventBus = new Vue()

Vue.component('columns', {
    data() {
        return {
            
        }
    },
    template:
    `
    <div class="list-notes">
    <div class="row-col">
        <create-card></create-card>
        <div class="col">
            <column-1></column-1>
        </div>
        <div class="col">
            <column-2></column-2>
        </div>
        <div class="col">
            <column-3></column-3>
        </div>
    </div>
    </div>
    `,
})

Vue.component('column-1',{
    template:`
    <div class="faf">
    <card></card>
    </div>
    `
})
Vue.component('column-2',{
    template:`
    <div>
    <card></card>
    </div>
    `
})
Vue.component('column-3',{
    template:`
    <div>
    <card></card>
    </div>
    `
})
Vue.component('card',{

      template:`
      <div>
      <div>
          <div class="cardOne">
              <p>{{ card.title }}</p>
          <ul>
                 <li v-for="point in point.arrNotes">
                    {{point.pointTitle}}
                 </li>
          </ul>
          </div>
             </div>
  
      </div>
      `,
})
Vue.component('create-card',{
    template:`
    <div class="forms-create-card">
    <form class="text-form-card" @submit.prevent="onSubmit" >
    <label for="title">Заголовок</label>
    <input v-model="title" id="title" type="text" placeholder="Заголовок">
        <input v-model="note1" type="text" placeholder="1 пункт">
        <input v-model="note2" type="text" placeholder="2 пункт">
        <input v-model="note3" type="text" placeholder="3 пункт">
        <input v-model="note4" type="text" placeholder="4 пункт">
        <input v-model="note5" type="text" placeholder="5 пункт">
    <button type="submit">Создать</button>
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
            note1: null,
            note2: null,
            note3: null,
            note4: null,
            note5: null,
        }
    },
    methods: {

        onSubmit() {
            if (this.note1 && this.note2 && this.note3) {
                let createCard = {
                    title: this.title,
                    arrNotes:[
                        {pointTitle: this.note1, pointStatus: false },
                        {pointTitle: this.note2, pointStatus: false },
                        {pointTitle: this.note3, pointStatus: false },
                        {pointTitle: this.note4, pointStatus: false },
                        {pointTitle: this.note5, pointStatus: false },
                    ]
                }
                eventBus.$emit('card-submitted', createCard)
                this.title = null
                this.note1 = null
                this.note2 = null
                this.note3 = null
                this.note4 = null
                this.note5 = null
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