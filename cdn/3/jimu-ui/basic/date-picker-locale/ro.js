System.register([],(function(a,e){return{execute:function(){a((()=>{"use strict";var a={d:(e,i)=>{for(var t in i)a.o(i,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},o:(a,e)=>Object.prototype.hasOwnProperty.call(a,e),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},e={};a.r(e),a.d(e,{default:()=>h});var i={lessThanXSeconds:{one:"mai pu\u021bin de o secund\u0103",other:"mai pu\u021bin de {{count}} secunde"},xSeconds:{one:"1 secund\u0103",other:"{{count}} secunde"},halfAMinute:"jum\u0103tate de minut",lessThanXMinutes:{one:"mai pu\u021bin de un minut",other:"mai pu\u021bin de {{count}} minute"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"circa 1 or\u0103",other:"circa {{count}} ore"},xHours:{one:"1 or\u0103",other:"{{count}} ore"},xDays:{one:"1 zi",other:"{{count}} zile"},aboutXWeeks:{one:"circa o s\u0103pt\u0103m\xe2n\u0103",other:"circa {{count}} s\u0103pt\u0103m\xe2ni"},xWeeks:{one:"1 s\u0103pt\u0103m\xe2n\u0103",other:"{{count}} s\u0103pt\u0103m\xe2ni"},aboutXMonths:{one:"circa 1 lun\u0103",other:"circa {{count}} luni"},xMonths:{one:"1 lun\u0103",other:"{{count}} luni"},aboutXYears:{one:"circa 1 an",other:"circa {{count}} ani"},xYears:{one:"1 an",other:"{{count}} ani"},overXYears:{one:"peste 1 an",other:"peste {{count}} ani"},almostXYears:{one:"aproape 1 an",other:"aproape {{count}} ani"}};const t=function(a,e,t){var n,r=i[a];return n="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",String(e)),null!=t&&t.addSuffix?t.comparison&&t.comparison>0?"\xeen "+n:n+" \xeen urm\u0103":n};function n(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.width?String(e.width):a.defaultWidth;return a.formats[i]||a.formats[a.defaultWidth]}}const r={date:n({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:n({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:n({formats:{full:"{{date}} 'la' {{time}}",long:"{{date}} 'la' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var o={lastWeek:"eeee 'trecut\u0103 la' p",yesterday:"'ieri la' p",today:"'ast\u0103zi la' p",tomorrow:"'m\xe2ine la' p",nextWeek:"eeee 'viitoare la' p",other:"P"};const u=function(a,e,i,t){return o[a]};function m(a){return function(e,i){var t;if("formatting"===(null!=i&&i.context?String(i.context):"standalone")&&a.formattingValues){var n=a.defaultFormattingWidth||a.defaultWidth,r=null!=i&&i.width?String(i.width):n;t=a.formattingValues[r]||a.formattingValues[n]}else{var o=a.defaultWidth,u=null!=i&&i.width?String(i.width):a.defaultWidth;t=a.values[u]||a.values[o]}return t[a.argumentCallback?a.argumentCallback(e):e]}}const d={ordinalNumber:function(a,e){return String(a)},era:m({values:{narrow:["\xce","D"],abbreviated:["\xce.d.C.","D.C."],wide:["\xcenainte de Cristos","Dup\u0103 Cristos"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["primul trimestru","al doilea trimestru","al treilea trimestru","al patrulea trimestru"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:m({values:{narrow:["I","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],wide:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"]},defaultWidth:"wide"}),day:m({values:{narrow:["d","l","m","m","j","v","s"],short:["du","lu","ma","mi","jo","vi","s\xe2"],abbreviated:["dum","lun","mar","mie","joi","vin","s\xe2m"],wide:["duminic\u0103","luni","mar\u021bi","miercuri","joi","vineri","s\xe2mb\u0103t\u0103"]},defaultWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"ami",morning:"dim",afternoon:"da",evening:"s",night:"n"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"}},defaultFormattingWidth:"wide"})};function l(a){return function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=i.width,n=t&&a.matchPatterns[t]||a.matchPatterns[a.defaultMatchWidth],r=e.match(n);if(!r)return null;var o,u=r[0],m=t&&a.parsePatterns[t]||a.parsePatterns[a.defaultParseWidth],d=Array.isArray(m)?function(a,e){for(var i=0;i<a.length;i++)if(e(a[i]))return i;return}(m,(function(a){return a.test(u)})):function(a,e){for(var i in a)if(a.hasOwnProperty(i)&&e(a[i]))return i;return}(m,(function(a){return a.test(u)}));return o=a.valueCallback?a.valueCallback(d):d,{value:o=i.valueCallback?i.valueCallback(o):o,rest:e.slice(u.length)}}}var s,c={ordinalNumber:(s={matchPattern:/^(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}},function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.match(s.matchPattern);if(!i)return null;var t=i[0],n=a.match(s.parsePattern);if(!n)return null;var r=s.valueCallback?s.valueCallback(n[0]):n[0];return{value:r=e.valueCallback?e.valueCallback(r):r,rest:a.slice(t.length)}}),era:l({matchPatterns:{narrow:/^(\xce|D)/i,abbreviated:/^(\xce\.?\s?d\.?\s?C\.?|\xce\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,wide:/^(\xcenainte de Cristos|\xcenaintea erei noastre|Dup\u0103 Cristos|Era noastr\u0103)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\xceC/i,/^DC/i],wide:[/^(\xcenainte de Cristos|\xcenaintea erei noastre)/i,/^(Dup\u0103 Cristos|Era noastr\u0103)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^trimestrul [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:l({matchPatterns:{narrow:/^[ifmaasond]/i,abbreviated:/^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,wide:/^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ia/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^iun/i,/^iul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(d|l|ma|mi|j|v|s)/i,abbreviated:/^(dum|lun|mar|mie|jo|vi|s\xe2)/i,wide:/^(duminica|luni|mar\u0163i|miercuri|joi|vineri|s\xe2mb\u0103t\u0103)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^mi/i,/^j/i,/^v/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mn|a|(diminea\u0163a|dup\u0103-amiaza|seara|noaptea))/i,any:/^([ap]\.?\s?m\.?|miezul nop\u021bii|amiaza|(diminea\u0163a|dup\u0103-amiaza|seara|noaptea))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/amiaza/i,morning:/diminea\u0163a/i,afternoon:/dup\u0103-amiaza/i,evening:/seara/i,night:/noaptea/i}},defaultParseWidth:"any"})};const h={code:"ro",formatDistance:t,formatLong:r,formatRelative:u,localize:d,match:c,options:{weekStartsOn:1,firstWeekContainsDate:1}};return e})())}}}));