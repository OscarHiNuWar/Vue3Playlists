<template>
  <div class="navbar">
      <nav>
          <img src="@/assets/logo.svg" alt="">
          <h1><RouterLink :to="{ name: 'home' }">Home</RouterLink></h1>
          <div class="links">
                <div v-if="user">
                <p>Hello {{name}}</p> 
                <RouterLink class="btn" :to="{ name: 'CreatePlaylists' }">Create Playlist</RouterLink>
                <RouterLink class="btn" :to="{ name: 'UserPlaylists' }">My Playlist</RouterLink>
                <button  @click="handleLogout">Logout</button>
                </div>
                <div  v-else>
                    <RouterLink class="btn" :to="{ name: 'Signup' }">Sign Up</RouterLink>
                    <RouterLink class="btn" :to="{ name: 'Login' }">Login</RouterLink>
                </div>
          </div>
        </nav>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'
import useLogout from '../composables/useLogout'


export default {
    setup(){
        const {logout, error, isPending} = useLogout()
        const router = useRouter()
        const {user, name} = getUser()

        const handleLogout = async()=> {
           await logout()
            if(!error.value){
                console.log('user loged off')
                router.push({ name: 'home'})
            }
        }
        return { handleLogout, error, isPending, user, name }
    }
}
</script>

<style scoped>
.navbar{
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
}
nav{
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}
nav h1{
    margin-left: 20px;
}
nav .links{
    margin-left: auto;
}
nav .links a, button, p{
    margin-left: 16px;
    font-size: 14px;
}
nav img{
    max-height: 60px;
}
</style>