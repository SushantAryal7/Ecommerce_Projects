import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/cartSlice";

const LogoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Logging Out...
        </h2>
        <p className="text-gray-600">
          You will be redirected to the login page shortly.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          onClick={() => {
            localStorage.removeItem("loginEmail");
            localStorage.removeItem("cart");
            dispatch(logout());

            navigate("/login");
          }}
        >
          Logout Now
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
