<template>
  <transition name="fade">
    <div class="container" @click="contentActive = !contentActive">
      <div class="card">
        <div class="card-content">
          <div class="media is-marginless">
            <div class="media-left">
              <figure class="image is-64x64">
                <a :href="article.urlToImage"><img :src="this.article.urlToImage === null ? source.urlsToLogos.medium : article.urlToImage" alt="Image not available"></a>
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-marginless is-4"><a :href="article.url">{{ article.title }}</a></p>
            </div>
          </div>
          <transition name="slide-fade">
            <div v-show="contentActive" class="content">
              <p class="subtitle is-marginless is-6"><small>by</small> {{ article.author }}</p>
              <small><strong>{{ date }}  @  {{ time }}</strong></small>
              {{ article.description }}
              <br/>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SingleArticle',
  props: ['article', 'source'],
  data () {
    return {
      contentActive: false
    };
  },
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
.slide-fade-enter-active {
  transition: all .25s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateY(-16px);
  opacity: 0;
}

</style>