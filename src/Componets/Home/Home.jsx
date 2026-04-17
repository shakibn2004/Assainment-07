import Banner from "./Banner";
import Main from "./Main";
import Counter from "./Counter";

const Home = () => {
  return (
    <div className="max-w-277.5 w-[90%] md:w-[70%] mx-auto my-20 space-y-10">
      <Banner />
      <Counter />
      <Main />
    </div>
  );
};

export default Home;
