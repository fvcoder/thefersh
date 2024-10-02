/// <reference path="../.astro/types.d.ts" />
type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    otherLocals: {
        NOTION_API_KEY: string;
        NOTION_PAGE_ID: string;
    };
  }
}