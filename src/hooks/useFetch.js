import axios from "axios"
import { useEffect } from "react"

const useFetch = (url, setBlog, setIsLoaded) => {

    useEffect(() => {
        axios(url).then((data) => {
            setBlog([...data.data])
            setIsLoaded(true)
        })
    }, [])

}
export default useFetch;