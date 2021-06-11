// import React from "react";
import React, { useEffect, useState } from "react";

import AppLoading from "../../components/AppLoading";
import Header from "../../components/Header";
import Content from "../../components/Content/SideBarLeft";
import Posts from "../../components/Content/SidePosts";
import AsideCards from "../../components/Content/SideBarRight";

// import Counter from "../../components/Counter";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://react-11g-default-rtdb.firebaseio.com/posts.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log(data.results);

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Content />
          </div>
          <div className="col-md-6 my-3">
            <Posts
              data={Object.entries(data).length ? Object.entries(data) : []}
            />
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
