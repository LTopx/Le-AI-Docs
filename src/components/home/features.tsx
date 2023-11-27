import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getVariants } from "@/lib/variants";
import useLocale from "@/hooks/useLocale";

export default function Features() {
  const tHome = useLocale("home");
  const tFeatures = useLocale("features");

  const list = [
    {
      icon: "i-mdi-account-off-outline",
      title: tFeatures("noLoginRequired"),
      content: tFeatures("noLoginRequiredTips"),
    },
    {
      icon: "i-mdi-coffee-outline",
      title: tFeatures("free"),
      content: tFeatures("freeTips"),
    },
    {
      icon: "i-mingcute-safety-certificate-line",
      title: tFeatures("dataSecurity"),
      content: tFeatures("dataSecurityTips"),
    },
    {
      icon: "i-mingcute-transfer-line",
      title: tFeatures("apiProxy"),
      content: tFeatures("apiProxyTips"),
    },
    {
      icon: "i-mingcute-chat-2-line",
      title: tFeatures("chatEverywhere"),
      content: tFeatures("chatEverywhereTips"),
    },
    {
      icon: "i-mdi-language-markdown-outline",
      title: tFeatures("format"),
      content: tFeatures("formatTips"),
    },
    {
      icon: "i-mdi-update",
      title: tFeatures("continuousUpdates"),
      content: tFeatures("continuousUpdatesTips"),
    },
    {
      icon: "i-mdi-comment-quote-outline",
      title: tFeatures("quickResponse"),
      content: tFeatures("quickResponseTips"),
    },
  ];

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
        {tHome("features")}
      </motion.h1>
      <motion.p
        variants={getVariants({ delay: 0.3 })}
        className="my-7 text-lg lg:text-xl leading-7 text-[hsla(0,0%,40%,1)] dark:text-[hsla(0,0%,92%,1)] max-w-2xl text-center"
      >
        <b>Le-AI</b> {tHome("helpYou")}
      </motion.p>
      <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-y-16 w-full mt-8">
        {list.map((item, index) => (
          <motion.div
            variants={getVariants({ delay: 0.5 + index * 0.1 })}
            key={index}
            className="flex gap-4"
          >
            <div
              className={cn(
                "rounded border w-[30px] h-[30px] flex justify-center items-center flex-shrink-0",
                "border-black/5 bg-black/5 dark:border-white/10 dark:bg-white/10"
              )}
            >
              <span
                className={cn("w-5 h-5", item.icon || "i-mingcute-alert-fill")}
              />
            </div>
            <div>
              <div className="text-lg mb-2 font-medium">{item.title}</div>
              <div className="text-sm text-muted-foreground">
                {item.content}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
