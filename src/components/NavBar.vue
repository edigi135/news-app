<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://newsapi.org" target="_blank">
        <span class="icon is-large">
          <i class="fa fa-newspaper-o"></i>
        </span>
      </a>
      <a class="navbar-item" href="/">
        <strong>Headlines</strong>
      </a>
      <div class="navbar-burger burger" data-target="navMenuExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
      </div>
      <div class="navbar-end">
        <a class="navbar-item" href="https://github.com/edigi135" target="_blank">
          <small>Evan DiGiambattista</small>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #fff;
}
</style>