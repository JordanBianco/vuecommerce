(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086f7"],{a57d:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"p-4 md:px-0 md:w-11/12 md:mx-auto"},[t.savedItems.length>0?s("div",[s("header",{staticClass:"border-b py-4 md:px-0 text-gray-500"},[s("div",{staticClass:"flex items-center justify-between"},[s("span",[t._v("Articoli salvati")]),t.savedItems.length>0?s("span",{staticClass:"text-sm"},[t._v(t._s(t.savedItems.length)+" "+t._s(1==t.savedItems.length?" articolo":" articoli"))]):t._e()])]),t._l(t.savedItems,(function(e,a){return s("div",{key:a,staticClass:"flex space-x-4 p-4 py-6 odd:bg-gray-100 rounded-lg"},[s("router-link",{attrs:{to:{name:"product.show",params:{slug:e.product.slug}}}},[s("div",{staticClass:"flex-none bg-gray-200 h-20 w-20 rounded-lg"})]),s("div",{staticClass:"w-full flex flex-col space-y-1 md:flex-row md:space-y-0 justify-between"},[s("header",{staticClass:"flex flex-col justify-between md:block mb-4 md:mb-0 md:w-2/5"},[s("h3",{staticClass:"text-c-dark-gray leading-tight font-semibold mb-2"},[t._v(t._s(e.product.name))]),s("p",{staticClass:"hidden lg:block text-gray-500 text-sm leading-tight"},[t._v(t._s(t._f("truncate")(e.product.description,250)))]),s("div",{staticClass:"lg:hidden block"},[s("div",{staticClass:"flex flex-col space-y-1 text-xs text-gray-500"},[s("span",{staticClass:"underline cursor-pointer",on:{click:function(s){return t.moveToCart(a,e)}}},[t._v("aggiungi al carrello")]),s("span",{staticClass:"underline cursor-pointer",on:{click:function(s){return t.removeFromSaved(a,e)}}},[t._v("rimuovi")])])])]),s("div",{staticClass:"flex flex-row justify-between items-center md:flex-col md:justify-start md:space-y-2 md:w-1/5"},[s("p",{staticClass:"text-gray-500 text-xs"},[t._v("Prezzo")]),s("p",{staticClass:"text-sm text-c-dark-gray font-semibold"},[t._v("€"+t._s(e.product.price))])]),s("div",{staticClass:"hidden lg:block md:w-1/5"},[s("div",{staticClass:"flex flex-col space-y-1 text-xs text-gray-500"},[s("span",{staticClass:"underline cursor-pointer text-right",on:{click:function(s){return t.moveToCart(a,e)}}},[t._v("aggiungi al carrello")]),s("span",{staticClass:"underline cursor-pointer text-right",on:{click:function(s){return t.removeFromSaved(a,e)}}},[t._v("rimuovi")])])])])],1)})),s("div",{staticClass:"flex justify-end py-6"},[s("div",{staticClass:"flex items-center space-x-2 max-w-max text-gray-500 text-sm cursor-pointer",on:{click:t.emptySaved}},[s("span",[t._v("svuota lista")]),s("svg",{staticClass:"w-5 h-5 flex-none",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"currentColor",d:"M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"}})])])])],2):s("div",{staticClass:"flex justify-center pt-10 text-sm"},[s("p",{staticClass:"text-gray-400"},[t._v(" Non hai prodotti salvati. "),s("router-link",{staticClass:"text-c-green",attrs:{to:{name:"Home"}}},[t._v(" Continua lo shopping ")])],1)])])])},i=[],r={name:"saved.show",mounted:function(){this.$store.dispatch("cart/getSavedItems")},computed:{savedItems:function(){return this.$store.state.cart.savedItems}},methods:{removeFromSaved:function(t,e){this.$store.dispatch("cart/removeFromSaved",{index:t,item:e})},moveToCart:function(t,e){this.removeFromSaved(t,e),this.$store.dispatch("cart/addToCart",{item:{product:e.product,quantity:1}})},emptySaved:function(){confirm('Vuoi rimuovere tutti i prodotti dalla lista "salvati per dopo"?')&&this.$store.dispatch("cart/emptySaved")}},filters:{truncate:function(t,e){return t.length>e?t.substring(0,e)+"...":t}}},o=r,n=s("2877"),l=Object(n["a"])(o,a,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d2086f7.55375e50.js.map