// The writing system each language's content is written in. The validator rejects letters from any other script
// (for example Cyrillic inside an English file), and it needs an entry here for every folder under content/.
// ASCII, common punctuation and emoji are allowed everywhere. To add a language, add its code here, and in lib/i18n.ts.
export const writingSystems = { ar: 'arabic', en: 'latin' }

// Letters allowed for each writing system, beyond ASCII. Latin accepts accented letters (café, Zoë), not other scripts.
export const scriptLetters = {
  arabic: /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/,
  latin: /\p{Script=Latin}/u,
}
