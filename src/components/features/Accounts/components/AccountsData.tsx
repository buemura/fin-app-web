import { IAccount, IAccounts } from "../../../../types/Account";
import PieChart from "../../../common/Charts/PieChart";
import {
  backgroundColor,
  borderColor,
} from "../../../common/Charts/helpers/constants";
import { LoaderSpinner } from "../../../common/Loader";
import Account from "./Account";

interface AccountsDataProps {
  accounts: IAccounts | null;
  isLoading: boolean;
}

export default function AccountsData({
  isLoading,
  accounts,
}: AccountsDataProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-4">
        <LoaderSpinner
          width={50}
          height={50}
          primaryColor="#2757a3"
          secondaryColor="#95b8f0"
        />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col-reverse justify-between lg:flex-row">
      <ul className="lg:w-1/2">
        {accounts?.accounts.map((account) => (
          <Account key={account.id} account={account} />
        ))}
      </ul>

      <div className="lg:w-1/2 flex justify-center py-8">
        <PieChart
          data={{
            labels: accounts?.accounts.map((account) => account.name),
            datasets: [
              {
                label: "Balance",
                data: accounts?.accounts.map((account) => account.balance),
                backgroundColor: backgroundColor,
                borderColor: borderColor,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
