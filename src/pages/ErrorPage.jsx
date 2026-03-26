import { useNavigate } from "react-router-dom";
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6">
      <img src={errorImg} alt="404" className="w-full max-w-lg mb-8" />
      <h1 className="text-4xl font-bold text-slate-800">Oops, page not found!</h1>
      <p className="text-gray-500 mt-2 mb-6 text-lg">The page you are looking for is not available.</p>
      <button 
        onClick={() => navigate("/")}
        className="bg-purple-600 text-white px-10 py-3 rounded-lg font-bold hover:bg-purple-700 transition"
      >
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;