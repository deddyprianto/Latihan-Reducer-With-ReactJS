import React, { useState, useEffect } from "react";
import db from "../firebase";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
function DetailCart(props) {
  const idURL = props.location.pathname.split("/");
  const id = idURL[2];
  const [dataDetail, setDataDetail] = useState("");
  useEffect(() => {
    db.collection("data")
      .doc(id)
      .onSnapshot((res) => setDataDetail(res.data()));
  }, []);

  return (
    <Container fixed>
      <div className="kotak__Main">
        <div className="kotak_gambar">
          <img src={dataDetail.img} alt="" />
        </div>
        <div className="kotak__detail">
          <ul>
            <li>Nama: {dataDetail.nama_barang}</li>
            <li>Harga:{dataDetail.harga}</li>
            <li>Deskripsi:{dataDetail.desc}</li>
            <li>Jumlah Stock:{dataDetail.jumlahStock}</li>
          </ul>
        </div>
        <div className="kotak__kirimPesanan">
          <Button> Add To Cart</Button>
          <ShoppingCartIcon />
        </div>
      </div>
    </Container>
  );
}

export default DetailCart;
