<template>
  <div>
    <md-toolbar class="md-transparent">
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">{{ title }}</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav">
      <md-whiteframe>
        <md-toolbar class="md-transparent">
          <h2 class="md-title" style="flex: 1; align-content: center;">Learn Vue.js</h2>
        </md-toolbar>
      </md-whiteframe>
      <md-list>
        <md-list-item v-for="item in sidenavItems" :key="item.id" @click="navigateRoute(item.route)">
          <md-icon>{{ item.icon }}</md-icon>
          <span>{{ item.title }}</span>
        </md-list-item>
      </md-list>
    </md-sidenav>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
  /* eslint-disable quote-props,func-names,object-shorthand */
  import _ from 'lodash';

  export default {
    name: 'Main',
    data() {
      return {
        routeName: '',
        sidenavItems: [
          { icon: 'home', title: 'Home', route: '/' },
          { icon: 'web', title: 'TimesViewer', route: '/times-viewer' },
          { icon: 'web', title: 'ToDoFirebase', route: '/todo-firebase' },
        ],
      };
    },
    created() {
      this.routeName = this.$route.name;
    },
    watch: {
      '$route': function () {
        this.routeName = this.$route.name;
      },
    },
    computed: {
      title: function () {
        return _.startCase(this.routeName).replace(' ', '');
      },
    },
    methods: {
      toggleLeftSidenav() {
        this.$refs.leftSidenav.toggle();
      },
      navigateRoute(route) {
        this.toggleLeftSidenav();
        this.$router.push(route);
      },
    },
  };
</script>

<style scoped>

</style>
