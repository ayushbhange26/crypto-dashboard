function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex space-x-4">
        <div className="w-10 h-10 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="w-10 h-10 bg-green-400 rounded-full animate-bounce delay-150"></div>
        <div className="w-10 h-10 bg-blue-400 rounded-full animate-bounce delay-300"></div>
      </div>
      <p className="mt-4 text-lg font-semibold text-indigo-600">
        Fetching live market data...
      </p>
    </div>
  );
}
export default Loader;
