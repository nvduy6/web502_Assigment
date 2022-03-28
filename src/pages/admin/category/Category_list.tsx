import React from 'react'
import { ICategory } from '../../../type/Category'
type Props = {
    categorys: ICategory[];
    onRemoveCate: (id: number) => void
}

const Category_list = (props: Props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    {props.categorys.map((item, index) => {
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>
                                <button onClick={()=>props.onRemoveCate(item.id)}>Delete</button>
                                <button>Update</button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Category_list