"use strict";var precacheConfig=[["/dekisite/index.html","06252f06cf529508ad70fa7d1d0bf9e7"],["/dekisite/static/css/main.fd87f1e4.css","79d949780bdcf0f7dc2dee3283bebd8a"],["/dekisite/static/js/main.d16c389d.js","893bdbca470777cbd6db29b62da4dd3e"],["/dekisite/static/media/f1.e777e27b.png","e777e27b2ca00b2df722bca279e1e325"],["/dekisite/static/media/f2.5cf22feb.png","5cf22febd6d9edd754e8d45ed8e34e3b"],["/dekisite/static/media/f3.42fddf41.png","42fddf41cb18f3da7272bc6db694b46a"],["/dekisite/static/media/f4.f1b1fe3c.png","f1b1fe3c7f353add78ce0c4b77d60a48"],["/dekisite/static/media/f5.a2b8b328.png","a2b8b328f60c4534957b4eec124aebbe"],["/dekisite/static/media/f6.3cd0e943.png","3cd0e94316736fb88e022cf89f19a764"],["/dekisite/static/media/f7.2b743b61.png","2b743b6136c2e2eca8e9078cfc0c0b80"],["/dekisite/static/media/f8.65e2fabf.png","65e2fabf46d41a2d2782dcede0dbf64c"],["/dekisite/static/media/f9.b3b7b0f8.png","b3b7b0f827d0906a4f71d94d5dbac6a0"],["/dekisite/static/media/foxy.9dc97ee6.png","9dc97ee6fbfb16e010cd237abc887ad3"],["/dekisite/static/media/me.0ac86730.gif","0ac86730fc2345fb9d67546911d85407"],["/dekisite/static/media/project10.44b7f98d.png","44b7f98d73f9ef9ca2cac97c11876cc8"],["/dekisite/static/media/project2.d02532e6.png","d02532e64199c10b76bafb6b893cbd2e"],["/dekisite/static/media/project3.5cd9621e.png","5cd9621e9304d97b31e88ec695045d02"],["/dekisite/static/media/project5.5b49d1cc.png","5b49d1cc92576511588f3e9137999055"],["/dekisite/static/media/project6.e2d874c9.png","e2d874c98ddbedc7bdefb472296adb5f"],["/dekisite/static/media/project7.ec02b449.png","ec02b449078b3b2468df6ebcf75c4e2a"],["/dekisite/static/media/project8.2fb8c341.png","2fb8c3415833a288d04574e6c7ad00ba"],["/dekisite/static/media/route3.51d567ae.png","51d567ae96b516866fa6f1da92403890"],["/dekisite/static/media/s10.7de5fe99.png","7de5fe998b0f080b84bd3ef4c0d594c4"],["/dekisite/static/media/s11.1b5e0fe8.png","1b5e0fe87116ac5b4ba4715f12c77372"],["/dekisite/static/media/s12.086f2a4d.png","086f2a4de4eea1e8bbf7a2dd49c4f66f"],["/dekisite/static/media/s13.e5eee315.png","e5eee315a17de0d7f56117077eb71fa9"],["/dekisite/static/media/s15.38feff27.png","38feff2795b81126f1c43f6701512544"],["/dekisite/static/media/s16.8272ae62.png","8272ae627987e6c6918a89041512bbfa"],["/dekisite/static/media/s17.cedf6c0b.png","cedf6c0bcea24bef375b62df98721933"],["/dekisite/static/media/s18.dd24e5cb.png","dd24e5cbdc77ae6eac2c09f96de0c293"],["/dekisite/static/media/s2.fbe01551.png","fbe01551b3091103d2655e6be9d8cd9f"],["/dekisite/static/media/s20.97426264.png","974262647c82057b6078c432841a53ea"],["/dekisite/static/media/s21.bc1d0d18.png","bc1d0d1856908a449c9cb18d0fa0766c"],["/dekisite/static/media/s22.75e133bd.png","75e133bd93e1da3ffa0217c412ef24d4"],["/dekisite/static/media/s23.469ab0f1.png","469ab0f100f05a769c9e8d03dcbe3026"],["/dekisite/static/media/s24.da7d3afa.png","da7d3afa81ca3f0769fb85f58e55b47c"],["/dekisite/static/media/s25.64e9f19d.png","64e9f19d8cb0dcae79ca46e061d28275"],["/dekisite/static/media/s26.23023c7a.png","23023c7ae5afd107dbdd51277037226e"],["/dekisite/static/media/s27.739ce43c.png","739ce43cf35095d9220ebc25a6bbcf14"],["/dekisite/static/media/s28.77c44bcb.png","77c44bcbef32ea9bf6fc7d64ee152b96"],["/dekisite/static/media/s3.9aa44a42.png","9aa44a420d72028f2bac13a9f0cc12a9"],["/dekisite/static/media/s4.90552fc5.png","90552fc53de18398a934d32aec962234"],["/dekisite/static/media/s5.1535aa30.png","1535aa30ed0372c2daf5138f117ecc79"],["/dekisite/static/media/s6.04badecd.png","04badecd2799ba76b599d038533ca32f"],["/dekisite/static/media/s7.74c36290.png","74c362907475d0d7f0d59d0fb662135c"],["/dekisite/static/media/s8.9d3f799d.png","9d3f799d3e81e2c537d365c7914aa457"],["/dekisite/static/media/s9.d638bd34.png","d638bd34b425dec39792d4a81189eddf"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,i){var c=new URL(e);return i&&c.pathname.match(i)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],i=new URL(t,self.location),c=createCacheKey(i,hashParamName,a,/\.\w{8}\./);return[i.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(i){return setOfCachedUrls(i).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return i.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),i="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,i),e=urlsToCacheKeys.has(a));var c="/dekisite/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});