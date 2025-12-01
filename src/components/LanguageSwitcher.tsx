"use client";

import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', abbr: 'EN' },
  { code: 'es', name: 'Español', flag: '🇪🇸', abbr: 'ES' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  // Normalize the language code (e.g., "en-US" -> "en")
  const normalizedLanguage = i18n.language?.split('-')[0] || 'en';

  const currentLanguage = languages.find((lang) => lang.code === normalizedLanguage) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1.5">
          <span>{currentLanguage.flag}</span>
          <span className="font-medium">{currentLanguage.abbr}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`cursor-pointer ${
              normalizedLanguage === language.code ? 'bg-accent' : ''
            }`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
