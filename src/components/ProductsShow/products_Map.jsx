import { Link } from "react-router-dom";

export const Products_Map = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {data.map(({ id, Category, Name, Price, Brand, Stock, Picture }) => {
        return (
          <div className="m-5 hover:-translate-y-5 transition-all">
            <div className="w-72 bg-slate-100  shadow-2xl shadow-ice">
              <Link to={`/products/detail/${id}`}>
                <img className="p-2 w-[288px] h-[356px]" src={Picture[0]} />
              </Link>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                    {Name}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5 justifiy-between text-black">
                  <nav className="list-none">
                    <li>Marca: {Brand}</li>
                    <li>Categoria: {Category}</li>
                    <li>Stock: {Stock}</li>
                  </nav>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-black">
                    ${Price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
