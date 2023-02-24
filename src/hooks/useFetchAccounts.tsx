import { useEffect, useState } from "react";

import { accountService } from "../services/http/account-service";
import { IAccounts } from "../types/Account";
import { User } from "../types/User";

export const useFetchAccounts = (user: User | null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [accounts, setAccounts] = useState<IAccounts | null>(null);

  const fetchExpenses = async () => {
    try {
      setIsLoading(true);
      const result = await accountService.fetchAll({
        userId: user?.id || "",
        accessToken: user?.accessToken || "",
      });
      setIsLoading(false);
      setAccounts(result);
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return { accounts, isLoading, hasError };
};
