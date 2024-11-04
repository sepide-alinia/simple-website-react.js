import Home from "./pages/home/Home";
import {Routes,Route} from 'react-router-dom'
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/articlePage/ArticlePage";
import CreateArticle from "./pages/createArticle/createArticle";



function App() {

  return(
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs/>} />      
      <Route path="/article/:id" element={<ArticlePage/>} />      
      <Route path="/createArticle" element={<CreateArticle/>} />

    </Routes>
  ) 
  

}

export default App;
