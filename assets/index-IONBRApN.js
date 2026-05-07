(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,f=globalThis,p=f.trustedTypes,re=p?p.emptyScript:``,ie=f.reactiveElementPolyfillSupport,m=(e,t)=>e,h={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},g=(e,t)=>!l(e,t),_={attribute:!0,type:String,converter:h,reflect:!1,useDefault:!1,hasChanged:g};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?h:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?h:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??g)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:`open`},v[m(`elementProperties`)]=new Map,v[m(`finalized`)]=new Map,ie?.({ReactiveElement:v}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var y=globalThis,ae=e=>e,b=y.trustedTypes,oe=b?b.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,se=`$lit$`,x=`lit$${Math.random().toFixed(9).slice(2)}$`,S=`?`+x,ce=`<${S}>`,C=document,w=()=>C.createComment(``),T=e=>e===null||typeof e!=`object`&&typeof e!=`function`,E=Array.isArray,le=e=>E(e)||typeof e?.[Symbol.iterator]==`function`,D=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,A=/>/g,j=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ue=/'/g,de=/"/g,M=/^(?:script|style|textarea|title)$/i,N=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),P=Symbol.for(`lit-noChange`),F=Symbol.for(`lit-nothing`),I=new WeakMap,L=C.createTreeWalker(C,129);function R(e,t){if(!E(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return oe===void 0?t:oe.createHTML(t)}var fe=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=O;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===O?c[1]===`!--`?o=k:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=j):(M.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=j):o=A:o===j?c[0]===`>`?(o=i??O,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?j:c[3]===`"`?de:ue):o===de||o===ue?o=j:o===k||o===A?o=O:(o=j,i=void 0);let d=o===j&&e[t+1].startsWith(`/>`)?` `:``;a+=o===O?n+ce:l>=0?(r.push(s),n.slice(0,l)+se+n.slice(l)+x+d):n+x+(l===-2?t:d)}return[R(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},z=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=fe(t,n);if(this.el=e.createElement(l,r),L.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=L.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(se)){let t=u[o++],n=i.getAttribute(e).split(x),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?me:r[1]===`?`?he:r[1]===`@`?ge:H}),i.removeAttribute(e)}else e.startsWith(x)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(M.test(i.tagName)){let e=i.textContent.split(x),t=e.length-1;if(t>0){i.textContent=b?b.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],w()),L.nextNode(),c.push({type:2,index:++a});i.append(e[t],w())}}}else if(i.nodeType===8)if(i.data===S)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(x,e+1))!==-1;)c.push({type:7,index:a}),e+=x.length-1}a++}}static createElement(e,t){let n=C.createElement(`template`);return n.innerHTML=e,n}};function B(e,t,n=e,r){if(t===P)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=T(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=B(e,i._$AS(e,t.values),i,r)),t}var pe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??C).importNode(t,!0);L.currentNode=r;let i=L.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new V(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new _e(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=L.nextNode(),a++)}return L.currentNode=C,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},V=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),T(e)?e===F||e==null||e===``?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==P&&this._(e):e._$litType$===void 0?e.nodeType===void 0?le(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=z.createElement(R(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new pe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=I.get(e.strings);return t===void 0&&I.set(e.strings,t=new z(e)),t}k(t){E(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(w()),this.O(w()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ae(e).nextSibling;ae(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},H=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=F}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=B(this,e,t,0),a=!T(e)||e!==this._$AH&&e!==P,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=B(this,r[n+o],t,o),s===P&&(s=this._$AH[o]),a||=!T(s)||s!==this._$AH[o],s===F?e=F:e!==F&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},me=class extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}},he=class extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}},ge=class extends H{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=B(this,e,t,0)??F)===P)return;let n=this._$AH,r=e===F&&n!==F||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==F&&(n===F||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},_e=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}},ve=y.litHtmlPolyfillSupport;ve?.(z,V),(y.litHtmlVersions??=[]).push(`3.3.2`);var ye=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new V(t.insertBefore(w(),e),e,void 0,n??{})}return i._$AI(e),i},U=globalThis,W=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return P}};W._$litElement$=!0,W.finalized=!0,U.litElementHydrateSupport?.({LitElement:W});var be=U.litElementPolyfillSupport;be?.({LitElement:W}),(U.litElementVersions??=[]).push(`4.2.2`);var G=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},xe={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:g},Se=(e=xe,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function K(e){return(t,n)=>typeof n==`object`?Se(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function q(e){return K({...e,state:!0,attribute:!1})}function J(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var Ce=class extends W{static{this.styles=o`
    /** refers to the shadow root of the component */
    :host { 
      width: clamp(250px, 35vw, 400px);
      display: grid;
      grid-template-areas: "stack";

      img {
        display: block;
        width: 100%;
        height: auto; /* needed because of the specified height in the html tag */
        aspect-ratio: 1 / 1;
        object-fit: cover;
        grid-area: stack; /* occupy same cell */
        transition: opacity .69s ease;

        &.pfp {opacity: 0;}
      }
    }

    :host(:hover) {
      .pfp {opacity: 1;}
      .placeholder {opacity: 0;}
    }
  `}render(){return N`
      <img src="../src/assets/placeholder.svg" alt="pfp placeholder" class="placeholder" width="100" height="100" fetchpriority="high"/>
      <img src="../src/assets/profile-pic.webp" alt="pfp" loading="lazy" class="pfp"  width="100" height="100"/>
    `}};Ce=J([G(`profile-picture`)],Ce);var we=[{id:`music-map`,desc:"`1 country - 1 music album` interactive map",title:`Music Map`},{id:`useful-stuff`,desc:`A collection of useful sites and software`,title:`Useful Stuff`},{id:`my-tv-list`,desc:`Personal TV show tracker`,title:`MyTVList`},{id:`favorite-albums`,desc:`Favore music albums showcase`,title:`F.A.S.`}],Te=`/assets/favorite-albums-DYZfIXyZ.webp`,Ee=`/assets/music-map-DcwfFvlQ.webp`,De=`/assets/my-tv-list-DcgO8jAA.webp`,Oe=`/assets/useful-stuff-C72BLTHR.webp`,Y=class extends W{static{this.styles=o`
    /** refers to the shadow root of the component */
    :host {
      display: grid;
      grid-template-areas: "stack"; /* YT: watch?v=8327_1PINWI */

      overflow: hidden; /* avoid overflow on image zoom */
      border-radius: 1rem;
    }

    :host(:hover) {
      & img { transform: scale(1.1); }
      & .grid-content { visibility: visible; }
      & .card-title, .card-content { transform: translateY(0); }
    }
    
    img {
      grid-area: stack;
      width: 100%;
      height: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      object-position: center;
      
      transition: transform 0.6s ease; /* zoom effect */
    }


    .overlay-container {
      grid-area: stack;

      color: var(--lightest);
      background-color: rgba(0, 0, 0, .8);
      
      z-index: 2; /* stay on top of image, prevents flickering during mouse movement */
      opacity: 0; 
      transition: opacity .6s ease;
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      
      &:hover { /* trigger overlay */
        opacity: 1;
        visibility: visible;
      }

      .card-title, .card-content {
        transition: transform 0.3s linear;
      }

      .card-title {transform: translateY(-80px);}

      .card-content {
        transform: translateY(80px);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        a { /* button-like link */
          text-decoration: none;
          padding: .25rem;
          color: var(--text);
          background-color: var(--surface);
          border-radius: 5px;
        }
      }
    }
  `}render(){return N`
      <img src="${new URL(Object.assign({"../../assets/projects/favorite-albums.webp":Te,"../../assets/projects/music-map.webp":Ee,"../../assets/projects/my-tv-list.webp":De,"../../assets/projects/useful-stuff.webp":Oe})[`../../assets/projects/${this.project.id}.webp`],import.meta.url).href}" alt="project pic" width="150" height="150"/>

      <div class="overlay-container">
        <p class="card-title">${this.project.title}</p>
        <div class="card-content">
          <small>${this.project.desc}</small>
          <a href="https://byteshaman.github.io/${this.project.id}" target="_blank">Check it out &rsaquo;</a>
        </div>
      </div>
    `}};J([K({type:Object})],Y.prototype,`project`,void 0),Y=J([G(`project-card`)],Y);var ke=class extends W{static{this.styles=o`
    :host {
      /* @link https://utopia.fyi/clamp/calculator?a=320,1200,150—400 */
      --fluid-width: clamp(150px, 59.0909px + 28.4091vw, 400px);

      display: grid;
      margin-inline: auto !important;

      grid-template-columns: repeat(2, var(--fluid-width));

      justify-content: center;
      gap: var(--fluid-gap);
    }
  `}render(){return N`
      ${we.map(e=>N`
        <project-card .project=${e}></project-card>
      `)}
    `}};ke=J([G(`project-list`)],ke);var Ae=[`angular`,`css`,`git`,`html`,`javascript`,`lit`,`sass`,`typescript`],X=class extends W{constructor(...e){super(...e),this.skill=``}static{this.styles=o`
    /** refers to the shadow root of the component */
    :host { 
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px; 
      
      aspect-ratio: 1;
      padding: 10px;
      border: 1px solid var(--border);
      border-radius: 1rem;
      box-shadow: 0 0 1rem 0 color-mix(in srgb, var(--text) 5%, transparent);

      background-color: var(--surface);
    } 

    .skill-icon {
      /* 50px → 70px @link https://utopia.fyi/clamp/calculator?a=320,1200,50—70 */
      width: clamp(50px, 42.7273px + 2.2727vw, 70px);
      height: auto;
    }

    span {
      text-align: center;
    }
  `}render(){let e=`${this.skill}-logo`;return N`
      <img src="src/assets/logos/${e}.svg" alt=${e} width="50" height="50" class="skill-icon" />
      <span>${this.skill.toUpperCase()}</span>
    `}};J([K()],X.prototype,`skill`,void 0),X=J([G(`skill-card`)],X);var je=class extends W{static{this.styles=o`
    /** refers to the shadow root of the component */
    :host {
      /* Variables for easy tweaking */
      --max-columns: 4;
      /* @link https://utopia.fyi/clamp/calculator?a=320,1200,120—150 */
      --max-item-width: clamp(120px, 109.0909px + 3.4091vw, 150px);

      display: grid;
      margin-inline: auto !important;
      
      /* Force fixed width */
      grid-template-columns: repeat(auto-fit, minmax(var(--max-item-width), var(--max-item-width)));
      gap: var(--fluid-gap);
      
      /* The math that caps the maximum amount of columns */
      --gap-count: calc(var(--max-columns) - 1); /* N of elems - 1 */
      --total-gap-width: calc(var(--gap-count) * var(--fluid-gap));
      max-width: calc((var(--max-item-width) * var(--max-columns)) + var(--total-gap-width));

      /* Alignment */
      margin-inline: auto; /* Needed because */
      justify-content: center; /* Centers items inside the grid when they wrap */
    }

    /*# region simple effects for each skill */
  
    .angular:hover { /* zoom */
      transform: scale(1.05);
    }

    .css:hover {     
      transform: skew(-7deg);
      transition: transform 0.3s;
    }
    
    .git:hover { /* blur */
      filter: blur(2px);
    }

    .html:hover { /* rotate */
      transform: rotate(3deg) scale(1.03);
    }

    .javascript:hover {
      animation: buzz 0.15s linear 3;
    }

    .lit:hover { /* glow */
      box-shadow: 0 0 20px var(--border);
    } 

    .sass:hover { /* 3d */  
      transform: perspective(400px) rotateX(8deg) rotateY(-8deg);
      box-shadow: -5px 15px 15px color-mix(in srgb, var(--text) 15%, transparent);
    }

   .typescript:hover { /* pressed */
      transform: scale(0.96);
      box-shadow: inset 0 4px 8px color-mix(in srgb, var(--text) 15%, transparent);
    }

    /* buzz effect */  
    @keyframes buzz {
      50% {
        transform: translateX(3px) rotate(2deg);
      }
      100% {
        transform: translateX(-3px) rotate(-2deg);
      }
    }
    /*# endregion effects */
  `}render(){return N`
      ${Ae.map(e=>N`
        <skill-card skill=${e} class="${e}"></skill-card>
      `)}
    `}};je=J([G(`skill-list`)],je);function Z(e,t){let n=document.documentElement;n.setAttribute(`data-theme`,e),n.style.colorScheme=t,localStorage.setItem(`theme-season`,e),localStorage.setItem(`theme-mode`,t)}function Me(){let e=new Date().getMonth();return e>=2&&e<=4?`spring`:e>=5&&e<=7?`summer`:e>=8&&e<=10?`autumn`:`winter`}function Ne(){return window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`}function Pe(){let e=localStorage.getItem(`theme-season`),t=localStorage.getItem(`theme-mode`),n=e??Me(),r=t??Ne();return Z(n,r),{season:n,mode:r}}var Q=class extends W{static{this.styles=o`
    /** refers to the shadow root of the component */
    :host { 
      display: flex; 
      align-items: center; 
      gap: 8px; 
    } 

    button {
      padding: 6px 12px;
      border-radius: 20px;
      border: 1.5px solid var(--border);
      font-size: 13px;
      cursor: pointer;
      background-color: transparent;
      color: var(--text);
      transition: background-color 0.5s, 
                  color 0.5s, 
                  border-color 0.5s;
    }
    button.active {
      background-color: var(--primary);
      color: var(--bg);
    }
    button:hover:not(.active) {
      background-color: var(--surface);
    }
  `}constructor(){super(),this.icons={spring:`🌱`,summer:`☀️`,autumn:`🍂`,winter:`❄️`};let{season:e,mode:t}=Pe();this.season=e,this.mode=t}render(){return N`
      ${[`spring`,`summer`,`autumn`,`winter`].map(e=>N`
        <button
          class="${this.season===e?`active`:``}"
          @click=${()=>this.handleClick(e)}
          title="${e}"
        >
          ${this.icons[e]}
        </button>
      `)}
    `}handleClick(e){this.season===e?this.toggleMode():this.setSeason(e)}setSeason(e){this.season=e,Z(e,this.mode)}toggleMode(){let e=this.mode===`light`?`dark`:`light`;this.mode=e,Z(this.season,e)}};J([q()],Q.prototype,`season`,void 0),J([q()],Q.prototype,`mode`,void 0),Q=J([G(`theme-switcher`)],Q);var $=class extends W{static{this.styles=o`
    h1 {  
      font-size: var(--fs-1);
      overflow: hidden;
      white-space: nowrap;
      letter-spacing: 0.05rem;

      /* blinking cursor implemented as a right border */
      border-right: 2px solid var(--text-color, currentColor);

      /* Needed to make the typing animation end exactly at the last character */
      max-width: max-content;

      animation:
        typing 3s steps(45, end),
        blink-caret 1s step-end infinite;

      @media (width < 480px) {
        letter-spacing: 0.15em;
      }
    }

    /* Expand width from 0 to 100% to reveal characters one step at a time */
    @keyframes typing {
      from { width: 0; }
      to   { width: 100%; }
    }

    /* Alternates the border colour to create the blinking-cursor illusion */
    @keyframes blink-caret {
      from, to { border-color: transparent; }
      50%      { border-color: var(--text-color, currentColor); }
    }
  `}render(){return N`<h1>${this.text}</h1>`}};J([K()],$.prototype,`text`,void 0),$=J([G(`typed-text`)],$),Pe();