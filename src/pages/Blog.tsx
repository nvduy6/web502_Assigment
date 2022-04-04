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
        <div className="container row g-4 row-cols-2 row-cols-lg-3 ">
            {posts.map((item, index) => {
                return (
                    <div className="col feature">
                        <div className="owl-item" style={{ width: 293 }}>
                            <div className="col-md-12 col-sm-12 col-xs-12 list-item box-blogs ">
                                <div className="item-blogs clearfix">
                                    <div className="img-blogs">
                                        <img style={{ width: '390px', height: "250px" }} src="https://fs-07.web4s.vn/uploads/plugin/news/10/n-lu-t-s-39-tu-i-mang-thai-oi-ang-c-ca-ng-i-la-ba-b-u-sanh-i-u-nh-t-la-ai-ba-bau-chua-hi-3-1489465047-width640height936.jpg" className="img-item-product" />
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