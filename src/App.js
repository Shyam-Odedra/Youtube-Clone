import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Styles/App.css';
import Layout from './Components/Layout/Layout';
import { ROUTES } from './Constants/constants';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import Video from './Pages/Video/Video';

function App() {
  return (
    <div className="bg-themeBlack">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SEARCH} element={<Search />} />
            <Route path={ROUTES.VIDEO} element={<Video />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
