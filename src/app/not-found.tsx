"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t("notFound.title")}</h1>
        <p className="mb-8 text-xl text-muted-foreground">{t("notFound.message")}</p>
        <Button asChild>
          <Link href="/">{t("notFound.returnHome")}</Link>
        </Button>
      </div>
    </div>
  );
}
