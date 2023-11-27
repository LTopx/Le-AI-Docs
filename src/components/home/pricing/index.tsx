import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getVariants } from "@/lib/variants";
import Tokens from "./tokens";
import useLocale from "@/hooks/useLocale";

export default function Pricing() {
  const router = useRouter();
  const locale = router.locale;
  const tHome = useLocale("home");
  const tPricing = useLocale("pricing");

  return (
    <motion.div
      viewport={{ once: true }}
      initial="hidden"
      whileInView="show"
      className="flex flex-col items-center"
    >
      <motion.h1
        variants={getVariants()}
        className="flex items-center font-bold tracking-tight scroll-m-20 text-5xl lg:text-6xl text-center gap-6"
      >
        {tHome("pricing")}
      </motion.h1>
      {locale === "zh" ? (
        <motion.p
          variants={getVariants({ delay: 0.3 })}
          className="my-7 text-lg lg:text-xl leading-7 text-[hsla(0,0%,40%,1)] dark:text-[hsla(0,0%,92%,1)] max-w-2xl text-center"
        >
          <b>解锁</b> 更多功能，支持后续的开发
        </motion.p>
      ) : (
        <motion.p
          variants={getVariants({ delay: 0.3 })}
          className="my-7 text-lg lg:text-xl leading-7 text-[hsla(0,0%,40%,1)] dark:text-[hsla(0,0%,92%,1)] max-w-2xl text-center"
        >
          <b>Unlock</b> features, Support future development
        </motion.p>
      )}

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 ">
        <motion.div
          variants={getVariants({ delay: 0.5 })}
          className="border border-[#eaeaea] dark:border-[#333] bg-white dark:bg-black p-8 rounded-lg flex flex-col justify-between gap-20 lg:mt-8"
        >
          <div>
            <div className="text-xl font-bold">{tPricing("hobby")}</div>
            <div className="text-4xl font-bold mt-4">$0</div>
            <div className="mt-8 text-[#666666] dark:text-[#a1a1a1] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0 text-green-500" />
                {locale === "zh" ? (
                  <span>
                    <b>免费</b>使用
                  </span>
                ) : (
                  <span>
                    <b>Free</b> to use
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0 text-green-500" />
                <span>{tPricing("useOwnKey")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0 text-green-500" />
                <span>{tPricing("basicFeatures")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0 text-green-500" />
                <div>
                  <Link href="" className="underline">
                    {tPricing("useLeAIAPI")}
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0 text-green-500" />
                {locale === "zh" ? (
                  <span>
                    注册 Le-AI API 即赠送 2W Tokens 额度，可使用 <b>GPT-3.5</b>
                  </span>
                ) : (
                  <span>
                    Register and get 20,000 Tokens for free, Access to{" "}
                    <b>GPT-3.5</b>
                  </span>
                )}
              </div>
            </div>
          </div>
          <Button
            className={cn(
              "rounded-full w-full text-base h-12 flex items-center gap-2.5 group",
              "bg-white border-black border text-black hover:text-white",
              "dark:bg-black dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white"
            )}
          >
            {tHome("getStartedFree")}
            <span className="i-mdi-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </Button>
        </motion.div>
        <motion.div
          variants={getVariants({ delay: 0.5 })}
          className="border border-[#eaeaea] dark:border-[#333] bg-white dark:bg-black p-8 rounded-lg flex flex-col justify-between gap-20"
        >
          <div>
            <div className="text-xl font-bold">{tPricing("premium")}</div>
            <div className="flex items-end gap-1 mt-4">
              <div className="text-4xl font-bold flex">
                <div>$16.99</div>
              </div>
              <div className="text-muted-foreground line-through">$36.99</div>
            </div>
            <div className="mt-8 text-[#666666] dark:text-[#a1a1a1] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0 text-green-500" />
                <span>{tPricing("hobbyPlans")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0 text-green-500" />
                {locale === "zh" ? (
                  <span>
                    赠送 <b>50,000</b> Le-AI API Tokens
                  </span>
                ) : (
                  <span>
                    Gifted <b>500,000</b> Le-AI API Tokens
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0 text-green-500" />
                {locale === "zh" ? (
                  <span>
                    购买 Tokens 点数时<b>额外赠送20%</b>
                  </span>
                ) : (
                  <span>
                    Purchase Tokens and receive an <b>additional 20%</b> as a
                    bonus
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0 text-green-500" />
                {locale === "zh" ? (
                  <span>
                    可以使用 <b>GPT-4</b>
                  </span>
                ) : (
                  <span>
                    <b>GPT-4</b> is available
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0 text-green-500" />
                <span>{tPricing("lifetimeLicense")}</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Button
              className={cn(
                "rounded-full w-full text-base h-12 flex items-center gap-2.5 group relative z-10",
                "bg-[#161616] hover:bg-white border border-[#161616] hover:text-[#161616]",
                "dark:bg-[#ededed] dark:text-[rgb(10,10,10)] dark:hover:bg-black dark:hover:text-white"
              )}
            >
              <span className="relative">{tHome("getStarted")}</span>
              <span className="i-mdi-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </Button>
            <div className="absolute inset-0 rounded-full blur-[7px] bg-black opacity-50 dark:bg-white dark:opacity-60" />
          </div>
        </motion.div>
        <Tokens />
      </div>
    </motion.div>
  );
}
