import { useState } from "react";

import { Modal } from "@components/common/Modal";
import { ModalInput } from "@components/common/Modal/Input";
import { expenseService } from "@services/http/expense-service";
import { useUserStore } from "@stores/user";

interface ModalNewExpenseProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export default function ModalNewExpense({
  isModalOpen,
  setIsModalOpen,
}: ModalNewExpenseProps) {
  const { user } = useUserStore();

  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSaveNew = async () => {
    setIsSaveLoading(true);

    await expenseService.create({
      title,
      userId: user?.id || "",
      imageUrl,
      accessToken: user?.accessToken || "",
    });

    setIsModalOpen(false);
    setIsSaveLoading(false);
    location.reload();
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <Modal
      title="New Recurrent Expense"
      inputs={[
        {
          input: (
            <ModalInput
              labelText="Expense Title"
              inputId="expense-title-new"
              inputType="text"
              value={title}
              onChangeValue={setTitle}
            />
          ),
        },
        {
          input: (
            <ModalInput
              labelText="Image URL"
              inputId="expense-image-new"
              inputType="text"
              value={imageUrl}
              onChangeValue={setImageUrl}
            />
          ),
        },
      ]}
      onCancel={handleCancel}
      onSave={handleSaveNew}
      isLoading={isSaveLoading}
    />
  );
}
