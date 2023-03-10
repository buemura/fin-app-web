import { investmentService } from "@services/http/investment-service";
import { useUserStore } from "@stores/user";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

import { IInvestment } from "../../../interfaces/investment";
import { PaginationMetadata } from "../../../interfaces/pagination";
import { Collapsable } from "../../common/Collapsable";
import { LoaderSpinner } from "../../common/Loader";
import { Investment } from "./components/Investment";
import { ModalNewInvestment } from "./components/ModalNewInvestment";
import { MESSAGES } from "./helpers/messages";

interface InvestmentsProps {
  investments: IInvestment[] | null;
  isLoading: boolean;
  pagination: PaginationMetadata;
  setPagination: (data: PaginationMetadata) => void;
}

export function Investments({
  investments,
  isLoading,
  pagination,
  setPagination,
}: InvestmentsProps) {
  const { user } = useUserStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInvestmentsPricesUpdate = async () => {
    await investmentService.updatePrices({
      userId: user?.id ?? "",
      accessToken: user?.accessToken ?? "",
    });

    location.reload();
  };

  return (
    <Collapsable title={MESSAGES.CONTAINER_TITLE}>
      <div className="flex justify-end gap-3">
        <FiRefreshCw
          className="my-4 text-2xl cursor-pointer text-blue-600 hover:text-blue-700"
          onClick={handleInvestmentsPricesUpdate}
        />
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
          {investments?.map((investment) => (
            <Investment key={investment.id} investment={investment} />
          ))}
        </ul>
      )}

      <ModalNewInvestment
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Collapsable>
  );
}
