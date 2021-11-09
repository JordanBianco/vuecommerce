(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5bec"],{7030:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"p-4 md:px-0 md:w-11/12 md:mx-auto"},[t.items.length>0?s("div",[s("header",{staticClass:"border-b py-4 md:px-0 text-gray-500"},[s("div",{staticClass:"flex items-center justify-between"},[s("span",[t._v("Carrello")]),t.items.length>0?s("span",{staticClass:"text-sm"},[t._v(t._s(t.items.length)+" "+t._s(1==t.items.length?" articolo":"articoli"))]):t._e()])]),t._l(t.items,(function(e,a){return s("div",{key:a,staticClass:"flex space-x-4 p-4 odd:bg-gray-100 rounded-lg"},[s("router-link",{attrs:{to:{name:"product.show",params:{slug:e.product.slug}}}},[s("div",{staticClass:"flex-none bg-gray-200 h-20 w-20 rounded-lg"})]),s("div",{staticClass:"w-full flex flex-col space-y-1 md:flex-row md:space-y-0 justify-between"},[s("header",{staticClass:"flex flex-col justify-between md:block mb-4 md:mb-0 md:w-2/5"},[s("h3",{staticClass:"text-c-dark-gray leading-tight font-semibold mb-1"},[t._v(t._s(e.product.name))]),s("p",{staticClass:"hidden lg:block text-gray-500 text-xs"},[t._v(t._s(t._f("truncate")(e.product.description,200)))]),s("div",{staticClass:"lg:hidden block"},[s("div",{staticClass:"flex items-center space-x-3 text-xs text-gray-500"},[s("span",{staticClass:"cursor-pointer underline",on:{click:function(s){return t.saveForLater(a,e)}}},[t._v("salva per dopo")]),s("span",{staticClass:"cursor-pointer underline",on:{click:function(e){return t.removeFromCart(a)}}},[t._v("rimuovi")])])])]),s("div",{staticClass:"flex flex-row justify-between items-center md:flex-col md:justify-start md:space-y-2 md:w-1/5"},[s("p",{staticClass:"text-xs text-gray-500 md:text-center"},[t._v("Quantità")]),s("div",{staticClass:"flex items-center space-x-3"},[e.quantity>1?s("div",{staticClass:"cursor-pointer bg-c-white text-sm text-c-blue max-w-max border p-2 py-0.5",on:{click:function(s){return t.decrementQty(e)}}},[t._v(" - ")]):t._e(),s("span",{staticClass:"text-sm"},[t._v(t._s(e.quantity))]),s("div",{staticClass:"cursor-pointer bg-c-white text-sm text-c-blue max-w-max border p-2 py-0.5",on:{click:function(s){return t.incrementQty(e)}}},[t._v(" + ")])])]),s("div",{staticClass:"flex flex-row justify-between items-center md:flex-col md:justify-start md:space-y-2 md:w-1/5"},[s("p",{staticClass:"text-gray-500 text-xs"},[t._v("Prezzo")]),s("p",{staticClass:"text-sm text-c-dark-gray font-semibold"},[t._v("€"+t._s(e.product.price*e.quantity))])]),s("div",{staticClass:"hidden lg:block md:w-1/5"},[s("div",{staticClass:"flex flex-col space-y-1 text-xs text-gray-500"},[s("p",{staticClass:"underline cursor-pointer text-right",on:{click:function(s){return t.saveForLater(a,e)}}},[t._v("salva per dopo")]),s("p",{staticClass:"underline cursor-pointer text-right",on:{click:function(s){return t.removeFromCart(a,e.product)}}},[t._v("rimuovi")])])])])],1)})),s("div",{staticClass:"flex justify-end py-6 mt-6 border-t"},[s("div",{staticClass:"flex items-center space-x-2 max-w-max text-gray-500 text-sm cursor-pointer",on:{click:t.emptyCart}},[s("span",[t._v("svuota carta")]),s("svg",{staticClass:"w-5 h-5 flex-none",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"currentColor",d:"M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"}})])])]),s("footer",{staticClass:"text-gray-500 border-t border-gray-200 pt-6"},[s("div",{staticClass:"space-y-2"},[s("div",{staticClass:"flex items-center justify-between text-sm"},[s("span",[t._v("SubTotale")]),s("span",[t._v(t._s(t.subTotal()))])]),s("div",{staticClass:"flex items-center justify-between text-c-dark-gray font-semibold"},[s("span",[t._v("Totale")]),s("span",[t._v(t._s(t.total()))])])]),s("div",{staticClass:"flex justify-end"},[s("router-link",{staticClass:"bg-c-green text-center text-white rounded-lg text-sm w-full md:max-w-max px-4 py-3 mt-8",attrs:{to:{name:"Checkout"}}},[t._v(" Procedi al pagamento ")])],1)])],2):s("div",{staticClass:"flex justify-center pt-10 text-sm"},[s("p",{staticClass:"text-gray-500"},[t._v(" Non hai prodotti nel carrello. "),s("router-link",{staticClass:"text-c-green",attrs:{to:{name:"Home"}}},[t._v(" Continua lo shopping ")])],1)])])])},r=[],i=(s("159b"),{name:"cart.show",mounted:function(){this.$store.dispatch("cart/getItems",{user_id:1})},computed:{items:function(){return this.$store.state.cart.items}},methods:{decrementQty:function(t){this.$store.dispatch("cart/decrementQty",{item:t})},incrementQty:function(t){this.$store.dispatch("cart/incrementQty",{item:t})},removeFromCart:function(t,e){this.$store.dispatch("cart/removeFromCart",{index:t,product_id:e.id})},saveForLater:function(t,e){this.removeFromCart(t,e.product),this.$store.dispatch("cart/saveForLater",{item:e})},emptyCart:function(){confirm("Vuoi rimuovere tutti i prodotti dal carrello?")&&this.$store.dispatch("cart/emptyCart")},subTotal:function(){var t=0;return this.items.forEach((function(e){t+=e.product.price*e.quantity})),"€"+t},total:function(){var t=0;return this.items.forEach((function(e){t+=e.product.price*e.quantity})),"€"+t}},filters:{truncate:function(t,e){return t.length>e?t.substring(0,e)+"...":t}}}),c=i,n=s("2877"),o=Object(n["a"])(c,a,r,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0d5bec.9bce7008.js.map