"use client";

import instance from "../config";

const ListDiscover = async () => {
  return await instance.get("/discover/tv");
};

export const ApiDiscover = {
  ListDiscover,
};
