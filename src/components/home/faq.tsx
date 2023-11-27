import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getVariants } from "@/lib/variants";
import useLocale from "@/hooks/useLocale";

export default function FAQ() {
  const router = useRouter();
  const locale = router.locale;
  const tHome = useLocale("home");
  const tFaq = useLocale("faq");

  return (
    <motion.div
      viewport={{ once: true }}
      initial="hidden"
      whileInView="show"
      className="flex flex-col items-center pb-8 lg:pb-16"
    >
      <motion.h1
        variants={getVariants()}
        className="flex items-center font-bold tracking-tight scroll-m-20 text-5xl lg:text-6xl text-center gap-6"
      >
        {tHome("faq")}
      </motion.h1>

      <motion.p
        variants={getVariants({ delay: 0.3 })}
        className="my-7 text-lg lg:text-xl leading-7 text-[hsla(0,0%,40%,1)] dark:text-[hsla(0,0%,92%,1)] max-w-2xl text-center"
      >
        {locale === "zh" ? (
          <>
            在使用 <b>Le-AI</b> 的过程中，您可能会遇到一些问题。
          </>
        ) : (
          <>
            Find answers to your questions about using <b>Le-AI</b>
          </>
        )}
      </motion.p>
      <motion.div
        variants={getVariants({ delay: 0.5 })}
        className="w-[570px] max-w-[calc(100vw-2rem)]"
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{tFaq("q1")}</AccordionTrigger>
            <AccordionContent>{tFaq("a1")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{tFaq("q2")}</AccordionTrigger>
            <AccordionContent>{tFaq("a2")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>{tFaq("q3")}</AccordionTrigger>
            <AccordionContent>{tFaq("a3")}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </motion.div>
  );
}
