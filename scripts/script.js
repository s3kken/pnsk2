Vue.component('columns', {

    template:
    `
    <div class="list-notes">
    <div class="row-col">
        <div class="col">
            <card></card>
        </div>
        <div class="col">
            <card></card>
        </div>
        <div class="col">
            <card></card>
        </div>
    </div>
    <div class="block-form">
    <create-card></create-card>
    </div>
    </div>
    `

})

Vue.component('card', {

    template:`
    <div class="cardOne">
        <h4>Карточка</h4>
        <ul>
        <li>пункт</li>
        </ul>
    </div>
    `
})

Vue.component('create-card', {
    template:`
    <div class="forms-create-card">
    <form class="text-form-card">
    <input type="text" placeholder="Заголовок">
    <label for="note">Введите свои заметки</label>
    <textarea id="note" placeholder="Список дел!"></textarea>

    <button type="submit">Создать</button>
    </form>
    </div>
    `
})

let app = new Vue({
    el: '#app',

})