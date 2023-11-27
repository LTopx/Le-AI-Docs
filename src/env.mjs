import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// https://env.t3.gg/docs/nextjs

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().optional(),
    NEXT_PUBLIC_WEB_LINK: z.string().min(1),
    NEXT_PUBLIC_APIPROXY_LINK: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
    NEXT_PUBLIC_WEB_LINK: process.env.NEXT_PUBLIC_WEB_LINK,
    NEXT_PUBLIC_APIPROXY_LINK: process.env.NEXT_PUBLIC_APIPROXY_LINK,
  },
});
