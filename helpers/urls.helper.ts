export const urls = {
  origin: (): string => {
      if (window.location.hostname === 'localhost' || window.location.hostname === 'fantasytown.gamigo.io') {
        // Dev API URL https://newsletter.mig.glyph.net
        return `https://newsletter.trionworlds.com`;
      }
      // Production url
      return `https://newsletter.trionworlds.com`;
    },
  subscribe: function () {
    return this.origin()+'/api/subscribe';
  },
  doubleOptIn: function () {
    return this.origin()+'/api/subscribeDoubleOptIn';
  },
};
