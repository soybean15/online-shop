import axios from "axios"

const getData = async(path)=>{

    return (await axios.get(path)).data
}

export default getData