import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './NewsPaperView.scss';

const NewsPaperView = () => {
    const article = useSelector(state => state.article.article)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/list")
    }

    return (
        <div className="news-paper-view-container">
            <div className="news-paper-view-detail">
                <button className="back-button" onClick={handleClick}>
                    Go to List
                </button>
                {
                    article.urlToImage ? <img src={article.urlToImage} alt={article.title} /> : "Image is not available for this article"
                }
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <a href={article.url} >
                    Read more
                </a>
            </div>
        </div>
    );
};
export default NewsPaperView;