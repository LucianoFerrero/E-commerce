import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../Contexts/FormContext";
import swal from "sweetalert";
const Login = () => {
  const { formData, updateFormData, setIsLoged } = useContext(FormContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  function loginAlert() {
    swal({
      title: "Bienvenido",
      text: "Te logueaste con exito",
      icon: "success",
    });
  }

  const handleLogin = (data, e) => {
    e.preventDefault();
    const updateData = { ...formData, data };
    updateFormData(updateData);
    setIsLoged(true);
    navigate("/home", { replace: true });
    loginAlert();
  };

  return (
    <div className="w-auto h-2/3 border-2 border-black m-auto mt-20 flex items-center p-6 inline-grid grid-cols-2">
      <p className="flex text-3xl inline-block justify-center col-span-1">
        Inicia Sesion
      </p>

      <form
        className="grid text-lg flex col-span-2"
        onSubmit={handleSubmit(handleLogin)}
      >
        Nombre:
        <input
          className="border-2 border-black"
          placeholder="Introduce tu nombre"
          autoComplete="off"
          type="text"
          {...register("Nombre", {
            required: true,
            maxLength: 10,
          })}
        ></input>
        {errors.Nombre?.type === "required" && <p>El campo es requerido</p>}
        {errors.Nombre?.type === "maxLength" && <p>Maximo 10 caracteres</p>}
        Email:
        <input
          className="border-2 border-black"
          placeholder="Introduce tu email"
          autoComplete="off"
          type="email"
          {...register("Email", {
            required: true,
          })}
        ></input>
        {errors.Email?.type === "required" && <p>El campo es requerido</p>}
        Telefono:
        <input
          className="border-2 border-black"
          placeholder="Introduce tu telefono"
          autoComplete="off"
          type="phone"
          {...register("Telefono", {
            required: true,
            maxLength: 10,
          })}
        ></input>
        {errors.Telefono?.type === "required" && <p>El campo es requerido</p>}
        {errors.Nombre?.type === "maxLength" && <p>Maximo 10 caracteres</p>}
        <div className="flex justify-center">
          <button
            className="bg-ice border-2 border-black justify-center mt-5"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login
