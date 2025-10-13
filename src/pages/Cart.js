import { useCart } from "../../src/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const whatsappNumber = "+254724326256";

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    const message = cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} - ${item.details}\nImage: ${window.location.origin}${item.image}`
      )
      .join("\n\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hello, I’d like to order:\n" + message
      )}`,
      "_blank"
    );
  };

  const handleRemove = (id, name) => {
    removeFromCart(id);
    toast.info(`${name} removed from cart`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      icon : false,
      style: {
        background: "#f81b1bff", // light red
        color: "white",
        fontWeight: "600",
        border: "2px solid #F97316", // orange border glow
        boxShadow: "0 0 10px #F97316",
        borderRadius: "12px",
        padding: "12px 20px",
        minWidth: "250px",
        fontSize: "16px",
      },
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 relative"
      style={{
        backgroundColor: "#f3f4f6",
      }}
    >
      {/* Subtle watermark background logo */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          backgroundImage: "url(/logo192.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "40rem",
          opacity: 0.2,
          zIndex: 0,
        }}
      ></div>

      {/* Cart container */}
      <div className="relative z-10 bg-white w-full max-w-4xl rounded-3xl shadow-2xl p-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center text-lg md:text-xl">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-5 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-5 w-full md:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-lg"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800 text-lg md:text-xl">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                      {item.details}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id, item.name)}
                  className="mt-3 md:mt-0 text-red-500 font-semibold hover:text-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Actions */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
              <button
                onClick={clearCart}
                className="w-full md:w-auto px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 font-semibold transition"
              >
                Clear Cart
              </button>
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full md:w-auto px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-semibold transition"
              >
                Checkout via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}
