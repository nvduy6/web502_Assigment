import React, { useEffect, useState } from 'react'
import { listpost } from '../api/Post';
import { IPost } from '../type/Post'
type Props = {

}
const Blog = (props: Props) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        const getPosts = async () => {
            const { data } = await listpost();
            setPosts(data);
        }
        getPosts();
    }, [])
    return (
        <div className="row">
            {posts.map((item, index) => {
                return (
                    <div className="col">
                <div className="owl-item" style={{ width: 293 }}>
                    <div className="col-md-12 col-sm-12 col-xs-12 list-item box-blogs ">
                        <div className="item-blogs clearfix">
                            <div className="img-blogs">
                                <img style={{width:'390px',height:"250px" }} src="https://fs-07.web4s.vn/uploads/plugin/product_items/32/qu-n-ao-th-thao-nam-alh17-09-bo-do-nam-aristino-al03-tim-than-large.jpg" className="img-item-product" />
                            </div>
                            <div className="info">
                                <p className="more-blogs"> <span className="time"> <i className="fa fa-clock-o" aria-hidden="true" /> 01:50 - 21/04/2017
                                </span></p>
                                <h2 className="title-blogs-item">
                                   {item.title}</h2>
                                <p className="desc-blogs fs-5">{item.desc}</p> <a href="https://fs-07.web4s.vn/sau-bst-dep-xuat-sac-tai-tokyo-fashion-week-cong-tri-tro-thanh-ntk-viet-dau-tien-duoc-vinh-danh-tren-vogue-my.html" className="btn btn-view-more hidden"> Xem thêm <i className="fa fa-angle-double-right" aria-hidden="true" /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )
            })}
            
        </div>
    )
}

export default Blog