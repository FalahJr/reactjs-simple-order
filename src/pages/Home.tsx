import React from "react";
import Button from "../components/Button/Button";

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="title-home">
          <h1 className="">Selamat Datang di Web Simple Order</h1>
          <h2>By Khoiru Miftakhul Falah (Frontend Developer)</h2>
          <div className="btn-redirect">
            <div className="row-btn-redirect">
              <Button
                label="Mari Mulai !"
                color="green"
                onClick={() => (window.location.href = "/Order")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
