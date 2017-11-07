<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <md-button target="_blank" href="https://vuejs.org">Core Docs</md-button>
      </li>
      <li>
        <md-button target="_blank" href="https://forum.vuejs.org">Forum</md-button>
      </li>
      <li>
        <md-button target="_blank" href="https://chat.vuejs.org">Community Chat</md-button>
      </li>
      <li>
        <md-button target="_blank" href="https://twitter.com/vuejs">Twitter</md-button>
      </li>
      <br>
      <li>
        <md-button target="_blank" href="http://vuejs-templates.github.io/webpack/">Docs for This Template</md-button>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <md-button target="_blank" href="http://router.vuejs.org/">vue-router</md-button>
      </li>
      <li>
        <md-button target="_blank" href="http://vuex.vuejs.org/">vuex</md-button>
      </li>
      <li>
        <md-button target="_blank" href="http://vue-loader.vuejs.org/">vue-loader</md-button>
      </li>
      <li>
        <md-button target="_blank" href="https://github.com/vuejs/awesome-vue">awesome-vue</md-button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Vue.js App',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    margin-top: 60px;
    text-align: center;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
