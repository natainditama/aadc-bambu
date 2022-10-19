import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout/Layout";
import Column from "../components/Grid/Column";
import Row from "../components/Grid/Row";

const IndexPage = () => {
  function hoverFigure() {
    console.log("Hello");
  }

  return (
    <Layout>
      <section className="">
        <Row container>
          <Column
            xs={12}
            lg={5}
            style={{ position: "sticky", top: 0, height: "max-content", paddingTop: "120px" }}
          >
            <h1 className="site__title site__title--separator">AADC Bambu</h1>
            <p className="site__description">
              Terimakasih kepada Tuhan Yang Maha Esa atas anugerah yang luar biasa,terimakasih
              kepada kedua orang tuaku dan saudaraku, lagu di sini semata mata untuk hiburan,kenang
              kenangan dimasa sekolah dan ada hobby yang terpendam sekian lama,semoga dapat
              bermanfaat bagi semua orang ,makasih untuk suami dan kedua anakku yang selalu
              mensupport . Selamat menonton jangan lupa bantu subscribe ya 😅😅😅
            </p>
          </Column>
          <Column xs={12} lg={7} style={{ marginBlock: "60px" }}>
            <Row style={{ justifyContent: "center", gap: "2rem" }}>
              <Column xs={12} lg={10}>
                <figure onTouchStart={hoverFigure} className="card">
                  <img
                    src="https://i.ytimg.com/vi/aJ_G6Mabzp4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBM7Wgg8lbi2nopmTZjnOUICgKTOg"
                    alt="img03"
                  />
                  <figcaption>
                    <h3>Aku Kurang Opo ( Yeni Inka ) || Lirik + terjemahannya by AADC Bambu</h3>
                  </figcaption>
                </figure>
              </Column>
              <Column xs={12} lg={10}>
                <figure onTouchStart={hoverFigure} className="card">
                  <img
                    src="https://i.ytimg.com/vi/aJ_G6Mabzp4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBM7Wgg8lbi2nopmTZjnOUICgKTOg"
                    alt="img03"
                  />
                  <figcaption>
                    <h3>Aku Kurang Opo ( Yeni Inka ) || Lirik + terjemahannya by AADC Bambu</h3>
                  </figcaption>
                </figure>
              </Column>
              <Column xs={12} lg={10}>
                <figure onTouchStart={hoverFigure} className="card">
                  <img
                    src="https://i.ytimg.com/vi/aJ_G6Mabzp4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBM7Wgg8lbi2nopmTZjnOUICgKTOg"
                    alt="img03"
                  />
                  <figcaption>
                    <h3>Aku Kurang Opo ( Yeni Inka ) || Lirik + terjemahannya by AADC Bambu</h3>
                  </figcaption>
                </figure>
              </Column>
              <Column xs={12} lg={10}>
                <figure onTouchStart={hoverFigure} className="card">
                  <img
                    src="https://i.ytimg.com/vi/aJ_G6Mabzp4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBM7Wgg8lbi2nopmTZjnOUICgKTOg"
                    alt="img03"
                  />
                  <figcaption>
                    <h3>Aku Kurang Opo ( Yeni Inka ) || Lirik + terjemahannya by AADC Bambu</h3>
                  </figcaption>
                </figure>
              </Column>
            </Row>
          </Column>
        </Row>
      </section>
    </Layout>
  );
};

export default IndexPage;
export const Head: HeadFC = () => <title>Home Page test</title>;
