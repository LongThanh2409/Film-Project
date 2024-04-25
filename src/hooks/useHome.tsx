"use client";

import { useQuery } from "@tanstack/react-query";
import { ApiDiscover } from "../api/Home";

export const useQUeryListDiscover = () => {
  return useQuery({
    queryKey: ["discover"],
    queryFn: async () => ApiDiscover.ListDiscover(),
  });
};
