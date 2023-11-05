import Rus from '../assets/rusIcon.svg?react';
import Eng from '../assets/engIcon.svg?react';
import Esp from '../assets/espIcon.svg?react';
import Ger from '../assets/gerIcon.svg?react';
import Ita from '../assets/itaIcon.svg?react';
import Pol from '../assets/polIcon.svg?react';
import { Icon, Lang, LangKey } from '../types';

export const languages: Record<LangKey, Lang> = {
  ru: 'Русский',
  en: 'Английский',
  esp: 'Испанский',
  ger: 'Немецкий',
  ita: 'Итальянский',
  pol: 'Польский',
};

export const languagesIcons: Record<LangKey, Icon> = {
  ru: Rus,
  en: Eng,
  esp: Esp,
  ger: Ger,
  ita: Ita,
  pol: Pol
};