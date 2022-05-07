class GtmHelper {
    generate = () => {
        (function(w,d,s,l,i){
            // @ts-ignore
            w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            let f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            // @ts-ignore
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            // @ts-ignore
            f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TLJC7HC');

    }
}

const gtmHelper = new GtmHelper();
export { gtmHelper };
