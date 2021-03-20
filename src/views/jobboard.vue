<template>
    <!-- Job Board View-->
  <div id="jobboard">
    <!--Use a transition fade for the show or hide animation of the comment modal -->
    <transition name="fade">
      <CommentModal v-if="showCommentModal" :post="selectedPost" @close="toggleCommentModal()"></CommentModal>
    </transition>
    <section>
      <div class="col1">
        <div class="profile">
          <h5>{{ userProfile.name }}</h5>
          <p>{{ userProfile.title }}</p>
              <!-- Add the create post method on the submit button-->
          <div class="create-post">
            <p>create a post</p>
            <form @submit.prevent>
              <textarea v-model.trim="post.content"></textarea>
                  <!-- Disable the button until the user has entered content-->
              <button @click="createPost()" :disabled="post.content === ''" class="button">post</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col2">
        <div v-if="posts.length">
          <!--Display the posts using v-for -->
          <div v-for="post in posts" :key="post.id" class="post">
            <!--Display username for posts -->
            <h5>{{ post.userName }}</h5>
            <!--Include and format date post was created-->
            <span>{{ post.createdOn | formatDate }}</span>
            <!--Display content of the post and format the length -->
            <p>{{ post.content | trimLength }}</p>
            <ul>
              <!--Allow for users to interact with eachother through comments, likes, and viewing the full post. Add click event to show/hide modal -->
              <li><a @click="toggleCommentModal(post)">comments {{ post.comments }}</a></li>
              <li><a @click="likePost(post.id, post.likes)">likes {{ post.likes }}</a></li>
              <li><a @click="viewPost(post)">view full post</a></li>
            </ul>
          </div>
        </div>
        <div v-else>
          <p class="no-results">There are currently no posts</p>
        </div>
      </div>
    </section>

    <!-- full post modal -->
    <transition name="fade">
      <div v-if="showPostModal" class="p-modal">
        <div class="p-container">
          <a @click="closePostModal()" class="close">close</a>
          <div class="post">
            <!--Display post username, date created on, and full content -->
            <h5>{{ fullPost.userName }}</h5>
            <span>{{ fullPost.createdOn | formatDate }}</span>
            <p>{{ fullPost.content }}</p>
            <ul>
              <li><a>comments {{ fullPost.comments }}</a></li>
              <li><a>likes {{ fullPost.likes }}</a></li>
            </ul>
          </div>
          <!--Display comments on the post with corresponding date and username -->
          <div v-show="postComments.length" class="comments">
            <div v-for="comment in postComments" :key="comment.id" class="comment">
              <p>{{ comment.userName }}</p>
              <span>{{ comment.createdOn | formatDate }}</span>
              <p>{{ comment.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<!-- We can expand the functionality of the Job Board by allowing users to upload files including an avatar, resume, survey or job summary. Creating a dashboard for users to see how many new messages or postings are available since their previous login is another feature to continue expanding on capabilities. -->

    <!-- Give users ability to make posts -->
<script>
import { commentsCollection } from '@/firebase'
import { mapState } from 'vuex'
import moment from 'moment'
import CommentModal from '@/components/CommentModal'

export default {
  components: {
    CommentModal
  },
  data() {
    return {
      //update data object to allow users to post content
      post: {
        content: ''
      },
      showCommentModal: false,
      selectedPost: {},
      showPostModal: false,
      fullPost: {},
      postComments: []
    }
  },
  //Use mapState to pull userProfile and posts objects into dashboard component
  computed: {
    ...mapState(['userProfile', 'posts'])
  },
  methods: {
  //Make the method for users to post in the board
    createPost() {
      this.$store.dispatch('createPost', { content: this.post.content })
      this.post.content = ''
    },
    //Make method to show/hide modal
    toggleCommentModal(post) {
      this.showCommentModal = !this.showCommentModal

      // if opening modal set selectedPost, else clear
      if (this.showCommentModal) {
        this.selectedPost = post
      } else {
        this.selectedPost = {}
      }
    },
    //count how many likes a post recieves
    likePost(id, likesCount) {
      this.$store.dispatch('likePost', { id, likesCount })
    },
    //create viewPost and closePost toggle methods
    async viewPost(post) {
      const docs = await commentsCollection.where('postId', '==', post.id).get()

      docs.forEach(doc => {
        let comment = doc.data()
        comment.id = doc.id
        this.postComments.push(comment)
      })

      this.fullPost = post
      this.showPostModal = true
    },
    closePostModal() {
      this.postComments = []
      this.showPostModal = false
    }
  },
  //Apply filters to format the date and trim the posting length
  filters: {
    formatDate(val) {
      if (!val) { return '-' }

      let date = val.toDate()
      return moment(date).fromNow()
    },
    trimLength(val) {
      if (val.length < 200) { return val }
      return `${val.substring(0, 200)}...`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

