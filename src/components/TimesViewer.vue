<template>
  <div class="viewer">
    <div class="field-group">
      <md-input-container>
        <label for="source">Source</label>
        <md-select name="source" id="source" v-model="source">
          <md-option value="all">All</md-option>
          <md-option value="nyt">New York Times</md-option>
          <md-option value="iht">International New York Times</md-option>
        </md-select>
      </md-input-container>
      <md-input-container>
        <label for="section">Section</label>
        <md-select name="section" id="section" v-model="section">
          <md-option v-for="sectionItem in sectionList" :value="sectionItem.section" :key="sectionItem.id">{{ sectionItem.display_name }}
          </md-option>
        </md-select>
      </md-input-container>
    </div>
    <news-list :source="source" :section="section" :api_key="apiKey" />
  </div>
</template>

<script>
  import NewsList from './TimesViewer/NewsList';

  export default {
    name: 'TimesViewer',
    components: {
      NewsList,
    },
    data() {
      return {
        apiKey: '888007dcb0af4c879f99629ebe25aa41',
        source: 'all',
        section: 'all',
        sectionList: [],
      };
    },
    created() {
      this.fetchSections();
    },
    methods: {
      fetchSections() {
        const baseUrl = 'https://api.nytimes.com/svc/news/v3/content/section-list.json';
        this.$http.get(`${baseUrl}?api-key=${this.apiKey}`)
            .then((result) => {
              this.sectionList.push({
                section: 'all',
                display_name: 'All',
              });
              this.sectionList = this.sectionList.concat(result.data.results);
            });
      },
    },
  };
</script>

<style scoped>
  .viewer {
    margin: 16px;
  }

  .field-group {
    display: flex;
  }

  .md-input-container {
    max-width: 240px;
  }

  .md-input-container:nth-of-type(2) {
    margin-left: 16px;
  }
</style>
