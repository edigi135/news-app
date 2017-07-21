<template>
  <div>
    <div v-if="isLoading">
      LOADING
    </div>
    <SingleArticle
      v-else
      v-for="(article, index) in articleArr"
      :article="article"
      :source="articleObj"
      :key="index">
    </SingleArticle>
    <br/>
    <br/>
  </div>
  
</template>

<script>
import SingleArticle from './SingleArticle.vue';

export default {
  name: 'ArticleView',
  props: ['articleObj', 'articleArr'],
  components: {
    SingleArticle
  },
  data () {
    return {
      isLoading: false
    };
  }
};
</script>

<style lang="scss" scoped>
</style>