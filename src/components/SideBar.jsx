import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../constant/config";

const SideBar = () => {
  return (
    <div className="SideBar d-flex flex-column gap-3">
      <NavLink to={PATH.bindingData}>Binding Data</NavLink>
      <NavLink to={PATH.baiTapComponent}>BTComponent</NavLink>
      <NavLink to={PATH.renderWithCondition}>RenderWithCondition</NavLink>
      <NavLink to={PATH.handleEvent}>handleEvent</NavLink>
      <NavLink to={PATH.styleComponent}>StyleComponent</NavLink>
      <NavLink to={PATH.renderWithMap}>RenderWithMap</NavLink>
      <NavLink to={PATH.demoState}>DemoState</NavLink>
      <NavLink to={PATH.demoProps}>DemoProps</NavLink>
      <NavLink to={PATH.baiTapShoesShop}>BTShoeShop</NavLink>
      <NavLink end to={PATH.redux}>DemoRedux</NavLink>
      <NavLink to={PATH.baiTapPhone}>BTPhoneRedux</NavLink>
      <NavLink to={PATH.baiTapMovieBooking}>BTMovieBooking</NavLink>
      <NavLink to={PATH.baitapForm}>BTForm</NavLink>
      <NavLink to={PATH.useEffect}>useEffect</NavLink>
    </div>
  );
};

export default SideBar;
