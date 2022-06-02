import React from "react";
import { Product, FooterBanner, HeroBanner } from "../Components";
import { Client } from "../lib/Client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Modern looking thrift wear</p>
      </div>
      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await Client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await Client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default Home;
