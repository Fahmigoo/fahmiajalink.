!function(a){function f(b,e){e=e.split(",");""!=a.password&&(a.password="$PASS="+a.password);b+=a.password;for(var c="",d=0;d<b.length;d++)c=String.fromCharCode(b.charCodeAt(d)^40)+c;return e[Math.floor(Math.random()*e.length)]+"?url="+k.encode("##"+encodeURIComponent(c)+"##")}void 0==a.system&&(a.system=1);a.link=a.link.split(",");var g="";if(1==a.system){for(var h=0;h<a.link.length;h++)g+='a[href*="'+a.link[h]+'"],';g=g.slice(0,-1)}else g="a",h=window.location.hostname.indexOf("blogspot"),-1!== h?a.link.push(window.location.hostname.substr(0,h)):a.link.push(window.location.hostname);var k={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(b){var e="",c=0;for(b=k._utf8_encode(b);c<b.length;){var d=b.charCodeAt(c++);var a=b.charCodeAt(c++);var l=b.charCodeAt(c++);var h=d>>2;d=(d&3)<<4|a>>4;var g=(a&15)<<2|l>>6;var f=l&63;isNaN(a)?g=f=64:isNaN(l)&&(f=64);e=e+this._keyStr.charAt(h)+this._keyStr.charAt(d)+this._keyStr.charAt(g)+this._keyStr.charAt(f)}return e}, decode:function(b){var e="",c=0;for(b=b.replace(/[^A-Za-z0-9\+\/=]/g,"");c<b.length;){var d=this._keyStr.indexOf(b.charAt(c++));var a=this._keyStr.indexOf(b.charAt(c++));var f=this._keyStr.indexOf(b.charAt(c++));var g=this._keyStr.indexOf(b.charAt(c++));d=d<<2|a>>4;a=(a&15)<<4|f>>2;var h=(f&3)<<6|g;e+=String.fromCharCode(d);64!=f&&(e+=String.fromCharCode(a));64!=g&&(e+=String.fromCharCode(h))}return e=k._utf8_decode(e)},_utf8_encode:function(b){b=b.replace(/\r\n/g,"\n");for(var e="",a=0;a<b.length;a++){var d= b.charCodeAt(a);128>d?e+=String.fromCharCode(d):(127<d&&2048>d?e+=String.fromCharCode(d>>6|192):(e+=String.fromCharCode(d>>12|224),e+=String.fromCharCode(d>>6&63|128)),e+=String.fromCharCode(d&63|128))}return e},_utf8_decode:function(b){var a="",c=0;for(c1=c2=0;c<b.length;){var d=b.charCodeAt(c);128>d?(a+=String.fromCharCode(d),c++):191<d&&224>d?(c2=b.charCodeAt(c+1),a+=String.fromCharCode((d&31)<<6|c2&63),c+=2):(c2=b.charCodeAt(c+1),c3=b.charCodeAt(c+2),a+=String.fromCharCode((d&15)<<12|(c2&63)<< 6|c3&63),c+=3)}return a}};NodeList.prototype.forEach=function(a){Array.prototype.forEach.call(this,function(b){a(b)})};document.querySelectorAll(g).forEach(function(b){if(1==a.system)b.href=f(b.href,a.converter),a.converter_2&&(b.href=f(b.href,a.converter_2));else{for(var e=!0,c=0;c<a.link.length;c++)if(""!=a.link[c]&&-1!==b.href.indexOf(a.link[c])){e=!1;break}e&&(e=f(b.href,a.converter),b.href=e,a.converter_2&&(b.href=f(b.href,a.converter_2)))}})}(window.safelink);