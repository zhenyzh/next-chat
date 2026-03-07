import { useRouter } from "next/navigation";
import axios from "axios";
import { useTokenService } from "../token-service";
import { Paths } from "../configs";
import { useEffect } from "react";

export function useRefresh() {
  const router = useRouter();

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
      }
    };

    refresh().catch((err) => console.log("Ошибка при refresh", err));
  }, [router]);
}
