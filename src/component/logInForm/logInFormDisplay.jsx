import { useForm } from "react-hook-form";
import { HeaderLogo } from "../../component/header/headerLogo";
import { Link } from "react-router-dom";
import "../signInForm/formStyle.css";

export const LogInFormDisplay = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="form_container">
      <div className="header_container">
        <HeaderLogo />
        <h1>sign in</h1>
      </div>

      <form onSubmit={handleSubmit((data) => console.log(data))}>
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
          <Link to={"/signIn-page"}>sign in</Link> if you don't have an account.
        </p>
        <Link to={"/"}>home</Link>
      </form>
    </div>
  );
};
