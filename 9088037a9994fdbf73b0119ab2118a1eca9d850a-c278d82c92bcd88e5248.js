(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5OW0":function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),i=r("9pBV"),a=r.n(i),s=function(e){var t=e.formId,r=e.portalId,n=e.setSubmitted,i=e.tagName,s=e.tagParent;if(!t)return null;return o.a.createElement(a.a,{portalId:r,formId:t,onSubmit:function(){"function"==typeof n&&n(!0),void 0!==window.dataLayer&&s&&window.dataLayer.push({event:"formAction",cfEventTag:i,cfEventTagParent:s})}})};s.defaultProps={tagName:"",tagParent:""},t.a=s},"9pBV":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=a(r("q1tI"));a(r("i8i4"));function a(e){return e&&e.__esModule?e:{default:e}}var s=0,l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={loaded:!1},r.id=s++,r.createForm=r.createForm.bind(r),r.findFormElement=r.findFormElement.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"createForm",value:function(){var e=this;if(window.hbspt){if(null===this.el)return;var t=n({},this.props);delete t.loading,delete t.onSubmit,delete t.onReady;var r=n({},t,{target:"#"+this.el.getAttribute("id"),onFormSubmit:function(t){var r=t.serializeArray();e.props.onSubmit(r)}});return window.hbspt.forms.create(r),!0}setTimeout(this.createForm,1)}},{key:"loadScript",value:function(){var e=this,t=document.createElement("script");t.defer=!0,t.onload=function(){e.createForm(),e.findFormElement()},t.src="//js.hsforms.net/forms/v2.js",document.head.appendChild(t)}},{key:"findFormElement",value:function(){if(null!==this.el){var e=this.el.querySelector("iframe");e?(this.setState({loaded:!0}),this.props.onReady&&this.props.onReady(e)):setTimeout(this.findFormElement,1)}}},{key:"componentDidMount",value:function(){window.hbspt||this.props.noScript?(this.createForm(),this.findFormElement()):this.loadScript()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return i.default.createElement("div",null,i.default.createElement("div",{ref:function(t){return e.el=t},id:"reactHubspotForm"+this.id,style:{display:this.state.loaded?"block":"none"}}),!this.state.loaded&&this.props.loading)}}]),t}(i.default.Component);t.default=l,e.exports=t.default},MfQG:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),i=r("PGlZ"),a=r("TSYQ"),s=r.n(a),l=r("PiD+"),c=r("f23f"),p=(r("pL2N"),function(e){var t=e.meta,r=t.title,n=t.logos,a=Object(i.a)({threshold:.6,triggerOnce:!0}),p=a[0],u=a[1],d=s()("home-sections home-logo-gallery",{"animate-section":u});return o.a.createElement("section",{ref:p,className:d},o.a.createElement("div",{className:"row align-center"},o.a.createElement("div",{className:"medium-10 small-12 column"},o.a.createElement("h2",{className:"home-logo-gallery__title",dangerouslySetInnerHTML:{__html:Object(c.n)(r)}}))),o.a.createElement("div",{className:"row home-logo-gallery__lists"},n.map((function(e,t){return o.a.createElement("div",{key:t,className:"medium-3 small-6 columns home-logo-gallery__list"},o.a.createElement("figure",{className:"home-logo-gallery__figure"},o.a.createElement(l.a,Object.assign({},e,{className:"home-logo-gallery__image",lazy:!1}))))}))))});p.defaultProps={data:{title:"",logos:[]}},t.a=p},PGlZ:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("q1tI");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i=new Map,a=new Map,s=0;function l(e){return Object.keys(e).filter(Boolean).sort().map((function(t){return t+"_"+("root"===t?(r=e.root)?(a.has(r)||(s+=1,a.set(r,s.toString())),a.get(r)):"0":e[t]);var r})).toString()}function c(e,t,r){if(void 0===r&&(r={}),!e)return function(){};var n=function(e){var t=l(e),r=i.get(t);if(!r){var n=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var r,i=t.isIntersecting&&o.thresholds.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(r=n.get(t.target))||r.forEach((function(e){e(i,t)}))}))}),e);r={id:t,observer:o,elements:n},i.set(t,r)}return r}(r),o=n.id,a=n.observer,s=n.elements,c=s.get(e)||[];return s.has(e)||s.set(e,c),c.push(t),a.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),i.delete(o))}}function p(e){return"function"!=typeof e.children}var u=function(e){var t,r;function i(t){var r;return(r=e.call(this,t)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){r.node&&(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,t){e&&r.props.triggerOnce&&r.unobserve(),p(r.props)||r.setState({inView:e,entry:t}),r.props.onChange&&r.props.onChange(e,t)},r.state={inView:!!t.initialInView,entry:void 0},r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin,o=e.trackVisibility,i=e.delay;this._unobserveCb=c(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n,trackVisibility:o,delay:i})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!p(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var i=this.props,a=i.children,s=i.as,l=i.tag,c=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(i,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(n.createElement)(s||l||"div",o({ref:this.handleNode},c),a)},i}(n.Component);function d(e){var t=void 0===e?{}:e,r=t.threshold,o=t.delay,i=t.trackVisibility,a=t.rootMargin,s=t.root,l=t.triggerOnce,p=t.skip,u=t.initialInView,d=Object(n.useRef)(),h=Object(n.useState)({inView:!!u}),f=h[0],m=h[1],g=Object(n.useCallback)((function(e){void 0!==d.current&&(d.current(),d.current=void 0),p||e&&(d.current=c(e,(function(e,t){m({inView:e,entry:t}),t.isIntersecting&&l&&d.current&&(d.current(),d.current=void 0)}),{root:s,rootMargin:a,threshold:r,trackVisibility:i,delay:o}))}),[Array.isArray(r)?r.toString():r,s,a,l,p,i,o]);Object(n.useEffect)((function(){d.current||!f.entry||l||p||m({inView:!!u})}));var b=[g,f.inView,f.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}u.displayName="InView",u.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},pL2N:function(e,t,r){},vrFN:function(e,t,r){"use strict";var n=r("Y3Pm"),o=r.n(n),i=r("E+oP"),a=r.n(i),s=r("q1tI"),l=r.n(s),c=r("qhky"),p=r("Wbzz"),u=r("42pF");function d(e){var t=e.description,r=e.lang,n=e.meta,i=e.title,s=(e.header.siteTitle,e.seoData),d=e.uri,h=(e.openGraphImage,Object(p.useStaticQuery)("2615726974")),f=h.site,m=h.OWGraphQL.seo;a()(s)&&(s={title:"",metaDesc:"",opengraphDescription:"",twitterDescription:"",opengraphTitle:"",twitterTitle:"",opengraphImage:{sourceUrl:""},twitterImage:{sourceUrl:""}}),!a()(s)&&a()(s.title)&&(s.title=""),!a()(s)&&a()(s.metaDesc)&&(s.metaDesc=""),!a()(s)&&a()(s.opengraphDescription)&&(s.opengraphDescription=""),!a()(s)&&a()(s.twitterDescription)&&(s.twitterDescription=""),!a()(s)&&a()(s.opengraphTitle)&&(s.opengraphTitle=""),!a()(s)&&a()(s.twitterTitle)&&(s.twitterTitle=""),a()(s)||!a()(s.opengraphImage)&&!a()(s.opengraphImage.sourceUrl)||(s.opengraphImage={sourceUrl:""}),a()(s)||!a()(s.twitterImage)&&!a()(s.twitterImage.sourceUrl)||(s.twitterImage={sourceUrl:""}),a()(s)||!a()(s.schema)&&!a()(s.schema.raw)||(s.schema={raw:""}),a()(s.schema.raw)||a()(u.a)||a()("https://www.openweb.com")||(s.schema.raw=o()(s.schema.raw,new RegExp(u.a,"g"),"https://www.openweb.com"));var g=s.title||i,b=s.metaDesc||t||f.siteMetadata.description,y=s.opengraphDescription||b,v=s.twitterDescription||b,w=s.opengraphTitle||g,O=s.twitterTitle||g,_=m.webmaster.googleVerify||"",E=""+f.siteMetadata.siteUrl+d,k=f.siteMetadata.fbAppId,I=""+f.siteMetadata.siteUrl+d,V=s.metaRobotsNofollow,j="follow"===V?"index":"noindex",N=s.schema.raw,S=s.opengraphImage.sourceUrl;return l.a.createElement(c.a,{htmlAttributes:{lang:r},title:g,titleTemplate:"%s",link:I?[{rel:"canonical",href:I}]:[],meta:[{name:"title",content:g},{name:"description",content:b},{property:"og:locale",content:"en_US"},{property:"og:url",content:E},{property:"og:image",content:S},{property:"og:site_name",content:"OpenWeb"},{property:"og:title",content:w},{property:"og:description",content:y},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:f.siteMetadata.author},{name:"twitter:title",content:O},{name:"twitter:description",content:v},{name:"twitter:image",content:S},{name:"robots",content:j+", "+V},{name:"google-site-verification",content:_},{property:"fb:app_id",content:k}].concat(n)},N&&l.a.createElement("script",{type:"application/ld+json"},N))}d.defaultProps={description:"",lang:"en",meta:[]},t.a=d}}]);
//# sourceMappingURL=9088037a9994fdbf73b0119ab2118a1eca9d850a-c278d82c92bcd88e5248.js.map