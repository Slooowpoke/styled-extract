!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e||self).styledExtract={},e.react)}(this,function(e,t){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}var r=["as","className"];e.styled=function(e,o,a){return function(){return t.forwardRef(function(f,c){var i=f.as,s=void 0===i?e:i,u=f.className,l=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}(f,r),d={};Object.keys(a).forEach(function(e){d[e]=l[e]});var p=o(d);return t.createElement(s,n({ref:c},l,{className:u+" "+p}))})}}});
//# sourceMappingURL=styled.umd.js.map
