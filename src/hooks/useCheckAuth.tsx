import { useEffect, useState } from "react";
import { userService } from "../services/http/user-service";
import { User } from "../types/User";
import { useRouterNavigate } from "./useRouterNavigate";

export const useCheckAuth = (user: User | null) => {
  const { routerNavigate } = useRouterNavigate();
  const [hasError, setHasError] = useState(false);

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
      return routerNavigate("/auth/login");
    }

    fetchUserData();
  }, [user]);

  return { hasError };
};
