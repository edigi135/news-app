<template>
  <div class="container">
    <div class="card">
      <div class="card-content">
        <div class="media is-marginless">
          <div class="media-left">
            <figure class="image is-96x96">
              <a :href="article.urlToImage"><img :src="this.article.urlToImage === null ? source.urlsToLogos.medium : article.urlToImage" alt="Image not available"></a>
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-marginless is-4"><a :href="article.url">{{ article.title }}</a></p>
            <p class="subtitle is-marginless is-6"><small>by</small> {{ article.author }}</p>
            <small><strong>{{ date }}  @  {{ time }}</strong></small>
          </div>
        </div>

        <div class="content">
          {{ article.description }}
          <br/>
          <!-- <small><strong>{{ date }}  ||  {{ time }}</strong></small> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleArticle',
  props: ['article', 'source'],
  computed: {
    dateTimeArr () {
      return this.article.publishedAt.split('T');
    },
    time () {
      return this.dateTimeArr[1].split('.')[0].slice(0, this.dateTimeArr[1].length - 1);
    },
    date () {
      return this.dateTimeArr[0];
    }
  }
};
</script>

<style lang="scss" scoped>
figure {
  overflow: hidden;
}
section {
  padding-top: 8px;
  padding-bottom: 2px;
}
</style>