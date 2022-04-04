import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { listCate } from '../api/Category';
import { ICategory } from '../type/Category'
type Props = {
  // categorys: ICategory[];
}
const Category = (props: Props) => {
  const [category, setCategory] = useState<ICategory[]>([])
  useEffect(() => {
    const getCategorys = async () => {
      const { data } = await listCate();
      setCategory(data);
    }
    getCategorys();
  }, [])
  return (

    <ul className="nav nav-pills d-flex justify-content-center py-1">
      {category.map((item, index) => {
        return <li className="nav-item" key={index}>
          <Link to={`/categorys/${item.slug}`} className="nav-link "><button style={{width:'80px' ,height:'40px'}} type="button" className="btn btn-light "> {item.name}</button>
        </Link>
        </li>
      })}
    </ul>
  )
}

export default Category