import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { IAccounts } from "../../../types/Account";
import { LoaderSpinner } from "../../common/Loader";
import Account from "./components/Account";
import ModalNewAccount from "./components/ModalNewAccount";
import TotalBalance from "./components/TotalBalance";

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

      {isLoading ? (
        <div className="flex justify-center items-center mt-4">
          <LoaderSpinner
            width={50}
            height={50}
            primaryColor="#2757a3"
            secondaryColor="#95b8f0"
          />
        </div>
      ) : (
        <ul>
          {accounts?.accounts.map((account) => (
            <Account key={account.id} account={account} />
          ))}
        </ul>
      )}

      <ModalNewAccount
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
