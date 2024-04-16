import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IKpiData, IProductData, ITransactionData } from "./interfaces";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  endpoints: (builder) => ({
    getKpis: builder.query<IKpiData[], void>({
      query: () => `kpi/kpis/`,
      providesTags: ["Kpis"],
    }),
    getProducts: builder.query<IProductData[], void>({
      query: () => `product/products/`,
      providesTags: ["Products"],
    }),
    getTransactions: builder.query<ITransactionData[], void>({
      query: () => `transaction/transactions/`,
      providesTags: ["Transactions"],
    }),
  }),
  tagTypes: ["Kpis", "Products", "Transactions"],
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
