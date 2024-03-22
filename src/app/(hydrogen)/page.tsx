import { metaObject } from '@/config/site.config';
import { createTranslation, getLocale } from '../i18n/server';
import ChangeLocale from '@/components/ChangeLocale';

export const metadata = {
  ...metaObject(),
};

export default async function FileDashboardPage() {
  const { t } = await createTranslation('home');
  const locale = getLocale();
  return (
    <div>
      <ChangeLocale locale={locale} />
      <h1>{t('greeting')}</h1>
    </div>
  );
}
