(this["webpackJsonpsix-cities"]=this["webpackJsonpsix-cities"]||[]).push([[0],{68:function(e,t,a){"use strict";a.r(t),a.d(t,"api",(function(){return ge}));var s={};a.r(s),a.d(s,"fetchHotels",(function(){return C})),a.d(s,"fetchReviews",(function(){return A})),a.d(s,"fetchNearbyHotels",(function(){return E})),a.d(s,"fetchFavoriteHotels",(function(){return S})),a.d(s,"checkAuthAction",(function(){return H})),a.d(s,"authAction",(function(){return R})),a.d(s,"postReview",(function(){return P})),a.d(s,"changeFavoriteStatus",(function(){return U})),a.d(s,"updateHotels",(function(){return F})),a.d(s,"changeCity",(function(){return I})),a.d(s,"changeSortType",(function(){return D})),a.d(s,"changeActiveOffer",(function(){return L})),a.d(s,"changeAuthStatus",(function(){return M})),a.d(s,"setUserName",(function(){return G})),a.d(s,"redirectToRoute",(function(){return J}));var c=a(18),r=a.n(c),n=a(15),i=a(10),l=a(34),o=a(35),d=a.n(o);var j,_,u=a(6),h=a(1),p=a.n(h),m=a(4),b=a(3),O="/",v="/offer",x="/login",f="/favorites";!function(e){e[e.January=0]="January",e[e.February=1]="February",e[e.March=2]="March",e[e.April=3]="April",e[e.May=4]="May",e[e.June=5]="June",e[e.July=6]="July",e[e.August=7]="August",e[e.September=8]="September",e[e.October=9]="October",e[e.November=10]="November",e[e.December=11]="December"}(j||(j={})),function(e){e.POPULAR="Popular",e.PRICE_LOW_TO_HIGH="Price: low to high",e.PRICE_HIGH_TO_LOW="Price: high to low",e.TOP_RATED_FIRST="Top rated first"}(_||(_={}));var N,g=["Paris","Cologne","Brussels","Amsterdam","Hamburg","Dusseldorf"],y=function(e){switch(Math.round(e)){case 5:return 100;case 4:return 80;case 3:return 60;case 2:return 40;case 1:return 20;default:return 0}},w=a(0),T=function(e){var t=e.hotel,a=e.className,s=e.onHoverHandler,c=e.onBookmarkClick,r=e.isFavorite,n=t.preview_image,i=t.title,l=t.price,o=t.rating,d=t.type;return Object(w.jsxs)("article",{className:a,onMouseEnter:function(){return s&&s(t)},children:[Object(w.jsx)("div",{className:"cities__image-wrapper place-card__image-wrapper",children:Object(w.jsx)(m.b,{to:"".concat(v,"/").concat(t.id),children:Object(w.jsx)("img",{className:"place-card__image",src:n,width:"260",height:"200",alt:i})})}),Object(w.jsxs)("div",{className:"place-card__info",children:[Object(w.jsxs)("div",{className:"place-card__price-wrapper",children:[Object(w.jsxs)("div",{className:"place-card__price",children:[Object(w.jsxs)("b",{className:"place-card__price-value",children:["\u20ac",l]}),Object(w.jsx)("span",{className:"place-card__price-text",children:"/\xa0night"})]}),Object(w.jsxs)("button",{className:r?"place-card__bookmark-button place-card__bookmark-button--active button":"place-card__bookmark-button button",type:"button",onClick:function(){return c(t)},children:[Object(w.jsx)("svg",{className:"place-card__bookmark-icon",width:"18",height:"19",children:Object(w.jsx)("use",{xlinkHref:"#icon-bookmark"})}),Object(w.jsx)("span",{className:"visually-hidden",children:"To bookmarks"})]})]}),Object(w.jsx)("div",{className:"place-card__rating rating",children:Object(w.jsxs)("div",{className:"place-card__stars rating__stars",children:[Object(w.jsx)("span",{style:{width:"".concat(y(o),"%")}}),Object(w.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),Object(w.jsx)("h2",{className:"place-card__name",children:Object(w.jsx)(m.b,{to:"".concat(v,"/").concat(t.id),children:i})}),Object(w.jsx)("p",{className:"place-card__type",children:d})]})]})},k=p.a.memo(T);!function(e){e.LOAD_HOTELS="load_hotels",e.CHANGE_CITY="change_city",e.CHANGE_SORT_TYPE="change_sort_type",e.CHANGE_ACTIVE_OFFER="change_active_offer",e.CHANGE_AUTH_STATUS="change_auth_status",e.SET_USER_NAME="set_user_name",e.UPDATE_HOTELS="update_hotels",e.REDIRECT_TO_ROUTE="redirect_to_route"}(N||(N={}));var C=function(){return function(e,t,a){return a.get("/hotels").then((function(t){var a=t.data;e({type:N.LOAD_HOTELS,payload:a})})).catch((function(){e({type:N.LOAD_HOTELS,payload:[]})}))}},A=function(e){return function(t,a,s){return s.get("/comments/".concat(e))}},E=function(e){return function(t,a,s){return s.get("/hotels/".concat(e,"/nearby"))}},S=function(){return function(e,t,a){return a.get("/favorite")}},H=function(){return function(e,t,a){a.get("/login").then((function(t){var a=t.data;e(G(a.email)),e(M("AUTH"))}))}},R=function(e,t){return function(a,s,c){return c.post("/login",{email:e,password:t}).then((function(){a(M("AUTH")),a(G(e))}))}},P=function(e,t,a){return function(s,c,r){return r.post("/comments/".concat(a),{comment:e,rating:t})}},U=function(e,t){return function(a,s,c){return c.post("/favorite/".concat(e,"/").concat(t))}},F=function(e){return function(t,a,s){var c=function(e,t){var a=e.findIndex((function(e){return e.id===t.id}));return e.slice(0,a).concat(t).concat(e.slice(a+1,e.length))}(a().hotels.hotels,e);t({type:N.UPDATE_HOTELS,payload:c})}},I=function(e){return{type:N.CHANGE_CITY,payload:e}},D=function(e){return{type:N.CHANGE_SORT_TYPE,payload:e}},L=function(e){return{type:N.CHANGE_ACTIVE_OFFER,payload:e}},M=function(e){return{type:N.CHANGE_AUTH_STATUS,payload:e}},G=function(e){return{type:N.SET_USER_NAME,payload:e}},J=function(e){return{type:N.REDIRECT_TO_ROUTE,payload:e}},Y={hotels:[],sortType:"Popular",activeOffer:{}},W={city:"Amsterdam"},z={status:"NO_AUTH",userName:""},V=Object(i.combineReducers)({hotels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.LOAD_HOTELS:return Object.assign({},e,{hotels:t.payload});case N.CHANGE_SORT_TYPE:return Object.assign({},e,{sortType:t.payload});case N.CHANGE_ACTIVE_OFFER:return Object.assign({},e,{activeOffer:t.payload});case N.UPDATE_HOTELS:return Object.assign({},e,{hotels:t.payload});default:return e}},currentCity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.CHANGE_CITY:return{city:t.payload};default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.CHANGE_AUTH_STATUS:return Object.assign({},e,{status:t.payload});case N.SET_USER_NAME:return Object.assign({},e,{userName:t.payload});default:return e}}}),B=function(){var e=Object(n.b)();return Object(i.bindActionCreators)(s,e)},q=n.c,K=function(e){var t=e.hotels,a=e.classNameMainPage,s=e.classNameOfferPlace,c=B(),r=c.changeActiveOffer,n=c.changeFavoriteStatus,i=c.updateHotels,l=c.redirectToRoute,o=q((function(e){return e.user})).status,d=p.a.useCallback((function(e){r(e)}),[]),j=p.a.useCallback((function(e){"AUTH"===o?(e.is_favorite=!e.is_favorite,n(e.id,Number(e.is_favorite)).then((function(e){var t=e.data;i(t)}))):l("/login")}),[]);return Object(w.jsx)("div",{className:s,children:t.map((function(e,t){return Object(w.jsx)(k,{hotel:e,isFavorite:e.is_favorite,onHoverHandler:d,className:a,onBookmarkClick:j},t)}))})},Q=a(11),X=a.n(Q),Z=(a(67),function(e){var t=e.hotels,a=e.city,s=a.latitude,c=a.longitude,r=a.zoom,n=q((function(e){return e.hotels})).activeOffer,i=Object(h.useState)(),l=Object(u.a)(i,2),o=l[0],d=l[1],j=Object(h.useState)(),_=Object(u.a)(j,2),m=_[0],b=_[1],O=X.a.icon({iconUrl:"img/pin.svg",iconSize:[27,39]}),v=X.a.icon({iconUrl:"img/pin-active.svg",iconSize:[27,39]}),x=function(e){var a=[];t.forEach((function(e){var t=[e.location.latitude,e.location.longitude],s=X.a.marker(t,e===n?{icon:v}:{icon:O}).bindPopup('\n          <div style="text-align: center">\n            '.concat(e.title,"<br>\n            ").concat(e.type,"\n          </div>\n          "));a.push(s)}));var s=X.a.layerGroup(a);b(s),s.addTo(e)};return p.a.useEffect((function(){!function(){var e=[s,c],t=X.a.map("map",{center:e,zoom:r,zoomControl:!1});d(t),t.setView(e,r),X.a.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}).addTo(t),x(t)}()}),[]),p.a.useEffect((function(){o&&(null===m||void 0===m||m.clearLayers(),o.setView([s,c],r),x(o))}),[n,t]),Object(w.jsx)("div",{id:"map",style:{height:"100%"}})}),$=function(e){var t=e.currentCity,a=e.onTabCityClick;return Object(w.jsx)("ul",{className:"locations__list tabs__list",children:g.map((function(e,s){return Object(w.jsx)("li",{className:"locations__item",children:Object(w.jsx)("a",{className:e===t?"locations__item-link tabs__item tabs__item--active":"locations__item-link tabs__item",onClick:a,href:"#",children:Object(w.jsx)("span",{children:e})})},s)}))})},ee=function(e){var t=e.isActive,a=e.itemName,s=e.onTypeSortClick;return Object(w.jsx)("li",{onClick:s,className:t?"places__option places__option--active":"places__option",tabIndex:0,children:a})},te=Object.values(_),ae=function(){var e=B().changeSortType,t=q((function(e){return e.hotels})).sortType,a=Object(h.useCallback)((function(t){var a=t.currentTarget.textContent;a&&e(a)}),[]);return Object(w.jsxs)("form",{className:"places__sorting",action:"#",method:"get",children:[Object(w.jsx)("span",{className:"places__sorting-caption",children:"Sort by"}),Object(w.jsxs)("span",{className:"places__sorting-type",tabIndex:0,children:[t,Object(w.jsx)("svg",{className:"places__sorting-arrow",width:"7",height:"4",children:Object(w.jsx)("use",{xlinkHref:"#icon-arrow-select"})})]}),Object(w.jsx)("ul",{className:"places__options places__options--custom",children:te.map((function(e,s){return Object(w.jsx)(ee,{isActive:t===e,itemName:e,onTypeSortClick:a},s)}))})]})},se=function(e){var t=e.city,a=e.onTabCityClick;return Object(w.jsxs)("main",{className:"page__main page__main--index page__main--index-empty",children:[Object(w.jsx)("h1",{className:"visually-hidden",children:"Cities"}),Object(w.jsx)("div",{className:"tabs",children:Object(w.jsx)("section",{className:"locations container",children:Object(w.jsx)($,{currentCity:t,onTabCityClick:a})})}),Object(w.jsx)("div",{className:"cities",children:Object(w.jsxs)("div",{className:"cities__places-container cities__places-container--empty container",children:[Object(w.jsx)("section",{className:"cities__no-places",children:Object(w.jsxs)("div",{className:"cities__status-wrapper tabs__content",children:[Object(w.jsx)("b",{className:"cities__status",children:"No places to stay available"}),Object(w.jsxs)("p",{className:"cities__status-description",children:["We could not find any property available at the moment in ",t]})]})}),Object(w.jsx)("div",{className:"cities__right-section"})]})})]})},ce=a(36),re=Object(ce.a)((function(e){return e.hotels.hotels}),(function(e){return e.hotels.sortType}),(function(e){return e.currentCity.city}),(function(e,t,a){var s=e.filter((function(e){return e.city.name===a}));switch(t){case _.POPULAR:return s;case _.PRICE_HIGH_TO_LOW:return s.sort((function(e,t){return t.price-e.price})).slice();case _.PRICE_LOW_TO_HIGH:return s.sort((function(e,t){return e.price-t.price})).slice();case _.TOP_RATED_FIRST:return s.sort((function(e,t){return t.rating-e.rating})).slice();default:return s}})),ne=function(){var e=B().changeCity,t=q((function(e){return e.currentCity})).city,a=q((function(e){return e.user})).status,s=q((function(e){return e.user})).userName,c=re(q((function(e){return e}))),r=Object(h.useCallback)((function(a){var s=a.currentTarget.text;t!==s&&e(s)}),[t]);return Object(w.jsxs)("div",{className:"page page--gray page--main",children:[Object(w.jsx)("header",{className:"header",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"header__wrapper",children:[Object(w.jsx)("div",{className:"header__left",children:Object(w.jsx)("a",{className:"header__logo-link",children:Object(w.jsx)("img",{className:"header__logo",src:"img/logo.svg",alt:"6 cities logo",width:"81",height:"41"})})}),Object(w.jsx)("nav",{className:"header__nav",children:Object(w.jsx)("ul",{className:"header__nav-list",children:Object(w.jsx)("li",{className:"header__nav-item user",children:Object(w.jsxs)(m.b,{className:"header__nav-link header__nav-link--profile",to:"NO_AUTH"===a?x:f,children:[Object(w.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),"NO_AUTH"===a?Object(w.jsx)("span",{className:"header__login",children:"Sign in"}):Object(w.jsx)("span",{className:"header__user-name user__name",children:s})]})})})})]})})}),0===c.length?Object(w.jsx)(se,{city:t,onTabCityClick:r}):Object(w.jsxs)("main",{className:"page__main page__main--index",children:[Object(w.jsx)("h1",{className:"visually-hidden",children:"Cities"}),Object(w.jsx)("div",{className:"tabs",children:Object(w.jsx)("section",{className:"locations container",children:Object(w.jsx)($,{currentCity:t,onTabCityClick:r})})}),Object(w.jsx)("div",{className:"cities",children:Object(w.jsxs)("div",{className:"cities__places-container container",children:[Object(w.jsxs)("section",{className:"cities__places places",children:[Object(w.jsx)("h2",{className:"visually-hidden",children:"Places"}),Object(w.jsxs)("b",{className:"places__found",children:[c.length," places to stay in ",t]}),Object(w.jsx)(ae,{}),Object(w.jsx)(K,{hotels:c,classNameMainPage:"cities__place-card place-card",classNameOfferPlace:"cities__places-list places__list tabs__content"})]}),Object(w.jsx)("div",{className:"cities__right-section",children:Object(w.jsx)("section",{className:"cities__map map",children:c.length>0&&Object(w.jsx)(Z,{hotels:c,city:c[0].city.location})})})]})})]})]})},ie=function(){var e=Object(h.useState)(),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(h.useState)(),r=Object(u.a)(c,2),n=r[0],i=r[1],l=B().authAction;return"AUTH"===q((function(e){return e.user})).status?Object(w.jsx)(b.a,{to:O}):Object(w.jsxs)("div",{className:"page page--gray page--login",children:[Object(w.jsx)("header",{className:"header",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"header__wrapper",children:[Object(w.jsx)("div",{className:"header__left",children:Object(w.jsx)(m.b,{className:"header__logo-link",to:O,children:Object(w.jsx)("img",{className:"header__logo",src:"img/logo.svg",alt:"6 cities logo",width:"81",height:"41"})})}),Object(w.jsx)("nav",{className:"header__nav",children:Object(w.jsx)("ul",{className:"header__nav-list",children:Object(w.jsx)("li",{className:"header__nav-item user",children:Object(w.jsxs)("a",{className:"header__nav-link header__nav-link--profile",children:[Object(w.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),Object(w.jsx)("span",{className:"header__login",children:"Sign in"})]})})})})]})})}),Object(w.jsx)("main",{className:"page__main page__main--login",children:Object(w.jsxs)("div",{className:"page__login-container container",children:[Object(w.jsxs)("section",{className:"login",children:[Object(w.jsx)("h1",{className:"login__title",children:"Sign in"}),Object(w.jsxs)("form",{className:"login__form form",action:"#",method:"post",onSubmit:function(e){e.preventDefault(),a&&n&&l(a,n)},children:[Object(w.jsxs)("div",{className:"login__input-wrapper form__input-wrapper",children:[Object(w.jsx)("label",{className:"visually-hidden",children:"E-mail"}),Object(w.jsx)("input",{onChange:function(e){return s(e.currentTarget.value)},className:"login__input form__input",type:"email",name:"email",placeholder:"Email",required:!0})]}),Object(w.jsxs)("div",{className:"login__input-wrapper form__input-wrapper",children:[Object(w.jsx)("label",{className:"visually-hidden",children:"Password"}),Object(w.jsx)("input",{onChange:function(e){return i(e.currentTarget.value)},className:"login__input form__input",type:"password",name:"password",placeholder:"Password",required:!0})]}),Object(w.jsx)("button",{className:"login__submit form__submit button",type:"submit",children:"Sign in"})]})]}),Object(w.jsx)("section",{className:"locations locations--login locations--current",children:Object(w.jsx)("div",{className:"locations__item",children:Object(w.jsx)(m.b,{className:"locations__item-link",to:O,children:Object(w.jsx)("span",{children:"Amsterdam"})})})})]})})]})},le=function(e){var t=e.hotel,a=t.title,s=t.price,c=t.is_favorite,r=t.rating,n=t.type,i=t.preview_image,l=t.id;return Object(w.jsxs)("article",{className:"favorites__card place-card",children:[Object(w.jsx)("div",{className:"favorites__image-wrapper place-card__image-wrapper",children:Object(w.jsx)(m.b,{to:"".concat(v,"/").concat(l),children:Object(w.jsx)("img",{className:"place-card__image",src:i,width:"150",height:"110",alt:a})})}),Object(w.jsxs)("div",{className:"favorites__card-info place-card__info",children:[Object(w.jsxs)("div",{className:"place-card__price-wrapper",children:[Object(w.jsxs)("div",{className:"place-card__price",children:[Object(w.jsxs)("b",{className:"place-card__price-value",children:["\u20ac",s]}),Object(w.jsx)("span",{className:"place-card__price-text",children:"/\xa0night"})]}),Object(w.jsxs)("button",{className:c?"place-card__bookmark-button place-card__bookmark-button--active button":"place-card__bookmark-button button",type:"button",children:[Object(w.jsx)("svg",{className:"place-card__bookmark-icon",width:"18",height:"19",children:Object(w.jsx)("use",{xlinkHref:"#icon-bookmark"})}),Object(w.jsx)("span",{className:"visually-hidden",children:"In bookmarks"})]})]}),Object(w.jsx)("div",{className:"place-card__rating rating",children:Object(w.jsxs)("div",{className:"place-card__stars rating__stars",children:[Object(w.jsx)("span",{style:{width:"".concat(y(r),"%")}}),Object(w.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),Object(w.jsx)("h2",{className:"place-card__name",children:Object(w.jsx)(m.b,{to:"".concat(v,"/").concat(l),children:a})}),Object(w.jsx)("p",{className:"place-card__type",children:n})]})]})},oe=function(e){var t=e.hotels,a=e.city,s=function(e){return e.filter((function(e){return e.city.name===a}))}(t);return Object(w.jsx)(w.Fragment,{children:s.map((function(e,t){return Object(w.jsx)(le,{hotel:e},t)}))})},de=function(){return Object(w.jsx)("main",{className:"page__main page__main--favorites page__main--favorites-empty",children:Object(w.jsx)("div",{className:"page__favorites-container container",children:Object(w.jsxs)("section",{className:"favorites favorites--empty",children:[Object(w.jsx)("h1",{className:"visually-hidden",children:"Favorites (empty)"}),Object(w.jsxs)("div",{className:"favorites__status-wrapper",children:[Object(w.jsx)("b",{className:"favorites__status",children:"Nothing yet saved."}),Object(w.jsx)("p",{className:"favorites__status-description",children:"Save properties to narrow down search or plan your future trips."})]})]})})})},je=function(e){e.hotels;var t=B().changeCity,a=B().fetchFavoriteHotels,s=q((function(e){return e.user})).status,c=q((function(e){return e.user})).userName,r=p.a.useState([]),n=Object(u.a)(r,2),i=n[0],l=n[1];p.a.useEffect((function(){a().then((function(e){var t=e.data;l(t)}))}),[]);var o=p.a.useCallback((function(e){var a=e.currentTarget.textContent;a&&t(a)}),[]),d=function(e){var t=new Set;return e.forEach((function(e){return t.add(e.city.name)})),Array.from(t)}(i);return"NO_AUTH"===s?Object(w.jsx)(b.a,{to:x}):Object(w.jsxs)("div",{className:"page",children:[Object(w.jsx)("header",{className:"header",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"header__wrapper",children:[Object(w.jsx)("div",{className:"header__left",children:Object(w.jsx)(m.b,{className:"header__logo-link",to:O,children:Object(w.jsx)("img",{className:"header__logo",src:"img/logo.svg",alt:"6 cities logo",width:"81",height:"41"})})}),Object(w.jsx)("nav",{className:"header__nav",children:Object(w.jsx)("ul",{className:"header__nav-list",children:Object(w.jsx)("li",{className:"header__nav-item user",children:Object(w.jsxs)(m.b,{className:"header__nav-link header__nav-link--profile",to:f,children:[Object(w.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),Object(w.jsx)("span",{className:"header__user-name user__name",children:c})]})})})})]})})}),0===d.length?Object(w.jsx)(de,{}):Object(w.jsx)("main",{className:"page__main page__main--favorites",children:Object(w.jsx)("div",{className:"page__favorites-container container",children:Object(w.jsxs)("section",{className:"favorites",children:[Object(w.jsx)("h1",{className:"favorites__title",children:"Saved listing"}),Object(w.jsx)("ul",{className:"favorites__list",children:d.map((function(e,t){return Object(w.jsxs)("li",{className:"favorites__locations-items",children:[Object(w.jsx)("div",{className:"favorites__locations locations locations--current",children:Object(w.jsx)("div",{className:"locations__item",onClick:o,children:Object(w.jsx)(m.b,{className:"locations__item-link",to:O,children:Object(w.jsx)("span",{children:e})})})}),Object(w.jsx)("div",{className:"favorites__places",children:Object(w.jsx)(oe,{hotels:i,city:e},t)})]},t)}))})]})})}),Object(w.jsx)("footer",{className:"footer container",children:Object(w.jsx)(m.b,{className:"footer__logo-link",to:O,children:Object(w.jsx)("img",{className:"footer__logo",src:"img/logo.svg",alt:"6 cities logo",width:"64",height:"33"})})})]})},_e=function(e){var t=e.image,a=e.title;return Object(w.jsx)("div",{className:"property__image-wrapper",children:Object(w.jsx)("img",{className:"property__image",src:t,alt:a})})},ue=new Map([[1,"terribly"],[2,"badly"],[3,"not bad"],[4,"good"],[5,"perfect"]]),he=function(e){var t=e.id,a=e.updateComments,s=p.a.useState(),c=Object(u.a)(s,2),r=c[0],n=c[1],i=p.a.useState(),l=Object(u.a)(i,2),o=l[0],d=l[1],j=B().postReview,_=Object(h.createRef)(),m=new Array(5).fill(""),b=p.a.useCallback((function(e){var t=e.currentTarget.value;n(Number(t))}),[]),O=p.a.useCallback((function(e){var t=e.currentTarget.value;d(t)}),[]),v=p.a.useCallback((function(e){e.preventDefault();var s=_.current;o&&r&&j(o,r,t).then((function(e){var t=e.data;return a(t)})).then((function(){n(null),d(""),null===s||void 0===s||s.reset()}))}),[r,o]);return Object(w.jsxs)("form",{className:"reviews__form form",action:"#",method:"post",onSubmit:v,ref:_,children:[Object(w.jsx)("label",{className:"reviews__label form__label",htmlFor:"review",children:"Your review"}),Object(w.jsx)("div",{className:"reviews__rating-form form__rating",children:m.map((function(e,t,a){return Object(w.jsxs)(p.a.Fragment,{children:[Object(w.jsx)("input",{className:"form__rating-input visually-hidden",name:"rating",value:a.length-t,id:"".concat(a.length-t,"-stars"),type:"radio",onChange:b}),Object(w.jsx)("label",{htmlFor:"".concat(a.length-t,"-stars"),className:"reviews__rating-label form__rating-label",title:ue.get(a.length-t),children:Object(w.jsx)("svg",{className:"form__star-image",width:"37",height:"33",children:Object(w.jsx)("use",{xlinkHref:"#icon-star"})})})]},t)}))}),Object(w.jsx)("textarea",{className:"reviews__textarea form__textarea",id:"review",name:"review",placeholder:"Tell how was your stay, what you like and what can be improved",onChange:O,value:o}),Object(w.jsxs)("div",{className:"reviews__button-wrapper",children:[Object(w.jsxs)("p",{className:"reviews__help",children:["To submit review please make sure to set",Object(w.jsx)("span",{className:"reviews__star",children:"rating"})," and describe your stay with at least",Object(w.jsx)("b",{className:"reviews__text-amount",children:"50 characters"}),"."]}),Object(w.jsx)("button",{className:"reviews__submit form__submit button",type:"submit",disabled:!(o&&o.length>=50&&r),children:"Submit"})]})]})},pe=function(e){var t=e.review;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"reviews__user user",children:[Object(w.jsx)("div",{className:"reviews__avatar-wrapper user__avatar-wrapper",children:Object(w.jsx)("img",{className:"reviews__avatar user__avatar",src:t.user.avatar_url,width:"54",height:"54",alt:"Reviews avatar"})}),Object(w.jsx)("span",{className:"reviews__user-name",children:t.user.name})]}),Object(w.jsxs)("div",{className:"reviews__info",children:[Object(w.jsx)("div",{className:"reviews__rating rating",children:Object(w.jsxs)("div",{className:"reviews__stars rating__stars",children:[Object(w.jsx)("span",{style:{width:"".concat(y(t.rating),"%")}}),Object(w.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),Object(w.jsx)("p",{className:"reviews__text",children:t.comment}),Object(w.jsx)("time",{className:"reviews__time",dateTime:String(t.date).slice(0,10),children:function(e){var t=new Date(Date.parse(String(e))),a=t.getFullYear(),s=j[t.getMonth()];return"".concat(s," ").concat(a)}(t.date)})]})]})},me=function(e){var t=e.reviews,a=t.length;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("h2",{className:"reviews__title",children:["Reviews \xb7","",Object(w.jsx)("span",{className:"reviews__amount",children:a})]}),Object(w.jsx)("ul",{className:"reviews__list",children:t.map((function(e,t){return Object(w.jsx)("li",{className:"reviews__item",children:Object(w.jsx)(pe,{review:e})},t)}))})]})},be=function(e){var t=e.hotels,a=e.id,s=p.a.useState(),c=Object(u.a)(s,2),r=c[0],n=c[1],i=p.a.useState([]),l=Object(u.a)(i,2),o=l[0],d=l[1],j=p.a.useState(),_=Object(u.a)(j,2),h=_[0],b=_[1],v=B(),x=v.fetchReviews,N=v.fetchNearbyHotels,g=q((function(e){return e.user})).userName,T=q((function(e){return e.user})).status;p.a.useEffect((function(){window.scrollTo(0,0),n(t.find((function(e){return e.id===Number(a)})))}),[t,a]),p.a.useEffect((function(){x(a).then((function(e){var t=e.data;return d(t)}))}),[a]),p.a.useEffect((function(){N(a).then((function(e){var t=e.data;return b(t)}))}),[a]);var k=p.a.useCallback((function(e){d(e)}),[]);if(!r)return Object(w.jsx)("div",{children:"Film not found"});var C=r.images,A=r.title,E=r.is_premium,S=r.rating,H=r.type,R=r.bedrooms,P=r.max_adults,U=r.price,F=r.goods,I=r.description,D=r.host,L=D.avatar_url,M=D.name,G=D.is_pro,J=C.slice(0,6);return Object(w.jsxs)("div",{className:"page",children:[Object(w.jsx)("header",{className:"header",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"header__wrapper",children:[Object(w.jsx)("div",{className:"header__left",children:Object(w.jsx)(m.b,{className:"header__logo-link",to:O,children:Object(w.jsx)("img",{className:"header__logo",src:"img/logo.svg",alt:"6 cities logo",width:"81",height:"41"})})}),Object(w.jsx)("nav",{className:"header__nav",children:Object(w.jsx)("ul",{className:"header__nav-list",children:Object(w.jsx)("li",{className:"header__nav-item user",children:Object(w.jsxs)(m.b,{className:"header__nav-link header__nav-link--profile",to:f,children:[Object(w.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),Object(w.jsx)("span",{className:"header__user-name user__name",children:g})]})})})})]})})}),Object(w.jsxs)("main",{className:"page__main page__main--property",children:[Object(w.jsxs)("section",{className:"property",children:[Object(w.jsx)("div",{className:"property__gallery-container container",children:Object(w.jsx)("div",{className:"property__gallery",children:J.map((function(e,t){return Object(w.jsx)(_e,{image:e,title:A},t)}))})}),Object(w.jsx)("div",{className:"property__container container",children:Object(w.jsxs)("div",{className:"property__wrapper",children:[E&&Object(w.jsx)("div",{className:"property__mark",children:Object(w.jsx)("span",{children:"Premium"})}),Object(w.jsxs)("div",{className:"property__name-wrapper",children:[Object(w.jsx)("h1",{className:"property__name",children:A}),Object(w.jsxs)("button",{className:"property__bookmark-button button",type:"button",children:[Object(w.jsx)("svg",{className:"property__bookmark-icon",width:"31",height:"33",children:Object(w.jsx)("use",{xlinkHref:"#icon-bookmark"})}),Object(w.jsx)("span",{className:"visually-hidden",children:"To bookmarks"})]})]}),Object(w.jsxs)("div",{className:"property__rating rating",children:[Object(w.jsxs)("div",{className:"property__stars rating__stars",children:[Object(w.jsx)("span",{style:{width:"".concat(y(S),"%")}}),Object(w.jsx)("span",{className:"visually-hidden",children:"Rating"})]}),Object(w.jsx)("span",{className:"property__rating-value rating__value",children:S})]}),Object(w.jsxs)("ul",{className:"property__features",children:[Object(w.jsx)("li",{className:"property__feature property__feature--entire",children:H}),Object(w.jsxs)("li",{className:"property__feature property__feature--bedrooms",children:[R," Bedrooms"]}),Object(w.jsxs)("li",{className:"property__feature property__feature--adults",children:["Max ",P," adults"]})]}),Object(w.jsxs)("div",{className:"property__price",children:[Object(w.jsxs)("b",{className:"property__price-value",children:["\u20ac",U]}),Object(w.jsx)("span",{className:"property__price-text",children:"\xa0night"})]}),Object(w.jsxs)("div",{className:"property__inside",children:[Object(w.jsx)("h2",{className:"property__inside-title",children:"What's inside"}),Object(w.jsx)("ul",{className:"property__inside-list",children:F.map((function(e,t){return Object(w.jsx)("li",{className:"property__inside-item",children:e},t)}))})]}),Object(w.jsxs)("div",{className:"property__host",children:[Object(w.jsx)("h2",{className:"property__host-title",children:"Meet the host"}),Object(w.jsxs)("div",{className:"property__host-user user",children:[Object(w.jsx)("div",{className:G?"property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper":"property__avatar-wrapper user__avatar-wrapper",children:Object(w.jsx)("img",{className:"property__avatar user__avatar",src:L,width:"74",height:"74",alt:"Host avatar"})}),Object(w.jsx)("span",{className:"property__user-name",children:M})]}),Object(w.jsx)("div",{className:"property__description",children:Object(w.jsx)("p",{className:"property__text",children:I})})]}),Object(w.jsxs)("section",{className:"property__reviews reviews",children:[Object(w.jsx)(me,{reviews:o}),"AUTH"===T&&Object(w.jsx)(he,{id:a,updateComments:k})]})]})}),Object(w.jsx)("section",{className:"property__map map",children:h&&Object(w.jsx)(Z,{hotels:h,city:r.city.location})})]}),Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("section",{className:"near-places places",children:[Object(w.jsx)("h2",{className:"near-places__title",children:"Other places in the neighbourhood"}),h&&Object(w.jsx)(K,{hotels:h,classNameMainPage:"near-places__card place-card",classNameOfferPlace:"near-places__list places__list"})]})})]})]})},Oe=a(37),ve=Object(Oe.a)(),xe=function(){var e=p.a.useState(!0),t=Object(u.a)(e,2),a=t[0],s=t[1],c=B().fetchHotels,r=B().checkAuthAction,n=q((function(e){return e.hotels})).hotels;return p.a.useEffect((function(){Promise.all([c(),r()]).then((function(){return s(!1)}))}),[]),a?Object(w.jsx)("div",{children:"LOADING..."}):Object(w.jsx)(m.a,{history:ve,children:Object(w.jsxs)(b.d,{children:[Object(w.jsx)(b.b,{exact:!0,path:O,children:Object(w.jsx)(ne,{})}),Object(w.jsx)(b.b,{exact:!0,path:x,children:Object(w.jsx)(ie,{})}),Object(w.jsx)(b.b,{exact:!0,path:f,children:Object(w.jsx)(je,{hotels:n})}),Object(w.jsx)(b.b,{exact:!0,path:"".concat(v,"/:id"),render:function(e){return Object(w.jsx)(be,{hotels:n,id:e.match.params.id})}})]})})},fe=a(38),Ne=document.querySelector("#root"),ge=function(e){var t=d.a.create({baseURL:"https://6.react.pages.academy/six-cities",timeout:5e3,withCredentials:!0});return t.interceptors.response.use((function(e){return e}),(function(t){var a=t.response;if(a&&401===a.status)throw e(),t;throw t})),t}((function(){return ye.dispatch(s.changeAuthStatus("NO_AUTH"))})),ye=Object(i.createStore)(V,Object(fe.composeWithDevTools)(Object(i.applyMiddleware)(l.a.withExtraArgument(ge)),Object(i.applyMiddleware)((function(e){return function(e){return function(t){return t.type===N.REDIRECT_TO_ROUTE&&ve.push(t.payload),e(t)}}}))));r.a.render(Object(w.jsx)(n.a,{store:ye,children:Object(w.jsx)(xe,{})}),Ne)}},[[68,1,2]]]);
//# sourceMappingURL=main.3ca47106.chunk.js.map