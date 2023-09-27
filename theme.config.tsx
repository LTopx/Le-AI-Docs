import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const logo = (
  <div className="flex gap-2 items-center">
    <Image src="/logo.png" alt="logo" width={40} height={40} />
    <div className="cursor-pointer flex font-extrabold text-transparent text-3xl gap-2 items-center select-none">
      <span className="bg-clip-text bg-logo bg-[size:400%] animate-flow">
        Le-AI Docs
      </span>
    </div>
  </div>
);

const config: DocsThemeConfig = {
  logo,
  project: {
    link: "https://github.com/LTopx/Le-AI",
  },
  docsRepositoryBase: "https://github.com/LTopx/Le-AI",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Le-AI Docs",
      };
    }
  },
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
  banner: {
    key: "0.9.2-release",
    text: (
      <a href="https://le-ai.app" target="_blank">
        🎉 Le-AI v0.9.2 released. Get to know →
      </a>
    ),
  },
  search: {
    placeholder: () => {
      const router = useRouter();
      if (router.locale === "zh-CN") return "搜索文档...";
      return "Search documentation…";
    },
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <div className="flex flex-col w-full items-center sm:items-start">
        <div>
          <a
            className="flex text-current gap-1 items-center"
            target="_blank"
            rel="noopener noreferrer"
            title="LTopx Le-AI"
            href="https://github.com/LTopx"
          >
            Powered by LTopx
          </a>
        </div>
        <p className="mt-6 text-xs">© {new Date().getFullYear()} Le-AI Docs.</p>
      </div>
    ),
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh-CN", text: "中文" },
  ],
};

export default config;
