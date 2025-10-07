"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { toast } from "react-toastify";
export function useAuthRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const publicPaths = ["/login", "/signup"];
    const isPublicPath = publicPaths.includes(pathname);

    if (!token && !isPublicPath) {
      toast.warning('É necessário realizar o Login para prosseguir.')
      router.replace("/login");
    } else if (token && isPublicPath) {
      router.replace("/products");
    } else {
      setChecking(false);
    }
  }, [pathname, router]);

  return checking;
}
