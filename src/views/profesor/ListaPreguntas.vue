<template>
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Pregunta</th>
            <th>Eliminar</th>
        </tr>
    </thead>
    <tbody v-for="(preg, index, key) in preguntas" :key="key">
        <td>{{index+1}} -  </td>
        <td>{{preg}}</td>
        <td><h5 @click="eliminarPregunta(index)">Eliminar</h5></td>
    </tbody>
</table>
  
</template>

<script>
export default {
    props: ["preguntas"],
    setup(props){
        const data = props
        
        const eliminarPregunta = (index)=>{
            data.preguntas.pop(index+1)
        }

        return {eliminarPregunta}
    }
}
</script>

<style>

</style>