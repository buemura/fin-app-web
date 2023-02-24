import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { IAccounts } from "../../../types/Account";
import { LoaderSpinner } from "../../common/Loader";
import Account from "./components/Account";
import ModalNewAccount from "./components/ModalNewAccount";
import TotalBalance from "./components/TotalBalance";
import PieChart from "../../common/Charts/PieChart";
import {
  backgroundColor,
  borderColor,
} from "../../common/Charts/helpers/constants";
import AccountsData from "./components/AccountsData";

interface AccountsProps {
  accounts: IAccounts | null;
  isLoading: boolean;
}

export default function Accounts({ accounts, isLoading }: AccountsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center bg-white m-2 p-4 rounded-lg md:mx-28 lg:mx-64">
      <div className="flex justify-between mb-2">
        <span className="flex items-center gap-2 text-lg">My accounts</span>

        <FaPlusCircle
          className="text-2xl cursor-pointer text-blue-600 hover:text-blue-700"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <TotalBalance totalBalance={accounts?.totalBalance || 0} />
      <div className="border border-gray-100" />

      <AccountsData isLoading={isLoading} accounts={accounts} />

      <ModalNewAccount
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
