import instance from "./Instance";
import {IPost} from "../type/Post";
export const list = ()=>{
    const url = "/posts";
    return instance.get(url);
}