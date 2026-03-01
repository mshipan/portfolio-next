export async function fetcher<T>(
  endpoint: string,
  options?: RequestInit,
  revalidate: number = 300,
): Promise<T> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`,
    {
      ...options,
      next: { revalidate },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
