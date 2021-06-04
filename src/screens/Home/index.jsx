import React from "react";

import AppLoading from "../../components/AppLoading";
import Header from "../../components/Header";
import Content from "../../components/Content/SideBarLeft";
import Posts from "../../components/Content/SidePosts";
import AsideCards from "../../components/Content/SideBarRight";

import Counter from "../../components/Counter";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Content />
          </div>
          <div className="col-md-6 my-3">
            <Posts />

            <Counter />
          </div>
          <div className="col-md-4 my-3">
            <AsideCards />
          </div>
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
