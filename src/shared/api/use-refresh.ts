import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTokenService } from "../token-service";
import { Paths } from "../configs";

export function useRefresh() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const refresh = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/auth/refresh`,
          {
            withCredentials: true,
          },
        );
        useTokenService.getState().set(data.accessToken);
      } catch {
        useTokenService.getState().clear();
        router.push(Paths.login());
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    refresh().catch((err) => console.log("Ошибка при refresh", err));
  }, [router]);

  return loading;
}
