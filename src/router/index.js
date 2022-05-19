import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '../firebase/config'
import LoginVue from '../views/auth/Login.vue'
import SignupVue from '../views/auth/Signup.vue'
import CreatePlaylist from '../views/playlists/createPlaylist.vue'
import HomeView from '../views/HomeView.vue'
import playlistDetailsVue from '../views/playlists/playlistDetails.vue'
import UserPlaylistsVue from '../views/playlists/UserPlaylists.vue'


const requireAuth = (to, from, next)=> {
  let user = projectAuth.currentUser
  if(!user){
    next({name: 'Login'})
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginVue
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupVue
    },
    {
      path: '/playlists/create',
      name: 'CreatePlaylists',
      component: CreatePlaylist,
      beforeEnter: requireAuth
    },
    {
      path: '/playlist/:id',
      name: 'PlaylistDetails',
      component: playlistDetailsVue,
      beforeEnter: requireAuth,
      props: true
    },
    {
      path: '/playlists/user',
      name: 'UserPlaylists',
      component: UserPlaylistsVue,
      beforeEnter: requireAuth
    }
  ]
})

export default router
