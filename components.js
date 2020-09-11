/* text input for adding item to checklist */
Vue.component('list-input', {
  data: function() {
    return { userInput: "" }
  },
  template: `
    <div class="item">
      <p>Add item</p>
      <input type="text" v-model="userInput" @keydown.enter="addTodoItem"></input>
      <div class="plus-circle-svg svg-wrapper" @click="addTodoItem">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
      </div>
    </div>
  `,
  methods: {
    addTodoItem: function() {
      if(this.userInput !== "") {
        this.todos.push(this.userInput);
        this.userInput = "";
      }
    }
  },
  props: {
    todos: Array
  }
});

/* shows checklist length */
Vue.component('list-stats', {
  template: `
  <div class="item">
    <p>Todos: {{ todos.length }}</p>
  </div>`,
  props: {
    todos: Array
  }
})

/* each item in checklist */
Vue.component('list-item', {
  data: function() {
    return { isChecked: false }
  },
  template: `
  <section class="item">
    <div id="checkbox" @click="isChecked = !isChecked">
      <div v-if="!isChecked" class="circle-svg svg-wrapper"> 
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
      </div>
      <div v-if="isChecked" class="check-circle-svg svg-wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </div>   
    </div>
    <div id="item">
      <p>{{ todo }}</p>
    </div>
    <div class="trash-svg svg-wrapper" @click="removeItem(todo)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
    </div>
  </section>`,
  methods: {
    removeItem: function(todo) {
      let trashedItemIndex = this.todos.indexOf(todo)
      this.todos.splice(trashedItemIndex, 1)
    }
  },
  props: {
    todo: String,
    todos: Array
  }
})

Vue.component('home', {
  data: function() {
    return {
      todos: [ 'Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo' ]
    }
  },
  template: `
  <main id="landing">
        <div class="content">
          <h1 class="title">This is our website</h1>
          <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, eligendi.</p>
        </div>
      </main>`
})

Vue.component('services', {
  data: function() {
    return {
      todos: [ 'Web Development', 'Design', 'Integration', 'Trainning']
    }
  },
  template: `
  <main id="services">
    <div id="list-items-wrapper">
      <list-item
        v-for="todo in todos"
        :key="todo"
        :todo="todo"
        :todos="todos"
      >
      </list-item>
      <list-stats :todos="todos"></list-stats>
    </div>
  </main>`
})

let vm = new Vue({
  el: '#app'
})

// Creating a new Vue instance and pass in an options object.
var demo = new Vue({
        el: '#nav-bar',
        // Define properties and give them initial values.
        data: {
                active: 'home'
        },

        // Functions we will be using.
        methods: {
                makeActive: function(item){
                        this.active = item;
                }
        }
});