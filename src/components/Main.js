import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainscreen from './Mainscreen';
import Login from './Login';
import NewsPaperView from './NewsPaperView';
import NewsPaperList from './NewsPaperList';
import Register from './Register';

export default function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route index={true} path="" element={<Register />}></Route>
                    <Route index={false} path="register" element={<Register />}></Route>
                    <Route index={false} path="login" element={<Login />}></Route>
                    <Route index={false} path="list" element={<NewsPaperList />}></Route>
                    <Route index={false} path="view" element={<NewsPaperView />}></Route>
                </Route>
            </Routes>
        </Router>
    )
}