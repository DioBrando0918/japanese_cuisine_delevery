import React, {useEffect, useState} from 'react'
import './ListItem.css'
import axios from "axios";
import {SnackbarProvider, useSnackbar} from "notistack";
const ListItem = ({url}) => {
    const { enqueueSnackbar } = useSnackbar();
    const [data,setData] = useState([]);

    const removeItem = async (_id)=>{
        const response = await axios.post(`${url}/api/food/remove`,{_id})
        if (response.data.code === 200){
            console.log('aa')
            enqueueSnackbar('移除成功', { variant: 'success' });
            await fetchItem();
        }else{
            console.log(response.data.msg)
            enqueueSnackbar('移除失敗', { variant: 'error' });
        }
    }

    const fetchItem = async ()=>{
        const response = await axios.get(`${url}/api/food/list`);
        if (response.data.code === 200){
            setData(response.data.data.foods)
            console.log(response.data.data.foods)
        }else{
            enqueueSnackbar('獲取資料失敗', { variant: 'error' });
        }
    }

    useEffect(() => {
        fetchItem()
    }, []);

    return (
        <div className='list-item'>
            <table className='item-table'>
                <thead className='table-title'>
                    <tr>
                        <th className='photo-col' scope='col'>照片</th>
                        <th className='name-col' scope='col'>名稱</th>
                        <th className='category-col' scope='col'>種類</th>
                        <th className='description-col' scope='col'>描述</th>
                        <th className='price-col' scope='col'>價格</th>
                        <th className='action-col' scope='col'>動作</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr className='table-items' key={item._id}>
                                    <td className='table-item'><img src={`${url}/images/` + item.image} alt=""/></td>
                                    <td className='table-item'><p>{item.name}</p></td>
                                    <td className='table-item'><p>{item.category}</p></td>
                                    <td className='table-item'><p>{item.description}</p></td>
                                    <td className='table-item'><p>{item.price}</p></td>
                                    <td className='table-item'><span onClick={()=>{removeItem(item._id)}} className="material-symbols-outlined">delete</span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListItem;