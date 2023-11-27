import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import useLocale from "@/hooks/useLocale";

export default function Footer() {
  const tHome = useLocale("home");

  const [status, setStatus] = React.useState({
    indicator: "",
    description: "",
  });

  const getStatus = async () => {
    const res = await fetch(
      "https://szbn3dt2sxq9.statuspage.io/api/v2/status.json"
    ).then((res) => res.json());
    setStatus({
      indicator: res.status.indicator,
      description: res.status.description,
    });
  };

  React.useEffect(() => {
    getStatus();
  }, []);

  return (
    <div className="bg-zinc-50 dark:bg-[#0a0a0a] border-t border-t-[rgba(rgba(0,0,0,.08))] dark:border-t-[hsla(0,0%,100%,.14)] py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="gap-8 hidden md:flex">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="logo" width={30} height={30} />
              <span className="text-muted-foreground">@ 2023</span>
            </div>
            <div className="flex mt-2">
              {!!status.indicator && (
                <div
                  className={cn(
                    "flex items-center text-sm font-semibold gap-2 p-2 rounded-md cursor-pointer hover:bg-[#eaeaea] dark:hover:bg-[#333333] transition-colors select-none",
                    {
                      "text-blue-500": status.indicator === "none",
                      "text-orange-500":
                        status.indicator === "minor" ||
                        status.indicator === "major",
                      "text-red-500": status.indicator === "critical",
                    }
                  )}
                >
                  <div
                    className={cn("w-2.5 h-2.5 rounded-full", {
                      "bg-blue-500": status.indicator === "none",
                      "bg-orange-500":
                        status.indicator === "minor" ||
                        status.indicator === "major",
                      "bg-red-500": status.indicator === "critical",
                    })}
                  />
                  <div>{status.description}</div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="text-[#171717] dark:text-[#ededed] font-medium">
              {tHome("resources")}
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <Link
                href="/client/introduction"
                className="text-[#666666] hover:text-black transition-colors w-32"
              >
                {tHome("docs")}
              </Link>
              <Link
                href="/"
                className="text-[#666666] hover:text-black transition-colors w-32"
              >
                {tHome("downloadList")}
              </Link>
            </div>
          </div>
          <div>
            <div className="text-[#171717] dark:text-[#ededed] font-medium">
              {tHome("legal")}
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <Link
                href="/"
                className="text-[#666666] hover:text-black transition-colors w-32"
              >
                {tHome("privacyPolicy")}
              </Link>
              <Link
                href="/"
                className="text-[#666666] hover:text-black transition-colors w-32"
              >
                {tHome("termsOfService")}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:hidden gap-3">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="logo" width={30} height={30} />
              <span className="text-muted-foreground">@ 2023</span>
            </div>
            <div className="flex">
              {!!status.indicator && (
                <div
                  className={cn(
                    "flex items-center text-sm font-semibold gap-2 p-2 rounded-md cursor-pointer hover:bg-[#eaeaea] dark:hover:bg-[#333333] transition-colors select-none",
                    {
                      "text-blue-500": status.indicator === "none",
                      "text-orange-500":
                        status.indicator === "minor" ||
                        status.indicator === "major",
                      "text-red-500": status.indicator === "critical",
                    }
                  )}
                >
                  <div
                    className={cn("w-2.5 h-2.5 rounded-full", {
                      "bg-blue-500": status.indicator === "none",
                      "bg-orange-500":
                        status.indicator === "minor" ||
                        status.indicator === "major",
                      "bg-red-500": status.indicator === "critical",
                    })}
                  />
                  <div>{status.description}</div>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="text-[#171717] dark:text-[#ededed] font-medium">
              {tHome("resources")}
            </div>
            <div className="flex gap-4">
              <Link
                href="/"
                className="text-[#666666] hover:text-black transition-colors"
              >
                {tHome("docs")}
              </Link>
              <Link
                href="/"
                className="text-[#666666] hover:text-black transition-colors"
              >
                {tHome("downloadList")}
              </Link>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-[#171717] dark:text-[#ededed] font-medium">
              {tHome("legal")}
            </div>
            <div className="flex gap-4">
              <Link
                href="/"
                className="text-[#666666] hover:text-black transition-colors"
              >
                {tHome("privacyPolicy")}
              </Link>
              <Link
                href="/"
                className="text-[#666666] hover:text-black transition-colors"
              >
                {tHome("termsOfService")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
