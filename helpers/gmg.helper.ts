class GmgHelper {
  generate = () => {
    let host: string|null = window.location.hostname;
    if (host.indexOf('gamigo.io') >= 0) {
      host = 'fantasy-town.com';
    }
    if (host === 'localhost') {
      host = null;
    }
    const script = document.createElement('script');
    script.src = `https://gtas.${host}/gmgSession.js`;
    script.onload = function () {
      (window as any).GmgSession.init('FTOWN', host);
      (window as any).GmgSession.sendPageView(null, 'Landing Page');
    }
    document.body.appendChild(script);
  }
}

const gmgHelper = new GmgHelper();
export { gmgHelper };
