	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};
	/*v0.5vv_20181207_syb_scopedata*/global.__wcc_version__='v0.5vv_20181207_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleError'])
Z([3,'cover'])
Z([[7],[3,'mode']])
Z([[7],[3,'url']])
Z([[7],[3,'sign']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'title']])
Z([3,'center'])
Z(z[0])
Z([[7],[3,'lists']])
Z([3,'book_id'])
Z([3,'cover'])
Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'book_status']],[1,'03']],[1,'全本'],[1,'']])
Z([[6],[[7],[3,'item']],[3,'cover']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'lists'])
Z([[7],[3,'title']])
Z([3,'center'])
Z(z[1])
Z([[7],[3,'lists']])
Z([3,'book_id'])
Z([3,'cover'])
Z([3,'scaleToFill'])
Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'book_status']],[1,'03']],[1,'全本'],[1,'']])
Z([[6],[[7],[3,'item']],[3,'cover']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'button'])
Z([[7],[3,'url']])
Z([[7],[3,'icon_url']])
Z([3,'title'])
Z([[7],[3,'name']])
Z([[7],[3,'desc']])
Z([[2,'||'],[[7],[3,'more']],[[7],[3,'moreIcon']]])
Z([[7],[3,'moreIcon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'title'])
Z([a,[3,'text-align:'],[[7],[3,'align']]])
Z([3,'desc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'footer'])
Z([[7],[3,'previd']])
Z([[7],[3,'nextid']])
Z([[7],[3,'isIndex']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'cover'])
Z([[7],[3,'cover']])
Z([[7],[3,'last_update_chapter_name']])
Z([[7],[3,'last_update_chapter_date']])
Z([3,'最新'])
Z([a,[3,'chapter?bookid\x3d'],[[7],[3,'bookid']],[3,'\x26chapterid\x3d'],[[7],[3,'last_update_chapter_id']]])
Z([[6],[[6],[[7],[3,'comment']],[3,'lists']],[3,'length']])
Z([3,'comment'])
Z([a,[3,'(最新3/'],[[6],[[7],[3,'comment']],[3,'total']],[3,'条)']])
Z([[6],[[7],[3,'comment']],[3,'lists']])
Z([[6],[[7],[3,'item']],[3,'author_id']])
Z([[6],[[7],[3,'item']],[3,'is_author']])
Z([[7],[3,'recommend']])
Z([3,'相关书籍'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'volumes']])
Z([3,'id'])
Z([3,'volumes'])
Z([3,'center'])
Z([[6],[[7],[3,'item']],[3,'chapters']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,''])
Z(z[7])
Z([[2,'?:'],[[2,'!=='],[[6],[[7],[3,'item']],[3,'vip']],[1,'Y']],[1,''],[1,'/images/icon/history.png']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([a,[3,'/pages/book/chapter?bookid\x3d'],[[7],[3,'bookid']],[3,'\x26chapterid\x3d'],z[6]])
Z([[7],[3,'loaded']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'userinfo'])
Z([[7],[3,'nickName']])
Z([[2,'!'],[[7],[3,'isUserInfo']]])
Z([[7],[3,'showHelp']])
Z([[7],[3,'list']])
Z([[6],[[7],[3,'item']],[3,'book_id']])
Z([[6],[[7],[3,'item']],[3,'cover']])
Z([[2,'==='],[[7],[3,'total_num']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'list']])
Z([[6],[[7],[3,'item']],[3,'book_id']])
Z([[6],[[7],[3,'item']],[3,'cover']])
Z([[2,'==='],[[7],[3,'total_num']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'box'])
Z([[7],[3,'cover']])
Z([[2,'!'],[[7],[3,'isUserInfo']]])
Z([[7],[3,'isShowSwap']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'lists']])
Z([a,[3,'共藏书'],[[7],[3,'total_num']],[3,'本']])
Z([[7],[3,'loaded']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'datalist']])
Z([3,'null'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'template']],[1,'list']])
Z([[6],[[7],[3,'item']],[3,'lists']])
Z([[6],[[7],[3,'item']],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'list']])
Z([a,[3,'共找到'],[[7],[3,'total_num']],[3,'本小说']])
Z([[7],[3,'loaded']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/book/cover.wxml','./components/book/lineup.wxml','./components/book/list.wxml','./components/buttons/block.wxml','./components/models/more.wxml','./components/models/title.wxml','./pages/book/chapter.wxml','./pages/book/home.wxml','./pages/book/list.wxml','./pages/bookshelf/index.wxml','./pages/history/index.wxml','./pages/home/index.wxml','./pages/repository/category.wxml','./pages/repository/index.wxml','./pages/search/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'image',['binderror',0,'class',1,'mode',1,'src',2],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,4,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var fE=_n('view')
var cF=_v()
_(fE,cF)
if(_oz(z,0,e,s,gg)){cF.wxVkey=1
var hG=_mz(z,'title',['align',1,'title',1],[],e,s,gg)
_(cF,hG)
}
var oH=_v()
_(fE,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_mz(z,'cover',['class',5,'sign',1,'url',2],[],lK,oJ,gg)
_(aL,eN)
return aL
}
oH.wxXCkey=4
_2z(z,3,cI,e,s,gg,oH,'item','index','book_id')
cF.wxXCkey=1
cF.wxXCkey=3
_(r,fE)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oP=_n('view')
_rz(z,oP,'class',0,e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,1,e,s,gg)){xQ.wxVkey=1
var oR=_mz(z,'title',['align',2,'title',1],[],e,s,gg)
_(xQ,oR)
}
var fS=_v()
_(oP,fS)
var cT=function(oV,hU,cW,gg){
var lY=_mz(z,'cover',['class',6,'mode',1,'sign',2,'url',3],[],oV,hU,gg)
_(cW,lY)
return cW
}
fS.wxXCkey=4
_2z(z,4,cT,e,s,gg,fS,'item','index','book_id')
xQ.wxXCkey=1
xQ.wxXCkey=3
_(r,oP)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var t1=_mz(z,'navigator',['class',0,'url',1],[],e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,2,e,s,gg)){e2.wxVkey=1
}
var o4=_n('view')
_rz(z,o4,'class',3,e,s,gg)
var x5=_v()
_(o4,x5)
if(_oz(z,4,e,s,gg)){x5.wxVkey=1
}
var o6=_v()
_(o4,o6)
if(_oz(z,5,e,s,gg)){o6.wxVkey=1
}
x5.wxXCkey=1
o6.wxXCkey=1
_(t1,o4)
var b3=_v()
_(t1,b3)
if(_oz(z,6,e,s,gg)){b3.wxVkey=1
var f7=_v()
_(b3,f7)
if(_oz(z,7,e,s,gg)){f7.wxVkey=1
}
f7.wxXCkey=1
}
e2.wxXCkey=1
b3.wxXCkey=1
_(r,t1)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var o0=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oBB=_n('slot')
_(o0,oBB)
var cAB=_v()
_(o0,cAB)
if(_oz(z,2,e,s,gg)){cAB.wxVkey=1
}
cAB.wxXCkey=1
_(r,o0)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var aDB=_n('view')
_rz(z,aDB,'class',0,e,s,gg)
var eFB=_n('view')
_rz(z,eFB,'class',1,e,s,gg)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,2,e,s,gg)){bGB.wxVkey=1
}
var oHB=_v()
_(eFB,oHB)
if(_oz(z,3,e,s,gg)){oHB.wxVkey=1
}
bGB.wxXCkey=1
oHB.wxXCkey=1
_(aDB,eFB)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,4,e,s,gg)){tEB.wxVkey=1
}
tEB.wxXCkey=1
_(r,aDB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oJB=_n('view')
_rz(z,oJB,'class',0,e,s,gg)
var cLB=_mz(z,'cover',['class',1,'url',1],[],e,s,gg)
_(oJB,cLB)
var hMB=_mz(z,'button-block',['desc',3,'more',1,'name',2,'url',3],[],e,s,gg)
_(oJB,hMB)
var fKB=_v()
_(oJB,fKB)
if(_oz(z,7,e,s,gg)){fKB.wxVkey=1
var oNB=_n('view')
_rz(z,oNB,'class',8,e,s,gg)
var cOB=_n('title')
_rz(z,cOB,'desc',9,e,s,gg)
_(oNB,cOB)
var oPB=_v()
_(oNB,oPB)
var lQB=function(tSB,aRB,eTB,gg){
var oVB=_v()
_(eTB,oVB)
if(_oz(z,12,tSB,aRB,gg)){oVB.wxVkey=1
}
oVB.wxXCkey=1
return eTB
}
oPB.wxXCkey=2
_2z(z,10,lQB,e,s,gg,oPB,'item','index','{{item.author_id}}')
_(fKB,oNB)
}
var xWB=_mz(z,'list',['lists',13,'title',1],[],e,s,gg)
_(oJB,xWB)
var oXB=_n('more')
_rz(z,oXB,'loaded',15,e,s,gg)
_(oJB,oXB)
fKB.wxXCkey=1
fKB.wxXCkey=3
_(r,oJB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var cZB=_n('view')
_rz(z,cZB,'class',0,e,s,gg)
var h1B=_v()
_(cZB,h1B)
var o2B=function(o4B,c3B,l5B,gg){
var t7B=_n('view')
_rz(z,t7B,'class',3,o4B,c3B,gg)
var e8B=_n('title')
_rz(z,e8B,'align',4,o4B,c3B,gg)
_(t7B,e8B)
var b9B=_v()
_(t7B,b9B)
var o0B=function(oBC,xAC,fCC,gg){
var hEC=_mz(z,'button-block',['desc',7,'icon',1,'moreIcon',2,'name',3,'url',4],[],oBC,xAC,gg)
_(fCC,hEC)
return fCC
}
b9B.wxXCkey=4
_2z(z,5,o0B,o4B,c3B,gg,b9B,'item','index','{{item.id}}')
_(l5B,t7B)
return l5B
}
h1B.wxXCkey=4
_2z(z,1,o2B,e,s,gg,h1B,'item','index','id')
var oFC=_n('more')
_rz(z,oFC,'loaded',12,e,s,gg)
_(cZB,oFC)
_(r,cZB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oHC=_n('view')
_rz(z,oHC,'class',0,e,s,gg)
var tKC=_n('view')
_rz(z,tKC,'class',1,e,s,gg)
var eLC=_v()
_(tKC,eLC)
if(_oz(z,2,e,s,gg)){eLC.wxVkey=1
}
else{eLC.wxVkey=2
var bMC=_v()
_(eLC,bMC)
if(_oz(z,3,e,s,gg)){bMC.wxVkey=1
}
bMC.wxXCkey=1
}
eLC.wxXCkey=1
_(oHC,tKC)
var lIC=_v()
_(oHC,lIC)
if(_oz(z,4,e,s,gg)){lIC.wxVkey=1
}
var oNC=_v()
_(oHC,oNC)
var xOC=function(fQC,oPC,cRC,gg){
var oTC=_n('cover')
_rz(z,oTC,'url',7,fQC,oPC,gg)
_(cRC,oTC)
return cRC
}
oNC.wxXCkey=4
_2z(z,5,xOC,e,s,gg,oNC,'item','index','{{item.book_id}}')
var aJC=_v()
_(oHC,aJC)
if(_oz(z,8,e,s,gg)){aJC.wxVkey=1
}
lIC.wxXCkey=1
aJC.wxXCkey=1
_(r,oHC)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oVC=_n('view')
_rz(z,oVC,'class',0,e,s,gg)
var aXC=_v()
_(oVC,aXC)
var tYC=function(b1C,eZC,o2C,gg){
var o4C=_n('cover')
_rz(z,o4C,'url',3,b1C,eZC,gg)
_(o2C,o4C)
return o2C
}
aXC.wxXCkey=4
_2z(z,1,tYC,e,s,gg,aXC,'item','index','{{item.book_id}}')
var lWC=_v()
_(oVC,lWC)
if(_oz(z,4,e,s,gg)){lWC.wxVkey=1
}
lWC.wxXCkey=1
_(r,oVC)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var c6C=_n('view')
_rz(z,c6C,'class',0,e,s,gg)
var o8C=_n('view')
_rz(z,o8C,'class',1,e,s,gg)
var o0C=_n('cover')
_rz(z,o0C,'url',2,e,s,gg)
_(o8C,o0C)
var c9C=_v()
_(o8C,c9C)
if(_oz(z,3,e,s,gg)){c9C.wxVkey=1
}
c9C.wxXCkey=1
_(c6C,o8C)
var h7C=_v()
_(c6C,h7C)
if(_oz(z,4,e,s,gg)){h7C.wxVkey=1
}
h7C.wxXCkey=1
_(r,c6C)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var aBD=_n('view')
_rz(z,aBD,'class',0,e,s,gg)
var tCD=_mz(z,'list',['lists',1,'title',1],[],e,s,gg)
_(aBD,tCD)
var eDD=_n('more')
_rz(z,eDD,'loaded',3,e,s,gg)
_(aBD,eDD)
_(r,aBD)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var oFD=_v()
_(r,oFD)
var xGD=function(fID,oHD,cJD,gg){
var oLD=_v()
_(cJD,oLD)
if(_oz(z,2,fID,oHD,gg)){oLD.wxVkey=1
var cMD=_mz(z,'list',['lists',3,'title',1],[],fID,oHD,gg)
_(oLD,cMD)
}
oLD.wxXCkey=1
oLD.wxXCkey=3
return cJD
}
oFD.wxXCkey=4
_2z(z,0,xGD,e,s,gg,oFD,'item','index','null')
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var lOD=_n('view')
_rz(z,lOD,'class',0,e,s,gg)
var aPD=_mz(z,'list',['lists',1,'title',1],[],e,s,gg)
_(lOD,aPD)
var tQD=_n('more')
_rz(z,tQD,'loaded',3,e,s,gg)
_(lOD,tQD)
_(r,lOD)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['components/book/cover.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/book/cover.wxml'] = $gwx( './components/book/cover.wxml' );
		__wxAppCode__['components/book/lineup.json'] = {"component":true,"usingComponents":{"cover":"cover","title":"../models/title"}};
		__wxAppCode__['components/book/lineup.wxml'] = $gwx( './components/book/lineup.wxml' );
		__wxAppCode__['components/book/list.json'] = {"component":true,"usingComponents":{"cover":"cover","title":"../models/title"}};
		__wxAppCode__['components/book/list.wxml'] = $gwx( './components/book/list.wxml' );
		__wxAppCode__['components/buttons/block.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/buttons/block.wxml'] = $gwx( './components/buttons/block.wxml' );
		__wxAppCode__['components/models/more.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/models/more.wxml'] = $gwx( './components/models/more.wxml' );
		__wxAppCode__['components/models/title.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/models/title.wxml'] = $gwx( './components/models/title.wxml' );
		__wxAppCode__['pages/book/home.json'] = {"navigationBarTitleText":"作品详情","usingComponents":{"button-block":"/components/buttons/block","list":"/components/book/list","title":"/components/models/title","more":"/components/models/more","cover":"/components/book/cover"}};
		__wxAppCode__['pages/book/home.wxml'] = $gwx( './pages/book/home.wxml' );
		__wxAppCode__['pages/book/list.json'] = {"navigationBarTitleText":"作品目录","usingComponents":{"button-block":"/components/buttons/block","title":"/components/models/title","more":"/components/models/more"}};
		__wxAppCode__['pages/book/list.wxml'] = $gwx( './pages/book/list.wxml' );
		__wxAppCode__['pages/bookshelf/index.json'] = {"navigationBarTitleText":"书架","usingComponents":{"cover":"/components/book/cover"}};
		__wxAppCode__['pages/bookshelf/index.wxml'] = $gwx( './pages/bookshelf/index.wxml' );
		__wxAppCode__['pages/history/index.json'] = {"navigationBarTitleText":"阅读记录","usingComponents":{"cover":"/components/book/cover"}};
		__wxAppCode__['pages/history/index.wxml'] = $gwx( './pages/history/index.wxml' );
		__wxAppCode__['pages/home/index.json'] = {"navigationBarTitleText":"一起看免费小说","usingComponents":{"title":"/components/models/title","cover":"/components/book/cover"}};
		__wxAppCode__['pages/home/index.wxml'] = $gwx( './pages/home/index.wxml' );
		__wxAppCode__['pages/repository/category.json'] = {"navigationBarTitleText":"小说分类","enablePullDownRefresh":true,"backgroundColor":"#fff","usingComponents":{"list":"/components/book/list","more":"/components/models/more"}};
		__wxAppCode__['pages/repository/category.wxml'] = $gwx( './pages/repository/category.wxml' );
		__wxAppCode__['pages/repository/index.json'] = {"navigationBarTitleText":"书城","usingComponents":{"list":"/components/book/list"}};
		__wxAppCode__['pages/repository/index.wxml'] = $gwx( './pages/repository/index.wxml' );
		__wxAppCode__['pages/search/index.json'] = {"navigationBarTitleText":"搜索","usingComponents":{"list":"/components/book/lineup","more":"/components/models/more"}};
		__wxAppCode__['pages/search/index.wxml'] = $gwx( './pages/search/index.wxml' );
	
	define("utils/ald-stat-conf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){exports.app_key="e53dee9fee5d60e8c43084d13609b32d",exports.getLocation=!1,exports.plugin=!1})(); 
 			}); 
		define("utils/ald-stat.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Ald=b()}(this,function(){function x(a){this.app=a}function D(a){H=a,this.aldstat=new x(this),v("app","launch")}function aa(a){if(H=a,B=a.query.ald_share_src,C=a.query.aldsrc||"",F=a.query.ald_share_src,A=Date.now(),T=Date.now(),!ca){R=""+Date.now()+m(1e7*Math.random()),O=!1;try{wx.setStorageSync("ald_ifo",!1)}catch(a){}}ca=!1,0!==t&&3e5<Date.now()-t&&(I=""+Date.now()+m(1e7*Math.random()),T=Date.now()),a.query.ald_share_src&&"1044"==a.scene&&a.shareTicket?wx.getShareInfo({shareTicket:a.shareTicket,success:function(a){J=a,y("event","ald_share_click",JSON.stringify(a))}}):a.query.ald_share_src&&y("event","ald_share_click",1),""===G&&wx.getSetting({withCredentials:!0,success:function(a){a.authSetting["scope.userInfo"]&&wx.getUserInfo({withCredentials:!0,success:function(a){var b=d();G=a,b.ufo=g(a),k=p(a.userInfo.avatarUrl.split("/")),h(b)}})}}),v("app","show")}function o(){t=Date.now(),""===G&&wx.getSetting({success:function(a){a.authSetting["scope.userInfo"]&&wx.getUserInfo({withCredentials:!0,success:function(a){G=a,k=p(a.userInfo.avatarUrl.split("/"));var b=d();b.ufo=g(a),h(b)}})}}),v("app","hide")}function e(a){j++,y("event","ald_error_message",a)}function a(a){Q=a}function r(){W=this.route,X=Date.now(),Z=0,Y=0}function i(){n("page","hide"),z=this.route}function s(){n("page","unload"),z=this.route}function c(){Z++}function u(){Y++}function l(b){var c=w(b.path),d={};for(var f in H.query)"ald_share_src"===f&&(d[f]=H.query[f]);var e="";if(e=-1==b.path.indexOf("?")?b.path+"?":b.path.substr(0,b.path.indexOf("?"))+"?",""!==c)for(var f in c)d[f]=c[f];for(var a in d.ald_share_src?-1==d.ald_share_src.indexOf(ba)&&200>d.ald_share_src.length&&(d.ald_share_src=d.ald_share_src+","+ba):d.ald_share_src=ba,d)-1==a.indexOf("ald")&&(e+=a+"="+d[a]+"&");return b.path=e+"ald_share_src="+d.ald_share_src,y("event","ald_share_status",b),b}function f(){function a(){return m(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+a()+a()+a()+a()+a()+a()}function h(c){var d=c,f=0,g=0,e=function(a){g++,a?(c={},c.et=Date.now(),c.at=R,c.uu=ba,c.v=M,c.ak=d.ak,c.life=d.life,c.ev=d.ev,c.err="err",c.status=f):(U++,c.at=R,c.et=Date.now(),c.uu=ba,c.v=M,c.ak=_.app_key,c.wsr=H,c.oifo=O,c.rq_c=U),wx.request({url:"https://"+P+".aldwx.com/d.html",data:c,header:{AldStat:"MiniApp-Stat",waid:_.appid||"",wst:_.appsecret||"",se:b||"",op:L||"",img:k},method:"GET",success:function(a){f=a.statusCode,200!=a.statusCode&&3>=g&&e("errorsend")},fail:function(){3>=g&&e("errorsend")}})};e()}function d(){var a={};for(var b in K)a[b]=K[b];return a}function p(a){for(var b="",c=0;c<a.length;c++)a[c].length>b.length&&(b=a[c]);return b}function g(a){var b={};for(var c in a)"rawData"!=c&&"errMsg"!=c&&(b[c]=a[c]);return b}function w(a){if(-1==a.indexOf("?"))return"";var b={};return a.split("?")[1].split("&").forEach(function(a){var c=a.split("=")[1];b[a.split("=")[0]]=c}),b}function v(a,b){var c=d();c.ev=a,c.life=b,c.ec=j,c.st=N,C&&(c.qr=C,c.sr=C),B&&(c.usr=B),"launch"!==b&&(c.ahs=I),"hide"===b&&(c.hdr=Date.now()-T,c.dr=Date.now()-A,c.ifo=!!O),h(c)}function n(a,b){var c=d();c.ev=a,c.st=Date.now(),c.life=b,c.pp=W,c.pc=z,c.dr=Date.now()-N,c.ndr=Date.now()-X,c.rc=Z,c.bc=Y,c.ahs=I,Q&&"{}"!=JSON.stringify(Q)&&(c.ag=Q),C&&(c.qr=C,c.sr=C),B&&(c.usr=B),V||($=W,V=!0,c.ifp=V,c.fp=W),h(c)}function y(a,b,c){var f=d();f.ev=a,f.tp=b,f.st=N,c&&(f.ct=c),h(f)}function S(a,b,c){if(a[b]){var d=a[b];a[b]=function(a){c.call(this,a,b),d.call(this,a)}}else a[b]=function(a){c.call(this,a,b)}}var m=Math.floor,_=require("./ald-stat-conf"),M="7.0.0",P="log",R=""+Date.now()+m(1e7*Math.random()),I=""+Date.now()+m(1e7*Math.random()),T="",A=0,t=0,b="",L="",k="",U=0,H="",O="",ba=function(){var a="";try{a=wx.getStorageSync("aldstat_uuid")}catch(b){a="uuid_getstoragesync"}if(a)O=!1;else{a=f(),O=!0;try{wx.setStorageSync("aldstat_uuid",a),wx.setStorageSync("ald_ifo",!0)}catch(a){wx.setStorageSync("aldstat_uuid","uuid_getstoragesync")}}return a}(),N=Date.now(),B="",C="",F="",j=0,J="",G="",K={},V=!1,W="",z="",Q="",X="",Y=0,Z=0,$="",ca=!0;!function(){wx.request({url:"https://"+P+".aldwx.com/config/app.json",header:{AldStat:"MiniApp-Stat"},method:"GET",success:function(a){200===a.statusCode&&(a.data.version!=M&&console.warn("\u60A8\u7684SDK\u4E0D\u662F\u6700\u65B0\u7248\u672C\uFF0C\u8BF7\u5C3D\u5FEB\u5347\u7EA7\uFF01"),a.data.warn&&console.warn(a.data.warn),a.data.error&&console.error(a.data.error))}})}();try{var da=wx.getSystemInfoSync();K.br=da.brand,K.pm=da.model,K.pr=da.pixelRatio,K.ww=da.windowWidth,K.wh=da.windowHeight,K.lang=da.language,K.wv=da.version,K.wvv=da.platform,K.wsdk=da.SDKVersion,K.sv=da.system}catch(a){}return wx.getNetworkType({success:function(a){K.nt=a.networkType}}),wx.getSetting({success:function(a){a.authSetting["scope.userLocation"]?wx.getLocation({type:"wgs84",success:function(a){K.lat=a.latitude,K.lng=a.longitude,K.spd=a.speed}}):_.getLocation&&wx.getLocation({type:"wgs84",success:function(a){K.lat=a.latitude,K.lng=a.longitude,K.spd=a.speed}})}}),x.prototype.debug=function(a){y("debug","0",a)},x.prototype.warn=function(a){y("warn","1",a)},x.prototype.sendEvent=function(a,b){if(!(""!==a&&"string"==typeof a&&255>=a.length))console.error("\u4E8B\u4EF6\u540D\u79F0\u5FC5\u987B\u4E3AString\u7C7B\u578B\u4E14\u4E0D\u80FD\u8D85\u8FC7255\u4E2A\u5B57\u7B26");else if("string"==typeof b&&255>=b.length)y("event",a,b);else if("object"==typeof b){if(255<=JSON.stringify(b).length)return void console.error("\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u53C2\u6570\u4E0D\u80FD\u8D85\u8FC7255\u4E2A\u5B57\u7B26");y("event",a,JSON.stringify(b))}else void 0===b?y("event",a,!1):console.error("\u4E8B\u4EF6\u53C2\u6570\u5FC5\u987B\u4E3AString,Object\u7C7B\u578B,\u4E14\u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7255\u4E2A\u5B57\u7B26")},x.prototype.sendSession=function(a){if(""===a||!a)return void console.error("\u8BF7\u4F20\u5165\u4ECE\u540E\u53F0\u83B7\u53D6\u7684session_key");if(""===_.appid||""===_.appsecret)return void console.error("\u8BF7\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u586B\u5199\u5C0F\u7A0B\u5E8F\u7684appid\u548Cappsecret\uFF01");b=a;var c=d();c.st=Date.now(),c.tp="session",c.ct="session",c.ev="event",""===G?wx.getSetting({success:function(a){a.authSetting["scope.userInfo"]?wx.getUserInfo({success:function(a){c.ufo=g(a),k=p(a.userInfo.avatarUrl.split("/")),""!==J&&(c.gid=J),h(c)}}):""===J?console.warn("\u7528\u6237\u672A\u6388\u6743"):(c.gid=J,h(c))}}):(c.ufo=G,""!==J&&(c.gid=J),h(c))},x.prototype.sendOpenid=function(a){if(""===a||!a)return void console.error("openID\u4E0D\u80FD\u4E3A\u7A7A");L=a;var b=d();b.st=Date.now(),b.tp="openid",b.ev="event",b.ct="openid",h(b)},_.plugin?{App:function(a){var b={};for(var c in a)"onLaunch"!==c&&"onShow"!==c&&"onHide"!==c&&"onError"!==c&&"onPageNotFound"!==c&&"onUnlaunch"!==c&&(b[c]=a[c]);b.onLaunch=function(b){D.call(this,b),"function"==typeof a.onLaunch&&a.onLaunch.call(this,b)},b.onShow=function(b){aa.call(this,b),a.onShow&&"function"==typeof a.onShow&&a.onShow.call(this,b)},b.onHide=function(){o.call(this),a.onHide&&"function"==typeof a.onHide&&a.onHide.call(this)},b.onError=function(b){e.call(this,b),a.onError&&"function"==typeof a.onError&&a.onError.call(this,b)},b.onUnlaunch=function(){a.onUnlaunch&&"function"==typeof a.onUnlaunch&&a.onUnlaunch.call(this)},b.onPageNotFound=function(b){a.onPageNotFound&&"function"==typeof a.onPageNotFound&&a.onPageNotFound.call(this,b)},App(b)},Page:function(b){var d={};for(var e in b)"onLoad"!==e&&"onReady"!==e&&"onShow"!==e&&"onHide"!==e&&"onUnload"!==e&&"onPullDownRefresh"!==e&&"onReachBottom"!==e&&"onShareAppMessage"!==e&&"onPageScroll"!==e&&"onTabItemTap"!==e&&(d[e]=b[e]);d.onLoad=function(c){a.call(this,c),"function"==typeof b.onLoad&&b.onLoad.call(this,c)},d.onShow=function(a){r.call(this),"function"==typeof b.onShow&&b.onShow.call(this,a)},d.onHide=function(a){i.call(this),"function"==typeof b.onHide&&b.onHide.call(this,a)},d.onUnload=function(a){s.call(this),"function"==typeof b.onUnload&&b.onUnload.call(this,a)},d.onReady=function(a){b.onReady&&"function"==typeof b.onReady&&b.onReady.call(this,a)},d.onReachBottom=function(a){u(),b.onReachBottom&&"function"==typeof b.onReachBottom&&b.onReachBottom.call(this,a)},d.onPullDownRefresh=function(a){c(),b.onPullDownRefresh&&"function"==typeof b.onPullDownRefresh&&b.onPullDownRefresh.call(this,a)},d.onPageScroll=function(a){b.onPageScroll&&"function"==typeof b.onPageScroll&&b.onPageScroll.call(this,a)},d.onTabItemTap=function(a){b.onTabItemTap&&"function"==typeof b.onTabItemTap&&b.onTabItemTap.call(this,a)},b.onShareAppMessage&&"function"==typeof b.onShareAppMessage&&(d.onShareAppMessage=function(a){var c=b.onShareAppMessage.call(this,a);return void 0===c?(c={},c.path=this.route):void 0===c.path&&(c.path=this.route),l.call(this,c)}),Page(d)}}:function(){!function(){var b=App,d=Page;App=function(a){S(a,"onLaunch",D),S(a,"onShow",aa),S(a,"onHide",o),S(a,"onError",e),b(a)},Page=function(b){var e=b.onShareAppMessage;S(b,"onLoad",a),S(b,"onUnload",s),S(b,"onShow",r),S(b,"onHide",i),S(b,"onReachBottom",u),S(b,"onPullDownRefresh",c),void 0!==e&&null!==e&&(b.onShareAppMessage=function(a){if(void 0!==e){var b=e.call(this,a);return void 0===b?(b={},b.path=this.route):void 0===b.path&&(b.path=this.route),l(b)}}),d(b)}}()}()})})(); 
 			}); 
		define("utils/md5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){function a(e,l){e[l>>5]|=128<<l%32,e[(l+64>>>9<<4)+14]=l;for(var m=1732584193,a=-271733879,b=-1732584194,c=271733878,d=0;d<e.length;d+=16){var i=m,n=a,o=b,p=c;m=f(m,a,b,c,e[d+0],7,-680876936),c=f(c,m,a,b,e[d+1],12,-389564586),b=f(b,c,m,a,e[d+2],17,606105819),a=f(a,b,c,m,e[d+3],22,-1044525330),m=f(m,a,b,c,e[d+4],7,-176418897),c=f(c,m,a,b,e[d+5],12,1200080426),b=f(b,c,m,a,e[d+6],17,-1473231341),a=f(a,b,c,m,e[d+7],22,-45705983),m=f(m,a,b,c,e[d+8],7,1770035416),c=f(c,m,a,b,e[d+9],12,-1958414417),b=f(b,c,m,a,e[d+10],17,-42063),a=f(a,b,c,m,e[d+11],22,-1990404162),m=f(m,a,b,c,e[d+12],7,1804603682),c=f(c,m,a,b,e[d+13],12,-40341101),b=f(b,c,m,a,e[d+14],17,-1502002290),a=f(a,b,c,m,e[d+15],22,1236535329),m=g(m,a,b,c,e[d+1],5,-165796510),c=g(c,m,a,b,e[d+6],9,-1069501632),b=g(b,c,m,a,e[d+11],14,643717713),a=g(a,b,c,m,e[d+0],20,-373897302),m=g(m,a,b,c,e[d+5],5,-701558691),c=g(c,m,a,b,e[d+10],9,38016083),b=g(b,c,m,a,e[d+15],14,-660478335),a=g(a,b,c,m,e[d+4],20,-405537848),m=g(m,a,b,c,e[d+9],5,568446438),c=g(c,m,a,b,e[d+14],9,-1019803690),b=g(b,c,m,a,e[d+3],14,-187363961),a=g(a,b,c,m,e[d+8],20,1163531501),m=g(m,a,b,c,e[d+13],5,-1444681467),c=g(c,m,a,b,e[d+2],9,-51403784),b=g(b,c,m,a,e[d+7],14,1735328473),a=g(a,b,c,m,e[d+12],20,-1926607734),m=h(m,a,b,c,e[d+5],4,-378558),c=h(c,m,a,b,e[d+8],11,-2022574463),b=h(b,c,m,a,e[d+11],16,1839030562),a=h(a,b,c,m,e[d+14],23,-35309556),m=h(m,a,b,c,e[d+1],4,-1530992060),c=h(c,m,a,b,e[d+4],11,1272893353),b=h(b,c,m,a,e[d+7],16,-155497632),a=h(a,b,c,m,e[d+10],23,-1094730640),m=h(m,a,b,c,e[d+13],4,681279174),c=h(c,m,a,b,e[d+0],11,-358537222),b=h(b,c,m,a,e[d+3],16,-722521979),a=h(a,b,c,m,e[d+6],23,76029189),m=h(m,a,b,c,e[d+9],4,-640364487),c=h(c,m,a,b,e[d+12],11,-421815835),b=h(b,c,m,a,e[d+15],16,530742520),a=h(a,b,c,m,e[d+2],23,-995338651),m=j(m,a,b,c,e[d+0],6,-198630844),c=j(c,m,a,b,e[d+7],10,1126891415),b=j(b,c,m,a,e[d+14],15,-1416354905),a=j(a,b,c,m,e[d+5],21,-57434055),m=j(m,a,b,c,e[d+12],6,1700485571),c=j(c,m,a,b,e[d+3],10,-1894986606),b=j(b,c,m,a,e[d+10],15,-1051523),a=j(a,b,c,m,e[d+1],21,-2054922799),m=j(m,a,b,c,e[d+8],6,1873313359),c=j(c,m,a,b,e[d+15],10,-30611744),b=j(b,c,m,a,e[d+6],15,-1560198380),a=j(a,b,c,m,e[d+13],21,1309151649),m=j(m,a,b,c,e[d+4],6,-145523070),c=j(c,m,a,b,e[d+11],10,-1120210379),b=j(b,c,m,a,e[d+2],15,718787259),a=j(a,b,c,m,e[d+9],21,-343485551),m=k(m,i),a=k(a,n),b=k(b,o),c=k(c,p)}return[m,a,b,c]}function e(d,e,a,b,f,g){return k(c(k(k(e,d),k(b,g)),f),a)}function f(f,a,g,c,d,h,i){return e(a&g|~a&c,f,a,d,h,i)}function g(f,a,b,c,g,h,i){return e(a&c|b&~c,f,a,g,h,i)}function h(f,a,b,c,d,g,h){return e(a^b^c,f,a,d,g,h)}function j(f,a,b,c,g,h,i){return e(b^(a|~c),f,a,g,h,i)}function k(a,b){var c=(65535&a)+(65535&b);return(a>>16)+(b>>16)+(c>>16)<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function b(a){for(var b=[],c=0;c<a.length*l;c+=l)b[c>>5]|=(a.charCodeAt(c/l)&(1<<l)-1)<<c%32;return b}function d(a){for(var b="0123456789abcdef",c="",d=0;d<4*a.length;d++)c+=b.charAt(15&a[d>>2]>>8*(d%4)+4)+b.charAt(15&a[d>>2]>>8*(d%4));return c}let i=0,l=8;module.exports=function(c){return d(a(b(c),c.length*l))}})(); 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){function a(a){var b=Math.floor;if(0<a){const c=(Date.now()-new Date(a).getTime())/1e3/60;return 1>c?'\u521A\u521A':60>c?b(c)+'\u5206\u949F\u524D':1440>c?b(c/60)+'\u5C0F\u65F6\u524D':43200>c?b(c/60/24)+'\u5929\u524D':263520>c?b(c/60/24/30)+'\u4E2A\u6708\u524D':525600>c?'\u534A\u5E74\u524D':b(c/60/24/365)+'\u5E74\u524D'}return null}function b(a,b){const d=new Date(a),e=d.getFullYear(),f=d.getMonth()+1,g=d.getDate(),h=d.getHours(),i=d.getMinutes(),j=d.getSeconds();return[e,f,g].map(c).join('-')+(b?'':' '+[h,i,j].map(c).join(':'))}function c(a){return a=a.toString(),a[1]?a:'0'+a}module.exports={formatTimeOfArray:function(c,d,e=0){var f=0===e?a:b;if(!c.map){let a=Object.keys(c);a.forEach(function(a){d.forEach((b)=>{c[a][b]=f(c[a][b],2===e)})})}else c.forEach(function(a){d.forEach((b)=>{a[b]=f(a[b],2===e)})});return c},slimNumber:function(a){var b=Math.round;return a=+a,1e4>a?a:9e5>a?(a/1e4).toFixed(1)+'\u4E07':9e6>a?b(a/1e6)+'\u767E\u4E07':9e7>a?b(a/1e7)+'\u5343\u4E07':(a/1e8).toFixed(1)+'\u4EBF'},formatDate:b,formatTime:a}})(); 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){'use strict';const a=require('utils/md5.js');require('./utils/ald-stat.js'),App({namespace:{isBookshelf:'a',bookShelfTime:'b',chapterid:'c',readTime:'d',shareTime:'e'},api:{path:'https://api.17k.com',appkey:'2263049103',secret:'246b6c1cbe1cb75a56262725cc34e4fe',signature:0},requestWeixinApi(b,c,d='get',e={}){e=JSON.stringify(e),wx.request({url:this.api.path+b,data:{name:this.api.signature,app_key:this.api.appkey,data:e,sign:a(b+'&'+this.api.appkey+'&'+e+'&'+this.api.signature+'&'+this.api.secret)},method:d,success(a){c(a.data)}})},onLaunch(){wx.getSetting({success:(a)=>{a.authSetting['scope.userInfo']&&wx.getUserInfo({success:(a)=>{this.setUserSign(a),this.requestWeixinApi('/v2/data/weixin/index',(a)=>{0===a.status.code&&this.getHistory((b)=>{this.writeHistory(Object.assign(JSON.parse(a.data[0]),b))})})}})}}),wx.getStorage({key:'bookReadHistory',success:(a)=>{if(a=a.data,a){for(let b in a)a.hasOwnProperty(b)&&this.setHistory(b,{[this.namespace.isBookshelf]:1,[this.namespace.bookShelfTime]:Date.now(),[this.namespace.chapterid]:a[b].chapter_id,[this.namespace.readTime]:a[b].time});wx.removeStorage({key:'bookReadHistory'}),wx.removeStorage({key:'isOnly'})}}})},onShow(){},onHide(){this.api.signature&&this.getHistory((a)=>{this.requestWeixinApi('/v2/data/weixin/index',function(){},'post',a)})},setUserSign(a){this.api.signature=encodeURIComponent(a.userInfo.nickName)},get(a,b,c){wx.showNavigationBarLoading(),wx.request({url:this.api.path+a,data:Object.assign({app_key:this.api.appkey,_versions:973,client_type:998,channel:8,merchant:'17KTest',_access_version:2,cps:0,cps_source:0,cps_opid:0},b),success:function(a){if(wx.hideNavigationBarLoading(),200===a.statusCode){const b=a.data;c(b)}else wx.showToast({title:'('+a.statusCode+') \u6570\u636E\u8BF7\u6C42\u5931\u8D25, \u8FD4\u56DE\u91CD\u8BD5\u3002'})},fail:function(a){wx.hideNavigationBarLoading(),wx.showToast({title:`${a.errMsg}\n请求不存在, 返回看看其它页面吧`,icon:'none'})}})},getChapter(a,b,c){this.requestWeixinApi(`/v2/book/weixin/${a}/chapter/${b}/content`,c)},getHistory(a){let b=wx.getStorageSync('history');b?a(b):wx.getSetting({success:(b)=>{b.authSetting['scope.userInfo']?wx.getUserInfo({success:(b)=>{this.setUserSign(b),this.requestWeixinApi('/v2/data/weixin/index',(b)=>{0===b.status.code?a(JSON.parse(b.data[0])):a({})})}}):a({})}})},setHistory(a,b,c,d){this.getHistory((e)=>{e[a]=Object.assign(e[a]||{},b),this.writeHistory(e,c,d)},d)},writeHistory(a,b=Function,c=Function){for(let d in a)if(a.hasOwnProperty(d))if('0'==d||0===Object.keys(a[d]).length)delete a[d];else for(let b in a[d])a[d].hasOwnProperty(b)&&null===a[d][b]&&delete a[d][b];wx.setStorageSync('history',a),b()},addBookshelf(a,b=Function,c=Function){this.setHistory(a,{[this.namespace.isBookshelf]:1,[this.namespace.bookShelfTime]:Date.now()},function(){b()},function(){c()})},removeBookshelf(a,b=Function,c=Function){this.setHistory(a,{[this.namespace.isBookshelf]:null,[this.namespace.bookShelfTime]:null},function(){b()},function(){c(),wx.showToast({title:'\u64CD\u4F5C\u5931\u8D25',icon:'none'})})},shareSuccess(a,b=Function,c=Function){this.setHistory(a,{[this.namespace.shareTime]:Date.now()},()=>{this.addBookshelf(a),setTimeout(b,3e3)})},checkShare(a,b=Function,c=Function){this.getHistory((d)=>{d=+(d[a]&&d[a][this.namespace.shareTime]),d?d+2.592e8>Date.now()?b(d-Date.now()):c(Date.now()-d):c()})},readFirst(a){this.get(`/v2/book/${a}/volumes/limit`,{page:1,num:1},(b)=>{0===b.status.code&&b.data[0]?wx.navigateTo({url:'/pages/book/chapter?bookid='+a+'&chapterid='+b.data[0].id}):wx.navigateTo({url:'/pages/book/list?bookid='+a})})},toBook(a){wx.navigateTo({url:'/pages/book/home?bookid='+a})}})})(); 
 			}); 	require("app.js");
 		__wxRoute = 'components/book/cover';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/book/cover.js';	define("components/book/cover.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){Component({properties:{url:{type:String,value:'/images/cover.jpg'},sign:{type:String,value:''},mode:{type:String,value:'widthFix'}},data:{},ready(){},methods:{handleError(){this.setData({url:'/images/cover.jpg'})}}})})(); 
 			}); 	require("components/book/cover.js");
 		__wxRoute = 'components/book/lineup';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/book/lineup.js';	define("components/book/lineup.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){require('../../utils/util.js');Component({properties:{title:{type:String,value:''},lists:{type:Array,value:[]}},ready(){},methods:{}})})(); 
 			}); 	require("components/book/lineup.js");
 		__wxRoute = 'components/book/list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/book/list.js';	define("components/book/list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){Component({properties:{title:{type:String},lists:{type:Array}},data:{title:''},ready(){const a=this.properties.lists.length;3<a&&this.setData({lists:this.properties.lists.slice(0,a-a%3)})},methods:{}})})(); 
 			}); 	require("components/book/list.js");
 		__wxRoute = 'components/buttons/block';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/buttons/block.js';	define("components/buttons/block.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){Component({properties:{url:{type:String},desc:{type:String},more:{type:String},moreIcon:{type:String},name:{type:String},icon:{type:String,value:'default'}},data:{icon_url:null},ready(){this.setData({icon_url:{default:'',time:'../../images/icon/\u5362\u6C9F\u6865.png',notice:'../../images/icon/notice.png',book:'../../images/icon/book.png',list:'../../images/icon/list.png'}[this.properties.icon]||''})},methods:{}})})(); 
 			}); 	require("components/buttons/block.js");
 		__wxRoute = 'components/models/more';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/models/more.js';	define("components/models/more.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){Component({properties:{loaded:{type:Boolean,value:!1}}})})(); 
 			}); 	require("components/models/more.js");
 		__wxRoute = 'components/models/title';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/models/title.js';	define("components/models/title.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){Component({properties:{desc:{type:String,value:''},align:{type:String,value:'left'},title:{type:String,value:''}},options:{multipleSlots:!0}})})(); 
 			}); 	require("components/models/title.js");
 		__wxRoute = 'pages/home/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/home/index.js';	define("pages/home/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){var a=Math.floor;const b=[[2665636,"\u4EBA\u95F4\u6B63\u9053","","\u51FA\u4E8B\u8FD9\u5929\u7684\u60C5\u5F62\uFF0C\u5434\u660E\u96C4\u8BB0\u5F97\u5F88\u6E05\u695A\u3002"],[2665603,"\u4E94\u4EE3\u79D8\u53F2","","\u53EA\u56E0\u62DB\u9009\u8BF8\u8D24\u58EB\uFF0C\u7AE6\u52A8\u82F1\u96C4\u6770\u58EB\u5FC3\u3002"],[2665638,"\u57CE\u5E02\u767D\u76AE\u4E66","","\u5728\u51B0\u91CC\uFF0C\u7238\u7238\u7684\u8138\u51FA\u73B0\u4E86\uFF0C\u88F9\u5728\u51B0\u91CC\u7684\u7238\u7238\u6210\u4E86\u4E00\u5934\u732A"],[2665642,"\u6B66\u5219\u5929\u56DB\u5927\u5947\u6848","","\u672C\u53BF\u65E2\u4E3A\u6C11\u7236\u6BCD\uFF0C\u52A1\u5FC5\u4E3A\u6B7B\u8005\u4F38\u4E86\u51A4\u60C5\uFF0C\u65B9\u80FD\u4E0A\u5BF9\u541B\u738B\uFF0C\u4E0B\u5BF9\u767E\u59D3\u3002"],[2665645,"\u5200\u5B50\u5634\u4E0E\u91D1\u51E4\u51F0","","\u80D6\u5927\u5AC2\u7684\u4E08\u592B\u53BB\u4E16\u65E9\uFF0C\u4E00\u5BB6\u8001\u5C0F\u4E94\u53E3\u4EBA\uFF0C\u5168\u9760\u5979\u4E00\u4EBA\u9876\u7740\u3002"],[2665646,"\u65AF\u6587\u53D8\u76F8","","\u4E07\u5B9D\u7075\u4E39\uFF0C\u662F\u836F\u65B9\u4E0A\u7B2C\u4E00\u4F4D\u8981\u836F\uFF0C\u5C11\u4E86\u8FD9\u4E2A\uFF0C\u5982\u4F55\u4F7F\u5F97\uFF1F"],[2665648,"\u9605\u5FAE\u8349\u5802\u7B14\u8BB0","","\u5A18\u5B50\u4E0E\u662F\u59BE\u6709\u5919\u51A4\uFF0C\u7136\u5E94\u507F\u4E8C\u767E\u97AD\u8033\u3002"],[2665649,"\u5929\u57CE\u516B\u6708","","\u5927\u96E8\u5728\u731B\u70C8\u7684\u62BD\u6410\u4E2D\u4F3C\u4E4E\u5411\u82CD\u5929\u60B2\u5524\uFF0C\u65CB\u8F6C\u6210\u94FA\u5929\u76D6\u5730\u7684\u5450\u558A\u58F0\u3002"],[2665651,"\u624B\u5DE5\u7F8E\u4EBA","","\u7136\u540E\u4ED6\u542C\u5230\u6C88\u529B\u6B49\u610F\u5730\u8BF4\uFF1A\u201C\u5BF9\u4E0D\u8D77\uFF0C\u505A\u5669\u68A6\u4E86\u3002\u201D"],[2665597,"\u5730\u4E0B\uFF0C\u5730\u4E0A","","\u738B\u6653\u51E4\u662F\u5F90\u5DDE\u4F1A\u6218\u90A3\u4E00\u5E74\u8BA4\u8BC6\u7684\u4E54\u5929\u671D\u3002"],[2665652,"\u5996\u624B","","\u8881\u9752\u6735\u662F\u6C34\u591C\u6700\u597D\u7684\u670B\u53CB\uFF0C\u4E5F\u662F\u60DF\u4E00\u7684\u670B\u53CB\u3002\u5979\u4E0D\u80FD\u773C\u7741\u7741\u770B\u7740\u5979\u843D\u5165\u864E\u7A74\u3002"],[2665656,"\u9C81\u73ED\u674E\u7389\u6797","","\u5973\u4E3B\u4EBA\u52C9\u5F3A\u63A5\u53D7\uFF0C\u5979\u7ED9\u7389\u6797\u4EA4\u5F85\uFF1A\u5148\u505A\u4E2A\u8336\u684C\uFF0C\u6025\u7528\u3002"],[2665665,"\u5B98\u9053","","\u8FC7\u4E16\u7684\u8001\u540C\u5FD7\uFF0C\u6709\u719F\u6089\u7684\u4EBA\uFF0C\u4FBF\u76F8\u4E92\u8BAE\u8BBA\u4E00\u756A\uFF0C\u6709\u4EBA\u8BF4\uFF0CXXX\u8FD9\u4EBA\u4E0D\u9519\u3002"],[2665678,"\u7EE3\u978B\u8BB0","","\u6D77\u8A93\u5C71\u76DF\u4F55\u8DB3\u636E\uFF0C\u591A\u60C5\u5168\u5728\u7EE3\u82B1\u978B\u3002"],[2665680,"\xA0\u674E\u516C\u6848\u5947\u95FB","","\u751F\u5E73\u4E0D\u559C\u94F6\u94B1\uFF0C\u4E0D\u8D2A\u8863\u98DF\uFF1B\u7A7F\u7684\u662F\u7834\u8863\u65E7\u5E3D\uFF0C\u5403\u7684\u662F\u6DE1\u996D\u7C97\u8336\uFF1B"],[2664347,"\u7231\u60C5\u96BE\u8BF4\u2014\u2014\u60E0\u6167\u968F\u7B14","","\u8BD7\u4EBA\u7AD9\u5728\u751F\u6D3B\u4E4B\u4E0A\uFF0C\u6C38\u8FDC\u50CF\u4E00\u4E2A\u5A74\u513F\u548C\u8001\u4EBA\uFF0C\u7F6E\u4E8E\u65E0\u9650\u5E0C\u671B\u548C\u65E0\u7A77\u7EDD\u671B\u4E4B\u4E2D\u3002"],[2664354,"\u5143\u6210\u4E4B\u4E16","","\u3000\u5728\u897F\u6C49\uFF0C\u5BA6\u5B98\u767B\u4E0A\u653F\u6CBB\u821E\u53F0\uFF0C\u5E94\u4ECE\u6B66\u5E1D\u5F00\u59CB\u3002"],[2664356,"\u4E0D\u80FD\u8BF4\u8BDD\u7684\u5341\u4E8C\u5C81","","\u4E00\u53E3\u70DF\u4E0B\u53BB\u4ED6\u89C9\u5F97\u5F88\u8212\u670D\uFF0C\u5C31\u772F\u4E86\u773C\u5728\u90A3\u6253\u76F9\u3002"],[2664358,"\u4F60\u7684\u751F\u547D\u5982\u6B64\u591A\u60C5","","\u3000\u6C7D\u8F66\u5728\u8FD4\u7A0B\u7684\u8DEF\u4E0A\u3002\u6797\u661F\u4E0E\u590F\u536B\u534E\u5728\u8F66\u4E0A\u4EA4\u8C08\u3002"],[2664342,"\u8349\u6837\u9752\u6625","","\u5982\u679C\u662F\u6625\u590F\u5012\u4E5F\u597D\u8FC7\u4E00\u70B9\uFF0C\u53EA\u662F\u6BD4\u8F83\u8F9B\u82E6\u4E00\u70B9\u800C\u5DF2\u3002"],[2664361,"\u6B66\u6797\u5BA2\u6808\uFF1A\u661F\u6D9F\u5377","","\u5251\u6C14\u72B9\u5982\u9510\u98CE\uFF0C\u8D34\u7740\u674E\u6E05\u6101\u7684\u540E\u80CC\u8FFD\u6740\u3002"],[2664326,"\u5C4B\u9876\u4E0A\u7A7A\u7684\u7231\u60C5","","\u9713\u8679\u706F\u5DDD\u6D41\u4E0D\u606F\u5730\u8E66\u8DF3\u7740\u6B32\u58D1\u96BE\u586B\u7684\u57CE\u5E02\u6B32\u671B\uFF0C"],[2664325,"\u66A7\u6627","","\u65B9\u6E10\u9E3F\u548C\u4F73\u4F73\u7B2C\u4E00\u6B21\u89C1\u9762\uFF0C\u56DE\u5FC6\u81EA\u5DF1\u7684\u4E00\u53CC\u978B\u5B50\u3002"],[2664328,"\u4E00\u7F51\u65E0\u9C7C","\u8BB8\u6625\u6A35","\u9648\u7A7A\u53D7\u4F24\u7684\u5FC3\u60C5\u6E10\u6E10\u5E73\u9759\u4E0B\u6765\uFF0C\u4ED6\u8EBA\u5728\u90C1\u53F6\u7684\u6000\u91CC\u7761\u7740\u4E86\u3002"],[2664324,"\u8FFD\u9003","","\u3000\u4E94\u540D\u5211\u4FA6\u4EBA\u5458\u8981\u62BC\u89E3\u56DB\u540D\u8D29\u6BD2\u5206\u5B50\u56DE\u5C71\u6C34\u5E02\uFF0C\u5F53\u7136\u6709\u4E9B\u96BE\u5EA6\u3002"],[2664327,"\u9152\u697C","","\u6446\u6EE1\u4E86\u65E7\u5F0F\u5BB6\u5177\u7684\u529E\u516C\u5BA4\u5B89\u9759\u5F97\u50CF\u4E00\u4E2A\u575F\u5893\u3002"],[2664359,"\u7389\u89C2\u97F3","","\u6309\u6211\u73B0\u5728\u6311\u80A5\u62E3\u7626\u7684\u6807\u51C6\uFF0C\u5979\u8EAB\u4E0A\u7684\u8089\u597D\u50CF\u592A\u591A\u4E86\u4E00\u70B9\u513F\uFF0C\u624B\u611F\u4E0D\u597D\uFF0C\u800C\u4E14\u667A\u5546\u4E5F\u4E0D\u9AD8\u3002"],[2445986,"\u51C9\u751F\uFF0C\u6211\u4EEC\u53EF\u4E0D\u53EF\u4EE5\u4E0D\u5FE7\u4F24","\u4E50\u5C0F\u7C73","\u5728\u6211\u5E74\u5C11\u7684\u610F\u8BC6\u4E2D\uFF0C\u51C9\u751F\u662F\u4E0E\u6211\u4E0D\u540C\u7684\uFF0C\u4E0E\u6574\u4E2A\u9B4F\u5BB6\u576A\u7684\u5B69\u5B50\u90FD\u4E0D\u540C\u3002"],[2486656,"\u4F73\u671F\u5982\u68A6\u4E4B\u6D77\u4E0A\u7E41\u82B1","\u532A\u6211\u601D\u5B58","\u4ED6\u7A7F\u7740\u533B\u751F\u7684\u767D\u888D\uFF0C\u5C31\u7AD9\u5728\u90A3\u91CC\uFF0C\u9AD8\u4E14\u7626\uFF0C\u5374\u4EE4\u5979\u60F3\u5230\u829D\u5170\u7389\u6811\uFF0C\u6DF1\u79CB\u7684\u9633\u5149\u900F\u5165\u660E\u4EAE\u7684\u73BB\u7483\uFF0C\u6DE1\u6DE1\u7684\u91D1\u8272\u5149\u6591\u4EFF\u4F5B\u8774\u8776\uFF0C\u505C\u6816\u5728\u4ED6\u4E4C\u9ED1\u7684\u53D1\u9645\u3002"],[2515196,"\u539F\u6765\u4F60\u8FD8\u5728\u8FD9\u91CC","\u8F9B\u5937\u575E","\u53EF\u662F\u5979\u4E3A\u4EC0\u4E48\u8981\u575A\u5F3A\uFF1F\u4E3A\u4EC0\u4E48\u8981\u72EC\u7ACB\uFF1F\u5979\u53EA\u8981\u4E00\u4E2A\u671F\u76FC\u7684\u80A9\u8180\u4F9B\u5979\u75DB\u54ED\u4E00\u573A\u3002"],[2515250,"\u5982\u679C\u53EF\u4EE5\u8FD9\u6837\u7231","\u5343\u5BFB\u5343\u5BFB","\u5979\u548C\u4ED6\u76F8\u7231\uFF0C\u88AB\u4E16\u4FD7\u4E0D\u5BB9, \u53C8\u4E92\u76F8\u4F24\u5BB3\uFF0C\u5230\u6700\u540E\u60F3\u62E5\u6709\u5F7C\u6B64\u65F6\uFF0C\u8001\u5929\u5DF2\u4E0D\u7ED9\u4ED6\u4EEC\u673A\u4F1A"],[2515256,"\u662D\u595A\u65E7\u8349","\u4E66\u6D77\u6CA7\u751F","\u4EE5\u524D\u6211\u4ECE\u4E0D\u4FE1\u795E\uFF0C\u56E0\u4E3A\u4FE1\u4E86\u795E\uFF0C\u5C31\u8981\u76F8\u4FE1\u62A5\u5E94\u3002\u6211\u5BB3\u6015\u62A5\u5E94\uFF0C\u6240\u4EE5\u4E0D\u60F3\u4FE1\u3002\u540E\u6765\u795E\u679C\u7136\u6CA1\u6709\u6765\uFF0C\u4F46\u62A5\u5E94\u5148\u81F3\u3002 "],[2549048,"\u6781\u5149\u4E4B\u604B","\u738B\u5343\u8D6B","\u5979\u4ECE\u6CA1\u6709\u50CF\u73B0\u5728\u8FD9\u6837\uFF0C\u611F\u89C9\u8DDD\u79BB\u821E\u53F0\u8FD9\u6837\u8FD1\u8FC7\u3002"],[2485408,"\u5341\u5E74\u4E00\u54C1\u6E29\u5982\u8A00","\u4E66\u6D77\u6CA7\u751F","\u7B2C\u4E00\u5E74\uFF0C\u5979\u8D2A\u56FE\u7F8E\u8272\uFF0C\u7231\u4E0A\u4ED6\uFF0C\u4E00\u76C6\u6C34\u6CFC\u51FA\u767E\u5E74\u7684\u51A4\u5BB6\u3002"],[2544514,"\u501F\u6211\u6267\u62D7\u5982\u5C11\u5E74","\u6B27\u9633\u4E7E","\u4ED6\u4EEC\u4E2D\u7684\u6BCF\u4E00\u4E2A\u4EBA\uFF0C\u90FD\u5728\u8FD9\u4E2A\u4E16\u754C\u4E0A\u751F\u731B\u7684\u6D3B\u8FC7\uFF0C\u4EE5\u81EA\u5DF1\u7684\u70ED\u8840\uFF0C\u649E\u51FB\u7740\u6F8E\u6E43\u7684\u7EA2\u5C18\u3002"],[2548974,"\u300A\u730E\u7075\u624B\u8BB0\u300B","\u4F59\u4EBA\u3001\u72EC\u5531\u5BC2\u5BDE","\u66FE\u51E0\u4F55\u65F6\uFF0C\u81EA\u5DF1\u8D70\u904D\u5929\u4E0B\u90FD\u6CA1\u627E\u5230\u8FD9\u4E48\u4E00\u4E2A\u80FD\u50AC\u65FA\u81EA\u5DF1\u547D\u683C\u7684\u4EBA\uFF0C\u800C\u8FD9\u5C0F\u5B50\uFF0C\u5374\u5728\u5386\u5C3D\u82E6\u96BE\u540E\u65E0\u610F\u4E2D\u78B0\u5230\u4E86\u8FD9\u4E48\u4E2A\u4EBA\u3002"],[2544492,"\u949F\u60C5\u56DB\u6D77","\u6708\u5173","\u4ED6\u8BF4\u5341\u516B\u5E74\u540E\uFF0C\u5730\u9F99\u7FFB\u8EAB\uFF0C\u751F\u6B7B\u4E4B\u95F4\uFF0C\u7978\u798F\u4E0E\u5171\uFF01"],[1656720,"\u683C\u5B50\u95F4\u5973\u4EBA","\u8212\u4EEA","\u5979\u70B9\u8D77\u4E00\u6839\u70DF\uFF0C\u767E\u65E0\u804A\u8D56\u5730\u770B\u7740\u9752\u70DF\u5728\u773C\u524D\u4E1D\u4E1D\u7F2D\u7ED5\uFF0C\u7136\u540E\u8885\u8885\u6563\u53BB\u3002"],[2454174,"\u6700\u521D\u7684\u76F8\u9047\uFF0C\u6700\u540E\u7684\u522B\u79BB","\u8212\u4EEA\u8457","\u4F60\u6C38\u8FDC\u90FD\u4E0D\u77E5\u9053\uFF0C\u56E0\u4E3A\u9047\u89C1\u4E00\u4E2A\u4EBA\u3001\u7231\u4E0A\u4E00\u4E2A\u4EBA\uFF0C\u4F60\u7684\u4EBA\u751F\u4F1A\u53D1\u751F\u600E\u6837\u7684\u6539\u53D8\u3002"],[2500849,"\u6C49\u6708\u5929\u9A84","\u5341\u4E00\u9E3E","\u5C31\u5728\u5C71\u5D16\u9AD8\u5904\uFF0C\u4E00\u4EBA\u6301\u5F13\u800C\u7ACB\uFF0C\u7D20\u888D\u80DC\u96EA\uFF0C\u80CC\u810A\u633A\u5F97\u6709\u5982\u5251\u4E00\u822C\u7B14\u76F4\u3002"],[2571212,"\u609F\u7A7A\u4F20","\u4ECA\u4F55\u5728","\u4ED6\u81EA\u5DF1\u7B11\u7684\u5FEB\u51FA\u773C\u6CEA\u6765\uFF0C\u5374\u7A81\u7136\u53D1\u73B0\u5176\u4ED6\u4EBA\u90FD\u4E0D\u7B11\u3002"],[2453539,"\u5C38\u6848\u8C03\u67E5\u79D1","\u4E5D\u6EF4\u6C34\u8457","\u6DF1\u591C\u65E0\u4EBA\u7684\u9AD8\u7CB1\u5730\uFF0C\u6469\u7684\u53F8\u673A\u88AB\u52AB\u6740\uFF0C\u51F6\u624B\u4E34\u65F6\u8D77\u610F\u600E\u4E48\u7834\uFF1F"],[2325717,"\u5931\u5BA0\u738B\u5983\uFF1A\u51682\u518C","\u5E38\u5EF6\u971E\uFF08\u6EE1\u57CE\u70DF\u706B\uFF09","\u4ED6\u5E26\u4F24\u8BF7\u6218\uFF0C\u65E0\u975E\u662F\u60F3\u4E3A\u5979\u4FDD\u7559\u4F4F\u90A3\u91CC\u7684\u7F8E\u597D"],[2466959,"\u5468\u6885\u68EE\u4F5C\u54C1\u7CBE\u9009","\u5468\u6885\u68EE","\u516D\u7237\u6B66\u827A\u9AD8\u5F3A\uFF0C\u5200\u67AA\u68CD\u68D2\u6837\u6837\u4FF1\u7CBE\uFF0C\u9A91\u5F97\u70C8\u9A6C\uFF0C\u4F7F\u5F97\u5FEB\u67AA\uFF0C\u66F4\u52A0\u4E0A\u6D51\u8EAB\u662F\u80C6\u3002"],[2466980,"\u795E\u8C15","\u5468\u6885\u68EE","\u8001\u592B\u6536\u5F92\u5F1F\u5411\u6765\u5C31\u53EA\u6709\u51E0\u4E2A\u5C0F\u8981\u6C42\uFF0C\u9996\u5148\u8981\u80CC\u666F\u5F3A\u5927\uFF0C\u5176\u6B21\u5F97\u5FC3\u9AD8\u6C14\u50B2\uFF0C\u4E0D\u5C51\u5E08\u7236\u6559\u4ED6\uFF0C\u559C\u6B22\u81EA\u5DF1\u609F\u9053\uFF0C\u5076\u5C14\u8FD8\u5E2E\u5E08\u7236\u6253\u4EBA\uFF0C"],[2466948,"\u51B7\u8840","\u5468\u6885\u68EE","\u54E8\u5B50\u54CD\u4E86\uFF0C\u5C16\u5389\u7684\u55A7\u53EB\u628A\u9759\u5BC2\u7684\u6697\u591C\u6495\u4E2A\u7C89\u788E\u3002"],[2466969,"\u4E2D\u56FD\u5236\u9020","\u5468\u6885\u68EE","\u4E07\u5BB6\u706F\u706B\u548C\u6EE1\u5929\u7E41\u661F\u628A\u9762\u524D\u8FD9\u5EA7\u516B\u671D\u53E4\u90FD\u88C5\u70B9\u5F97\u4E00\u7247\u8F89\u714C\u3002"],[2664459,"\u6211\u4E3B\u6C89\u6D6E","\u5468\u6885\u68EE","\u5171\u548C\u9053\u77DC\u6301\u7684\u5C0A\u4E25\u6E90\u81EA\u6743\u529B"],[2466998,"\u6211\u672C\u82F1\u96C4","\u5468\u6885\u68EE","\u7ECF\u9A8C\u8BC1\u660E\uFF0C\u8D8A\u662F\u91CD\u5927\u8282\u65E5\u8D8A\u6709\u53EF\u80FD\u51FA\u70B9\u4EC0\u4E48\u610F\u5916\u3002"],[2466939,"\u56FD\u6B87","\u5468\u6885\u68EE","\u660E\u5929\u4E00\u5207\u5C06\u4F1A\u91CD\u65B0\u5F00\u59CB\u3002\u4ED6\u5C06\u62E5\u6709\u5C5E\u4E8E\u660E\u5929\u7684\u90A3\u8F6E\u8F89\u714C\u7684\u592A\u9633\u3002\u8FD9\u5C31\u662F\u5386\u53F2\u5C06\u8981\u8BC1\u660E\u7684\u3002"],[2466945,"\u9ED1\u575F","\u5468\u6885\u68EE","\u5176\u5B9E\uFF0C\u5728\u4E0D\u4E3A\u4E16\u4EBA\u6240\u77E5\u4E4B\u524D\uFF0C\u7530\u5BB6\u94FA\u4E5F\u5B9E\u5B9E\u5728\u5728\u5730\u5B58\u5728\u7740\u3002"],[1191887,"\u68A6\u60F3\u4E0E\u75AF\u72C2","\u5468\u6885\u68EE","\u5F53\u76D1\u72F1\u7684\u94C1\u95E8\u7830\u7136\u5173\u95ED\u65F6\uFF0C\u5B59\u548C\u5E73\u4EA7\u751F\u4E86\u4E00\u79CD\u5F02\u6837\u7684\u611F\u89C9\u3002"],[2467038,"\u4E09\u5341\u5E74\u6CB3\u4E1C","\u5468\u6885\u68EE","\u8D75\u4F1A\u957F\u4E5F\u770B\u4E2D\u4E86\u7389\u948F\uFF0C\u4E14\u53C8\u6709\u94B1\uFF0C\u4E3A\u7389\u948F\u5FC5\u4F1A\u5343\u91D1\u4E00\u63B7\u7684\u3002"],[2466947,"\u519B\u6B4C","\u5468\u6885\u68EE","\u6218\u4FD8\u4EEC\u8BC8\u5C38\u822C\u5730\u4ECE\u94FA\u4E0A\u722C\u8D77\uFF0C\u5C41\u80A1\u78B0\u7740\u5C41\u80A1\uFF0C\u8111\u74DC\u9876\u7740\u8111\u74DC\uFF0C\u624B\u5FD9\u811A\u4E71\u5730\u7A7F\u8863\u670D\u3001\u9778\u978B\u5B50\u3002"]],c=getApp();Page({data:{isUserInfo:!0,bookid:0,cover:"",author:"",text:"",name:"",isShare:!1,isShowSwap:!1},key:"",on_getuserinfo(a){a.detail.signature&&(this.setData({isUserInfo:!0}),c.setUserSign(a.detail),c.requestWeixinApi("/v2/data/weixin/index",(a)=>{0===a.status.code&&c.getHistory(function(b){c.writeHistory(Object.assign(b,JSON.parse(a.data[0])))})}))},randomBook(){const d=a(Math.random()*b.length),e=b[d][0];c.get(`/v2/book/${e}`,{_fields:"cover,book_name,author_name"},(a)=>{0===a.status.code&&this.setData({bookid:e,cover:a.data.cover,text:b[d][3],name:a.data.book_name,author:a.data.author_name},function(){wx.hideLoading()})}),c.checkShare(e,()=>{this.setData({isShare:!0})})},onLoad(){wx.showLoading(),wx.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#eeeeee"}),wx.showShareMenu({withShareTicket:!0}),this.randomBook()},onShow(){wx.getSetting({success:(a)=>{a.authSetting["scope.userInfo"]?wx.getUserInfo({success:()=>{this.setData({isUserInfo:!0})}}):this.setData({isUserInfo:!1})}})},onShareAppMessage(){return c.shareSuccess(this.data.bookid,()=>{c.toBook(this.data.bookid)}),{title:"\u89E3\u9501\u300A"+this.data.name+"\u300B, \u5FEB\u6765\u548C\u6211\u4E00\u8D77\u5427!!!",imageUrl:this.data.cover,path:"/pages/book/home?bookid="+this.data.bookid}},on_read(){c.toBook(this.data.bookid)},on_input(a){this.key=a.detail.value},on_swap(){this.setData({isShowSwap:!0})},on_swap_cache(){this.setData({isShowSwap:!1})},on_search(){wx.showLoading({title:"\u6D4B\u7B97\u4E2D..."}),this.setData({isShowSwap:!1}),c.get(`/v2/book/search`,{key:this.key,page:1,num:100,_fields:"cover,author_name,book_name,book_id,total_num,intro"},(b)=>{if(0===b.status.code&&b.data.length){const c=b.data[a(Math.random()*b.data.length)];this.setData({bookid:c.book_id,cover:c.cover,text:c.intro,name:c.book_name,author:c.author_name},function(){wx.hideLoading()})}else this.randomBook()})}})})(); 
 			}); 	require("pages/home/index.js");
 		__wxRoute = 'pages/bookshelf/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/bookshelf/index.js';	define("pages/bookshelf/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){'use strict';const a=require('../../utils/util.js'),c=getApp();Page({data:{list:[],total_num:0,nickName:'',avatarUrl:'',showHelp:!1},onShow(){this.setData({list:[],total_num:0}),this.loadHistory()},loadHistory(){c.getHistory((b)=>{let d=[];for(let a in b)b.hasOwnProperty(a)&&0<a&&b[a][c.namespace.isBookshelf]&&(b[a].bookid=+a,d.push(b[a]));d.sort(function(d,a){return a[c.namespace.bookShelfTime]-d[c.namespace.bookShelfTime]});const e=function(b){c.get(`/v2/book/${b}`,{iltc:1,time:new Date().getTime(),_fields:'cover,author_name,book_name,book_id,total_num,total_page,cur_page,updated_at,last_update_chapter_name,last_update_chapter_id'},(b)=>{0===b.status.code&&(d[f][c.namespace.readTime]&&(b.data.readTime=a.formatTime(d[f][c.namespace.readTime]),b.data.chapterid=d[f][c.namespace.chapterid]),b.data.shareTime=a.formatTime(d[f][c.namespace.shareTime]),b.data.update=a.formatDate(b.data.updated_at,!0),d[f]=b.data,this.setData({list:d,total_num:d.length}),f++,d[f]&&e(d[f].bookid))})}.bind(this);let f=0;d[f]&&e(d[f].bookid)}),wx.getSetting({success:(a)=>{a.authSetting['scope.userInfo']&&wx.getUserInfo({success:(a)=>{this.setData({nickName:a.userInfo.nickName,avatarUrl:a.userInfo.avatarUrl})}})}})},on_getuserinfo(a){a.detail.signature&&(this.setData({nickName:a.detail.userInfo.nickName,avatarUrl:a.detail.userInfo.avatarUrl}),c.setUserSign(a.detail),c.requestWeixinApi('/v2/data/weixin/index',(a)=>{0===a.status.code&&c.getHistory((b)=>{c.writeHistory(Object.assign(b,JSON.parse(a.data[0])),()=>{this.loadHistory()})})}))},on_help(){this.setData({showHelp:!this.data.showHelp})}})})(); 
 			}); 	require("pages/bookshelf/index.js");
 		__wxRoute = 'pages/repository/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/repository/index.js';	define("pages/repository/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){const a=getApp();Page({data:{swiper:[],datalist:[],category:[]},onLoad(){a.get('/v2/book/category',{_fields:'child_node,id,name'},(a)=>{this.setData({category:a.data})}),a.get('/v2/book/boutique/bookstore',{type:1,client:'17K'},(a)=>{const b=[];0===a.status.code&&a.data.forEach((a)=>{if(1===a.type)this.setData({swiper:a.lists.map(function(a){return{url:'1'===a.urlType?'/pages/book/home?bookid='+a.book_id:a.url,cover:a.cover}})});else if(-1!==[27,3,5,6,7,8,9,10,11,12].indexOf(a.type)){'\u5B8C\u672C\u7279\u4EF7\u79D2\u6740'===a.name&&(a.name='\u6700\u65B0\u5B8C\u672C'),'\u5305\u6708\u5C31\u80FD\u514D\u8D39\u770B'===a.name&&(a.name='\u7F16\u8F91\u63A8\u8350');let c={template:'list',title:a.name,lists:a.lists.map(function(a){return{author_name:a.author_name,book_id:a.book_id,book_name:a.book_name,cover:a.cover}})};'\u672C\u5468\u70ED\u95E8'===a.name?b.unshift(c):b.push(c)}this.setData({datalist:b})})})},event_search(a){wx.navigateTo({url:'/pages/search/index?key='+a.detail.value})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){wx.showNavigationBarLoading(),wx.stopPullDownRefresh()},onReachBottom:function(){},onShareAppMessage:function(){}})})(); 
 			}); 	require("pages/repository/index.js");
 		__wxRoute = 'pages/repository/category';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/repository/category.js';	define("pages/repository/category.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){const a=getApp();Page({data:{title:'',lists:[],total_num:0,loaded:!1},param:{page:0,sort_type:2,order_type:0,book_status:0,num:24,book_sign:3,_fields:'cover,author_name,book_name,book_id,total_num,total_page,cur_page,category_name_2,book_status,word_count'},onLoad(a){wx.showShareMenu({withShareTicket:!0}),wx.setNavigationBarTitle({title:a.name}),a.site?(this.param.site=a.site,this.param.category_1=a.category_1):this.param.order_type=1,this.getData()},getData(){this.param.page++,a.get('/v2/book/',this.param,(a)=>{0===a.status.code&&(this.setData({lists:this.data.lists.concat(a.data),total_num:a.total_num}),this.page=+a.cur_page,(a.total_page===this.param.page||0===a.total_page)&&this.setData({loaded:!0}))})},onPullDownRefresh:function(){},onReachBottom:function(){this.getData()}})})(); 
 			}); 	require("pages/repository/category.js");
 		__wxRoute = 'pages/history/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/history/index.js';	define("pages/history/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){'use strict';const a=require('../../utils/util.js'),c=getApp();Page({data:{list:[]},onShow(){this.setData({list:[]}),this.loadHistory()},loadHistory(){c.getHistory((b)=>{let d=[];for(let a in b)b.hasOwnProperty(a)&&0<a&&b[a][c.namespace.chapterid]&&(b[a].bookid=+a,d.push(b[a]));d.sort(function(d,a){return a[c.namespace.readTime]-d[c.namespace.readTime]});const e=function(b){c.get(`/v2/book/${b}`,{iltc:1,time:new Date().getTime(),_fields:'cover,author_name,book_name,book_id,total_num,total_page,cur_page,book_status,chapter_total,last_update_chapter_date'},(b)=>{0===b.status.code&&(b.data.lastDate=a.formatDate(b.data.last_update_chapter_date,!0),b.data.update=('03'===b.data.book_status?'\u5DF2\u5B8C\u7ED3':'\u66F4\u65B0\u81F3')+b.data.chapter_total+'\u7AE0',d[f][c.namespace.readTime]&&(b.data.readTime=a.formatTime(d[f][c.namespace.readTime]),b.data.chapterid=d[f][c.namespace.chapterid]),d[f]=b.data,this.setData({list:d}),f++,d[f]&&e(d[f].bookid))})}.bind(this);let f=0;d[f]&&e(d[f].bookid)})}})})(); 
 			}); 	require("pages/history/index.js");
 		__wxRoute = 'pages/book/list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/book/list.js';	define("pages/book/list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){const a=getApp();Page({data:{bookid:0,volumes:[],loaded:!1,bookname:'',order:!1},volumes:[],volumes_index:0,onReachBottom:function(){this.volumes_index<this.volumes.length?(wx.showNavigationBarLoading(),this.volumes_index++,this.setData({volumes:this.volumes.slice(0,this.volumes_index)},function(){wx.hideNavigationBarLoading()})):this.setData({loaded:!0})},onLoad:function(b){wx.showLoading({title:'\u52A0\u8F7D\u4E2D...'}),a.get(`/v2/book/${b.bookid}/volumes`,{_fields:'id,volumes,chapters,name,vip,book_name'},(a)=>{0===a.status.code&&(wx.setNavigationBarTitle({title:a.data.book_name}),this.volumes=a.data.volumes||[],this.initVolumeIndex(),this.setData({bookname:a.data.book_name,bookid:b.bookid,volumes:this.volumes.slice(0,this.volumes_index)},function(){wx.hideLoading()}))}),wx.showShareMenu({withShareTicket:!0})},initVolumeIndex(){this.volumes_index=0;let a=0;for(let b=0;b<this.volumes.length&&(a+=this.volumes[b].chapters.length,this.volumes_index++,!(10<a));b++);this.volumes_index>=this.volumes.length&&this.setData({loaded:!0})},on_swapOrder(){wx.showLoading({title:'\u91CD\u65B0\u6392\u5E8F\u4E2D...'}),this.volumes.reverse().forEach(function(a){a.chapters.reverse()}),this.initVolumeIndex(),this.setData({order:!this.data.order,volumes:this.volumes.slice(0,this.volumes_index)},function(){wx.hideLoading()})},onShareAppMessage(){return a.shareSuccess(this.data.bookid),{title:'\u521A\u89E3\u9501\u4E86\u300A'+this.data.bookname+'\u300B\u6765\u4E00\u8D77\u770B!',path:'/pages/book/list?bookid='+this.data.bookid}}})})(); 
 			}); 	require("pages/book/list.js");
 		__wxRoute = 'pages/book/home';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/book/home.js';	define("pages/book/home.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){'use strict';const a=getApp(),b=require('../../utils/util.js');Page({data:{bookid:0,name:'\u4E66\u540D',cover:'/images/cover.jpg',author:'\u4F5A\u540D',isBookshelf:!1,isShare:!1,introLines:5},onLoad(c){wx.showLoading(),a.get(`/v2/book/${c.bookid}/merge`,{iltc:1,time:new Date().getTime()},(c)=>{if(0===c.status.code){let e=c.data;this.setData({bookid:e.book_id,name:e.book_name,cover:e.cover,intro:e.intro,author:e.author_name,word_count:b.slimNumber(e.word_count),total_click:b.slimNumber(e.total_click),chapter_total:e.chapter_total,category_name_1:e.category_name_1,category_name_2:e.category_name_2,last_update_chapter_name:e.last_update_chapter_name,last_update_chapter_id:e.last_update_chapter_id,last_update_chapter_date:b.formatTime(e.last_update_chapter_date),book_status:'03'===e.book_status?'\u5DF2\u5B8C\u7ED3':'\u66F4\u65B0\u81F3',comment:{total:c.comment.total,lists:c.comment.lists.map(function(a){return a.time=b.formatTime(a.last_reply_date),a})},recommend:c.author_book.concat(c.recommend)},function(){wx.hideLoading()}),a.getHistory((b)=>{b[this.data.bookid]&&this.setData({isBookshelf:!!b[this.data.bookid][a.namespace.isBookshelf]})}),a.checkShare(this.data.bookid,()=>{this.setData({isShare:!0})}),wx.setNavigationBarTitle({title:this.data.name})}}),wx.showShareMenu({withShareTicket:!0})},onShareAppMessage(){return a.shareSuccess(this.data.bookid,()=>{this.setData({isShare:!0}),this.on_read()}),{title:'\u300A'+this.data.name+'\u300B\u53EF\u4EE5\u514D\u8D39\u770B\u4E86, \u5FEB\u6765\u548C\u6211\u4E00\u8D77\u5427!!!',path:'/pages/book/home?bookid='+this.data.bookid}},on_bookshelf(){this.data.isBookshelf?a.removeBookshelf(this.data.bookid,()=>{this.setData({isBookshelf:!1})}):a.addBookshelf(this.data.bookid,()=>{this.setData({isBookshelf:!0})})},on_intro(){this.setData({introLines:20})},on_read(){a.getHistory((b)=>{b=b[this.data.bookid]||{},b[a.namespace.chapterid]?wx.navigateTo({url:'/pages/book/chapter?bookid='+this.data.bookid+'&chapterid='+b[a.namespace.chapterid]}):a.readFirst(this.data.bookid)})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){}})})(); 
 			}); 	require("pages/book/home.js");
 		__wxRoute = 'pages/book/chapter';__wxRouteBegin = true; 	define("pages/book/chapter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){const a=getApp();Page({data:{title:'',content:'',bookname:'',time:0,word_count:0,chapterid:0,previd:0,nextid:0,bookid:0,isShare:!0,isIndex:!1},setContent(b){wx.setNavigationBarTitle({title:b.book_name}),this.setData({title:b.name,bookname:b.book_name,content:'\u3000\u3000'+b.content.replace(/\n(?!　)+/g,'\n\u3000\u3000'),time:b.updated_at,word_count:b.word_count,chapterid:b.id,previd:b.pre_id,nextid:b.next_id,bookid:b.book_id},function(){wx.hideLoading(),a.setHistory(b.book_id,{[a.namespace.chapterid]:b.id,[a.namespace.readTime]:Date.now()},function(){},()=>{})})},onLoad:function(b){wx.getLaunchOptionsSync&&1036===wx.getLaunchOptionsSync().scene&&this.setData({isIndex:!0}),wx.setNavigationBarColor({frontColor:'#000000',backgroundColor:'#FFEEC2'}),wx.setBackgroundColor({backgroundColor:'#FFEEC2',backgroundColorTop:'#FFEEC2',backgroundColorBottom:'#FFEEC2'}),wx.showLoading({title:'\u52A0\u8F7D\u4E2D...'}),a.getChapter(b.bookid,b.chapterid,(a)=>{0===a.status.code&&this.setContent(a.data)}),wx.showShareMenu({withShareTicket:!0})},onShareAppMessage(){return a.shareSuccess(this.data.bookid,()=>{a.getChapter(this.data.bookid,this.data.chapterid,(a)=>{0===a.status.code&&(this.setContent(a.data),this.setData({isShare:!0}))})}),{title:'\u6211\u8981\u89E3\u9501\u300A'+this.data.bookname+'\u300B, \u7684'+this.data.title+', \u4E00\u8D77\u770B\u554A!',path:'/pages/book/chapter?bookid='+this.data.bookid+'&chapterid='+this.data.chapterid}},onShow:function(){}})})(); 
 			}); 	require("pages/book/chapter.js");
 		__wxRoute = 'pages/search/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/index.js';	define("pages/search/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(function(){const a=getApp();Page({data:{key:'',list:[],total_num:0,loaded:!1},page:1,onLoad(a){this.setData({key:a.key}),this.getSearchData()},getSearchData(){wx.showLoading({title:'\u641C\u7D22\u4E2D...'}),this.data.loaded||a.get(`/v2/book/search`,{key:this.data.key,page:this.page,num:24,_fields:'cover,author_name,book_name,book_id,total_num,total_page,cur_page,intro,category_name_2,book_status,word_count,total_chapter,keyword'},(a)=>{if(0===a.status.code){const b=+a.cur_page;b===this.page&&(this.page++,this.setData({list:this.data.list.concat(a.data),total_num:a.total_num,loaded:!1},function(){wx.hideLoading()})),(a.total_page===b||0===a.total_page)&&(wx.hideLoading(),this.setData({loaded:!0}))}})},on_search(a){this.page=1,this.setData({key:a.detail.value,list:[],total_num:'...',loaded:!1}),this.getSearchData()},onReachBottom(){this.getSearchData()}})})(); 
 			}); 	require("pages/search/index.js");
 	