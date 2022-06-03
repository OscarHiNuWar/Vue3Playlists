<template>
  <form @submit.prevent="handleSubmit">
    <h4>Crear Clase</h4>
    <p>Nombre</p>
    <input type="text" required v-model="nombre">
    <p>Codigo</p>
    <input type="text" required v-model="codigo">
    <p>Grupo</p>
    <input type="text" required v-model="grupo">
    <div class="error" v-if="err">{{error}}</div>
    <button v-if="!isPending">Create</button>
    <button v-else disabled>Saving</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useCollection from '../../composables/useCollection'
import { useRouter } from 'vue-router'
export default {
    setup(){
        const err = ref(null)
        const nombre = ref('')
        const codigo = ref('')
        const grupo = ref('')
        const isPending = ref(false)

        const {error, addDoc} = useCollection('clase')
        const router = useRouter()

        const handleSubmit = async()=>{
            isPending.value = true
            const res = await addDoc({
                nombre: nombre.value,
                codigo: codigo.value,
                grupo: grupo.value
            })
            isPending.value = false
            if(!error.value){
                router.push({name: 'home'})
            }
        }

        return {err, error, isPending, handleSubmit, nombre, codigo, grupo}

    }
}
</script>

<style>

</style>