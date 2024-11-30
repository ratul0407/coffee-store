import { Link, useLoaderData } from "react-router-dom";
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";
import CoffeeCard from "../components/CoffeeCard";
import { BsCup } from "react-icons/bs";
import { useState } from "react";
function Home() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="container mx-auto">
      <section className="bg-hero  bg-cover bg-center bg-no-repeat py-44">
        <div className="space-y-4">
          <h1 className="text-6xl w-1/2 ml-auto">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="font-raleway w-1/2 ml-auto">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <div className="w-1/2 ml-auto pt-4">
            <button className="btn-custom">Learn More</button>
          </div>
        </div>
        <div></div>
      </section>
      <section className=" py-12 bg-light-yellow">
        <div className="w-11/12 mx-auto flex items-center justify-around gap-3">
          {/* first card */}
          <div className="space-y-2">
            <img src={icon1} alt="" />
            <h4 className="text-btn-color text-4xl">Awesome Aroma</h4>
            <p className="font-raleway text-light-gray">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          {/* second card */}
          <div className="space-y-2">
            <img src={icon2} alt="" />
            <h4 className="text-btn-color text-4xl">Awesome Aroma</h4>
            <p className="font-raleway text-light-gray">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          {/* third card */}
          <div className="space-y-2">
            <img src={icon3} alt="" />
            <h4 className="text-btn-color text-4xl">Awesome Aroma</h4>
            <p className="font-raleway text-light-gray">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          {/* fourth card */}
          <div className="space-y-2">
            <img src={icon4} alt="" />
            <h4 className="text-btn-color text-4xl">Awesome Aroma</h4>
            <p className="font-raleway text-light-gray">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </section>
      <section className="bg-coffee-cards h-screen bg-no-repeat bg-cover bg-center">
        <div className="py-12 flex items-center flex-col justify-center gap-2">
          <p className="text-btn-color font-raleway">---Sip & Savor---</p>
          <h3 className="text-3xl font-semibold text-chocolate-color">
            Our Popular Products
          </h3>
          <Link
            to="/addCoffee"
            className="text-white gap-3 flex items-center btn-custom"
          >
            <span>Add Coffee</span>
            <BsCup />
          </Link>
        </div>
        <div className="mx-auto w-10/12 grid grid-cols-2 gap-4">
          {coffees.map((coffee) => (
            <CoffeeCard
              coffees={coffees}
              setCoffees={setCoffees}
              key={coffee._id}
              coffee={coffee}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
