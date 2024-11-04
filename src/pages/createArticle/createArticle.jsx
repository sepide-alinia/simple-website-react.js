
import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import styles from './createArticle.module.css'
import Input from '../../components/input/input'
import TextArea from '../../components/textArea/textArea'
import axios from 'axios'

export default function CreateArticle(){

    const [article,setArticle] = useState({
        title: "",
        date: "" ,
        readingTime:"",
        author:"",
        message:"",
        imgURL:""
    })

    const handleChange = (e)=>{
        setArticle((a)=>({
            ...a,
            [e.target.name] : e.target.value.trim()
            
        }))
    
    }

    const handleChangeMessage = (e)=>{

        setArticle((a)=>({
            ...a,
           message : e.target.value.trim()
            
        }))
       
    }

    const handleCreateArticle =()=>{
        axios.post("http://localhost:8001/articles",{
            imageURL: article.imgURL ,
            title: article.title,
            readingTime: article.readingTime,
            author: article.author
        })
        setArticle({
            title: "",
            date: "" ,
            readingTime:"",
            author:"",
            message:"",
            imgURL:"",
        })
        alert("مقاله با موفقیت ساخته و ثبت شد")
    }


    return(
        <>
        <Navbar/> 
        <div className={styles.createArticleWrapper}>
            <div className='cntr'>
                <h1>
                    ساخت مقاله
                </h1>

                <Input label="عنوان" name="title" change={handleChange} type="text"/>
                <Input label="تاریخ" name="date" change={handleChange} type="date" />
                <Input label="مدت زمان خواندن" name="readingTime" change={handleChange} type="text" />
                <Input label="نویسنده" name="author" change={handleChange} type="text" />
                <Input label="آدرس عکس" name="imgURL" change={handleChange} type="text" />
                <TextArea label="متن" change={handleChangeMessage}/>
               
                <div className={styles.btnWrapper}>
                    <button onClick={handleCreateArticle}>ساخت مقاله</button>
                </div>
            </div>
          
        </div>
          
        </>
    )
}