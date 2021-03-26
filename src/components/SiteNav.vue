<template>
  <header>
    <section>
      <div class="col1">
        <router-link to="https://build-early-ed-webapp-h4lzp.ondigitalocean.app/">
          <h3>Build Early Ed</h3>
        </router-link>
        <ul class="inline">
          <li>
            <router-link to="/">Job Board</router-link>
          </li>
          <li>
            <router-link to="/settings">Settings</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li><a @click="logout()">logout</a></li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
