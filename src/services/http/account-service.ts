import { IAccount, IAccounts } from "../../types/Account";
import { PaginationMetadata } from "../../types/Pagination";
import { api } from "./api";

type FetchAllProps = {
  userId: string;
  accessToken: string;
  pagination?: PaginationMetadata;
};

type CreateProps = {
  userId: string;
  name: string;
  balance?: number;
  icon?: string;
  accessToken: string;
};

type UpdateProps = {
  id: string;
  name: string;
  balance: number;
  icon: string;
  accessToken: string;
};

type RemoveProps = {
  id: string;
  accessToken: string;
};

async function fetchAll({
  userId,
  accessToken,
  pagination,
}: FetchAllProps): Promise<IAccounts> {
  const url = `/accounts/${userId}?page=${pagination?.page}&items=${pagination?.items}`;
  const { data: response } = await api.get(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response?.data;
}

async function create({
  userId,
  name,
  balance,
  icon,
  accessToken,
}: CreateProps): Promise<any> {
  try {
    const url = `/account`;
    const body = { userId, name, balance, icon };
    const { data: response } = await api.post(url, body, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response?.data;
  } catch (error) {
    return null;
  }
}

async function update({
  id,
  name,
  balance,
  icon,
  accessToken,
}: UpdateProps): Promise<any> {
  try {
    const url = `/account/${id}`;
    const body = { name, balance, icon };
    const { data: response } = await api.put(url, body, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response?.data;
  } catch (error) {
    return null;
  }
}

async function remove({ id, accessToken }: RemoveProps): Promise<IAccount[]> {
  const url = `/account/${id}`;
  const { data: response } = await api.delete(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response?.data;
}

export const accountService = {
  fetchAll,
  create,
  update,
  remove,
};
