import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import { FormContext } from "../../Contexts/FormContext";
import swal from "sweetalert";
import {
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";

export const Cart = () => {
  const [id, setId] = useState("");

  const Id = id;

  const { cartItems, removeFromCart, totalPrice, totalQuantity, cleanCart } =
    useContext(CartContext);

  const { formData, isLoged } = useContext(FormContext);

  const generateOrder = (evt) => {
    if (isLoged) {
      const order = {};
      order.buyer = formData;
      order.items = cartItems.map(({ Name, Price, quantity }) => ({
        Name,
        Price,
        quantity,
      }));
      order.total = totalPrice();

      const dbFirestore = getFirestore();
      const ordersCollection = collection(dbFirestore, "Ordenes");

      addDoc(ordersCollection, order)
        .then((resp) => setId(resp.id))
        .catch((err) => console.log(err))
        .finally(
          setTimeout(() => {
            cleanCart();
            swal({
              title: "Compra exitosa!",
              text: "Gracias por tu compra",
              icon: "success",
              background: "#73BFFE",
            });
          }, 1000)
        );
    } else {
      swal({
        title: "Necesitas loguearte para el uso de la pagina!",
        text: "Puedes loguearte clickeando el boton que esta al principo de la pagina.",
        icon: "error",
      });
    }
  };

  return (
    <div className="bg-white w-full h-auto flex justify-center p-5">
      {cartItems.length === 0 ? (
        <div className="place-items-center">
          <ul className="list-none place-items-center  ">
            <li>
              <h1 className="text-4xl">El carrito esta vacio</h1>
            </li>
            <li>
              <Link to="/home">
                <button className="mt-4 ml-16 text-black bg-ice hover:bg-ice border-2 border-black font-medium  text-sm px-5 py-2.5 text-center dark:hover:ice hover:text-white dark:focus:ice">
                  Explorar tienda
                </button>
              </Link>
            </li>
            <li>
              {id.length !== 0 && (
                <h1 className="mt-5 text-xl">Id de la compra: {id}</h1>
              )}
            </li>
          </ul>
        </div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-col border border-black mb-3"
            >
              <div>
                <img className="w-26 h-28" src={item.Picture[0]}></img>
              </div>
              <div className="p-9 text-2xl">
                <h1 className="">{item.Name}</h1>
              </div>
              <div className="p-10">
                <h1>Precio: ${item.Price}</h1>
              </div>
              <div className="p-10">
                <h1>Cantidad:{item.quantity}</h1>
              </div>
              <div className="p-7">
                <button
                  className="text-black bg-red-400 border-2 border-black font-medium text-sm px-5 py-2.5 text-center dark:hover:ice hover:text-white dark:focus:ice"
                  onClick={() => removeFromCart(item)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
          <h1 className="text-2xl">Importe Total: ${totalPrice()}</h1>
          <h1 className="text-2xl">Cantidad de Productos: {totalQuantity()}</h1>
          <button
            onClick={cleanCart}
            className="text-black bg-red-400 mr-6 border-2 border-black font-medium text-sm px-5 py-2.5 text-center dark:hover:ice hover:text-white dark:focus:ice"
          >
            Limpiar Carrito
          </button>
          <button
            className="text-black bg-yellow-200 border-2 border-black font-medium text-sm px-5 py-2.5 text-center dark:hover:ice hover:text-white dark:focus:ice"
            onClick={generateOrder}
          >
            Terminar compra
          </button>
        </ul>
      )}
    </div>
  );
};
