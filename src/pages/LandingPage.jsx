import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center max-w-2xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Savannah Informatics App</h1>
        <p className="text-gray-600 mb-6">
          This application allows users to explore albums, photos, and user profiles.
        </p>
        <Link
          to="/login"
          className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
