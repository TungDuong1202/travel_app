import React from "react";
import "../../bootstrap-5.3.3-dist/css/bootstrap.min.css";
import "./home.css";
import HaLong from "../Pages/HaLong/HaLong";
const Home = () => {
  return (
    <div className="home">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Album example</h1>
          <p className="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </p>
          <p>
            <a href={<HaLong />} className="btn btn-primary my-2">
              Main call to action
            </a>
            <a href="#" className="btn btn-secondary my-2">
              Secondary action
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
