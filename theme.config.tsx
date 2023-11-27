import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Language from "@/components/language";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

const logo = (
  <div className="flex h-14 text-2xl gap-2 items-center logo">
    <Image
      className="cursor-pointer"
      src="/logo.png"
      alt="logo"
      width={30}
      height={30}
    />
    <div className="cursor-pointer flex font-extrabold text-transparent items-center select-none">
      <span className="bg-clip-text bg-logo bg-[size:400%] animate-flow">
        Le-AI
      </span>
    </div>
    <style jsx>{`
      .logo {
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      .logo:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </div>
);

const config: DocsThemeConfig = {
  head: function useHead() {
    const { title } = useConfig();

    return (
      <>
        <meta
          name="viewport"
          content="height=device-height ,width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="og:title"
          content={title ? title + " – Le-AI Docs" : "Le-AI Docs"}
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        {!!process.env.UMAMI_WEBSITE_ID && (
          <script
            async
            src="https://umami.ltopx.com/script.js"
            data-website-id={process.env.UMAMI_WEBSITE_ID}
          ></script>
        )}
      </>
    );
  },
  useNextSeoProps() {
    const { asPath } = useRouter();

    if (asPath === "/") return { titleTemplate: "Le-AI" };

    return { titleTemplate: "%s – Le-AI Docs" };
  },
  docsRepositoryBase: "https://github.com/LTopx/Le-AI",
  nextThemes: {
    defaultTheme: "dark",
  },
  logo,
  navbar: {
    extraContent: (
      <div>
        <Link href="https://github.com/LTopx/Le-AI" target="_blank">
          <Button variant="ghost" size="icon" style={{ boxShadow: "none" }}>
            <span className="i-mdi-github w-6 h-6" />
          </Button>
        </Link>
        <Link href="https://twitter.com/peekbomb" target="_blank">
          <Button variant="ghost" size="icon" style={{ boxShadow: "none" }}>
            <span className="i-ri-twitter-x-fill w-[22px] h-[22px]" />
          </Button>
        </Link>
        <Language />
      </div>
    ),
  },
  banner: {
    key: "1.0.0-Published",
    text: (
      <a href="https://le-ai.app" target="_blank">
        🎉 Le-AI v1.0.0 Published. Get to know →
      </a>
    ),
  },
  search: {
    placeholder: () => {
      const router = useRouter();
      if (router.locale === "zh") return "搜索文档...";
      return "Search documentation…";
    },
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    component: <Footer />,
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh", text: "中文" },
  ],
};

export default config;
