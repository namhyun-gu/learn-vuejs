<template>
  <div>
    <md-toolbar class="md-transparent">
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">Learn Vue.js</h2>
    </md-toolbar>

    <div>
      <router-view/>
    </div>

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
  </div>
</template>

<script>
  export default {
    name: 'Main',
    data() {
      return {
        sidenavItems: [
          { icon: 'home', title: 'Home', route: '/' },
        ],
      };
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
