(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"64Yt":function(e,t,a){},"8ypT":function(e,t,a){},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,S=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=d.default.createElement(z,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),l):l})),z=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,S=e.itemProp,w=e.loading,I=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,A=!0===this.state.fadeIn&&!this.state.imgCached,W=(0,o.default)({opacity:k?1:0,transition:A?"opacity "+b+"ms":"none"},l),O="boolean"==typeof v?"lightgray":v,C={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},A&&C,l,f),V={title:t,alt:this.state.isVisible?"":a,style:T,className:m,itemProp:S};if(g){var B=g,F=p(g);return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:F.maxWidth?F.maxWidth+"px":null,maxHeight:F.maxHeight?F.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(F.srcSet)},d.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/F.aspectRatio+"%"}}),O&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&C)}),F.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:F.base64,spreadProps:V,imageVariants:B,generateSources:x}),F.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:F.tracedSVG,spreadProps:V,imageVariants:B,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,y(B),d.default.createElement(z,{alt:a,title:t,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:w},F,{imageVariants:B}))}}))}if(h){var q=h,M=p(h),j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete j.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},O&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:O,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},A&&C)}),M.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:V,imageVariants:q,generateSources:x}),M.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:V,imageVariants:q,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,y(q),d.default.createElement(z,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:w},M,{imageVariants:q}))}}))}return null},t}(d.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var W=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});A.propTypes={resolutions:W,sizes:O,fixed:c.default.oneOfType([W,c.default.arrayOf(W)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=A;t.default=C},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=(a("64Yt"),a("m21L"),function(){return i.a.createElement("nav",{className:"nav"},i.a.createElement("ul",{className:"nav-list"},i.a.createElement("li",{className:"nav-list-item"},i.a.createElement(n.Link,{activeStyle:{borderBottom:"2px solid rgb(55, 43, 34)"},to:"/"},"Home")),i.a.createElement("li",{className:"nav-list-item"},i.a.createElement(n.Link,{activeStyle:{borderBottom:"2px solid rgb(55, 43, 34)"},to:"/about"},"About")),i.a.createElement("li",{className:"nav-list-item"},i.a.createElement(n.Link,{activeStyle:{borderBottom:"2px solid rgb(55, 43, 34)"},to:"/experiments"},"Experiments"))))}),l=a("PHgK"),o=a.n(l),d=function(){return i.a.createElement("header",{className:"header"},i.a.createElement(n.Link,{to:"/"},i.a.createElement(o.a,{className:"mo-fire"})),i.a.createElement(s,null))};d.defaultProps={siteTitle:""};var c=d;a("8ypT"),t.a=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(c,null),i.a.createElement("main",{className:"main"},t))}},EK0E:function(e,t,a){"use strict";var r,i=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),l=a("Z6vF"),o=a("czNK"),d=a("ZD67"),c=a("0/R4"),u=a("s5qY"),f=a("s5qY"),m=!i.ActiveXObject&&"ActiveXObject"in i,p=l.getWeak,g=Object.isExtensible,h=d.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(c(e)){var t=p(e);return!0===t?h(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return d.def(u(this,"WeakMap"),e,t)}},E=e.exports=a("4LiD")("WeakMap",v,b,d,!0,!0);f&&m&&(o((r=d.getConstructor(v,"WeakMap")).prototype,b),l.NEED=!0,n(["delete","has","get","set"],(function(e){var t=E.prototype,a=t[e];s(t,e,(function(t,i){if(c(t)&&!g(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},EWH9:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAADY0lEQVQozyWT3U/TBxSGe7VkV9uSZclUCNK1VRwgyoftQBCKpZS2YoFRWlqglA5oRz/IgMGgQBugugLlSxAWxSlEdAsRFRlShBHdZMsyhKBL1C27WrK/4dkv7uLNyTkXT855zzmidz88SKxUTEayjEPiwxw4KedwkpQPZGLeev8Ab8dJUB6VkXYoho8SjlCo16F1tlNab0dlqcJQ78XY2IqurASFWoPoaGoqmdkKtMZzmJq8uIJ9uHuDWFuacfhcnDKW0aU8Q48un/NfXWT8ySuGHv9N5PFrhrZeCvlfzD39h+m1PRyhbxDp1VLSUmRYHBYmJiYJDY1w89b3jFxbYGx0BJXZSt3JUyy0VdO7ss3A6gu6l36l++7v9Nzboff+Dv0PdggJ9baZBUQ1FQl0f5FOj89AXedF/ItbjK3v0HXnCa7BWYo8rTTIT/NtfR6XpvyEbj+lL/oHwQe7BAT1Lj+jP/qCgTs/4gmGEGk1SUwNZhOZGebC8h59q3sEBPWtPSe8vofz6jzDNTX49bk0NFVhag3gm1ule2Wf0OZrvo7uE1z6mZqeEGbHZ4gqTQU0uvW0Tw8Tij4nsLL7v37YI/xon+a5u0w0OGhWKTludTI+f521jSiz9zdojtzA7OlEV1FH/nkjBcUmRP6WTKrcJRg6uuh5A3omAHcICjG8+RLfwgazdgOjlXnkuNoJjs/g8XzJ+pVpOpqaeC+jkE+Ka8nRVKBQqQWgJ4VglxJL/xhDj34RgLtvRvYL/rQvbuOMDLLsKmKpRUu21cI7yWeZvHyVqNBpQbWbIrsTebGdgvIavD4tIntZMmW2fOojYUZXVxmM/kS/sJDtP/9lcH4WU7OB6/YCbvlUlHrP4R7o59XkEHJxKiaTha3NhwQiU8I9Wmlr+xSRKleC1lyIxWvB4KikKdjL4uQE0YcrGLxucuwapiqyuFKbjq2jlBvfXSNcW4Uir4gsUwnuoJ+BsTBnbFYU5SWI1LpMbJ/Xoiw9S2ZxLkqjlnuXL+DvdKA26Tht0hNQ5/JbSEmLYE2lS4fGaSS3royPS/UkGrQobSWo6syUN5YLn5Is5bg8nYMJYuKOSZCkSFGcEFOdeYSMEzKS0uLRJ8ahS4khITUWWWI8iWlSQRLEx2KIT5QiSUogViYhO0vMf3eoMeb/7glMAAAAAElFTkSuQmCC","aspectRatio":1.6666666666666667,"src":"/static/a633a6a81f5e945497e23993dc239efb/630fb/draw.png","srcSet":"/static/a633a6a81f5e945497e23993dc239efb/5db04/draw.png 75w,\\n/static/a633a6a81f5e945497e23993dc239efb/6d161/draw.png 150w,\\n/static/a633a6a81f5e945497e23993dc239efb/630fb/draw.png 300w,\\n/static/a633a6a81f5e945497e23993dc239efb/62b1f/draw.png 450w,\\n/static/a633a6a81f5e945497e23993dc239efb/2a4de/draw.png 600w,\\n/static/a633a6a81f5e945497e23993dc239efb/a9a13/draw.png 1003w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},PHgK:function(e,t,a){var r=a("q1tI");function i(e){return r.createElement("svg",e,[r.createElement("path",{className:"flame-main",fill:"#F36E21",d:"M76.553,186.09c0,0-10.178-2.976-15.325-8.226s-9.278-16.82-9.278-16.82s-0.241-6.647-4.136-18.465\n\tc0,0,3.357,4.969,5.103,9.938c0,0-5.305-21.086,1.712-30.418c7.017-9.333,0.571-35.654-2.25-37.534c0,0,13.07,5.64,19.875,47.54\n\tc6.806,41.899,16.831,45.301,6.088,53.985",key:0}),r.createElement("path",{className:"flame-main one",fill:"#F6891F",d:"M61.693,122.257c4.117-15.4,12.097-14.487-11.589-60.872c0,0,32.016,10.223,52.601,63.123\n\tc20.585,52.899-19.848,61.045-19.643,61.582c0.206,0.537-19.401-0.269-14.835-18.532S57.576,137.656,61.693,122.257z",key:1}),r.createElement("path",{className:"flame-main two",fill:"#FFD04A",d:"M81.657,79.192c0,0,11.549,24.845,3.626,40.02c-7.924,15.175-21.126,41.899-0.425,64.998\n\tC84.858,184.21,125.705,150.905,81.657,79.192z",key:2}),r.createElement("path",{className:"flame-main three",fill:"#FDBA16",d:"M99.92,101.754c0,0-23.208,47.027-12.043,80.072c0,0,32.741-16.073,20.108-45.79\n\tC95.354,106.319,99.92,114.108,99.92,101.754z",key:3}),r.createElement("path",{className:"flame-main four",fill:"#F36E21",d:"M103.143,105.917c0,0,8.927,30.753-1.043,46.868c-9.969,16.115-14.799,29.041-14.799,29.041\n\tS134.387,164.603,103.143,105.917z",key:4}),r.createElement("path",{className:"flame-main five",fill:"#FDBA16",d:"M62.049,104.171c0,0-15.645,67.588,10.529,77.655C98.753,191.894,69.033,130.761,62.049,104.171z",key:5}),r.createElement("path",{className:"flame",fill:"#F36E21",d:"M101.011,112.926c0,0,8.973,10.519,4.556,16.543C99.37,129.735,106.752,117.406,101.011,112.926z",key:6}),r.createElement("path",{className:"flame one",fill:"#F36E21",d:"M55.592,126.854c0,0-3.819,13.29,2.699,16.945C64.038,141.48,55.907,132.263,55.592,126.854z",key:7}),r.createElement("path",{className:"flame two",fill:"#F36E21",d:"M54.918,104.595c0,0-3.959,6.109-1.24,8.949C56.93,113.256,52.228,107.329,54.918,104.595z",key:8})])}i.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"125px",height:"189.864px",viewBox:"0 0 125 189.864",enableBackground:"new 0 0 125 189.864",xmlSpace:"preserve"},e.exports=i,i.default=i},ZD67:function(e,t,a){"use strict";var r=a("3Lyj"),i=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),l=a("9gX7"),o=a("SlkY"),d=a("CkkT"),c=a("aagx"),u=a("s5qY"),f=d(5),m=d(6),p=0,g=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var a=v(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=m(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var d=e((function(e,r){l(e,d,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=r&&o(r,a,e[n],e)}));return r(d.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?g(u(this,t)).delete(e):a&&c(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?g(u(this,t)).has(e):a&&c(a,this._i)}}),d},def:function(e,t,a){var r=i(n(t),!0);return!0===r?g(e).set(t,a):r[e._i]=a,e},ufstore:g}},eIir:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),s=(a("kB1w"),a("EWH9")),l=a("Wbzz"),o=a("9eSz"),d=a.n(o),c=function(){return i.a.createElement(l.StaticQuery,{query:"4155238055",render:function(e){return i.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:s})};function u(e){var t=["hue","blur","invert","saturate","contrast","posterize"],a=t[Math.floor(Math.random()*t.length)];e.target.className="image-wrapper  "+a}var f=function(){return i.a.createElement("div",{className:"inquiry"},i.a.createElement("h1",null,"Filtros e imagenes "),i.a.createElement("div",{className:"circle"}),i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"image-wrapper",onMouseOver:u},i.a.createElement("div",{className:"image"},i.a.createElement(c,null)),i.a.createElement("div",{className:"image"},i.a.createElement(c,null)))))};t.default=function(){return i.a.createElement(n.a,null,i.a.createElement("h1",null,"Experiments"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos aut consequuntur aspernatur corrupti ratione, odit similique tenetur accusantium, est nostrum esse minus iure voluptatum nihil cumque blanditiis non? Odit."),i.a.createElement(f,null))}},kB1w:function(e,t,a){},m21L:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-experiments-js-9b4fc8dbc8a48aceed28.js.map