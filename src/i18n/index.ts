import type { SiteConfig, UiConfig, Lang } from "./types";
import { en } from "./en";
import { zh } from "./zh";
import { ui } from "./ui";
import { defaultLang, languages } from "./types";

export { defaultLang, languages };

const configs: Record<Lang, SiteConfig> = { en, zh };

export function getSiteConfig(lang: Lang): SiteConfig {
  return configs[lang] || configs.en;
}

export function getUi(lang: Lang): UiConfig {
  return ui[lang] || ui.en;
}
