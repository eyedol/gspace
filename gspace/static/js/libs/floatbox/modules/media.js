/* Floatbox 5.2.1 */
(function(K,be,bx,z){var bf='dailymotion',bg='window',bh='opaque',bi='enabledPlugin',bj='quicktime',L='youtube',M='activeX',N='source',O='thumbnail',H='large',I='medium',A='flash',B='length',C='params',D='height',E='width',u='true',v='1',w='substring',h='',J=fb.data.D,k=J&&J.fb.data;if(!k&&k.Y)return;var W=k.Y4,X=k.WK,P=k.VZ,Y=k.YQ,Q=fb.forEach,R='fbMedia',x='http://',by=0,r,S={flash:{name:'Flash Player',mime:'application/x-shockwave-flash',classid:'D27CDB6E-AE6D-11cf-96B8-444553540000',activeX:'ShockwaveFlash.ShockwaveFlash',pluginurl:x+'get.adobe.com/flashplayer/',src:'movie',params:{wmode:bg,bgcolor:h,scale:'exactfit',base:h,play:u,menu:h,allowFullScreen:u,allowScriptAccess:'always',quality:'high',salign:h}},silverlight:{name:'Silverlight',mime:'application/x-silverlight-2',activeX:'AgControl.AgControl',pluginurl:x+'go.microsoft.com/fwlink/?LinkID=124807',params:{allowHtmlPopupWindow:h,autoUpgrade:h,background:h,enablehtmlaccess:h,initparams:h,maxframerate:h,minRuntimeVersion:h,onerror:h,onfullscreenchanged:h,onload:h,onresize:h,onsourcedownloadcomplete:h,onsourcedownloadprogresschanged:h,splashscreensource:h,windowless:h}},quicktime:{name:'Quicktime Player',mime:'video/quicktime',classid:'02BF25D5-8C17-4B23-BC80-D3488ABDDC6B',activeX:'QuickTime.QuickTime',pluginurl:x+'www.apple.com/quicktime/download/',params:{autoplay:u,bgcolor:h,controller:u,enablejavascript:u,kioskmode:u,loop:'false',postdomevents:u,showlogo:'false',scale:'tofit'}},pdf:{name:'Adobe Reader',mime:'application/pdf',activeX:'PDF.PdfCtrl AcroPDF.PDF',pluginurl:x+'get.adobe.com/reader/',params:{}},wmp:{name:'Windows Media Player',mime:'application/x-mplayer2',classid:'22D6F312-B0F6-11D0-94AB-0080C74C7E95',activeX:'wmplayer.ocx MediaPlayer.MediaPlayer',pluginurl:x+'www.microsoft.com/windows/windowsmedia/download/alldownloads.aspx',src:'filename',params:{autoStart:v,showControls:v,showDisplay:'0',showStatusBar:'0',loop:'0',animationAtStart:v,transparentAtStart:'0'}}};function bz(o,l){var j=o.ZM,p=j&&j.WW,d=o.X,m,q;if(!p)return;if(p==L){m='gdata.youtube.com/feeds/api/videos/';q='?v=2&alt=jsonc&'}else if(p=='vimeo'){m='vimeo.com/api/v2/video/';q='.json?'}else if(p==bf){m='www.dailymotion.com/services/oembed?url=http://www.dailymotion.com/swf/';q='&'}if(m){(function f(g){k[g]=function(a){if(a){if(k.V8(a))a=a[0];if(a.data)a=a.data;var c={},b=a.thumbnail_url;if(b){c.small=b.replace(H,'small');c[I]=b.replace(H,I);c[H]=b}else{c.small=a.thumbnail_small||a[O]&&a[O].sqDefault;c[I]=a.thumbnail_medium;c[H]=a.thumbnail_large||a[O]&&a[O].hqDefault}c.TN=a.title;c.TM=a[E];c.TO=a[D];k[g].ZM=c}};fb.executeJS(x+m+j.vid+q+'callback=fb.data.'+g,function(){fb.extend(j,k[g].ZM);if(!d[E])d[E]=j.TM;if(!d[D])d[D]=j.TO;if(d.caption===z)d.caption=j.TN;P(k,g);if(l)l()})})('jsonc'+by++)}}function bA(s){var i;while((i=s.pop())){if(i.XG){i[C]=k.ZQ(i[C]);i[C].wmode=i[C].wmode||bh;i[N]+=(Y(i[N],'?')?'&':'?')+fb.serialize(i[C]);fb.setInnerHTML(i.node,bk({XG:K,Z:i[N],Y6:A},{minFlashVersion:i.minVersion},(X(i[E])||'310')+'px',(X(i[D])||'137')+'px',i.altContent,'class="fbFlashObject" id="'+(i.id||'')+'"'));k.YT(i)}else{(function(d,m,q,f){if((m=d.S)&&(q=k.YL(d.X,'addVideoThumb'))){if(!/small|large/.test(q))q=I;if(!m.getElementsByTagName('img')[B]){f=function(){var l=1,j,p;if(!(j=d.ZM))return;p=j[q];if(!p&&q==I){p=j[H];l=0.5}if(p){(function(g,o){fb.preload(p,function(a){if(!a)return;var c=k.YL(d.X,'addPlayButton'),b;try{b=g.ownerDocument.createElement('img')}catch(e){}if(b){if(c===z)c=K;b.src=a.src;b.alt=h;b[E]=a[E]*o;b[D]=a[D]*o;if(g.firstChild){g.insertBefore(b,g.firstChild)}else{g.appendChild(b)}k.VM(b,c,K);d.C=b}})})(m,l)}}}}bz(d,f)})(i)}}if(Z){Z();Z=bx}}function Z(){var b='onYouTubePlayerReady',g=function(){};if(k.X2(J[b]))g=J[b];J[b]=function(a){if(k.TT(a,R)){fbMedia=fb.$(a);if(fbMedia)fbMedia.addEventListener('onStateChange','fb.data.ytChange')}g(a)};k.ytChange=function(a){if(a===0){var c=fb.ownerInstance(fb.$(R));if(c){c.fbContent.style.display='none';c.end()}}}}function bk(b,g,o,l,j,p){o=o||'100%';l=l||'100%';p=p||'id="'+R+'"';var d=b.Z,m=b.Y6,q=b.ZM&&b.ZM.WW,f={},s=T(),i,t;if(/quicktime|wmp/.test(m)){if(!s[bj]^!s.wmp){var n=d.search(/[\?#]/),bl=(n!=-1)?d[w](0,n):d,n=bl.lastIndexOf('.')+1,bB=n?bl[w](n).toLowerCase():h;if(/mpg|mpeg|avi|m1v|mpe/.test(bB)){m=s.wmp?'wmp':bj}}}if(!(i=S[m]))return'Unknown media type';var bm=i.name,bC=i.classid,ba=i.mime,bn=i.pluginurl,y=i[C],bb;if(m==A){bb=s[A]&&!bD(g.minFlashVersion||7);if(!b.XG){f.autoplay=v;if(q==L){f.rel=0;f.fs=1;if(g.autoEndVideo!==be){f.enablejsapi=1;f.playerapiid=R}}if(Y(d,'vevo.com/'))f.playerType='embedded'}}if((!s[m]||bb)&&!(W.mobile&&q==L)){var bc=' style="background:#fff; font-size:14px; color:',bo='<p'+bc+'#000; margin:0; padding:1em;">',bp='<a'+bc+'blue;" target="_blank" href="',bq='</a></p>',br=h,bs,bt;if((r=/^#([a-z][^\s=]*)$/i.exec(j))&&(bs=fb.$(r[1]))){j=bs.innerHTML}if(m=='pdf'&&!j){bt=(r=/([^\/\?#]+)([\?#].*)?$/.exec(d))?r[1]:d;br=bo+k.strings.newWindow+' \u2192 '+bp+d+'">'+bt+bq}return j||'<div'+bc+'#000;">'+bo+k.strings[bb?'flashVer':'needPlayer'].replace('%1',bm)+'<br/>'+bp+bn+'">Get '+bm+bq+br+'</div>'}var n=d.indexOf('?'),F,U,bd;if(n!=-1){F=d[w](n+1).split('&');d=d[w](0,n);for(n=0;n<F[B];n++){U=F[n].indexOf('=');if(U==-1){f[F[n]]=h}else{f[F[n][w](0,U)]=F[n][w](U+1)}}Q(y,function(a,c){bd=a.toLowerCase();if(c=f[a]||f[bd]){y[a]=c;P(f,a);P(f,bd)}})}if(m==A){if(q==L&&f.v){n=f.v.indexOf('#t=');if(n!=-1){var G=f.v[w](n+3),bu=0,bv=0,bw=0;if(r=/(\d+)h/.exec(G))bu=+r[1];if(r=/(\d+)m/.exec(G))bv=+r[1];if(r=/(\d+)s/.exec(G))bw=+r[1];G=60*(60*bu+bv)+bw;if(G)f.start=G+h}P(f,'v');if(f.fs===z)f.fs=v;if(f.hd===z)f.hd=v}if(q=='vimeo'){if(f.fullscreen===z)f.fullscreen=v}if(r=/vevo.com\/watch.*\/(\w+)$/i.exec(d)){d=x+'www.vevo.com/VideoPlayer/Embedded';f.videoId=r[1]}if(q==bf)d+='?autoplay=1';if(W.XH)y.wmode=W.VB?bg:bh}if(f=fb.serialize(f))d+=(Y(d,'?')?'&':'?')+f;d=fb.encodeHTML(d);if(m=='silverlight')y[N]=d;t='<object '+p+' style="width:'+o+'; height:'+l+';" width="'+o+'" height="'+l+'" ';if(s[m]==M){t+='classid="clsid:'+bC+'">';y[i.src||'src']=d}else{t+='type="'+ba+'" data="'+(m=='silverlight'?'data:'+ba:d)+'">'}Q(y,function(a,c){if(c)t+='<param name="'+a+'" value="'+c+'"/>'});t+='<embed type="'+ba+'" src="'+d+'" width="'+o+'" height="'+l+'" ';Q(y,function(a,c){if(c)t+=a+'="'+c+'" '});t+='pluginspage="'+bn+'"></embed></object>';return t}function T(){if(T.YF)return T.YF;var b={},g=navigator.mimeTypes,o,l,j,p;Q(S,function(a,c){b[a]=be;if(g&&g[B]){o=c.mime;if((l=g[o])&&l[bi])b[a]='plugin'}else if(self.ActiveXObject){j=c[M].split(' ');p=j[B];while(p--){try{if(new ActiveXObject(j[p]))b[a]=M;break}catch(e){}}}});return(T.YF=b)}function V(){if(V.YF)return V.YF;var a=window.navigator,c=a.mimeTypes,b=c&&c[S[A].mime],g=b&&b[bi],o=(g&&g.description)||h,l=[0,0,0];if(!o&&self.ActiveXObject){try{o=(new ActiveXObject(S[A][M])).GetVariable('$version')}catch(e){}}if(r=/^\D+(\d+)\D+(\d+)\D+(\d+)/.exec(o)){l=r.slice(1);var j=l[B];while(j--)l[j]=+l[j]}return(V.YF=l)}function bD(a){if(!a||isNaN(X(a)))return z;var c=V(),b=(a+h).split(/\D+/);if(!b[0])b.slice(1);var g=b[B];while(g--)b[g]=+b[g]||0;return(c[0]>b[0]||(c[0]==b[0]&&c[1]>b[1])||(c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]))}fb.extend(k.N.media,{Y:K,Z4:bA,UF:bk})})(!0,!1,null);