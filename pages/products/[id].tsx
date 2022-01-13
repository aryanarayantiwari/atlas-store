import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import Product from "../../components/Product";
const ProductDetails = () => {
  const [product, setProduct] = useState();
  const { query } = useRouter();
  const doStuff = async () => {
    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
    const app = new Realm.App({ id: REALM_APP_ID || ""});
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const oneProduct = await user.functions.getOneProduct(query.id);
      setProduct(() => oneProduct);
    } catch (error) {
      console.error(error);
    }
  } 
  useEffect(() => {
    doStuff()
  }, []);

  return (
    <>
      {product && (
        <>
        <Product product={product}/>
        </>
      )}
    </>
  );
};

export default ProductDetails;
