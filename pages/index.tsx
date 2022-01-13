import Head from "next/head";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const doStuff = async() => {
    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
    const app = new Realm.App({ id: REALM_APP_ID || "" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const products = await user.functions.getAllProducts();
      setProducts(products);
    } catch (error) {
      console.error(error);
    }
  } 
  useEffect(() => {
    doStuff()
  }, []);

  return (
    <>
      <Head>
        <title>Atlas Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Products products={products} />
      <Footer />
      </>
  );
}