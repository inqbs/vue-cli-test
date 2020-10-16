<template>
  <div id="app">
    <div class="container">
      <header>
        <div class="row">
          <b-button size="sm" class="col-sm-1" @click="toggle">
            {{ show ? 'Hide' : 'Show' }} Alert
          </b-button>
        </div>
        <b-alert
          v-model="show"
          class="mt-3 col-sm"
          dismissible
          @dismissed="dismissed"
          fade
        >
          Hello {{ name }}!
        </b-alert>
      </header>
      <b-nav tabs id="nav" class="row justify-content-center">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/blog">Blog</b-nav-item>
        <b-nav-item to="/dropdown">Dropdown</b-nav-item>
      </b-nav>
      <main class="row justify-content-center">
        <transition name="fade" mode="out-in">
          <router-view class="col-sm align-self-center"/>
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: 'BootstrapVue',
      show: true
    }
  },
  methods: {
    toggle(){
      this.show = !this.show
    },
    dismissed(){
      console.log(`Alert dismissed`)
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>