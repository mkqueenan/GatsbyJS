import { navigate } from 'gatsby'

const PageNotFound = () => {
    try {
        navigate('/')
    } catch (err) {
        console.log(err)
    }
    return null
}

export default PageNotFound
