import { useRoutes } from "react-router-dom"
import MainLayout from "../components/layouts/MainLayout"
import HomePage from "../pages/HomePage"
import { PATH } from "../constant/config"
import BTComponent from "../BTComponent/BTComponent"
import BindingData from "../BindingData/BindingData"
import RenderWithCondition from "../RenderWithConditon/RenderWithCondition"
import HandleEvent from "../HandleEvent/HandleEvent"
import StyleComponent from "../StyleComponent/StyleComponent"
import DemoState from "../State/DemoState"
import DemoProps from "../Props/DemoProps"
import BTShoeShop from "../BTShoeShop/BTShoeShop"
import DemoRedux from "../DemoRedux/DemoRedux"
import BTPhoneRedux from "../BTPhoneRedux/BTPhoneRedux"
import BTMovieBooking from "../BTMovieBooking/BTMovieBooking"
import NotFound from "../pages/NotFound"
import BTForm from "../BTForm/BTForm"

export const useRouters = () =>{
    // const t = useRoutes()

    // return t

    return useRoutes([
        {
            element: <MainLayout/>,
            children: [
                {
                    index: true,
                    element: <HomePage/>
                },
                {
                    path: PATH.baiTapComponent,
                    element: <BTComponent/>
                },
                {
                    path: PATH.bindingData,
                    element: <BindingData/>
                },
                {
                    path: PATH.renderWithCondition,
                    element: <RenderWithCondition/>
                },
                {
                    path: PATH.handleEvent,
                    element: <HandleEvent/>
                },
                {
                    path: PATH.styleComponent,
                    element: <StyleComponent/>
                },
                {
                    path: PATH.demoState,
                    element: <DemoState/>
                },
                {
                    path: PATH.demoProps,
                    element: <DemoProps/>
                },
                {
                    path: PATH.baiTapShoesShop,
                    element: <BTShoeShop/>
                },
                {
                    path: PATH.redux,
                    children: [
                        {
                            index: true,
                            element: <DemoRedux/>
                        },
                        {
                            path: PATH.baiTapPhone,
                            element: <BTPhoneRedux/>
                        },
                        {
                            path: PATH.baiTapMovieBooking,
                            element: <BTMovieBooking/>
                        },
                    ]
                },
                {
                    path: PATH.baitapForm,
                    element: <BTForm/>
                },
                {
                    path: '*',
                    element: <NotFound/>
                }
            ]
        }
        
    ])
}