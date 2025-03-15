import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../features/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-16 mx-auto w-80% p-4 md:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row justify-between bg-white p-4 shadow-md rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>

                    <p className="text-gray-600">
                      ₹{item.price} x {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex gap-10 h-1/2">
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="bg-blue-500 text-white px-6 py-1 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeToCart(item))}
                    className="bg-blue-500 text-white px-6 py-1 rounded"
                  >
                    -
                  </button>
                </div>
                <p className="text-lg font-bold mt-2 md:mt-0">
                  ₹{item.price * item.quantity}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center border-t pt-4">
            <h3 className="text-xl font-semibold mb-4 md:mb-0">
              Total: ₹{totalPrice}
            </h3>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
