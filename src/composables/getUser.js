import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const user = ref(projectAuth.currentUser)
const name = ref('')

projectAuth.onAuthStateChanged(_user => {
    user.value = _user
    name.value = user.value.displayName
})

const getUser = () => {
    return  { user, name }
}

export default getUser