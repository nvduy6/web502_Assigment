import React, { useEffect, useState } from 'react'
import { list } from '../api/Post';
import { IPost } from '../type/Post'
type Props = {

}
const Blog = (props: Props) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        const getPosts = async () => {
            const { data } = await list();
            setPosts(data);
        }
        getPosts();
    }, [])
    return (

        <div className="row px-2">
            {posts.map((item, index) => {
                return (
                    <div className="col-lg-4" key={index}>
                        <img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://tse4.mm.bing.net/th?id=OIP.UMVzlg83MxLFPuAWNsf3DgAAAA&pid=Api&P=0&w=163&h=193" alt="" />
                        {/* <svg className="bd-placeholder-img rounded-circle m-auto" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <p><a className="btn btn-secondary" href="#">عرض التفاصيل</a></p>
                    </div>
                )
            })}
        </div>
    )
}

export default Blog