import React, { useState, useEffect } from "react";
import "../App.css";
import db from "../firebase";
import { Link } from "react-router-dom";
import ShoppMain from "./ShoppMain";
import FlipMove from "react-flip-move";
import Container from "@material-ui/core/Container";
function Shopping() {
  const [data, setData] = useState([]);
  useEffect(() => {
    db.collection("data").onSnapshot((snapshot) =>
      setData(
        snapshot.docs.map((res) => ({ id: res.id, dataInit: res.data() }))
      )
    );
  }, []);
  return (
    <div className="MainPage">
      <Container>
        <FlipMove>
          {data.map(({ id, dataInit }) => (
            <ShoppMain
              key={id}
              id={id}
              nama={dataInit.nama_barang}
              img={dataInit.img}
              tanggalExp={dataInit.tanggalExp}
              desc={dataInit.desc}
              harga={dataInit.harga}
              jumlahStock={dataInit.jumlahStock}
            />
          ))}
        </FlipMove>
      </Container>
    </div>
  );
}
export default Shopping;
