import React, {useState} from 'react'
import './AddItem.css'
import {assets} from "../../assets/assets.js";
import { SnackbarProvider, useSnackbar } from 'notistack';
import axios from "axios";

const AddItem = ({url}) => {
    const { enqueueSnackbar } = useSnackbar();
    const [image, setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"拉麵"
    })

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}));
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",Number(data.price));
        formData.append("category",data.category);
        formData.append("image",image);
        axios.post(`${url}/api/food/add`,formData).then(response=>{
            setData({
                name: "",
                description: "",
                price: "",
                category: "拉麵"
            })
            setImage(false);
            enqueueSnackbar('新增成功', { variant: 'success' });
        }).catch(error=>{
            console.log(error.response.data.msg);
            enqueueSnackbar('新增失敗', { variant: 'error' });
        });
    }

    return (
        <div id='add-item' className='add'>
            <form onSubmit={onSubmit} className='add-item'>
                <div className='item-image-upload'>
                    <p>上傳菜品照片</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt=""/>
                    </label>
                    <input onChange={(e) => {
                        setImage(e.target.files[0])
                    }} type="file" id="image" hidden required/>
                </div>

                <div className='item-name'>
                    <p>品項名稱</p>
                    <input onChange={onChangeHandler} name='name' value={data.name} type="text"
                           placeholder='請輸入名稱' required/>
                </div>

                <div className='item-description'>
                    <p>品項描述</p>
                    <textarea name="description" onChange={onChangeHandler} value={data.description} rows="6" placeholder='請輸入描述' required></textarea>
                </div>

                <div className='item-category-price'>
                    <div className='item-category'>
                        <p>品項類別</p>
                        <select onChange={onChangeHandler} name = 'category' value={data.category}>
                            <option value="拉麵">拉麵</option>
                            <option value="蓋飯">蓋飯</option>
                            <option value="咖哩飯">咖哩飯</option>
                            <option value="壽司">壽司</option>
                            <option value="炸物">炸物</option>
                            <option value="飲品">飲品</option>
                        </select>
                    </div>

                    <div className='item-price'>
                        <p>品項價格</p>
                        <input onChange={onChangeHandler} name='price' value={data.price} type="Number" placeholder='$20'/>
                    </div>
                </div>
                <div className='confirm'>
                    <div></div>
                    <button type='submit'>新增</button>
                </div>
            </form>
        </div>
    )
}
export default AddItem
