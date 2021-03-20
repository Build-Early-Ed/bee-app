<template>
<!--Settings View -->
  <section id="settings">
    <div class="col1">
      <h3>Settings</h3>
      <p>Update your profile</p>
      <!--Show Profile Updated when success -->
      <transition name="fade">
        <p v-if="showSuccess" class="success">profile updated</p>
      </transition>

      <form @submit.prevent>
      <!--Display User Name -->
        <label for="name">Name</label>
        <input v-model.trim="name" type="text" :placeholder="userProfile.name" id="name" />
      <!--Display Job Title of User -->
        <label for="title">Job Title</label>
        <input v-model.trim="title" type="text" :placeholder="userProfile.title" id="title" />
      <!--Display Update Profile Button -->
        <button @click="updateProfile()" class="button">Update Profile</button>
      </form>
    </div>
  </section>
</template>
      <!--To expand the functionality of user settings, we may create separate portals for organizations and community members as well as integrate options to upload files for their avatars and postings. Consider options to increase user security through their personal settings options to opt out of certain data collection or adjust the visual layout of the site to align with user preferences.-->

<script>
//import mapState to reference userProfile
import { mapState } from 'vuex'

export default {
  data() {
    return {
      name: '',
      title: '',
      showSuccess: false
    }
  },
  computed: {
    ...mapState(['userProfile'])
  },
  methods: {
    //Create updateProfile method to allow users to change their title and name
    updateProfile() {
      this.$store.dispatch('updateProfile', {
        name: this.name !== '' ? this.name : this.userProfile.name,
        title: this.title !== '' ? this.title : this.userProfile.title
      })

      this.name = ''
      this.title = ''

      this.showSuccess = true

      setTimeout(() => {
        this.showSuccess = false
      }, 2000)
    }
  }
}
</script>
