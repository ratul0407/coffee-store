import { useContext } from "react";
import Header from "../components/Header";
import { AuthContext } from "../provider/AuthProvider";

function SignIn() {
  const { signInUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        const lastSignInTime = res?.user?.metadata?.lastSignInTime;
        console.log(lastSignInTime);
        const loginInfo = { email, lastSignInTime };
        fetch(
          `https://coffee-store-server-8629nprmk-ratuls-projects-4bca9837.vercel.app/users`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(loginInfo),
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <header className="text-white">
        <Header />
      </header>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="card shadow-xl  p-8  mt-12 max-w-lg mx-auto"
      >
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            required
            name="password"
            placeholder="password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control py-4">
          <button type="submit" className="btn btn-success text-white text-xl">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
