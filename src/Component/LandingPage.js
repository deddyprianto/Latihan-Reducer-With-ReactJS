import React from "react";
import "../App.css";
import Container from "@material-ui/core/Container";
function LandingPage() {
  return (
    <div className="MainPage">
      <Container fixed>
        <div className="heading">
          <div className="container__text">
            <h3>HKBP HATOPAN</h3>
            <p>
              {" "}
              Gereja HKBP HATOPAN Merupakan , gereja HKBP di Medan ber-alamat di
              jalan binjai km10,8 Medan, yang saat ini memiliki website
              penjualan pencarian dana HKBP hatopan. silahkan teman-teman
              bapak/ibu yg ingin membantu pencarian dana Pada gereja HKBP
              Hatopan. mari luangkan waktu dan pikiran untuk berkunjung di
              website jualan online HKPB Hatopan web official
            </p>
          </div>
          <div className="container__gambar">
            <img src="./img/gambarHKBP.jpg" alt="" />
          </div>
        </div>
        <div className="container__galery">
          <h1 className="text__h1">Galery Naposo HKBP Hatopan</h1>
          <div className="galery">
            <img src="./img/5.jpg" alt="" />
            <img src="./img/14.jpg" alt="" />
            <img src="./img/22.jpg" alt="" />
            <img src="./img/26.jpg" alt="" />
            <img src="./img/r2.jpg" alt="" />
            <img src="./img/r5.jpg" alt="" />
            <img src="./img/r13.jpg" alt="" />
            <img src="./img/r20.jpg" alt="" />
            <img src="./img/gambarHKBP.jpg" alt="" />
          </div>
        </div>
        <div className="content">
          <h3>
            galeri di atas Merupakan kegiatan dan event dari muda mudi NH-NKBP
            Hatopan
          </h3>
          <p>
            yg dimana semua nya sangat membutuh kan dana untuk kegiatan dari
            HKBP HATOPAN sendiri termasuk NaposoBulung <br />
            <strong>mari Amang/Inang belanja di Website HKBP Hatopan</strong>
            Klik tombol belanja sekarang ya Amang/Inang
          </p>
          <div className="btn">
            <button>
              <a className="belanja" href="/#/home">
                Belanja Sekarang
              </a>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LandingPage;
