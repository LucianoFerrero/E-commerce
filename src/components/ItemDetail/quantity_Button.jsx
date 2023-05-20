import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { useCounter } from "../../Hooks/useCounter";

export const Quantity_Button = ({ initial = 1, stock = 8, onAdd }) => {
  const { counter, sumHandle, restHandle } = useCounter(initial, 1, stock);

  return (
    <div>
      <div className="flex text-black items-center">
        <h2 className="text-2xl mr-4 rounded bg-white ">Cantidad: </h2>
        <button
          className="mr-4 hover:bg-red-200 border-2 rounded border-black text-2xl"
          onClick={restHandle}
        >
          <FiMinus></FiMinus>
        </button>
        <h4 className="text-2xl">{counter}</h4>
        <button
          className="ml-4  hover:bg-yellow-100 border-2 rounded border-black text-2xl"
          onClick={sumHandle}
        >
          <FiPlus></FiPlus>
        </button>
        <button
          onClick={() => {
            onAdd(counter);
          }}
          href="#"
          className="ml-6 text-black bg-ice hover:bg-ice border-2 border-black font-medium  text-sm px-5 py-2.5 text-center dark:hover:ice hover:text-white dark:focus:ice"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
