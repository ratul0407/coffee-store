import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import Swal from "sweetalert2";
function Users() {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#16a34a",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-8629nprmk-ratuls-projects-4bca9837.vercel.app/users/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
            }
          });
      }
    });

    //delete from the database
  };
  return (
    <div>
      <header className="text-white">
        <Header />
      </header>
      <h3>Users: {users.length}</h3>
      <div className="overflow-x-auto w-11/12 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Creation Time</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => {
              return (
                <tr key={user._id}>
                  <th>{++index}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.creationTime}</td>
                  <td className="space-x-3">
                    <button className="btn btn-warning">Edit</button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
