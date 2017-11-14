<template>
  <div class="container">
    <div class="form">
      <md-input-container class="md-accent" md-clearable>
        <label>Todo</label>
        <md-input v-model="newTodo.name" @keyup.enter.native="addToDo"></md-input>
      </md-input-container>
    </div>
    <md-list>
      <md-list-item v-for="todo in todos" :key="todo['.key']" @click="onItemSelected(todo)">
        <span>{{ todo.name }}</span>
        <md-button class="md-icon-button md-list-action" @click="removeToDo(todo)">
          <md-icon>delete</md-icon>
        </md-button>
        <md-divider></md-divider>
      </md-list-item>
    </md-list>

    <md-snackbar :md-position="snackbar.position.vertical + ' ' + snackbar.position.horizontal" ref="snackbar">
      <span>{{ snackbar.message }}</span>
    </md-snackbar>
  </div>
</template>

<script>
  /* eslint-disable func-names,object-shorthand */
  import Firebase from 'firebase';

  const config = {
    apiKey: 'AIzaSyAn4UuKEDqnmA1ohKyhddWgE42XUml6mew',
    authDomain: 'learn-vuejs.firebaseapp.com',
    databaseURL: 'https://learn-vuejs.firebaseio.com',
    projectId: 'learn-vuejs',
    storageBucket: 'learn-vuejs.appspot.com',
    messagingSenderId: '1046461841298',
  };

  const app = Firebase.initializeApp(config);
  const db = app.database();

  export default {
    name: 'ToDoFirebase',
    data() {
      return {
        newTodo: {
          name: '',
        },
        snackbar: {
          message: '',
          position: {
            vertical: 'bottom',
            horizontal: 'left',
          },
        },
      };
    },
    firebase: {
      todos: db.ref('todos'),
    },
    methods: {
      addToDo() {
        if (this.newTodo.name.trim() === '') {
          this.snackbar.message = 'Can\'t add item';
          this.$refs.snackbar.open();
        } else {
          this.$firebaseRefs.todos.push(this.newTodo);
          this.snackbar.message = 'Added Todo item';
          this.$refs.snackbar.open();
          this.newTodo.name = '';
        }
      },
      removeToDo(item) {
        this.$firebaseRefs.todos.child(item['.key']).remove();
      },
      onItemSelected(item) {
        this.newTodo = { ...item };
        delete this.newTodo['.key'];
      },
    },
  };
</script>

<style scoped>
  .container {
    margin: 16px;
  }
</style>
