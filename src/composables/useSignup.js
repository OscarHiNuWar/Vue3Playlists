import { ref } from "vue"
import { projectAuth } from "../firebase/config";
const error = ref(null);
const isPending = ref(false)

const sigup = async(email, pass, displayName) => {
    error.value = null
    isPending.value = true

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, pass)
        if(!res){
            isPending.value = false
            throw new Error('Could not complete the sigup')
        }
        await res.user.updateProfile({displayName})

        console.log(res.user)
        error.value = null
        isPending.value = false
        return res

    } catch (err) {
        console.error(error.message)
        error.value = err.message
    }
}

const useSigup = () =>{
    return {error, sigup, isPending}
}

export default useSigup