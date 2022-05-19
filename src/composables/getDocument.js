import { ref, watchEffect } from "vue"
import { projectFirestore } from "../firebase/config"


const getDoocument = (collection, id) => {
    const document = ref(null)
    const error = ref(null)

    let documentRef = projectFirestore.collection(collection).doc(id)

    const unsub = documentRef.onSnapshot((doc) => {
        if(doc.data()){
            document.value = {...doc.data(), id: doc.id}
            error.value = null
        } else {
            error.value = "That document doesn't exist"
        }
    }, (err) => {
        console.error(err.message)
        document.value = null
        error.value = 'Could not fetch Documents'
    })

    watchEffect((onInvalidate)=>{
        onInvalidate(()=> unsub)
    })

    return { document, error }
}

export default getDoocument