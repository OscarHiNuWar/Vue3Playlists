<template>
  <form @submit.prevent="handleSubmit">
    <h4>Crear un nuevo Profesor</h4>
    <p>Nombre</p>
    <input type="text" required v-model="nombre" >
    <p>Apellido</p>
    <input type="text" required v-model="apellido">
    <p>Cedula</p>
    <input type="text" required v-model="cedula">
    <p>Correo</p>
    <input type="text" required v-model="correo">
    <p>Codigo</p>
    <input type="text" required v-model="codigo">
    <div class="error" v-if="err">{{error}}</div>
    <button v-if="!isPending">Create</button>
    <button v-else disabled>Saving</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import useCollection from '../../composables/useCollection'
export default {
    setup(){
        const err = ref(null)
        const isPending = ref(false)
        const nombre = ref('')
        const apellido = ref('')
        const cedula = ref('')
        const correo = ref('')
        const codigo = ref('')

        const router = useRouter()

        const { error, addDoc } = useCollection('profesor')

        const handleSubmit = async() => {
            isPending.value = true
            
            await addDoc({
                nombre: nombre.value,
                apellido: apellido.value,
                cedula: cedula.value,
                correo: correo.value,
                codigo: codigo.value
            })
            isPending.value=false
            if(!error.value){
                router.push({name: 'home'})
            }
        }

        return {err, error, isPending, handleSubmit, nombre, apellido, cedula, codigo, correo}
    }
}
</script>

<style>

</style>