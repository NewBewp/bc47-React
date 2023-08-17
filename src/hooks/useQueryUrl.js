import { useNavigate, useParams, useSearchParams,useLocation } from "react-router-dom"
import qs from 'qs'

export const useQueryUrl = () => { //sử dụng 'use' để sử dụng hook
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const location = useLocation()
    console.log("location: ", location);

    const queyryParams = Object.fromEntries(searchParams)

    const setQueryParams = (param) => {
        const queryString = qs.stringify(param, {
            addQueryPrefix: true,
        })
        navigate(location.pathname + queryString)
    }   

    return [queyryParams,setQueryParams]
}