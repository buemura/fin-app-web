import Accounts from "../../components/features/Accounts";
import { Expenses } from "../../components/features/Expenses";
import { Navbar } from "../../components/features/Navbar";
import { Transactions } from "../../components/features/Transactions";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { useFetchAccounts } from "../../hooks/useFetchAccounts";
import { useFetchExpenses } from "../../hooks/useFetchExpenses";
import { useUserStore } from "../../stores/user";

export default function Home() {
  const { user, logoutUser } = useUserStore();
  const { hasError } = useCheckAuth(user);

  const { expenses, isLoading: isExpensesLoading } = useFetchExpenses(user);
  const { accounts, isLoading: isAccountsLoading } = useFetchAccounts(user);

  if (hasError) {
    logoutUser();
  }

  return (
    <div className="min-w-screen min-h-screen bg-gray-100">
      <Navbar user={user} />

      <div className="flex flex-col p-2">
        <Expenses expenses={expenses} isLoading={isExpensesLoading} />
        <Accounts accounts={accounts} isLoading={isAccountsLoading} />
        {/* <Transactions /> */}
      </div>
    </div>
  );
}
