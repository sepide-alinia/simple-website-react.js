import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styles from './home.module.css'
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/loading";

export default function Home() {

  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    axios.get("http://localhost:8001/articles").then((resault)=>{
       
      setLoading(false)
      setArticles(resault.data)
   
       
    }).catch((error)=>{
      setLoading(false)
      console.log(error);
    })

  },[])




  return (
    <div className={styles.homeWrapper}>
      <Navbar />

      <div className="cntr">
        <h2>مقالات جدید</h2>
        
        {
          loading ? <Loading/>
          :(
              <div className={styles.articles}>

        {
          articles.map((item)=>(
          <Link to={`/article/${item.id}`}>
          <Article key={item.id} article ={item}/>
          </Link>
        ))
        }
     
        </div>
          )
        }
      

      </div>
      <Footer/>
    </div>
  );
}
