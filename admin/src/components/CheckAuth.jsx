import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckAuth = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, []);

  return <></>;
};

export default CheckAuth;
