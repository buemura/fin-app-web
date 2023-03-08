import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { IAccounts } from "../../../types/Account";
import { PaginationMetadata } from "../../../types/Pagination";
import { Collapsable } from "../../common/Collapsable";
import AccountsData from "./components/AccountsData";
import ModalNewAccount from "./components/ModalNewAccount";
import TotalBalance from "./components/TotalBalance";

interface AccountsProps {
  accounts: IAccounts | null;
  isLoading: boolean;
  accountsPagination: PaginationMetadata;
  setAccountsPagination: (data: PaginationMetadata) => void;
}

export default function Accounts({
  accounts,
  isLoading,
  accountsPagination,
  setAccountsPagination,
}: AccountsProps) {
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
