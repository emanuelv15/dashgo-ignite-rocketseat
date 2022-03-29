import { useQuery, UseQueryOptions } from "react-query";

import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

type GetUsersresponse = {
  totalCount: number;
  users: User[];
};

export const getUsers = async (page: number): Promise<GetUsersresponse> => {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return { users, totalCount };
};

export const useUsers = (page: number, options: UseQueryOptions) => {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10,
    ...options,
  });
};