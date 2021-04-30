(this["webpackJsonpsix-cities"]=this["webpackJsonpsix-cities"]||[]).push([[0],{68:function(e,t,a){"use strict";a.r(t),a.d(t,"api",(function(){return ge}));var s={};a.r(s),a.d(s,"fetchHotels",(function(){return w})),a.d(s,"fetchReviews",(function(){return T})),a.d(s,"fetchNearbyHotels",(function(){return k})),a.d(s,"fetchFavoriteHotels",(function(){return C})),a.d(s,"checkAuthAction",(function(){return A})),a.d(s,"authAction",(function(){return E})),a.d(s,"postReview",(function(){return S})),a.d(s,"updateFavoriteStatus",(function(){return H})),a.d(s,"updateHotels",(function(){return R})),a.d(s,"changeCity",(function(){return U})),a.d(s,"changeSortType",(function(){return P})),a.d(s,"changeActiveOffer",(function(){return F})),a.d(s,"changeAuthStatus",(function(){return I})),a.d(s,"setUserName",(function(){return D})),a.d(s,"redirectToRoute",(function(){return L}));var c=a(18),r=a.n(c),n=a(15),i=a(10),l=a(34),o=a(35),d=a.n(o);var u,_,j=a(6),h=a(1),p=a.n(h),m=a(4),b=a(3),O="/",v="/offer",x="/login",f="/favorites";!function(e){e[e.January=0]="January",e[e.February=1]="February",e[e.March=2]="March",e[e.April=3]="April",e[e.May=4]="May",e[e.June=5]="June",e[e.July=6]="July",e[e.August=7]="August",e[e.September=8]="September",e[e.October=9]="October",e[e.November=10]="November",e[e.December=11]="December"}(u||(u={})),function(e){e.POPULAR="Popular",e.PRICE_LOW_TO_HIGH="Price: low to high",e.PRICE_HIGH_TO_LOW="Price: high to low",e.TOP_RATED_FIRST="Top rated first"}(_||(_={}));var N,g=["Paris","Cologne","Brussels","Amsterdam","Hamburg","Dusseldorf"],y=function(e){switch(Math.round(e)){case 5:return 100;case 4:return 80;case 3:return 60;case 2:return 40;case 1:return 20;default:return 0}};!function(e){e.LOAD_HOTELS="load_hotels",e.CHANGE_CITY="change_city",e.CHANGE_SORT_TYPE="change_sort_type",e.CHANGE_ACTIVE_OFFER="change_active_offer",e.CHANGE_AUTH_STATUS="change_auth_status",e.SET_USER_NAME="set_user_name",e.UPDATE_HOTELS="update_hotels",e.REDIRECT_TO_ROUTE="redirect_to_route"}(N||(N={}));var w=function(){return function(e,t,a){return a.get("/hotels").then((function(t){var a=t.data;e({type:N.LOAD_HOTELS,payload:a})})).catch((function(){e({type:N.LOAD_HOTELS,payload:[]})}))}},T=function(e){return function(t,a,s){return s.get("/comments/".concat(e))}},k=function(e){return function(t,a,s){return s.get("/hotels/".concat(e,"/nearby"))}},C=function(){return function(e,t,a){return a.get("/favorite")}},A=function(){return function(e,t,a){a.get("/login").then((function(t){var a=t.data;e(D(a.email)),e(I("AUTH"))}))}},E=function(e,t){return function(a,s,c){return c.post("/login",{email:e,password:t}).then((function(){a(I("AUTH")),a(D(e))}))}},S=function(e,t,a){return function(s,c,r){return r.post("/comments/".concat(a),{comment:e,rating:t})}},H=function(e){return function(t,a,s){return s.post("/favorite/".concat(e.id,"/").concat(Number(e.is_favorite)))}},R=function(e){return function(t,a,s){var c=function(e,t){var a=e.findIndex((function(e){return e.id===t.id}));return e.slice(0,a).concat(t).concat(e.slice(a+1,e.length))}(a().hotels.hotels,e);t({type:N.UPDATE_HOTELS,payload:c})}},U=function(e){return{type:N.CHANGE_CITY,payload:e}},P=function(e){return{type:N.CHANGE_SORT_TYPE,payload:e}},F=function(e){return{type:N.CHANGE_ACTIVE_OFFER,payload:e}},I=function(e){return{type:N.CHANGE_AUTH_STATUS,payload:e}},D=function(e){return{type:N.SET_USER_NAME,payload:e}},L=function(e){return{type:N.REDIRECT_TO_ROUTE,payload:e}},M={hotels:[],sortType:"Popular",activeOffer:{}},G={city:"Amsterdam"},J={status:"NO_AUTH",userName:""},Y=Object(i.combineReducers)({hotels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.LOAD_HOTELS:return Object.assign({},e,{hotels:t.payload});case N.CHANGE_SORT_TYPE:return Object.assign({},e,{sortType:t.payload});case N.CHANGE_ACTIVE_OFFER:return Object.assign({},e,{activeOffer:t.payload});case N.UPDATE_HOTELS:return Object.assign({},e,{hotels:t.payload});default:return e}},currentCity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.CHANGE_CITY:return{city:t.payload};default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.CHANGE_AUTH_STATUS:return Object.assign({},e,{status:t.payload});case N.SET_USER_NAME:return Object.assign({},e,{userName:t.payload});default:return e}}}),W=function(){var e=Object(n.b)();return Object(i.bindActionCreators)(s,e)},z=n.c,V=a(0),q=function(e){var t=e.hotel,a=e.className,s=e.onHoverHandler,c=e.isFavorite,r=t.preview_image,n=t.title,i=t.price,l=t.rating,o=t.type,d=W(),u=d.updateFavoriteStatus,_=(d.redirectToRoute,d.updateHotels),j=z((function(e){return e.user})).status,h=Object(b.g)(),O=p.a.useCallback((function(e){"AUTH"===j?(e.is_favorite=!e.is_favorite,u(e).then((function(e){var t=e.data;return _(t)}))):h.push("/login")}),[]);return Object(V.jsxs)("article",{className:a,onMouseEnter:function(){return s&&s(t)},children:[Object(V.jsx)("div",{className:"cities__image-wrapper place-card__image-wrapper",children:Object(V.jsx)(m.b,{to:"".concat(v,"/").concat(t.id),children:Object(V.jsx)("img",{className:"place-card__image",src:r,width:"260",height:"200",alt:n})})}),Object(V.jsxs)("div",{className:"place-card__info",children:[Object(V.jsxs)("div",{className:"place-card__price-wrapper",children:[Object(V.jsxs)("div",{className:"place-card__price",children:[Object(V.jsxs)("b",{className:"place-card__price-value",children:["\u20ac",i]}),Object(V.jsx)("span",{className:"place-card__price-text",children:"/\xa0night"})]}),Object(V.jsxs)("button",{className:c?"place-card__bookmark-button place-card__bookmark-button--active button":"place-card__bookmark-button button",type:"button",onClick:function(){return O(t)},children:[Object(V.jsx)("svg",{className:"place-card__bookmark-icon",width:"18",height:"19",children:Object(V.jsx)("use",{xlinkHref:"#icon-bookmark"})}),Object(V.jsx)("span",{className:"visually-hidden",children:"To bookmarks"})]})]}),Object(V.jsx)("div",{className:"place-card__rating rating",children:Object(V.jsxs)("div",{className:"place-card__stars rating__stars",children:[Object(V.jsx)("span",{style:{width:"".concat(y(l),"%")}}),Object(V.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),Object(V.jsx)("h2",{className:"place-card__name",children:Object(V.jsx)(m.b,{to:"".concat(v,"/").concat(t.id),children:n})}),Object(V.jsx)("p",{className:"place-card__type",children:o})]})]})},B=p.a.memo(q),K=function(e){var t=e.hotels,a=e.classNameMainPage,s=e.classNameOfferPlace,c=W().changeActiveOffer,r=p.a.useCallback((function(e){c(e)}),[]);return Object(V.jsx)("div",{className:s,children:t.map((function(e,t){return Object(V.jsx)(B,{hotel:e,isFavorite:e.is_favorite,onHoverHandler:r,className:a},t)}))})},Q=a(11),X=a.n(Q),Z=(a(67),function(e){var t=e.hotels,a=e.city,s=a.latitude,c=a.longitude,r=a.zoom,n=z((function(e){return e.hotels})).activeOffer,i=Object(h.useState)(),l=Object(j.a)(i,2),o=l[0],d=l[1],u=Object(h.useState)(),_=Object(j.a)(u,2),m=_[0],b=_[1],O=X.a.icon({iconUrl:"img/pin.svg",iconSize:[27,39]}),v=X.a.icon({iconUrl:"img/pin-active.svg",iconSize:[27,39]}),x=function(e){var a=[];t.forEach((function(e){var t=[e.location.latitude,e.location.longitude],s=X.a.marker(t,e===n?{icon:v}:{icon:O}).bindPopup('\n          <div style="text-align: center">\n            '.concat(e.title,"<br>\n            ").concat(e.type,"\n          </div>\n          "));a.push(s)}));var s=X.a.layerGroup(a);b(s),s.addTo(e)};return p.a.useEffect((function(){!function(){var e=[s,c],t=X.a.map("map",{center:e,zoom:r,zoomControl:!1});d(t),t.setView(e,r),X.a.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}).addTo(t),x(t)}()}),[]),p.a.useEffect((function(){o&&(null===m||void 0===m||m.clearLayers(),o.setView([s,c],r),x(o))}),[n,t]),Object(V.jsx)("div",{id:"map",style:{height:"100%"}})}),$=function(e){var t=e.currentCity,a=e.onTabCityClick;return Object(V.jsx)("ul",{className:"locations__list tabs__list",children:g.map((function(e,s){return Object(V.jsx)("li",{className:"locations__item",children:Object(V.jsx)("a",{className:e===t?"locations__item-link tabs__item tabs__item--active":"locations__item-link tabs__item",onClick:a,href:"#",children:Object(V.jsx)("span",{children:e})})},s)}))})},ee=function(e){var t=e.isActive,a=e.itemName,s=e.onTypeSortClick;return Object(V.jsx)("li",{onClick:s,className:t?"places__option places__option--active":"places__option",tabIndex:0,children:a})},te=Object.values(_),ae=function(){var e=W().changeSortType,t=z((function(e){return e.hotels})).sortType,a=Object(h.useCallback)((function(t){var a=t.currentTarget.textContent;a&&e(a)}),[]);return Object(V.jsxs)("form",{className:"places__sorting",action:"#",method:"get",children:[Object(V.jsx)("span",{className:"places__sorting-caption",children:"Sort by"}),Object(V.jsxs)("span",{className:"places__sorting-type",tabIndex:0,children:[t,Object(V.jsx)("svg",{className:"places__sorting-arrow",width:"7",height:"4",children:Object(V.jsx)("use",{xlinkHref:"#icon-arrow-select"})})]}),Object(V.jsx)("ul",{className:"places__options places__options--custom",children:te.map((function(e,s){return Object(V.jsx)(ee,{isActive:t===e,itemName:e,onTypeSortClick:a},s)}))})]})},se=function(e){var t=e.city,a=e.onTabCityClick;return Object(V.jsxs)("main",{className:"page__main page__main--index page__main--index-empty",children:[Object(V.jsx)("h1",{className:"visually-hidden",children:"Cities"}),Object(V.jsx)("div",{className:"tabs",children:Object(V.jsx)("section",{className:"locations container",children:Object(V.jsx)($,{currentCity:t,onTabCityClick:a})})}),Object(V.jsx)("div",{className:"cities",children:Object(V.jsxs)("div",{className:"cities__places-container cities__places-container--empty container",children:[Object(V.jsx)("section",{className:"cities__no-places",children:Object(V.jsxs)("div",{className:"cities__status-wrapper tabs__content",children:[Object(V.jsx)("b",{className:"cities__status",children:"No places to stay available"}),Object(V.jsxs)("p",{className:"cities__status-description",children:["We could not find any property available at the moment in ",t]})]})}),Object(V.jsx)("div",{className:"cities__right-section"})]})})]})},ce=a(36),re=Object(ce.a)((function(e){return e.hotels.hotels}),(function(e){return e.hotels.sortType}),(function(e){return e.currentCity.city}),(function(e,t,a){var s=e.filter((function(e){return e.city.name===a}));switch(t){case _.POPULAR:return s;case _.PRICE_HIGH_TO_LOW:return s.sort((function(e,t){return t.price-e.price})).slice();case _.PRICE_LOW_TO_HIGH:return s.sort((function(e,t){return e.price-t.price})).slice();case _.TOP_RATED_FIRST:return s.sort((function(e,t){return t.rating-e.rating})).slice();default:return s}})),ne=function(){var e=W().changeCity,t=z((function(e){return e.currentCity})).city,a=z((function(e){return e.user})).status,s=z((function(e){return e.user})).userName,c=re(z((function(e){return e}))),r=Object(h.useCallback)((function(a){var s=a.currentTarget.text;t!==s&&e(s)}),[t]);return Object(V.jsxs)("div",{className:"page page--gray page--main",children:[Object(V.jsx)("header",{className:"header",children:Object(V.jsx)("div",{className:"container",children:Object(V.jsxs)("div",{className:"header__wrapper",children:[Object(V.jsx)("div",{className:"header__left",children:Object(V.jsx)("a",{className:"header__logo-link",children:Object(V.jsx)("img",{className:"header__logo",src:"img/logo.svg",alt:"6 cities logo",width:"81",height:"41"})})}),Object(V.jsx)("nav",{className:"header__nav",children:Object(V.jsx)("ul",{className:"header__nav-list",children:Object(V.jsx)("li",{className:"header__nav-item user",children:Object(V.jsxs)(m.b,{className:"header__nav-link header__nav-link--profile",to:"NO_AUTH"===a?x:f,children:[Object(V.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),"NO_AUTH"===a?Object(V.jsx)("span",{className:"header__login",children:"Sign in"}):Object(V.jsx)("span",{className:"header__user-name user__name",children:s})]})})})})]})})}),0===c.length?Object(V.jsx)(se,{city:t,onTabCityClick:r}):Object(V.jsxs)("main",{className:"page__main page__main--index",children:[Object(V.jsx)("h1",{className:"visually-hidden",children:"Cities"}),Object(V.jsx)("div",{className:"tabs",children:Object(V.jsx)("section",{className:"locations container",children:Object(V.jsx)($,{currentCity:t,onTabCityClick:r})})}),Object(V.jsx)("div",{className:"cities",children:Object(V.jsxs)("div",{className:"cities__places-container container",children:[Object(V.jsxs)("section",{className:"cities__places places",children:[Object(V.jsx)("h2",{className:"visually-hidden",children:"Places"}),Object(V.jsxs)("b",{className:"places__found",children:[c.length," places to stay in ",t]}),Object(V.jsx)(ae,{}),Object(V.jsx)(K,{hotels:c,classNameMainPage:"cities__place-card place-card",classNameOfferPlace:"cities__places-list places__list tabs__content"})]}),Object(V.jsx)("div",{className:"cities__right-section",children:Object(V.jsx)("section",{className:"cities__map map",children:c.length>0&&Object(V.jsx)(Z,{hotels:c,city:c[0].city.location})})})]})})]})]})},ie=function(){var e=Object(h.useState)(),t=Object(j.a)(e,2),a=t[0],s=t[1],c=Object(h.useState)(),r=Object(j.a)(c,2),n=r[0],i=r[1],l=W().authAction;return"AUTH"===z((function(e){return e.user})).status?Object(V.jsx)(b.a,{to:O}):Object(V.jsxs)("div",{className:"page page--gray page--login",children:[Object(V.jsx)("header",{className:"header",children:Object(V.jsx)("div",{className:"container",children:Object(V.jsxs)("div",{className:"header__wrapper",children:[Object(V.jsx)("div",{className:"header__left",children:Object(V.jsx)(m.b,{className:"header__logo-link",to:O,children:Object(V.jsx)("img",{className:"header__logo",src:"img/logo.svg",alt:"6 cities logo",width:"81",height:"41"})})}),Object(V.jsx)("nav",{className:"header__nav",children:Object(V.jsx)("ul",{className:"header__nav-list",children:Object(V.jsx)("li",{className:"header__nav-item user",children:Object(V.jsxs)("a",{className:"header__nav-link header__nav-link--profile",children:[Object(V.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),Object(V.jsx)("span",{className:"header__login",children:"Sign in"})]})})})})]})})}),Object(V.jsx)("main",{className:"page__main page__main--login",children:Object(V.jsxs)("div",{className:"page__login-container container",children:[Object(V.jsxs)("section",{className:"login",children:[Object(V.jsx)("h1",{className:"login__title",children:"Sign in"}),Object(V.jsxs)("form",{className:"login__form form",action:"#",method:"post",onSubmit:function(e){e.preventDefault(),a&&n&&l(a,n)},children:[Object(V.jsxs)("div",{className:"login__input-wrapper form__input-wrapper",children:[Object(V.jsx)("label",{className:"visually-hidden",children:"E-mail"}),Object(V.jsx)("input",{onChange:function(e){return s(e.currentTarget.value)},className:"login__input form__input",type:"email",name:"email",placeholder:"Email",required:!0})]}),Object(V.jsxs)("div",{className:"login__input-wrapper form__input-wrapper",children:[Object(V.jsx)("label",{className:"visually-hidden",children:"Password"}),Object(V.jsx)("input",{onChange:function(e){return i(e.currentTarget.value)},className:"login__input form__input",type:"password",name:"password",placeholder:"Password",required:!0})]}),Object(V.jsx)("button",{className:"login__submit form__submit button",type:"submit",children:"Sign in"})]})]}),Object(V.jsx)("section",{className:"locations locations--login locations--current",children:Object(V.jsx)("div",{className:"locations__item",children:Object(V.jsx)(m.b,{className:"locations__item-link",to:O,children:Object(V.jsx)("span",{children:"Amsterdam"})})})})]})})]})},le=function(e){var t=e.hotel,a=t.title,s=t.price,c=t.is_favorite,r=t.rating,n=t.type,i=t.preview_image,l=t.id,o=W(),d=o.updateFavoriteStatus,u=o.updateHotels,_=p.a.useCallback((function(e){e.is_favorite=!e.is_favorite,d(e).then((function(e){var t=e.data;return u(t)}))}),[]);return Object(V.jsxs)("article",{className:"favorites__card place-card",children:[Object(V.jsx)("div",{className:"favorites__image-wrapper place-card__image-wrapper",children:Object(V.jsx)(m.b,{to:"".concat(v,"/").concat(l),children:Object(V.jsx)("img",{className:"place-card__image",src:i,width:"150",height:"110",alt:a})})}),Object(V.jsxs)("div",{className:"favorites__card-info place-card__info",children:[Object(V.jsxs)("div",{className:"place-card__price-wrapper",children:[Object(V.jsxs)("div",{className:"place-card__price",children:[Object(V.jsxs)("b",{className:"place-card__price-value",children:["\u20ac",s]}),Object(V.jsx)("span",{className:"place-card__price-text",children:"/\xa0night"})]}),Object(V.jsxs)("button",{onClick:function(){return _(t)},className:c?"place-card__bookmark-button place-card__bookmark-button--active button":"place-card__bookmark-button button",type:"button",children:[Object(V.jsx)("svg",{className:"place-card__bookmark-icon",width:"18",height:"19",children:Object(V.jsx)("use",{xlinkHref:"#icon-bookmark"})}),Object(V.jsx)("span",{className:"visually-hidden",children:"In bookmarks"})]})]}),Object(V.jsx)("div",{className:"place-card__rating rating",children:Object(V.jsxs)("div",{className:"place-card__stars rating__stars",children:[Object(V.jsx)("span",{style:{width:"".concat(y(r),"%")}}),Object(V.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),Object(V.jsx)("h2",{className:"place-card__name",children:Object(V.jsx)(m.b,{to:"".concat(v,"/").concat(l),children:a})}),Object(V.jsx)("p",{className:"place-card__type",children:n})]})]})},oe=function(e){var t=e.hotels,a=e.city,s=function(e){return e.filter((function(e){return e.city.name===a}))}(t);return Object(V.jsx)(V.Fragment,{children:s.map((function(e,t){return Object(V.jsx)(le,{hotel:e},t)}))})},de=function(){return Object(V.jsx)("main",{className:"page__main page__main--favorites page__main--favorites-empty",children:Object(V.jsx)("div",{className:"page__favorites-container container",children:Object(V.jsxs)("section",{className:"favorites favorites--empty",children:[Object(V.jsx)("h1",{className:"visually-hidden",children:"Favorites (empty)"}),Object(V.jsxs)("div",{className:"favorites__status-wrapper",children:[Object(V.jsx)("b",{className:"favorites__status",children:"Nothing yet saved."}),Object(V.jsx)("p",{className:"favorites__status-description",children:"Save properties to narrow down search or plan your future trips."})]})]})})})},ue=function(){var e=W().changeCity,t=W().fetchFavoriteHotels,a=z((function(e){return e.user})),s=a.status,c=a.userName,r=z((function(e){return e.hotels})).hotels,n=p.a.useState([]),i=Object(j.a)(n,2),l=i[0],o=i[1];p.a.useEffect((function(){t().then((function(e){var t=e.data;o(t)}))}),[r]);var d=p.a.useCallback((function(t){var a=t.currentTarget.textContent;a&&e(a)}),[]),u=function(e){var t=new Set;return e.forEach((function(e){return t.add(e.city.name)})),Array.from(t)}(l);return"NO_AUTH"===s?Object(V.jsx)(b.a,{to:x}):Object(V.jsxs)("div",{className:"page",children:[Object(V.jsx)("header",{className:"header",children:Object(V.jsx)("div",{className:"container",children:Object(V.jsxs)("div",{className:"header__wrapper",children:[Object(V.jsx)("div",{className:"header__left",children:Object(V.jsx)(m.b,{className:"header__logo-link",to:O,children:Object(V.jsx)("img",{className:"header__logo",src:"img/logo.svg",alt:"6 cities logo",width:"81",height:"41"})})}),Object(V.jsx)("nav",{className:"header__nav",children:Object(V.jsx)("ul",{className:"header__nav-list",children:Object(V.jsx)("li",{className:"header__nav-item user",children:Object(V.jsxs)(m.b,{className:"header__nav-link header__nav-link--profile",to:f,children:[Object(V.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),Object(V.jsx)("span",{className:"header__user-name user__name",children:c})]})})})})]})})}),0===u.length?Object(V.jsx)(de,{}):Object(V.jsx)("main",{className:"page__main page__main--favorites",children:Object(V.jsx)("div",{className:"page__favorites-container container",children:Object(V.jsxs)("section",{className:"favorites",children:[Object(V.jsx)("h1",{className:"favorites__title",children:"Saved listing"}),Object(V.jsx)("ul",{className:"favorites__list",children:u.map((function(e,t){return Object(V.jsxs)("li",{className:"favorites__locations-items",children:[Object(V.jsx)("div",{className:"favorites__locations locations locations--current",children:Object(V.jsx)("div",{className:"locations__item",onClick:d,children:Object(V.jsx)(m.b,{className:"locations__item-link",to:O,children:Object(V.jsx)("span",{children:e})})})}),Object(V.jsx)("div",{className:"favorites__places",children:Object(V.jsx)(oe,{hotels:l,city:e},t)})]},t)}))})]})})}),Object(V.jsx)("footer",{className:"footer container",children:Object(V.jsx)(m.b,{className:"footer__logo-link",to:O,children:Object(V.jsx)("img",{className:"footer__logo",src:"img/logo.svg",alt:"6 cities logo",width:"64",height:"33"})})})]})},_e=function(e){var t=e.image,a=e.title;return Object(V.jsx)("div",{className:"property__image-wrapper",children:Object(V.jsx)("img",{className:"property__image",src:t,alt:a})})},je=new Map([[1,"terribly"],[2,"badly"],[3,"not bad"],[4,"good"],[5,"perfect"]]),he=function(e){var t=e.id,a=e.updateComments,s=p.a.useState(),c=Object(j.a)(s,2),r=c[0],n=c[1],i=p.a.useState(),l=Object(j.a)(i,2),o=l[0],d=l[1],u=W().postReview,_=Object(h.createRef)(),m=new Array(5).fill(""),b=p.a.useCallback((function(e){var t=e.currentTarget.value;n(Number(t))}),[]),O=p.a.useCallback((function(e){var t=e.currentTarget.value;d(t)}),[]),v=p.a.useCallback((function(e){e.preventDefault();var s=_.current;o&&r&&u(o,r,t).then((function(e){var t=e.data;return a(t)})).then((function(){n(null),d(""),null===s||void 0===s||s.reset()}))}),[r,o]);return Object(V.jsxs)("form",{className:"reviews__form form",action:"#",method:"post",onSubmit:v,ref:_,children:[Object(V.jsx)("label",{className:"reviews__label form__label",htmlFor:"review",children:"Your review"}),Object(V.jsx)("div",{className:"reviews__rating-form form__rating",children:m.map((function(e,t,a){return Object(V.jsxs)(p.a.Fragment,{children:[Object(V.jsx)("input",{className:"form__rating-input visually-hidden",name:"rating",value:a.length-t,id:"".concat(a.length-t,"-stars"),type:"radio",onChange:b}),Object(V.jsx)("label",{htmlFor:"".concat(a.length-t,"-stars"),className:"reviews__rating-label form__rating-label",title:je.get(a.length-t),children:Object(V.jsx)("svg",{className:"form__star-image",width:"37",height:"33",children:Object(V.jsx)("use",{xlinkHref:"#icon-star"})})})]},t)}))}),Object(V.jsx)("textarea",{className:"reviews__textarea form__textarea",id:"review",name:"review",placeholder:"Tell how was your stay, what you like and what can be improved",onChange:O,value:o}),Object(V.jsxs)("div",{className:"reviews__button-wrapper",children:[Object(V.jsxs)("p",{className:"reviews__help",children:["To submit review please make sure to set",Object(V.jsx)("span",{className:"reviews__star",children:"rating"})," and describe your stay with at least",Object(V.jsx)("b",{className:"reviews__text-amount",children:"50 characters"}),"."]}),Object(V.jsx)("button",{className:"reviews__submit form__submit button",type:"submit",disabled:!(o&&o.length>=50&&r),children:"Submit"})]})]})},pe=function(e){var t=e.review;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("div",{className:"reviews__user user",children:[Object(V.jsx)("div",{className:"reviews__avatar-wrapper user__avatar-wrapper",children:Object(V.jsx)("img",{className:"reviews__avatar user__avatar",src:t.user.avatar_url,width:"54",height:"54",alt:"Reviews avatar"})}),Object(V.jsx)("span",{className:"reviews__user-name",children:t.user.name})]}),Object(V.jsxs)("div",{className:"reviews__info",children:[Object(V.jsx)("div",{className:"reviews__rating rating",children:Object(V.jsxs)("div",{className:"reviews__stars rating__stars",children:[Object(V.jsx)("span",{style:{width:"".concat(y(t.rating),"%")}}),Object(V.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),Object(V.jsx)("p",{className:"reviews__text",children:t.comment}),Object(V.jsx)("time",{className:"reviews__time",dateTime:String(t.date).slice(0,10),children:function(e){var t=new Date(Date.parse(String(e))),a=t.getFullYear(),s=u[t.getMonth()];return"".concat(s," ").concat(a)}(t.date)})]})]})},me=function(e){var t=e.reviews,a=t.length;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("h2",{className:"reviews__title",children:["Reviews \xb7","",Object(V.jsx)("span",{className:"reviews__amount",children:a})]}),Object(V.jsx)("ul",{className:"reviews__list",children:t.map((function(e,t){return Object(V.jsx)("li",{className:"reviews__item",children:Object(V.jsx)(pe,{review:e})},t)}))})]})},be=function(e){var t=e.id,a=p.a.useState(),s=Object(j.a)(a,2),c=s[0],r=s[1],n=p.a.useState([]),i=Object(j.a)(n,2),l=i[0],o=i[1],d=p.a.useState(),u=Object(j.a)(d,2),_=u[0],h=u[1],b=W(),v=b.fetchReviews,N=b.fetchNearbyHotels,g=b.updateFavoriteStatus,w=b.updateHotels,T=b.redirectToRoute,k=z((function(e){return e.user})).userName,C=z((function(e){return e.user})).status,A=z((function(e){return e.hotels})).hotels,E=function(e){return e.sort((function(e,t){return Date.parse(String(t.date))-Date.parse(String(e.date))})).slice(0,10)};p.a.useEffect((function(){window.scrollTo(0,0),r(A.find((function(e){return e.id===Number(t)})))}),[t]),p.a.useEffect((function(){v(t).then((function(e){var t=e.data,a=E(t);o(a)}))}),[t]),p.a.useEffect((function(){N(t).then((function(e){var t=e.data;return h(t)}))}),[t]);var S=p.a.useCallback((function(e){var t=E(e);o(t)}),[]),H=p.a.useCallback((function(e){"AUTH"===C?(e.is_favorite=!e.is_favorite,g(e).then((function(e){var t=e.data;return w(t)}))):T("/login")}),[]);if(!c)return Object(V.jsx)("div",{children:"Hotel not found"});var R=c.images,U=c.title,P=c.is_premium,F=c.is_favorite,I=c.rating,D=c.type,L=c.bedrooms,M=c.max_adults,G=c.price,J=c.goods,Y=c.description,q=c.host,B=q.avatar_url,Q=q.name,X=q.is_pro,$=R.slice(0,6);return Object(V.jsxs)("div",{className:"page",children:[Object(V.jsx)("header",{className:"header",children:Object(V.jsx)("div",{className:"container",children:Object(V.jsxs)("div",{className:"header__wrapper",children:[Object(V.jsx)("div",{className:"header__left",children:Object(V.jsx)(m.b,{className:"header__logo-link",to:O,children:Object(V.jsx)("img",{className:"header__logo",src:"img/logo.svg",alt:"6 cities logo",width:"81",height:"41"})})}),Object(V.jsx)("nav",{className:"header__nav",children:Object(V.jsx)("ul",{className:"header__nav-list",children:Object(V.jsx)("li",{className:"header__nav-item user",children:Object(V.jsxs)(m.b,{className:"header__nav-link header__nav-link--profile",to:"NO_AUTH"===C?x:f,children:[Object(V.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),"NO_AUTH"===C?Object(V.jsx)("span",{className:"header__login",children:"Sign in"}):Object(V.jsx)("span",{className:"header__user-name user__name",children:k})]})})})})]})})}),Object(V.jsxs)("main",{className:"page__main page__main--property",children:[Object(V.jsxs)("section",{className:"property",children:[Object(V.jsx)("div",{className:"property__gallery-container container",children:Object(V.jsx)("div",{className:"property__gallery",children:$.map((function(e,t){return Object(V.jsx)(_e,{image:e,title:U},t)}))})}),Object(V.jsx)("div",{className:"property__container container",children:Object(V.jsxs)("div",{className:"property__wrapper",children:[P&&Object(V.jsx)("div",{className:"property__mark",children:Object(V.jsx)("span",{children:"Premium"})}),Object(V.jsxs)("div",{className:"property__name-wrapper",children:[Object(V.jsx)("h1",{className:"property__name",children:U}),Object(V.jsxs)("button",{className:F?"property__bookmark-button property__bookmark-button--active button":"property__bookmark-button button",type:"button",onClick:function(){return H(c)},children:[Object(V.jsx)("svg",{className:"property__bookmark-icon",width:"31",height:"33",children:Object(V.jsx)("use",{xlinkHref:"#icon-bookmark"})}),Object(V.jsx)("span",{className:"visually-hidden",children:"To bookmarks"})]})]}),Object(V.jsxs)("div",{className:"property__rating rating",children:[Object(V.jsxs)("div",{className:"property__stars rating__stars",children:[Object(V.jsx)("span",{style:{width:"".concat(y(I),"%")}}),Object(V.jsx)("span",{className:"visually-hidden",children:"Rating"})]}),Object(V.jsx)("span",{className:"property__rating-value rating__value",children:I})]}),Object(V.jsxs)("ul",{className:"property__features",children:[Object(V.jsx)("li",{className:"property__feature property__feature--entire",children:D}),Object(V.jsxs)("li",{className:"property__feature property__feature--bedrooms",children:[L," Bedrooms"]}),Object(V.jsxs)("li",{className:"property__feature property__feature--adults",children:["Max ",M," adults"]})]}),Object(V.jsxs)("div",{className:"property__price",children:[Object(V.jsxs)("b",{className:"property__price-value",children:["\u20ac",G]}),Object(V.jsx)("span",{className:"property__price-text",children:"\xa0night"})]}),Object(V.jsxs)("div",{className:"property__inside",children:[Object(V.jsx)("h2",{className:"property__inside-title",children:"What's inside"}),Object(V.jsx)("ul",{className:"property__inside-list",children:J.map((function(e,t){return Object(V.jsx)("li",{className:"property__inside-item",children:e},t)}))})]}),Object(V.jsxs)("div",{className:"property__host",children:[Object(V.jsx)("h2",{className:"property__host-title",children:"Meet the host"}),Object(V.jsxs)("div",{className:"property__host-user user",children:[Object(V.jsx)("div",{className:X?"property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper":"property__avatar-wrapper user__avatar-wrapper",children:Object(V.jsx)("img",{className:"property__avatar user__avatar",src:B,width:"74",height:"74",alt:"Host avatar"})}),Object(V.jsx)("span",{className:"property__user-name",children:Q})]}),Object(V.jsx)("div",{className:"property__description",children:Object(V.jsx)("p",{className:"property__text",children:Y})})]}),Object(V.jsxs)("section",{className:"property__reviews reviews",children:[Object(V.jsx)(me,{reviews:l}),"AUTH"===C&&Object(V.jsx)(he,{id:t,updateComments:S})]})]})}),Object(V.jsx)("section",{className:"property__map map",children:_&&Object(V.jsx)(Z,{hotels:_,city:c.city.location})})]}),Object(V.jsx)("div",{className:"container",children:Object(V.jsxs)("section",{className:"near-places places",children:[Object(V.jsx)("h2",{className:"near-places__title",children:"Other places in the neighbourhood"}),_&&Object(V.jsx)(K,{hotels:_,classNameMainPage:"near-places__card place-card",classNameOfferPlace:"near-places__list places__list"})]})})]})]})},Oe=a(37),ve=Object(Oe.a)(),xe=function(){var e=p.a.useState(!0),t=Object(j.a)(e,2),a=t[0],s=t[1],c=W().fetchHotels,r=W().checkAuthAction;return p.a.useEffect((function(){Promise.all([c(),r()]).then((function(){return s(!1)}))}),[]),a?Object(V.jsx)("div",{children:"LOADING..."}):Object(V.jsx)(m.a,{basename:".",history:ve,children:Object(V.jsxs)(b.d,{children:[Object(V.jsx)(b.b,{exact:!0,path:O,children:Object(V.jsx)(ne,{})}),Object(V.jsx)(b.b,{exact:!0,path:x,children:Object(V.jsx)(ie,{})}),Object(V.jsx)(b.b,{exact:!0,path:f,children:Object(V.jsx)(ue,{})}),Object(V.jsx)(b.b,{exact:!0,path:"".concat(v,"/:id"),render:function(e){return Object(V.jsx)(be,{id:e.match.params.id})}})]})})},fe=a(38),Ne=document.querySelector("#root"),ge=function(e){var t=d.a.create({baseURL:"https://6.react.pages.academy/six-cities",timeout:5e3,withCredentials:!0});return t.interceptors.response.use((function(e){return e}),(function(t){var a=t.response;if(a&&401===a.status)throw e(),t;throw t})),t}((function(){return ye.dispatch(s.changeAuthStatus("NO_AUTH"))})),ye=Object(i.createStore)(Y,Object(fe.composeWithDevTools)(Object(i.applyMiddleware)(l.a.withExtraArgument(ge)),Object(i.applyMiddleware)((function(e){return function(e){return function(t){return t.type===N.REDIRECT_TO_ROUTE&&ve.push(t.payload),e(t)}}}))));r.a.render(Object(V.jsx)(n.a,{store:ye,children:Object(V.jsx)(xe,{})}),Ne)}},[[68,1,2]]]);
//# sourceMappingURL=main.c712966b.chunk.js.map