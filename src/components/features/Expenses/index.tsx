import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

import { IExpense } from "../../../types/Expense";
import { Expense } from "./components/Expense";
import { LoaderSpinner } from "../../common/Loader";
import ModalNewExpense from "./components/ModalNewExpense";

interface ExpensesProps {
  expenses: IExpense[] | null;
  isLoading: boolean;
}

export function Expenses({ expenses, isLoading }: ExpensesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center bg-white m-2 p-4 rounded-lg md:mx-28 lg:mx-64">
      <div className="flex justify-between">
        <span className="flex items-center gap-2 text-lg">
          My recurrent expenses
        </span>

        <FaPlusCircle
          className="text-2xl cursor-pointer text-blue-600 hover:text-blue-700"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

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
        <ul className="mt-4">
          {expenses?.map((expense) => (
            <Expense key={expense.id} expense={expense} />
          ))}
        </ul>
      )}

      <ModalNewExpense
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
