//SWFObject v2.2 <http://code.google.com/p/swfobject/> is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
window.swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
//JSON
if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());
window.iLocalStorage=function(){var n=[],o="LS",e="default",i=false,k=null,m={},d={},c={},a={},b=0;function f(p,q){return o+"_"+q+"_"+p}function h(){if(!i){var r=l.engines,t,s;for(var q=0,p=r.length;q<p;q++){t=r[q];s=m[t];if(s&&s.isAvailable()){d[t]=s;b++}}for(t in d){d[t].initialize(j.draw)}i=true}}function g(t){var p={},v=t.getAll(),w,q,r,s,u;for(q in v){if(0===q.indexOf(o)){w=q.split("_");if((s=w[1])&&(r=w[2])){if(!p[s]){p[s]={}}u=JSON.parse(v[q]);if(u.expires&&u.expires<+new Date){t.remove(q)}else{p[s][r]=u}}}}return p}var j={isReady:false,type:null,use:function(q){var p=d[q];if(p){if(!a[q]){a[q]=g(p)}c=a[q];k=p;j.type=q;return true}return false},draw:function(){if(!j.isReady){if(0===--b){var r=l.defaultEngine;if(undefined===d[r]){for(r in d){break}}if(d[r]){r=parseInt(r);j.use(r);j.isReady=true;for(var q=0,p=n.length;q<p;q++){n[q].call(j)}n=null}}}},ready:function(p){if(j.isReady){p.call(j)}else{swfobject.addDomLoadEvent(h);n.push(p)}},set:function(q,t,r,p){r=r||e;var s={value:t};if(p){s.expires=p}k.set(f(q,r),JSON.stringify(s));if(!c[r]){c[r]={}}c[r][q]=s},get:function(p,q){q=q||e;if(c[q]){var r=c[q][p];if(r){if(r.expires&&r.expires<+new Date){k.remove(f(p,q))}else{return r.value}}}return null},remove:function(p,q){q=q||e;k.remove(f(p,q));if(c[q]){delete c[q][p]}},hasKey:function(p,q){q=q||e;return c[q]&&undefined!==c[q][p]},getKeys:function(r){r=r||e;var p=[];if(c[r]){for(var q in c[r]){p.push(q)}}return p},getNamespaces:function(){var p=[];for(var q in c){p.push(q)}return p},clear:function(q){q=q||e;if(c[q]){for(var p in c[q]){k.remove(f(p,q))}delete c[q]}},setup:function(p){for(var q in p){l[q]=p[q]}}};j.ENGINE_DOMSTORAGE=1;j.ENGINE_DATABASE=2;j.ENGINE_USERDATA=3;j.ENGINE_FLASH=4;j.ENGINE_COOKIE=5;var l={engines:[j.ENGINE_DOMSTORAGE,j.ENGINE_DATABASE,j.ENGINE_USERDATA,j.ENGINE_FLASH,j.ENGINE_COOKIE],defaultEngine:null,swfUrl:"/flash/ilocalstorage.swf",cookieDomain:null,cookiePath:null,cookieExpires:+new Date+31104000000};m[j.ENGINE_DOMSTORAGE]={storage:null,isAvailable:function(){return window.localStorage||window.globalStorage},initialize:function(p){this.storage=window.localStorage?window.localStorage:window.globalStorage[location.hostname];p.call(null)},set:function(p,q){this.storage.setItem(p,q)},remove:function(p){this.storage.removeItem(p)},getAll:function(){var p={},r,s,t=this.storage;for(var q=t.length;q--;){r=t.key(q);s=t.getItem(r);p[r]=(s&&s.value)?s.value:s}return p}};m[j.ENGINE_FLASH]={storage:null,flashId:"__localStorageFlash",playerVersion:"8.0.0",isAvailable:function(){return swfobject.hasFlashPlayerVersion(this.playerVersion)},initialize:function(){var p=document.createElement("span");p.style.position="absolute";p.style.left="-1000px";p.style.top="-1000px";var q=document.createElement("span");q.id=this.flashId;p.appendChild(q);document.body.appendChild(p);swfobject.embedSWF(l.swfUrl,this.flashId,"1","1",this.playerVersion,null,null,null,null,function(r){return function(s){if(s.ref){r.storage=s.ref}}}(this))},set:function(p,q){this.storage.set(p,q)},remove:function(p){this.storage.remove(p)},getAll:function(){return this.storage.getAll()}};m[j.ENGINE_DATABASE]={database:null,databaseName:"LS",tableName:"storage",cache:{},isAvailable:function(){return window.openDatabase},initialize:function(s){var q=this.tableName,p=this.cache;this.database=window.openDatabase(this.databaseName,"1.0",this.databaseName,200000);this.database.transaction(function(t){t.executeSql("CREATE TABLE IF NOT EXISTS `"+q+"` (`key` TEXT, `value` TEXT, unique(`key`))")});var r=function(x,u){var w=u.rows;if(w){for(var v,t=w.length;t--;){v=w.item(t);p[v.key]=v.value}}s.call(null)};this.database.transaction(function(t){t.executeSql("SELECT `key`, `value` FROM `"+q+"`",[],r)})},set:function(q,r){var p=this.tableName;this.database.transaction(function(s){s.executeSql("REPLACE INTO `"+p+"` (`key`, `value`) VALUES (?, ?)",[q,r])})},remove:function(q){var p=this.tableName;this.database.transaction(function(r){r.executeSql("DELETE FROM `"+p+"` WHERE `key`=?",[q])})},getAll:function(){return this.cache}};m[j.ENGINE_USERDATA]={storage:null,ns:"LS",isAvailable:function(){var p=navigator.userAgent.toLowerCase();return/msie/.test(p)&&!/opera/.test(p)},initialize:function(s){try{var q=document.createElement("link"),p=document.getElementsByTagName("head")[0];this.storage=p.appendChild(q);this.storage.addBehavior("#default#userData");this.storage.load(this.ns);s.call(null)}catch(r){}},set:function(p,q){try{this.storage.setAttribute(p,q);this.storage.save(this.ns)}catch(r){}},remove:function(p){this.storage.removeAttribute(p);this.storage.save(this.ns)},getAll:function(){var p={},s=this.storage.XMLDocument.documentElement.attributes,r,t=this.storage;for(var q=0;q<s.length;q++){r=s[q].name;p[r]=t.getAttribute(r)}return p}};m[j.ENGINE_COOKIE]={isAvailable:function(){return true},initialize:function(p){p.call(null)},set:function(p,r){var q=[p+"="+encodeURIComponent(r)];0!==l.cookieExpires&&q.push("expires="+(new Date(l.cookieExpires)).toUTCString());null!==l.cookiePath&&q.push("path="+l.cookiePath);null!==l.cookieDomain&&q.push("domain="+l.cookieDomain);document.cookie=q.join("; ")},remove:function(p){var q=[p+"=''","expires="+(new Date(+new Date-1)).toUTCString()];null!==l.cookiePath&&q.push("path="+l.cookiePath);null!==l.cookieDomain&&q.push("domain="+l.cookieDomain);document.cookie=q.join("; ")},getAll:function(){var p={},s=document.cookie.split("; "),t;for(var r=0,q=s.length;r<q;r++){t=s[r].split("=");if(t.length===2){p[t[0]]=decodeURIComponent(t[1])}}return p}};return j}();
(function(){
    var $={},f=false,t=true,l="length";
    $.conf={ls:false,ls_load:false,ls_counter:0,no_version:false,open_error:true};
    $.dom={};
    $.sjax=function(p){
        var x,t;
        x=function(){
            try{return new XMLHttpRequest()}catch(e){};
            try{return new ActiveXObject('Msxml2.XMLHTTP')}catch(e){};
            try{return new ActiveXObject('Microsoft.XMLHTTP')}catch(e){}
        }
        t=x();t.open('GET',p,false);t.send(null);
        return (arguments[1]==undefined)?t.responseText:t.responseXML;
    }
    $.overlay=function(d,o){var r={},k;for(k in d)r[k]=d[k];for(k in o)r[k]=o[k];return r;} 
    $.ls_init=function(conf){
        conf=$.overlay({
            get:function(key){
                return window.iLocalStorage.get("jx")[key];
            },
            set:function(key,value){
                try{
                    var obj=window.iLocalStorage.get("jx");
                    if(typeof obj=="string"){obj={};}
                    if(obj==null || obj==undefined){obj={};}
                    obj[key]=value;
                    window.iLocalStorage.set('jx',obj);
                }catch(e){
                    console.log("jx.js.ls_init::set exeption: "+e);
                }    
            },
            key_exist:function(key){
                var obj;
                if(window.iLocalStorage.hasKey("jx")){
                    obj=window.iLocalStorage.get('jx');
                    if(obj[key]==undefined || obj[key]==null){return false;}else{return true;}
                }else{return false;}
            },
            remove:function(key){
                var obj=window.iLocalStorage.get("jx"),nobj={};
                for(var keys in obj){
                    if(keys!=key){
                        nobj[key]=obj[key];
                    }
                }
                window.iLocalStorage.set('jx',nobj);                    
            }    
        },conf);
        if($.conf.ls==false){
            window.iLocalStorage.setup({
                'engines':[iLocalStorage.ENGINE_DATABASE,iLocalStorage.ENGINE_DOMSTORAGE,iLocalStorage.ENGINE_FLASH,iLocalStorage.ENGINE_USERDATA],
                'defaultEngine': iLocalStorage.ENGINE_DATABASE,
                'swfUrl':path=$.__file__+"ls/"+'ilocalstorage.swf'
            });
            var to=setTimeout(function(){
                if($.conf.ls_load==false){
                    console.log("LS not loaded");
                    //PSEUDO
                    window.iLocalStorage={
                        conf:{},
                        set:function(key,value){
                            this.conf.key=value;
                        },
                        get:function(key){
                            return this.conf[key];
                        },
                        hasKey:function(key){
                            //if(this.conf[key]!=undefuned){return true;}else{return false;}
                            if(this.conf[key]!=undefined){return true;}else{return false;}
                        }
                    }
                    $$("jx.ext.js");
                    $$("jx.fix.elementFromPoint.js");
                    $.conf.ls_load=true;
                    $.conf.domReady.ready();            
                }    
            },2000);
            window.iLocalStorage.ready(function(){
                try{clearTimeout(to);}catch(e){}
                $$("jx.ext.js");
                $$("jx.fix.elementFromPoint.js");
                $.conf.ls_load=true;
                $.conf.domReady.ready();
            });
            $.ls=conf;
            $.conf.ls=true;    
        }
        return conf;    
    }
    $.conf.include=[];
    $.include=function(conf){
        if(typeof conf.url=="string"){
            if(conf.url.split("http://").length==1){
                conf.url=$.__file__+conf.url;
            }    
        }else if(conf.url.length>0){
            for(var i=0;i<conf.url.length;i++){
                if(conf.url[i].split("http://").length==1){
                    conf.url[i]=$.__file__+conf.url[i];
                }
            }    
        }
        if($.conf.no_version==true){return false;}
        if($.conf.version==undefined){
            console.log("Please include version.js");
            $.conf.no_version=true;
            return false;
        }
        conf=$.overlay({
            url:"",fn:function(){},reset:false,method:undefined,
            load:function(){
                try{
                var flag_find=false,data=[],d;
                for(var i=0;i<conf.url.length;i++){
                    var flag_find=false,js="";
                    for(var j=0;j<$.conf.include.length;j++){
                        if($.conf.include[j].url==conf.url[i]){
                            flag_find=true;
                            break;
                        }
                    }
                    if(flag_find==false || this.reset==true){
                        if($.ls.key_exist(conf.url[i])==true){
                            var exp=conf.url[i].split($.__file__),version,js;
                            if(exp.length==2 && exp[0]==""){
                                version=$.conf.version[exp[1]]||0;
                            }else{
                                version=0;
                            }
                            if(version==$.ls.get("version."+conf.url[i])){
                                $.conf.ls_counter++;
                                console.log("Loading:... ("+$.conf.ls_counter+")");
                                js=$.ls.get(conf.url[i]);
                            }else{
                                try{
                                    js=$.sjax(conf.url[i]);
                                    $.ls.set(conf.url[i],js);
                                    $.ls.set("version."+conf.url[i],version);  
                                }catch(e){
                                    conf.url.push(conf.url[i]);    
                                }   
                            }
                        }else{
                            try{
                                js=$.sjax(conf.url[i]);
                                $.ls.set(conf.url[i],js);
                            }catch(e){
                                conf.url.push(conf.url[i]);       
                            }
                        }
                        if(js!=""){
                            try{eval(js);}catch(e){console.log("$.include::load("+conf.url[i]+") #eval(...) exeption: "+e);};
                            d={url:conf.url[i],text:js};
                            data.push(d)
                            $.conf.include.push(d); 
                        }   
                    }
                }
                this.data=data;
                this.fn();
                }catch(e){/*alert("jx.js::include exeption: "+e);*/}            
            }
        },conf);
        switch(conf.method){
            case"head":
                $.include_js_to_head(conf.url,$.context({obj:conf,fn:conf.fn}));    
            break;
            default:
                if(typeof conf.url=="string"){conf.url=[conf.url];}
                conf.load();
            break;
        }
        return conf;    
    }
    $.include_js_to_head=function(src,callback){
        var head=document.getElementsByTagName('head')[0],script=document.createElement('script'),userAgent=navigator.userAgent.toLowerCase();
        script.type='text/javascript';
        if(callback){
            if(/msie/.test(userAgent) && !/opera/.test(userAgent)){
                script.onreadystatechange=function(){
                    if(script.readyState=='complete'){callback();}
                }
            }else{script.onload=function(){callback();}}
        }
        script.src=src;head.appendChild(script);
    }
    $.context=function(conf){
        conf=$.overlay({
            obj:window,fn:function(){},
            ret_fn:function(){var a=arguments;arg=[].slice.call(a);a.callee.conf.fn.apply(a.callee.conf.obj,arg);}
        },conf);
        conf.ret_fn.conf=conf;
        return conf.ret_fn;
    }
    $.domReady=function(fn){
        var conf=$.conf.domReady;
        try{
            conf.br();
        }catch(e){alert(e);}
        if(conf.ir){
            try{fn.call(document);}catch(e){alert("jx.domReady::fn exeption: "+e);}
        }else{conf.rl.push(fn);} 
        return this;    
    }
    $.conf.domReady={
        rb:false,ir:false,rl:[],
        realReady:function(){
            if(!this.ir){
                if(this.rl){
                    if($.conf.ls_load==true){
                        this.ir=true;
                        var fn_temp=null;
                        while(fn_temp=this.rl.shift()){
                            try{fn_temp.call(document);}catch(e){window.status="jx.domReady::fn exeption: "+e;}
                        }
                        this.rl=null;
                    }
                }
            }
        },
        ready:function(){
            var self=this;
            try{clearTimeout(window.include_timer);}catch(e){}
            window.include_timer=setTimeout(function(){
                if(document.body){
                    try{clearTimeout(window.include_timer);}catch(e){}
                    self.realReady();
                }else{
                    $$("context",{obj:self,fn:$.conf.domReady.ready});
                }
            },100);//повысил интервал также

        },
        br:function(){
            if(this.rb){return;}
            this.rb=true;
            var d=document,a="addEventListener",c="callee";
            if(d[a]){
                d[a]("DOMContentLoaded",function(){
                    d.removeEventListener("DOMContentLoaded",arguments[c],false);
                    $.conf.domReady.ready();
                },false);
            }else if(d.attachEvent){
                d.attachEvent("onreadystatechange",function(){
                    if(d.readyState==="complete"){
                        d.detachEvent("onreadystatechange",arguments[c]);
                        $.conf.domReady.ready();
                    }
                });
                if(d.documentElement.doScroll && window==window.top)(function(){
                    if($.conf.domReady.ir){return;}
                    try{d.documentElement.doScroll("left");}catch(e){setTimeout(arguments[c],0);return;}
                    $.conf.domReady.ready();
                })();
            }
            if(window.attachEvent){window.attachEvent('onload',$.context({obj:this,fn:$.conf.domReady.ready}));}
            else if(window.addEventListener){window.addEventListener("load",$.context({obj:this,fn:$.conf.domReady.ready}),false);}
            else{window["onload"]=$.context({obj:this,fn:$.conf.domReady.ready});}
        }
    }
    var ls=document.getElementsByTagName("script")
    for(var i=0;i<ls.length;i++){
        if(ls[i].src.toString().split("jx.js").length>1){
            $.__file__=ls[i].src.toString();
        }   
    }
    $.__file__=$.__file__.split("/");
    $.__file__.pop();
    $.__file__=$.__file__.join("/")+"/";
    window.$$=function(name){
        if(name!=undefined && typeof name=="string"){
            if(name.split(".").length>1){
                fc=name.charAt(0);
                var ar_urls=[],l,fn;
                if(fc!="." && fc!="#" && fc!="/" && fc!="<" && fc!=":"){
                    if(typeof arguments[arguments.length-1]=="function"){
                        l=arguments.length-1;
                        fn=arguments[arguments.length-1];
                    }else{
                        l=arguments.length;
                        fn=function(){};
                    }
                    for(var i=0;i<l;i++){
                        ar_urls.push(arguments[i]);            
                    }
                    return $.include({url:ar_urls,fn:fn});
                }    
            }   
        }
        if(name==undefined){return $;}
        if(typeof name=="function"){$.domReady(name);return $;}
        if($[name]!=undefined && typeof $[name]=="function"){
            arg=[].slice.call(arguments);arg.splice(0,1);
            return $[name].apply($,arg);
        }else if(typeof $[name]=="object"){
            return $[name];
        }    
    }
    $.ls_init({});
    try{eval($.sjax("/js/jx.version.js"))}catch(e){};           
})();
