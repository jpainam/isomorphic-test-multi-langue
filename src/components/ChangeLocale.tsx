'use client';
import { switchLocaleAction } from '@/app/actions/switch-locale';
import React from 'react';

export default function ChangeLocale({ locale }: { locale: string }) {
  const handleLocaleChange = (event: any) => {
    switchLocaleAction(event.target.value);
  };

  return (
    <div>
      <select onChange={handleLocaleChange} value={locale}>
        <option value="en">🇺🇸 English</option>
        <option value="zh-CN">🇨🇳 Chinese</option>
        <option value="sv">🇸🇪 Swedish</option>
      </select>
    </div>
  );
}
