import { useState } from "react";

import { formatDate } from "../../../utils/date";
import { IExpense } from "../../../types/Expense";
import ModalUpdateExpense from "./ModalUpdateExpense";
import ExpensePaymentStatus from "./ExpensePaymentStatus";

interface ExpenseProps {
  expense: IExpense;
}

export function Expense({ expense }: ExpenseProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!expense.isActive) {
    return null;
  }

  return (
    <li>
      <div
        className="flex justify-between items-center border-b border-gray-200 p-2 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center gap-2">
          <img
            className="rounded-full border-2 border-gray-300 w-9 h-9"
            src={
              expense.imageUrl ||
              "https://www.caltrain.com/files/images/2021-09/default.jpg"
            }
            alt="expense"
            referrerPolicy="no-referrer"
          />

          <div className="flex flex-col">
            <span className="text-base">{expense.title}</span>
            <span className="text-sm text-gray-500 md:font-semibold">
              {formatDate(new Date())}
            </span>
          </div>
        </div>

        <ExpensePaymentStatus isPaid={expense.isPaid} />
      </div>

      <ModalUpdateExpense
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        expense={expense}
      />
    </li>
  );
}
