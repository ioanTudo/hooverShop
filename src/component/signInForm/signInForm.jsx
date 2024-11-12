import { useForm } from "react-hook-form";
import "./formStyle.css";
import { HeaderLogo } from "../header/headerLogo";
import { Link } from "react-router-dom";

export const SignInForm = () => {
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
      <form
        onSubmit={handleSubmit((data) => console.log(data, errors))}
        action="text "
      >
        {errors.firstName && (
          <span className="error_msg">This is required.</span>
        )}
        <input
          {...register("firstName", { required: true })}
          placeholder="first name"
          type="text"
        />
        {errors.lastName && (
          <span className="error_msg">This is required.</span>
        )}
        <input
          {...register("lastName", { required: true })}
          placeholder="last name"
          type="text"
        />
        {errors.email && <span className="error_msg">This is required.</span>}
        <input
          {...register("email", { required: true })}
          placeholder="email adress"
          type="email"
        />
        {errors.password && (
          <span className="error_msg">Min. 5 letters required.</span>
        )}
        <input
          {...register("password", {
            minLength: 5,
            required: true,
          })}
          placeholder="password"
          type="password"
        />
        <input className="submit_input" type="submit" />
        <p className="logIn_link">
          <Link to={"/logIn-page"}>log in</Link> if you have an account.
        </p>
        <Link to={"/"}>home</Link>
      </form>
    </div>
  );
};
