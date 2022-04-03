import instance from "./Instance";
import {IPost} from "../type/Post";
export const listpost = ()=>{
    const url = "/posts";
    return instance.get(url);
}
export const addPost = (posts:IPost,)=>{
    const url = "/post";
    return instance.post(url,posts);
}