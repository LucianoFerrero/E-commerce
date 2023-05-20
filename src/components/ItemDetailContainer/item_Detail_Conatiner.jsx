import { useEffect, useState } from "react";
import { Item_Detail } from "../ItemDetail/Card_Product_Detail";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading.jsx/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const Item_Detail_Container = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { pId } = useParams();

  useEffect(() => {
    const getProducto = async () => {
      const db = getFirestore();
      const queryRef = doc(db, "productos", pId);
      const response = await getDoc(queryRef);
      const newItem = {
        id: response.id,
        ...response.data(),
      };
      setTimeout(() => {
        setItem(newItem);
        setIsLoading(false);
      }, 2000);
    };
    getProducto();
  }, [pId]);

  if (!item) {
    <Loading />;
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full h-full flex justify-center">
          <Item_Detail products={item} />
        </div>
      )}
    </>
  );
};
