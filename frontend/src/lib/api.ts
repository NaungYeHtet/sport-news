import type { DemoRequestFormData } from "./validation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

interface ApiResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitDemoRequest(
  data: DemoRequestFormData
): Promise<ApiResponse> {
  const res = await fetch(`${API_URL}/demo-request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json: ApiResponse = await res.json();
  const { ok } = res;
  const { message } = json;

  if (!ok) {
    throw new Error(message || "Something went wrong");
  }

  return json;
}
