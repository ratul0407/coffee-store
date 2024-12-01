import { Link, useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";
import Form from "../components/Form";

function UpdateCoffee() {
  const data = useLoaderData();
  const { _id } = data;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const chef = form.chef.value;
    const details = form.details.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      details,
      supplier,
      taste,
      category,
      photo,
    };
    console.log(updatedCoffee);

    fetch(
      `https://coffee-store-server-8629nprmk-ratuls-projects-4bca9837.vercel.app/coffee/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated sucessfully!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <main className="w-10/12 mx-auto">
      <div className=" text-grayish-blue py-12 text-3xl  ">
        <Link to="/" className="flex items-center gap-3">
          <FaArrowLeft />
          <span>Back To Home</span>
        </Link>
      </div>
      <div className=" bg-gray-color py-20 px-20 space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-grayish-blue text-5xl">
            Update Existing Coffee Details
          </h3>
          <p className="text-light-gray text-2xl w-10/12 mx-auto">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <Form data={data} handleSubmit={handleUpdateCoffee} />
      </div>
    </main>
  );
}

export default UpdateCoffee;
