<template>
  <form @submit.prevent="handleSubmit">
  <h4>Crear Preguntas</h4>
  <ListaPreguntas :preguntas="preguntas"/>
  <input type="text" v-model="pregunta">
  <a class="btn" @click="AddPregunta(pregunta)"> Add</a>
  <div class="error" v-if="err">{{error}}</div>
  <div>
       <button v-if="!isPending">Guardar</button>
       <button v-else disabled>Saving</button>
  </div>
 
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import useCollection from '../../composables/useCollection'
import ListaPreguntas from './ListaPreguntas.vue'
export default {
    components: {ListaPreguntas},
    setup(){
        const err = ref(null)
        const pregunta =ref('')
        //const allPreguntas = []
        const isPending = ref(false)
        const preguntas = ref([])

        const {error, addDoc} = useCollection('pregunta')
        const router = useRouter()

        const AddPregunta = (pregunta) =>{
            //allPreguntas.push(pregunta)
            preguntas.value.push(pregunta)
        }

        const handleSubmit = async()=>{
            isPending.value = true
            /*await addDoc({
                pregunta: pregunta.value
            })*/
            isPending.value = false
            /*if(!error.value){
                router.push({name: 'home'})
            }*/
            
        }

        return {err, error, isPending, handleSubmit, pregunta, preguntas, AddPregunta}
    }
}
</script>

<style>

</style>