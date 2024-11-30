import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Form from "../components/Form";

// https://i.ibb.co.com/C8y99HG/1.png
// https://i.ibb.co.com/H7HsdvM/2.png
// https://i.ibb.co.com/5RdSLg3/3.png
// https://i.ibb.co.com/fS3PbXN/4.png
// https://i.ibb.co.com/mvfLJdx/5.png
// https://i.ibb.co.com/r2wSD6n/6.png
function AddCoffee() {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const chef = form.chef.value;
    const details = form.details.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, details, supplier, taste, category, photo };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added sucessfully!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="py-12 w-10/12 mx-auto bg-add-coffee bg-cover bg-no-repeat bg-center">
      <div className=" text-grayish-blue py-12 text-3xl  ">
        <Link to="/" className="flex items-center gap-3">
          <FaArrowLeft />
          <span>Back To Home</span>
        </Link>
      </div>
      <section className="bg-gray-color py-20 px-12 space-y-8">
        {/* page heading */}
        <div className="text-center space-y-4">
          <h3 className="text-grayish-blue text-5xl ">Add New Coffee</h3>
          <p className="text-light-gray text-xl w-10/12 mx-auto">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        {/* form */}
        <div>
          <Form handleSubmit={handleAddCoffee} />
        </div>
      </section>
    </div>
  );
}

export default AddCoffee;
