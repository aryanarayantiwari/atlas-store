import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Realm from "realm-web";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Products from "../../components/Products";

export default function Home() {
  const { query } = useRouter()
    const [products, setProducts] = useState([]);
  const doStuff = async () => {
    if(query.term){
        const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
        const app = new Realm.App({ id: REALM_APP_ID || ""});
        const credentials = Realm.Credentials.anonymous();
        try {
          const user = await app.logIn(credentials);
          const searchProducts = await user.functions.searchProducts(query.term);
          setProducts(searchProducts);
        } catch (error) {
          console.error(error);
        }
    }
  }
    useEffect(() => {
    doStuff();
  }, [query]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Products products={products} />
      <Footer />
      </>
  );
}