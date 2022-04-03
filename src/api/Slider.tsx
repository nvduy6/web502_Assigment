import { IpSlider } from "../type/Slider";
import instance from "./Instance";
export const listSlider = ()=>{
    const url = "/slider";
    return instance.get(url);
}
export const addSlider = (slider:IpSlider)=>{
    const url = "/slider";
    return instance.post(url,slider);
}