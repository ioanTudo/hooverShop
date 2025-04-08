import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./form.css";
import { auth } from "../../api/firebase";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="form_container">
      <div className="header_container">
        <h1>register</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.email && <span className="error_msg">This is required.</span>}
        <input
          {...register("email", { required: true })}
          placeholder="email address"
          type="email"
        />

        {errors.password && (
          <span className="error_msg">Min. 5 letters required.</span>
        )}
        <input
          {...register("password", { minLength: 5, required: true })}
          placeholder="password"
          type="password"
        />

        <input className="submit_input" type="submit" />
        <p className="logIn_link">
          <Link to={"/login"}>sign in</Link> if you have an account.
        </p>
        <Link to={"/"}>home</Link>
      </form>
    </div>
  );
};
