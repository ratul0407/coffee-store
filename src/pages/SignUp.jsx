import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

function SignUp() {
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    createUser(email, password)
      .then((res) => {
        const creationTime = res.user.metadata.creationTime;
        const newUser = { name, email, creationTime };
        console.log(res.user);
        //save new user info to the database
        fetch(
          "https://coffee-store-server-8629nprmk-ratuls-projects-4bca9837.vercel.app/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="flex justify-center items-center font-raleway  h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="items-center flex justify-center text-3xl font-bold">
          <h3>Login</h3>
        </div>
        <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
          {/* user name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          {/* user email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* user password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className=" btn btn-success text-xl text-white"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex justify-center w-9/12 mx-auto gap-4 items-center pb-4">
          <div className="border w-full"></div>
          <span className="text-gray-500">or</span>
          <div className="border w-full"></div>
        </div>
        <div className="grid px-8 pb-8">
          <button className="flex items-center gap-2 btn btn-success text-white">
            <FaGoogle />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
