export const LoginButton = ({ disabled }) => {
  return (
    <button
      className="p-2 text-black hover:text-white bg-[#73BFFE] border-2 border-black rounded-2xl mr-2"
      disabled={disabled}
    >
      Iniciar Sesion
    </button>
  );
};
