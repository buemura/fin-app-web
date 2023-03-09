import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/http/user-service";
import { User } from "../types/User";

export const useCheckAuth = (user: User | null) => {
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      await userService.getUserData({
        userId: user?.id || "",
        accessToken: user?.accessToken || "",
      });
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    if (!user) {
      return navigate("/auth/login");
    }

    fetchUserData();
  }, [user]);

  return { hasError };
};
