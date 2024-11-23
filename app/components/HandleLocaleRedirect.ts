import { useRouter } from "next/navigation";

export const useHandleLocaleRedirect = () => {
  const router = useRouter();

  return (path: string) => {
    const currentPath = window.location.pathname;
    const locale = currentPath.split("/")[1];
    router.push(`/${locale}${path}`);
  };
};
