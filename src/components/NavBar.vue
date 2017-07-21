<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
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
        <a class="navbar-item" href="#">
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