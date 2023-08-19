import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const logo = (
  <div className="flex items-center">
    <Image src="/logo.png" alt="logo" width={40} height={40} />
    <svg height="30" viewBox="0 0 360 65" xmlns="http://www.w3.org/2000/svg">
      <mask id="satori_om-id">
        <rect x="0" y="0" width="360" height="65" fill="#fff" />
      </mask>
      <clipPath id="satori_bct-id-0">
        <path d="M56.7 52.2L28.8 52.2L28.8 8.5L38.0 8.5L38.0 44.6L56.7 44.6L56.7 52.2ZM58.1 30.6L78.0 30.6L78.0 37.8L58.1 37.8L58.1 30.6ZM122.2 22.6L112.8 22.6Q112.4 21.1 111.6 19.9Q110.8 18.7 109.6 17.8Q108.4 17.0 107.0 16.5Q105.5 16.1 103.7 16.1L103.7 16.1Q100.3 16.1 97.8 17.7Q95.3 19.4 93.9 22.6Q92.5 25.7 92.5 30.3L92.5 30.3Q92.5 34.9 93.9 38.1Q95.3 41.3 97.8 42.9Q100.3 44.6 103.8 44.6L103.8 44.6Q106.9 44.6 109.1 43.5Q111.4 42.4 112.5 40.3Q113.7 38.3 113.7 35.5L113.7 35.5L115.6 35.8L104.4 35.8L104.4 28.8L122.6 28.8L122.6 34.3Q122.6 40.1 120.2 44.2Q117.8 48.3 113.5 50.5Q109.2 52.8 103.7 52.8L103.7 52.8Q97.6 52.8 93.0 50.0Q88.3 47.3 85.7 42.3Q83.1 37.3 83.1 30.4L83.1 30.4Q83.1 25.1 84.7 20.9Q86.2 16.7 89.0 13.9Q91.8 11.0 95.5 9.4Q99.2 7.9 103.5 7.9L103.5 7.9Q107.3 7.9 110.4 9.0Q113.6 10.1 116.1 12.0Q118.6 14.0 120.2 16.7Q121.8 19.4 122.2 22.6L122.2 22.6ZM136.8 52.2L127.5 52.2L127.5 8.5L144.8 8.5Q149.7 8.5 153.2 10.4Q156.7 12.3 158.5 15.6Q160.4 19.0 160.4 23.3L160.4 23.3Q160.4 27.7 158.5 31.0Q156.6 34.3 153.1 36.2Q149.5 38.0 144.5 38.0L144.5 38.0L133.5 38.0L133.5 30.6L143.0 30.6Q145.7 30.6 147.4 29.7Q149.2 28.8 150.0 27.1Q150.9 25.5 150.9 23.3L150.9 23.3Q150.9 21.1 150.0 19.5Q149.2 17.9 147.4 17.0Q145.7 16.1 143.0 16.1L143.0 16.1L136.8 16.1L136.8 52.2ZM176.1 16.1L162.7 16.1L162.7 8.5L198.6 8.5L198.6 16.1L185.2 16.1L185.2 52.2L176.1 52.2L176.1 16.1Z M233.0 52.2L233.0 52.2L217.5 52.2L217.5 8.5L233.1 8.5Q239.7 8.5 244.4 11.1Q249.2 13.7 251.7 18.6Q254.3 23.5 254.3 30.3L254.3 30.3Q254.3 37.1 251.7 42.0Q249.2 46.9 244.4 49.5Q239.6 52.2 233.0 52.2ZM226.7 16.4L226.7 44.3L232.6 44.3Q236.7 44.3 239.5 42.8Q242.3 41.3 243.7 38.3Q245.1 35.2 245.1 30.3L245.1 30.3Q245.1 25.5 243.7 22.4Q242.3 19.3 239.5 17.9Q236.7 16.4 232.6 16.4L232.6 16.4L226.7 16.4ZM273.7 52.8L273.7 52.8Q268.8 52.8 265.2 50.7Q261.5 48.6 259.6 44.8Q257.6 41.0 257.6 35.9L257.6 35.9Q257.6 30.9 259.6 27.1Q261.5 23.2 265.2 21.1Q268.8 19.0 273.7 19.0L273.7 19.0Q278.7 19.0 282.3 21.1Q285.9 23.2 287.9 27.1Q289.8 30.9 289.8 35.9L289.8 35.9Q289.8 41.0 287.9 44.8Q285.9 48.6 282.3 50.7Q278.7 52.8 273.7 52.8ZM273.8 45.8L273.8 45.8Q276.0 45.8 277.5 44.5Q279.1 43.2 279.8 41.0Q280.6 38.7 280.6 35.9L280.6 35.9Q280.6 33.0 279.8 30.8Q279.1 28.5 277.5 27.2Q276.0 25.9 273.8 25.9L273.8 25.9Q271.5 25.9 270.0 27.2Q268.4 28.5 267.6 30.8Q266.9 33.0 266.9 35.9L266.9 35.9Q266.9 38.7 267.6 41.0Q268.4 43.2 270.0 44.5Q271.5 45.8 273.8 45.8ZM308.6 52.8L308.6 52.8Q303.5 52.8 299.9 50.7Q296.3 48.5 294.4 44.7Q292.4 40.9 292.4 35.9L292.4 35.9Q292.4 30.9 294.4 27.1Q296.3 23.3 299.9 21.1Q303.5 19.0 308.5 19.0L308.5 19.0Q312.8 19.0 316.0 20.6Q319.2 22.1 321.1 24.9Q323.0 27.7 323.2 31.5L323.2 31.5L314.6 31.5Q314.2 29.1 312.7 27.6Q311.2 26.1 308.7 26.1L308.7 26.1Q306.5 26.1 305.0 27.2Q303.4 28.4 302.5 30.5Q301.7 32.7 301.7 35.8L301.7 35.8Q301.7 38.9 302.5 41.1Q303.4 43.3 305.0 44.5Q306.5 45.6 308.7 45.6L308.7 45.6Q310.2 45.6 311.5 45.0Q312.7 44.3 313.5 43.1Q314.3 41.9 314.6 40.2L314.6 40.2L323.2 40.2Q323.0 43.9 321.1 46.8Q319.3 49.6 316.1 51.2Q312.9 52.8 308.6 52.8ZM354.2 28.8L354.2 28.8L345.9 29.3Q345.7 28.2 345.0 27.3Q344.3 26.5 343.2 26.0Q342.0 25.4 340.5 25.4L340.5 25.4Q338.3 25.4 336.9 26.3Q335.4 27.2 335.4 28.7L335.4 28.7Q335.4 29.9 336.4 30.7Q337.3 31.5 339.6 32.0L339.6 32.0L345.5 33.2Q350.3 34.1 352.6 36.3Q355.0 38.5 355.0 42.0L355.0 42.0Q355.0 45.2 353.1 47.7Q351.2 50.1 347.9 51.4Q344.7 52.8 340.4 52.8L340.4 52.8Q333.9 52.8 330.1 50.1Q326.2 47.4 325.6 42.7L325.6 42.7L334.5 42.2Q334.9 44.2 336.4 45.2Q338.0 46.3 340.4 46.3L340.4 46.3Q342.8 46.3 344.3 45.3Q345.7 44.4 345.8 42.9L345.8 42.9Q345.7 41.7 344.7 40.9Q343.7 40.1 341.6 39.7L341.6 39.7L335.9 38.5Q331.1 37.6 328.8 35.2Q326.4 32.9 326.4 29.2L326.4 29.2Q326.4 26.0 328.1 23.8Q329.9 21.5 333.0 20.2Q336.1 19.0 340.3 19.0L340.3 19.0Q346.5 19.0 350.1 21.6Q353.6 24.2 354.2 28.8Z " />
      </clipPath>
      <defs>
        <pattern
          id="satori_pattern_id-0_0"
          x="0"
          y="0"
          width="1"
          height="1"
          patternUnits="objectBoundingBox"
        >
          <linearGradient id="satori_biid-0_0" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#d16ba5" />
            <stop offset="9.090909090909092%" stopColor="#c777b9" />
            <stop offset="18.181818181818183%" stopColor="#ba83ca" />
            <stop offset="27.27272727272727%" stopColor="#aa8fd8" />
            <stop offset="36.36363636363637%" stopColor="#9a9ae1" />
            <stop offset="45.45454545454546%" stopColor="#8aa7ec" />
            <stop offset="54.54545454545454%" stopColor="#79b3f4" />
            <stop offset="63.63636363636363%" stopColor="#69bff8" />
            <stop offset="72.72727272727273%" stopColor="#52cffe" />
            <stop offset="81.81818181818183%" stopColor="#41dfff" />
            <stop offset="90.90909090909092%" stopColor="#46eefa" />
            <stop offset="100%" stopColor="#5ffbf1" />
          </linearGradient>
          <rect
            x="0"
            y="0"
            width="330"
            height="73"
            fill="url(#satori_biid-0_0)"
          />
        </pattern>
      </defs>
      <mask id="satori_om-id-0">
        <rect x="25" y="-4" width="330" height="73" fill="#fff" />
      </mask>
      <rect
        x="25"
        y="-4"
        width="330"
        height="73"
        fill="url(#satori_pattern_id-0_0)"
        clipPath="url(#satori_bct-id-0)"
      />
    </svg>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </div>
);

const config: DocsThemeConfig = {
  logo,
  project: {
    link: "https://github.com/Peek-A-Booo/L-GPT",
  },
  docsRepositoryBase: "https://github.com/Peek-A-Booo/L-GPT",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – L-GPT Docs",
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
          content={title ? title + " – L-GPT Docs" : "L-GPT Docs"}
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
      </>
    );
  },
  banner: {
    key: "0.8.4-release",
    text: (
      <a href="https://chat.ltopx.com" target="_blank">
        🎉 L-GPT v0.8.4 released. Get to know →
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
            title="LTopx LGPT"
            href="https://github.com/LTopx"
          >
            Powered by LTopx
          </a>
        </div>
        <p className="mt-6 text-xs">© {new Date().getFullYear()} L-GPT Docs.</p>
      </div>
    ),
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh-CN", text: "中文" },
  ],
};

export default config;
