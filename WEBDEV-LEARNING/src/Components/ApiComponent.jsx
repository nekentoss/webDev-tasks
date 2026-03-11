import { useEffect } from "react";
import { getList } from "../api/actions/jsonplacefolder";

const ApiComponent = () => {
    useEffect(() =>{
    (async () => {
        const data = await getList();
        console.log(data)
        })();

    },[])

}

export default ApiComponent;