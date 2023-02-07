import { useState } from "react";
import { expenseService } from "../../../services/http/expense-service";
import { useUserStore } from "../../../stores/user";
import { IExpense } from "../../../types/Expense";
import { Modal } from "../../Modal";
import { ModalInput } from "../../Modal/Input";

interface ModalUpdateExpenseProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  expense: IExpense;
}

export default function ModalUpdateExpense({
  isModalOpen,
  setIsModalOpen,
  expense,
}: ModalUpdateExpenseProps) {
  const { user } = useUserStore();

  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState(expense.title);
  const [imageUrl, setImageUrl] = useState(expense.imageUrl);
  const [isPaid, setIsPaid] = useState(expense.isPaid);
  const [isActive, setIsActive] = useState(expense.isActive);

  const handleSave = async () => {
    setIsLoading(true);

    await expenseService.update({
      id: expense.id,
      title,
      imageUrl,
      isPaid,
      isActive,
      accessToken: user?.accessToken || "",
    });

    setIsModalOpen(false);
    setIsLoading(false);
    location.reload();
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <Modal
      title="Update Expense"
      onCancel={() => setIsModalOpen(false)}
      onSave={handleSave}
      isLoading={isLoading}
      inputs={[
        {
          input: (
            <ModalInput
              labelText="Title"
              inputId="expense-title"
              inputType="text"
              value={title}
              onChangeValue={setTitle}
            />
          ),
        },
        {
          input: (
            <ModalInput
              labelText="Image"
              inputId="expense-image"
              inputType="text"
              value={imageUrl}
              onChangeValue={setImageUrl}
            />
          ),
        },
        {
          input: (
            <ModalInput
              labelText="Paid"
              inputId="expense-paid"
              inputType="checkbox"
              value={isPaid}
              onChangeValue={setIsPaid}
            />
          ),
        },
        {
          input: (
            <ModalInput
              labelText="Is Active"
              inputId="expense-is-active"
              inputType="checkbox"
              value={isActive}
              onChangeValue={setIsActive}
            />
          ),
        },
      ]}
    />
  );
}
