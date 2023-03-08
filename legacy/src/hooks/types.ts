import { User } from "../types/User";

export interface IUseFetchProps {
  user: User | null;
  page?: number;
  items?: number;
}
