
import { useEffect, useState } from "react";
import axios from 'axios';
import './NewsPaperList.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setArticle } from "../store/slicers/ArticleSlice";

export default function NewsPaperList() {

    const [news, setNews] = useState([]);
    const [isGridView, setIsGridView] = useState(false);
    const apiKey = '402125d2d13c4dcc9fa78f101018db30';

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAPINews = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=${apiKey}`
                )
                setNews(response.data.articles);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAPINews();
    }, []);

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    const clickArticleItem = (article) => {
        dispatch(setArticle({ value: article }))
        navigate('/view')
    };

    return (
        <div className="news-container">
            <h1 style={{textAlign:"center"}}>Latest Sports News</h1>
            <button onClick={toggleView} className="list-grid-button">
                {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
            </button>
            <div className={`columns ${isGridView ? 'grid' : ''}`}>
                {news.map((article, index) => (
                    <div
                        key={index}
                        className={`news-item ${isGridView ? 'grid-item' : ''}`}
                        onClick={() => clickArticleItem(article)}
                    >
                        <div className="news-details">
                            <h2>{article.title}</h2>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}