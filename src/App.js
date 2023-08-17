//component lớn nhất trong dự án

// 2 loại component: 
// + class component (statefull) <2019 (lifecyle)
// + function component (stateless) 100
// 1 component chỉ cho phép return 1 thẻ jsx duy nhất
// attribute : viết theo quy tắc camelCase


import './App.css';

import BTComponent from './BTComponent/BTComponent';
import BTMovieBooking from './BTMovieBooking/BTMovieBooking';
import BTPhoneRedux from './BTPhoneRedux/BTPhoneRedux';
import BTShoeShop from './BTShoeShop/BTShoeShop';
import BindingData from './BindingData/BindingData';
import DemoRedux from './DemoRedux/DemoRedux';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoProps from './Props/DemoProps';
import RenderWithCondition from './RenderWithConditon/RenderWithCondition';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DemoState from './State/DemoState';
import StyleComponent from './StyleComponent/StyleComponent';


import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import MainLayout from './components/layouts/MainLayout';
import { PATH } from './constant/config';
import MovieDetail from './RenderWithMap/MovieDetail';
import { useRouters } from './router/routers';


//JSX: javascript XML => giúp viết html trong javascript
function App() {
  return (
    <div className="App">
      {/* hello kien
      <span className="title" tabIndex> HELLO</span> */}
      {/* <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path={PATH.bindingData} element={<BindingData />} />
          <Route path={PATH.baiTapComponent} element={<BTComponent />} />
          <Route path={PATH.renderWithCondition} element={<RenderWithCondition />} />
          <Route path={PATH.handleEvent} element={<HandleEvent />} />
          <Route path={PATH.styleComponent} element={<StyleComponent />} />
          <Route path={PATH.renderWithMap} element={<RenderWithMap />} />

          <Route path={PATH.moviDetail} element={<MovieDetail/>}/>

          <Route path={PATH.demoState} element={<DemoState />} />
          <Route path={PATH.demoProps} element={<DemoProps />} />
          <Route path={PATH.baiTapShoesShop} element={<BTShoeShop />} />

          <Route path={PATH.redux}>
            <Route index element={<DemoRedux />} />
            <Route path={PATH.baiTapPhone} element={<BTPhoneRedux />} />
            <Route path={PATH.baiTapMovieBooking} element={<BTMovieBooking />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes> */}

      {useRouters()}

    </div>

  );
}

export default App;
