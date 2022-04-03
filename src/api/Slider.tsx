import { Slider } from "antd";
import { IpSlider } from "../type/Slider";
import instance from "./Instance";
export const listSlider = ()=>{
    const url = "/sliders";
    return instance.get(url);
}
export const addSlider = (slider:IpSlider)=>{
    const url = "/sliders";
    return instance.post(url,slider);
}
export const removeSlider = (id:number)=>{
    const url = `/sliders/${id}`;
    return instance.delete(url);
}