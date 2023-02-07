import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { expenseService } from "../services/http/expense-service";
import { IExpense } from "../types/Expense";
import { User } from "../types/User";

export const useFetchExpenses = (user: User | null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [expenses, setExpenses] = useState<IExpense[] | null>([]);

  const fetchExpenses = async () => {
    try {
      setIsLoading(true);
      const result = await expenseService.fetchAll({
        userId: user?.id || "",
        accessToken: user?.accessToken || "",
      });
      setIsLoading(false);
      setExpenses(result);
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return { expenses, isLoading, hasError };
};
