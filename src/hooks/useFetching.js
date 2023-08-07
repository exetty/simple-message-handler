import {useState} from "react";

export const useFetching = (callback) => {

    const [isLoading, setIsVisible] = useState(false)
    const [error, setError] = useState('')

    const fetching = async () => {
        try{
            setIsVisible(true)
            await callback()
        } catch (e) {
            setError(e.message)
        } finally {
            setIsVisible(false)
        }
    }

    return [fetching, isLoading, error]
}