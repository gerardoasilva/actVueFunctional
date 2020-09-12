// Show cost of services
Vue.component('list-stats', {
  template: `
  <div class="item">
    <p>Total: {{ total }}</p>
  </div>`,
  props: {
    total: Number
  }
})

// each item in services list
Vue.component('list-item', {
  data: function() {
    return { 
      isChecked: false, 
      cost: 0 
    }
  },
  template: `
  <section class="item" @click="setCost">
    <div id="checkbox">
      <div v-if="!isChecked" class="circle-svg svg-wrapper"> 
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
      </div>
      <div v-if="isChecked" class="check-circle-svg svg-wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </div>   
    </div>
    <div id="item">
      <p>{{ todo.name }}</p>
    </div>
    <p id="itemPrice">
      {{ todo.price }}
    </p>
  </section>`,
  props: {
    todo: Object,
    todos: Array,
    total: Number
  },
  methods: {
    setCost() {
      this.isChecked = !this.isChecked
      this.cost = this.$props.todo.price;
      this.$emit('updateCost', {cost: this.cost, isChecked: this.isChecked})
    }
  }
})

Vue.component('home', {
  data: function() {
    return {
    }
  },
  template: `
  <main id="landing">
        <div class="content">
          <h1 class="title">This is our website</h1>
          <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </main>`
})

Vue.component('projects', {
  data: function() {
    return {
      articles: [{
      "title": "The best web dev bootcap",
      "url": "http://google.com",
      "image": {
          "large": "https://isquareesquare.com/images/small-img-11.jpg",
          "small": "https://isquareesquare.com/images/small-img-11.jpg"
      }
    },
    {
      "title": "Hello world in every language",
      "url": "http://google.com",
      "image": {
          "large": "https://isquareesquare.com/images/small-img-11.jpg",
          "small": "https://isquareesquare.com/images/small-img-11.jpg"
      }
    },
    {
      "title": "How to manage time efficiently",
      "url": "http://google.com",
      "image": {
          "large": "https://isquareesquare.com/images/small-img-11.jpg",
          "small": "https://isquareesquare.com/images/small-img-11.jpg"
      }
    }],
    layout: 'grid'
    }
  },
  template: `
    <form  id="projects-form" v-cloak>
      <div class="bar">
        <a class="list-icon" v-bind:class="{ 'active': layout == 'list'}" v-on:click="layout = 'list'"></a>
        <a class="grid-icon" v-bind:class="{ 'active': layout == 'grid'}" v-on:click="layout = 'grid'"></a>
      </div>

      <ul v-if="layout == 'grid'" class="grid">
        <li v-for="a in articles">
          <a v-bind:href="a.url" target="_blank"><img v-bind:src="a.image.large" /></a>
        </li>
      </ul>

      <ul v-if="layout == 'list'" class="list">
        <li v-for="a in articles">
          <a v-bind:href="a.url" target="_blank"><img v-bind:src="a.image.small" /></a>
          <p>{{a.title}}</p>
        </li>
      </ul>

    </form>`
})

Vue.component('services', {
  data: function() {
    return {
      total: 0,
      todos: [  {name: "Web Development", price: 300},
                {name: "Design", price: 400},
                {name: "Integration", price: 250},
                {name: "Trainning", price: 220}]
    }
  },
  template: `
  <main id="services">
    <div id="list-items-wrapper">
      <list-item v-for="todo in todos"
        :key="todo.name"
        :todo="todo"
        :todos="todos"
        :total="total"
        v-on:updateCost="updateTotal($event)"
      > 
      </list-item>
      <list-stats :total="total"></list-stats>
    </div>
  </main>`,
  methods: {
    updateTotal(ev) {
      if (ev.isChecked) {
        this.total += ev.cost
      } else {
        this.total -= ev.cost
      }
    }
  }
})


var navbar = new Vue({
  el: '#nav-bar',
  data: {
    active: 'home'
  },
  methods: {
    makeActive: function(item){
      this.active = item;
    }
  }
});

// var grid = new Vue({
//   el: '#projects-form',
//   data: {
//     articles: [{
//       "title": "The best web dev bootcap",
//       "url": "http://google.com",
//       "image": {
//           "large": "https://isquareesquare.com/images/small-img-11.jpg",
//           "small": "https://isquareesquare.com/images/small-img-11.jpg"
//       }
//     },
//     {
//       "title": "Hello world in every language",
//       "url": "http://google.com",
//       "image": {
//           "large": "https://isquareesquare.com/images/small-img-11.jpg",
//           "small": "https://isquareesquare.com/images/small-img-11.jpg"
//       }
//     },
//     {
//       "title": "How to manage time efficiently",
//       "url": "http://google.com",
//       "image": {
//           "large": "https://isquareesquare.com/images/small-img-11.jpg",
//           "small": "https://isquareesquare.com/images/small-img-11.jpg"
//       }
//     }],
//     layout: 'grid'

//   }
// });
