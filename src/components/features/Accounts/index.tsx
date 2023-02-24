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
import { Collapsable } from "../../common/Collapsable";

interface AccountsProps {
  accounts: IAccounts | null;
  isLoading: boolean;
}

export default function Accounts({ accounts, isLoading }: AccountsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Collapsable title="My accounts">
      <div className="flex justify-end">
        <FaPlusCircle
          className="my-4 text-2xl cursor-pointer text-blue-600 hover:text-blue-700"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <TotalBalance totalBalance={accounts?.totalBalance || 0} />
      <div className="border border-gray-100 mb-4" />

      <AccountsData isLoading={isLoading} accounts={accounts} />

      <ModalNewAccount
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Collapsable>
  );
}
