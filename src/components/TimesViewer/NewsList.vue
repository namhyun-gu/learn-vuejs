<template>
  <div class="list">
    <template v-if="newsList.length != 0">
      <md-card v-for="news in newsList" :key="news.id">
        <md-card-header>
          <div class="md-title">{{ news.title }}</div>
          <div class="md-subhead" v-if="news.byline !== ''">{{ news.byline }} ({{ news.section }})</div>
          <div class="md-subhead" v-else>{{ news.section }}</div>
        </md-card-header>

        <md-card-content>
          {{ news.abstract }}
        </md-card-content>

        <md-card-actions>
          <md-button class="md-accent" target="_blank" :href="news.url">Open</md-button>
        </md-card-actions>
      </md-card>
    </template>
    <template v-else>
      <span class="error-message">No content</span>
    </template>
  </div>
</template>

<script>
  /* eslint-disable object-shorthand,func-names */

  export default {
    name: 'news-list',
    props: {
      api_key: {
        type: String,
        default() { return null; },
      },
      source: {
        type: String,
        default() { return 'all'; },
      },
      section: {
        type: String,
        default() { return 'all'; },
      },
    },
    data() {
      return {
        newsList: [],
      };
    },
    created() {
      this.fetchNews();
    },
    watch: {
      source: function () {
        this.fetchNews();
      },
      section: function () {
        this.fetchNews();
      },
    },
    methods: {
      fetchNews() {
        const baseUrl = 'https://api.nytimes.com/svc/news/v3';
        this.$http
            .get(`${baseUrl}/content/${this.source}/${this.section}/.json?api-key=${this.api_key}`)
            .then((result) => {
              this.newsList = result.data.results;
            })
            .catch(() => {
              this.newsList = [];
            });
      },
    },
  };
</script>

<style scoped>
  .list {
  }

  .md-card {
    margin-bottom: 16px;
  }
</style>
