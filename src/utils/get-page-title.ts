const TITLE = 'koa-adjust';

export default function getPageTitle(pageTitle: string) {
  if (pageTitle) {
    return `${pageTitle} - ${TITLE}`;
  }
  return `${TITLE}`;
}
