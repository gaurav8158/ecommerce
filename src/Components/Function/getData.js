import axios from "axios";

export const getData =  (setItems) => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
        setItems(res.data);
    }).catch((error) => {
        console.log(error)
        return;
    })
    return
}