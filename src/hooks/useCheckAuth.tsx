import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { userService } from "../services/http/user-service";
import { User } from "../types/User";

export const useCheckAuth = (user: User | null) => {
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

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
      return router.push("/auth/login");
    }

    fetchUserData();
  }, [user]);

  return { hasError };
};
