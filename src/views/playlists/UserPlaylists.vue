<template>
  <div class="user-playlists">
      <div v-if="playlists">
        <ListView :playlists="playlists" />
      </div>
        <RouterLink :to="{name: 'CreatePlaylists'}" class="btn">Create Playlist</RouterLink>
  </div>
</template>

<script>
import getCollection from '../../composables/getCollection'
import getUser from '../../composables/getUser'
import ListView from '../../components/ListView.vue'
export default {
    components: { ListView },
    setup(){
        const {user} = getUser()
        const { documents: playlists } = getCollection('playlists', ['userId', '==', user.value.uid])

        return {playlists}
    }
}
</script>

<style>

</style>