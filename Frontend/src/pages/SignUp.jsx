import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};

    if (formData.name.length < 3) {
      newErrors.name = "नाम कम से कम 3 अक्षर का होना चाहिए";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "सही ईमेल दर्ज करें";
    }

    if (formData.password.length < 6) {
      newErrors.password = "पासवर्ड कम से कम 6 अक्षर का होना चाहिए";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "पासवर्ड मेल नहीं खा रहा";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Signup Successful", formData);
      // let customer = JSON.parse(localStorage.getItem("emailId")) || [];
      // customer.push({ email: formData.email, password: formData.password });
      // localStorage.setItem("emailId", JSON.stringify(customer));

      let customer = JSON.parse(localStorage.getItem("emailId")) || [];
      console.log("customer", customer);
      // नया डेटा ऐड करें
      customer.push({ email: formData.email, password: formData.password });

      // LocalStorage में सेव करें
      localStorage.setItem("emailId", JSON.stringify(customer));
      console.log("errr");
      setSubmitted(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

        {submitted ? (
          <p className="text-green-600 text-center">Signup Successful! 🎉</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border rounded-lg"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded-lg"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border rounded-lg"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full p-2 border rounded-lg"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
        )}
        <p className="mt-4 text-sm text-center text-gray-600">
          if you have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
