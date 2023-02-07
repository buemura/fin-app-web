export interface IAccounts {
  accounts: IAccount[];
  totalBalance: number;
}

export interface IAccount {
  id: string;
  userId: string;
  name: string;
  balance: number;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}
