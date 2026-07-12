import { Link } from "react-router";

export const Home = () => {
  return (
    <div className="text-center mt-4">
      <h1 className="font-bold text-3xl">Welcome to Recipe Book</h1>
      <p className="text-gray-500">Discover delicious recipies and start cooking today!</p>
      <div className="flex space-x-7 justify-center align-middle mt-6 rounded-lg">
        <div className="bg-rose-500 w-65 h-30 align-middle">
       <Link to="/recipies">
        <h2 className=" text-2xl mt-6 text-white font-bold ">Browse Recipies</h2>
        <p className="text-white">Explore our collection of delicious recipies</p>
       </Link>
      </div>
       <div className="bg-rose-500 w-65 h-30">
       <Link to="/categories">
        <h2 className=" text-2xl mt-6 text-white font-bold ">Browse Categories</h2>
        <p className="text-white">Find recipies by category</p></Link>
      </div>
      </div>
    </div>
  );
};
