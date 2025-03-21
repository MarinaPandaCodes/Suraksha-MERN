import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError(); // Hook to fetch the error details from the router

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-5">
      <div className="text-center bg-white rounded-xl shadow-xl p-10 max-w-xl w-full transition-all ease-in-out duration-300">
        {/* Error Heading */}
        <h1 className="text-6xl text-orange-600 font-bold mb-2">Oops❗</h1>
        <h2 className="text-2xl text-gray-800 mb-5">Something went wrong.</h2>

        {/* Displaying error details if available */}
        <p className="text-lg text-gray-600 mb-7">
          {error?.status} - {error?.statusText || 'Unknown Error'}
        </p>

        {/* Generic error message */}
        <p className="text-base text-gray-700 mb-7 font-normal">
          We are sorry, but it seems like something unexpected occurred. Please
          try again later or contact support if the issue persists.
        </p>

        {/* Link to navigate back to the home page */}
        <a
          href="/"
          className="inline-block text-white bg-orange-600 py-3 px-6 text-lg font-medium rounded-md transition-all ease-in-out duration-300 hover:bg-orange-500 transform hover:scale-105"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
