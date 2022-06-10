import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFeedsapi } from "../Redux/feeds/feeds.action";

const Home = () => {
  const dispatch = useDispatch();
  const { data, getFeeds } = useSelector((state) => state.feed);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getFeedsapi());
    }
  }, []);

  

  //const [feeds, setFeeds] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:8080/feeds").then((r) => {
  //     setFeeds(r.data);
  //   });
  // }, []);
  return (
    <div>
      <h1>Home</h1>
      <br />
      {getFeeds.loading && <div>Loading...</div>}
      {getFeeds.error && <div>Error...</div>}
      {!getFeeds.loading &&
        data.map((feed) => (
          <div
            key={feed.id}
            style={{
              padding: "10px",
              margin: "auto",
              marginTop: "10px",
              border: "1px solid grey",
              maxWidth: "200px",
            }}
          >
            <div>{feed.title}</div>
            <div>{feed.description}</div>
          </div>
        ))}
    </div>
  );
};

export default Home;
