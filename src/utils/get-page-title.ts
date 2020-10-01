const TITLE = 'React admin template';

export default function getPageTitle(pageTitle: string) {
  if (pageTitle) {
    return `${pageTitle} - ${TITLE}`;
  }
  return `${TITLE}`;
}
