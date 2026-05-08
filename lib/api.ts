  const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3050/api";

type ApiOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  headers?: Record<string, string>;
};

export const api = async <T>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> => {
  const { method = "GET", body, headers = {} } = options;

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};