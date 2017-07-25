<template>
  <div>
    <section class="hero is-small is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-2"></div>
            <div class="column is-8 has-text-centered">
              <h1 class="title">
                Choose a Source
              </h1>
              <div class="field">
                <span class="control" :class="{'is-loading': isLoading}">
                  <span class="select">
                    <select v-model="selectedSource">
                      <option
                        v-for="(source, index) in sources"
                        :value="source"
                        :key="source.id">
                        {{ source.name }}
                      </option>
                    </select>
                  </span>
                </span>
              </div>
              <p><small>{{selectedSource.description}}</small></p>
            </div>
            <div class="column is-2"></div>
          </div>
        </div>
      </div>
    </section>
    <ArticleView
      v-if="articles !== {}"
      :articleObj="selectedSource"
      :articleArr="articles">
    </ArticleView>
  </div>
</template>

<script>
import server from '../server';
import ArticleView from './ArticleView.vue';

export default {
  name: 'SourceSelector',
  components: {
    ArticleView
  },
  props: [],
  data () {
    return {
      sources: [],
      selectedSource: '',
      articles: [],
      isLoading: false
    };
  },
  mounted () {
    this.isLoading = true;
    server.getSources().then(res => {
      this.sources = res;
      this.isLoading = false;
    })
    .catch(err => console.error(err));
  },
  methods: {
    performGet (evt) {
      server.getArticles(evt.id).then(res => {
        this.articles = res;
      })
      .catch(err => console.error(err));
    }
  },
  watch: {
    'selectedSource' (newVal) {
      this.performGet(newVal);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>