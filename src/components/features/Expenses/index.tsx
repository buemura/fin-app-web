import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

import { IExpense } from "../../../types/Expense";
import { Expense } from "./components/Expense";
import { LoaderSpinner } from "../../common/Loader";
import ModalNewExpense from "./components/ModalNewExpense";
import { Collapsable } from "../../common/Collapsable";

interface ExpensesProps {
  expenses: IExpense[] | null;
  isLoading: boolean;
}

export function Expenses({ expenses, isLoading }: ExpensesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Collapsable title="My recurrent expenses">
      <div className="flex justify-end">
        <FaPlusCircle
          className="my-4 text-2xl cursor-pointer text-blue-600 hover:text-blue-700"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <LoaderSpinner
            width={50}
            height={50}
            primaryColor="#2757a3"
            secondaryColor="#95b8f0"
          />
        </div>
      ) : (
        <ul>
          {expenses?.map((expense) => (
            <Expense key={expense.id} expense={expense} />
          ))}
        </ul>
      )}

      <ModalNewExpense
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Collapsable>
  );
}
