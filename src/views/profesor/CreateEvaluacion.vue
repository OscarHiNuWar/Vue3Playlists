<template>
  <form @submit.prevent="handleSubmit">
    <h4>Crear Evaluacion</h4>
    <input type="text" required v-model="evaluacion">
    <div class="error" v-if="err">{{error}}</div>
    <button v-if="!isPending">Create</button>
    <button v-else disabled>Saving</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import useCollection from '../../composables/useCollection'
import getCollection from '../../composables/getCollection'
import { incrementValue } from '../../firebase/config'
export default {
    setup(){
        const evaluacion = ref('')
        const err = ref(null)
        const isPending = ref(false)
        const router = useRouter()

        const { error, addDoc } = useCollection('evaluacion')

        const { documents: evaluaciones } = getCollection('evaluacion')

        console.log(evaluaciones)

        const handleSubmit= async ()=>{
            isPending.value = true

            await addDoc({
                id: incrementValue,
                evaluacion: evaluacion.value
            })
            isPending.value = false
            if(!error.value){
                router.push({name:'home'})
            }
        }

        return {handleSubmit, error, err, evaluacion, isPending, evaluaciones}
    }
}
</script>

<style>

</style>