<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create New Playlist</h4>
    <input type="text" required placeholder="Playlist title" v-model="title">
    <textarea required placeholder="Playlist description" v-model="description"></textarea>
    <label for="image">Upload a cover playlist image</label>
    <input type="file" id="image" @change="handleChange">
    <div class="error" v-if="err">{{error}}</div>
    <button v-if="!isPending">Create</button>
    <button v-else disabled>Saving</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import { useRouter } from 'vue-router'

export default {
  setup(){
    const err= ref(null)
    const title  =  ref('')
    const description = ref('')
    const file = ref(null)
    const isPending = ref(false)
    const router = useRouter()

    const { filePath, url, uploadImage } = useStorage()
    const {error, addDoc} = useCollection('playlists')
    const {user, name} = getUser()

    const handleSubmit = async()=>{
      if(file.value){
        isPending.value = true
        await uploadImage(file.value)
        const res = await addDoc({
          title: title.value,
          description: description.value,
          userId: user.value.uid,
          userName: name.value,
          coverUrl: url.value,
          filePath: filePath.value,
          songs: [],
          createdAt: timestamp()
        })
        isPending.value = false
        if(!error.value){
          router.push({name: 'PlaylistDetails', params: {  id: res.id }})
        }
      }
    }

    const types = ['image/png', 'image/jpeg']
    
    const handleChange = (e)=>{
      const selected = e.target.files[0]

      if(selected && types.includes(selected.type)){
        file.value = selected
        err.value = null
      } else {
        file.value = null
        err.value = 'Please select an image file (png or jpeg)'
      }
    }

    return {title, description, handleSubmit, handleChange, err, error, isPending}
  }
}
</script>

<style>
input[type="file"]{
  border:0;
  padding: 0;
}
label{
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button{
  margin-top: 20px;
}
</style>