import { FaDumpster, FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function CoffeeCard({ coffee, coffees, setCoffees }) {
  const { _id, name, chef, category, photo } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-6suxlgpnf-ratuls-projects-4bca9837.vercel.app/coffee/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="relative  bg-gray-color flex items-center justify-around  py-4 font-raleway">
      <div>
        <img src={photo} alt="" />
      </div>
      <div className="space-y-3">
        <p>
          <span className="text-chocolate-color font-bold">Name: </span>
          <span className="text-btn-color">{name}</span>
        </p>
        <p>
          <span className="text-chocolate-color font-bold">Chef: </span>
          <span className="text-btn-color">{chef}</span>
        </p>
        <p>
          <span className="text-chocolate-color font-bold">Category: </span>
          <span className="text-btn-color">{category}</span>
        </p>
      </div>
      <div className="space-y-3">
        <div>
          <button className="bg-sadlewood p-1 rounded-sm">
            <FaEye />
          </button>
        </div>
        <div>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="bg-slate-950 p-1 rounded-sm ">
              <FaPen />
            </button>
          </Link>
        </div>
        <div>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 p-1 rounded-sm"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
