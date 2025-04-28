import { useForm } from "react-hook-form";
import { auth } from "../../api/firebase";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";

import showImg from "../../images/hideShowImg/visible-removebg.png";
import hideImg from "../../images/hideShowImg/hide-removebg.png";
import { sendEmailVerification } from "firebase/auth";

export const AuthForm = ({
  title,
  authMethod,
  confirmation,
  errorMsg,
  loading,
  setLoading,
  setConfirmation,
  setErrorMsg,
  loadingMsg,
  btnText,
  registrationMsgConfirmation,
  isNavigatingToDashboard,
  showLoginPath,
  showPassword,
  setShowPassword,
  isRegisteringAcc,
}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    setLoading(true);
    try {
      await authMethod(auth, email, password);
      setConfirmation(registrationMsgConfirmation);
      setErrorMsg(null);
      if (isRegisteringAcc) {
        await sendEmailVerification(auth.currentUser);
      }
      if (isNavigatingToDashboard) {
        navigate("/dashboard");
      }

      reset();
    } catch (error) {
      setConfirmation("");
      if (error.code === "auth/email-already-in-use") {
        setErrorMsg("Email already in use.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMsg("Incorrect password.");
      } else {
        setErrorMsg("Something went wrong, please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form_wrapper">
      <div className="form_container">
        <div className="header_container">
          <h1 className="title">{title}</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {showLoginPath
            ? confirmation && (
                <div className="success_msg">
                  {confirmation}
                  <Link to={"/login"}>
                    <p>Log in</p>
                  </Link>
                </div>
              )
            : " "}

          {errorMsg && <div className="error_msg">{errorMsg}</div>}

          <input
            type="email"
            placeholder="Email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <span className="error_msg">{errors.email.message}</span>
          )}

          <div className="password_input_wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be at least 5 characters",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="toggle_password_btn"
            >
              {showPassword ? (
                <img className="hideShowImg" src={showImg} alt="" />
              ) : (
                <img className="hideShowImg" src={hideImg} alt="" />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="error_msg">{errors.password.message}</span>
          )}

          <input
            className="submit_input"
            type="submit"
            disabled={loading}
            value={loading ? loadingMsg : btnText}
          />
        </form>
      </div>
    </div>
  );
};
