import { ICategory } from "../type/Category";
import instance from "./Instance";
export const listCate =()=>{
    const url = "/categorys";
    return instance.get(url);
}
export const addcate =(category:ICategory)=>{
    const url = "/categorys";
    return instance.post(url,category);
}
export const removeCate = (id:number)=>{
    const url = `/categorys/${id}`;
    return instance.delete(url)
}