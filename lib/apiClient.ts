import { api } from "./api";

export const apiClient = {
  get: <T>(url: string) => api<T>(url),

  post: <T>(url: string, body: any) =>
    api<T>(url, { method: "POST", body }),

  put: <T>(url: string, body: any) =>
    api<T>(url, { method: "PUT", body }),

  delete: <T>(url: string) =>
    api<T>(url, { method: "DELETE" }),
};