import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

import { Collapsable } from "@components/common/Collapsable";
import { LoaderSpinner } from "@components/common/Loader";
import { IExpense } from "@interfaces/expense";
import { PaginationMetadata } from "@interfaces/pagination";
import { Expense } from "./components/Expense";
import ModalNewExpense from "./components/ModalNewExpense";

interface ExpensesProps {
  expenses: IExpense[] | null;
  isLoading: boolean;
  pagination: PaginationMetadata;
  setPagination: (data: PaginationMetadata) => void;
}

export function Expenses({
  expenses,
  isLoading,
  pagination,
  setPagination,
}: ExpensesProps) {
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
