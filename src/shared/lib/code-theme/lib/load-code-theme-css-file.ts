export const loadCodeThemeCssFile = (fileUrl: string) =>
  new Promise((resolve, reject) => {
    let link = document.getElementById('code-theme') as HTMLLinkElement | null;

    if (link) {
      link.remove();
    }

    link = document.createElement('link');

    const handleLoad = () => {
      resolve(undefined);
      link!.removeEventListener('load', handleLoad);
      link!.removeEventListener('error', handleError);
    };

    const handleError = () => {
      reject(undefined);
      link!.removeEventListener('load', handleLoad);
      link!.removeEventListener('error', handleError);
    };

    link.addEventListener('load', handleLoad);
    link.addEventListener('error', handleError);

    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('id', 'code-theme');
    link.setAttribute('href', fileUrl);

    document.head.appendChild(link);
  });
