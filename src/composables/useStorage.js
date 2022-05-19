import { ref } from "vue"
import { projecStorage } from "../firebase/config"
import getUser from '@/composables/getUser'

const {user} = getUser()

const useStorage = () => {
    const error = ref(null)
    const url  = ref(null)
    const filePath = ref(null)

    const uploadImage = async(file)=> {
        filePath.value = `covers/${user.value.uid}/${file.name}`
        const storageRef = projecStorage.ref(filePath.value)

        try {
            const res = await storageRef.put(file)
            url.value = await res.ref.getDownloadURL()
        } catch (err) {
            console.log(err.message)
            error.value = err.message
        }
    }

    const deleteImage = async(path)=>{
        const storageRef = projecStorage.ref(path)
        try {
            await storageRef.delete()
        } catch (err) {
            error.value = err.message
        }
    }

    return {url, filePath, error, uploadImage, deleteImage}
}



export default useStorage