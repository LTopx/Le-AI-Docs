import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getVariants } from "@/lib/variants";
import useLocale from "@/hooks/useLocale";

export default function Tokens() {
  const router = useRouter();
  const locale = router.locale;
  const tPricing = useLocale("pricing");

  const [activeTab, setActiveTab] = React.useState(5);

  const prices = [
    {
      price: 5,
      tokens: 166,
      gifted: 34,
    },
    {
      price: 10,
      tokens: 366,
      gifted: 64,
    },
  ];

  const findPrice = prices.find((item) => item.price === activeTab);

  const formatter = new Intl.NumberFormat();

  return (
    <motion.div
      viewport={{ once: true }}
      variants={getVariants({ delay: 0.5 })}
      className="border border-[#eaeaea] dark:border-[#333] bg-white dark:bg-black p-8 rounded-lg flex flex-col justify-between gap-20 lg:mt-8"
    >
      <div>
        <div className="text-xl font-bold">Tokens</div>
        <div className="flex gap-1 mt-4 border border-[#eaeaea] dark:border-[#333] rounded-full items-center p-[3px] text-xl font-bold bg-[#f4f4f5] dark:bg-[#27272a] text-[#71717a] dark:text-[#a1a1aa]">
          {prices.map((item) => (
            <div
              key={item.price}
              className="flex-1 rounded-full flex justify-center items-center h-8 px-4 cursor-pointer select-none relative"
              onClick={() => setActiveTab(item.price)}
            >
              <span
                className={cn("relative z-10 transition-colors", {
                  "text-[#09090b] dark:text-[#fafafa]":
                    activeTab === item.price,
                })}
              >
                {item.price}$
              </span>
              {activeTab === item.price && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 bg-white dark:bg-[#0a0a0b]"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-[#666666] dark:text-[#a1a1a1] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0 text-green-500" />
            {locale === "zh" ? (
              <span>
                包含 <b>{findPrice.tokens}W</b> Le-AI API Tokens
              </span>
            ) : (
              <span>
                Gifted <b>{formatter.format(findPrice.tokens * 10000)}</b> Le-AI
                API Tokens
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0 text-green-500" />
            {locale === "zh" ? (
              <span>
                高级版会员额外 <b>赠送{findPrice.gifted}W</b> Le-AI API Tokens
              </span>
            ) : (
              <span>
                Get an <b> extra{formatter.format(findPrice.gifted * 10000)}</b>{" "}
                Tokens for Premium
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="i-mingcute-check-circle-fill w-5 h-5 flex-shrink-0 text-green-500" />
            <span>{tPricing("neverExpires")}</span>
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
          <span className="relative">Get stared</span>
          <span className="i-mdi-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1.5" />
        </Button>
        <div className="absolute inset-0 rounded-full blur-[7px] bg-black opacity-50 dark:bg-white dark:opacity-60" />
      </div>
    </motion.div>
  );
}
