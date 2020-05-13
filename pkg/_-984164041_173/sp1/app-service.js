/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx0=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx0:"+m)}
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

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
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
var z=__WXML_GLOBAL__.ops_set.$gwx0 || [];
function gz$gwx0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_1)return __WXML_GLOBAL__.ops_cached.$gwx0_1
__WXML_GLOBAL__.ops_cached.$gwx0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!='],[[7],[3,'collection_id']],[1,null]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_1);return __WXML_GLOBAL__.ops_cached.$gwx0_1
}
function gz$gwx0_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_2)return __WXML_GLOBAL__.ops_cached.$gwx0_2
__WXML_GLOBAL__.ops_cached.$gwx0_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'lower'])
Z([3,'scrollview'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,10]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_2);return __WXML_GLOBAL__.ops_cached.$gwx0_2
}
function gz$gwx0_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_3)return __WXML_GLOBAL__.ops_cached.$gwx0_3
__WXML_GLOBAL__.ops_cached.$gwx0_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_3);return __WXML_GLOBAL__.ops_cached.$gwx0_3
}
function gz$gwx0_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_4)return __WXML_GLOBAL__.ops_cached.$gwx0_4
__WXML_GLOBAL__.ops_cached.$gwx0_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[2,'>'],[[6],[[7],[3,'groups']],[3,'length']],[1,0]])
Z([3,'onPageScroll'])
Z([[2,'?:'],[[7],[3,'loadingList']],[1,'scrollBottom'],[1,'']])
Z([3,'true'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'loadingList']]],[[7],[3,'groups']]],[[6],[[7],[3,'groups']],[3,'length']]],[[2,'<='],[[7],[3,'pageTotal']],[[7],[3,'page']]]],[[2,'>'],[[7],[3,'page']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_4);return __WXML_GLOBAL__.ops_cached.$gwx0_4
}
function gz$gwx0_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_5)return __WXML_GLOBAL__.ops_cached.$gwx0_5
__WXML_GLOBAL__.ops_cached.$gwx0_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_5);return __WXML_GLOBAL__.ops_cached.$gwx0_5
}
function gz$gwx0_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_6)return __WXML_GLOBAL__.ops_cached.$gwx0_6
__WXML_GLOBAL__.ops_cached.$gwx0_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page__bd'])
Z([[2,'!'],[[7],[3,'lid']]])
Z([3,'save'])
Z([1,true])
Z([[2,'<'],[[6],[[7],[3,'images']],[3,'length']],[1,9]])
Z([3,'detail'])
Z([[2,'&&'],[[7],[3,'files']],[[6],[[7],[3,'files']],[3,'length']]])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'user']],[3,'uid']],[[6],[[7],[3,'group']],[3,'admin_uid']]],[[2,'==='],[[6],[[7],[3,'user']],[3,'uid']],[[6],[[7],[3,'creator']],[3,'uid']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_6);return __WXML_GLOBAL__.ops_cached.$gwx0_6
}
function gz$gwx0_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_7)return __WXML_GLOBAL__.ops_cached.$gwx0_7
__WXML_GLOBAL__.ops_cached.$gwx0_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'?:'],[[7],[3,'loadingMask']],[1,'loadingDisableEvent'],[1,'']])
Z([3,'page'])
Z([3,'onPageScroll'])
Z([[2,'?:'],[[7],[3,'loadingList']],[1,'scrollBottom'],[1,'']])
Z([3,'true'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'scrollViewHeight']]],[1,'px']])
Z([[2,'&&'],[[7],[3,'records']],[[6],[[7],[3,'records']],[3,'length']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'records']])
Z(z[7])
Z([3,'toLedgerDetail'])
Z([3,'record_item weui-flex'])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'weui-cell__hd'])
Z([[9],[[9],[[8],'avatar',[[6],[[6],[[7],[3,'item']],[3,'user']],[3,'avatar']]],[[8],'vip',[[6],[[7],[3,'item']],[3,'isVipUser']]]],[[8],'cls',[1,'comment-user-avatar']]])
Z([3,'avatar'])
Z([[2,'!'],[[7],[3,'loadingList']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'loadingList']]],[[7],[3,'records']]],[[6],[[7],[3,'records']],[3,'length']]],[[2,'<='],[[7],[3,'pageTotal']],[[7],[3,'page']]]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'group']],[[6],[[7],[3,'group']],[3,'partner']]],[[2,'==='],[[6],[[6],[[7],[3,'group']],[3,'partner']],[3,'type']],[[6],[[6],[[7],[3,'group']],[3,'partner']],[3,'apply']]]])
Z([[2,'||'],[[2,'==='],[[6],[[6],[[7],[3,'group']],[3,'partner']],[3,'type']],[1,'T']],[[6],[[6],[[7],[3,'group']],[3,'partner']],[3,'proxy']]])
Z([[6],[[7],[3,'group']],[3,'gid']])
Z([[6],[[7],[3,'user']],[3,'avatar']])
Z([3,'vip-renewal-modal'])
Z(z[21])
})(__WXML_GLOBAL__.ops_cached.$gwx0_7);return __WXML_GLOBAL__.ops_cached.$gwx0_7
}
function gz$gwx0_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_8)return __WXML_GLOBAL__.ops_cached.$gwx0_8
__WXML_GLOBAL__.ops_cached.$gwx0_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'user']],[[7],[3,'group']]])
Z([3,'save'])
Z([1,true])
Z([3,'weui-cells weui-cells_after-title'])
Z([[7],[3,'settings']])
Z([3,'key'])
Z([[6],[[7],[3,'item']],[3,'visible']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'key']],[1,'dialogMsg']])
Z([[6],[[7],[3,'item']],[3,'checked']])
Z([[6],[[7],[3,'item']],[3,'vipOnly']])
Z([[2,'!'],[[6],[[7],[3,'user']],[3,'pxx_subscribed']]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_8);return __WXML_GLOBAL__.ops_cached.$gwx0_8
}
function gz$gwx0_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_9)return __WXML_GLOBAL__.ops_cached.$gwx0_9
__WXML_GLOBAL__.ops_cached.$gwx0_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_9);return __WXML_GLOBAL__.ops_cached.$gwx0_9
}
function gz$gwx0_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_10)return __WXML_GLOBAL__.ops_cached.$gwx0_10
__WXML_GLOBAL__.ops_cached.$gwx0_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_10);return __WXML_GLOBAL__.ops_cached.$gwx0_10
}
function gz$gwx0_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_11)return __WXML_GLOBAL__.ops_cached.$gwx0_11
__WXML_GLOBAL__.ops_cached.$gwx0_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4'])
Z([3,'1e1e4dea56fa582e29a11dcc732ce7b8'])
Z([3,'padding: 20rpx 32rpx;margin-top: 32rpx; background:#fff;flex-shrink:0;'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_11);return __WXML_GLOBAL__.ops_cached.$gwx0_11
}
function gz$gwx0_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_12)return __WXML_GLOBAL__.ops_cached.$gwx0_12
__WXML_GLOBAL__.ops_cached.$gwx0_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'url']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_12);return __WXML_GLOBAL__.ops_cached.$gwx0_12
}
__WXML_GLOBAL__.ops_set.$gwx0=z;
__WXML_GLOBAL__.ops_init.$gwx0=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./sp1/pages/ledger.wxml']={};
f_['./sp1/pages/ledger.wxml']['ArrWxs'] =f_['./wxs/arr.wxs'] || nv_require("p_./wxs/arr.wxs");
f_['./sp1/pages/ledger.wxml']['ArrWxs']();

var x=['./sp1/pages/createAdward.wxml','./sp1/pages/credit.wxml','./sp1/pages/creditstate.wxml','./sp1/pages/graduated.wxml','../../templates/tips/nodata.wxml','./sp1/pages/invitation.wxml','./sp1/pages/ledger.wxml','./sp1/pages/ledgerlist.wxml','../../templates/avatar/avatar.wxml','./sp1/pages/notification_setting.wxml','./sp1/pages/personal.wxml','./sp1/pages/store.wxml','./sp1/pages/update_info.wxml','./sp1/pages/webpage.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx0_2()
var oD=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',0,'class',1],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,2,e,s,gg)){fE.wxVkey=1
var cF=_v()
_(fE,cF)
if(_oz(z,3,e,s,gg)){cF.wxVkey=1
}
cF.wxXCkey=1
}
else{fE.wxVkey=2
}
fE.wxXCkey=1
_(r,oD)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx0_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx0_4()
var cI=_n('view')
_rz(z,cI,'class',0,e,s,gg)
var oJ=e_[x[3]].i
_ai(oJ,x[4],e_,x[3],3,6)
var lK=_v()
_(cI,lK)
if(_oz(z,1,e,s,gg)){lK.wxVkey=1
var aL=_mz(z,'scroll-view',['bindscrolltolower',2,'scrollIntoView',1,'scrollY',2],[],e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,5,e,s,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
_(lK,aL)
}
lK.wxXCkey=1
oJ.pop()
_(r,cI)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx0_5()
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx0_6()
var oP=_n('view')
_rz(z,oP,'class',0,e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,1,e,s,gg)){xQ.wxVkey=1
var oR=_mz(z,'form',['bindsubmit',2,'reportSubmit',1],[],e,s,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,4,e,s,gg)){fS.wxVkey=1
}
fS.wxXCkey=1
_(xQ,oR)
}
else{xQ.wxVkey=2
var cT=_n('view')
_rz(z,cT,'class',5,e,s,gg)
var hU=_v()
_(cT,hU)
if(_oz(z,6,e,s,gg)){hU.wxVkey=1
}
var oV=_v()
_(cT,oV)
if(_oz(z,7,e,s,gg)){oV.wxVkey=1
}
hU.wxXCkey=1
oV.wxXCkey=1
_(xQ,cT)
}
xQ.wxXCkey=1
_(r,oP)
return r
}
e_[x[6]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx0_7()
var lY=_mz(z,'view',['capture-catch:tap',0,'class',1],[],e,s,gg)
var aZ=_mz(z,'scroll-view',['bindscrolltolower',2,'scrollIntoView',1,'scrollY',2,'style',3],[],e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,6,e,s,gg)){t1.wxVkey=1
var b3=_v()
_(t1,b3)
var o4=function(o6,x5,f7,gg){
var h9=_mz(z,'view',['bindtap',11,'class',1,'data-wpytoledgerdetail-a',2],[],o6,x5,gg)
var o0=_n('view')
_rz(z,o0,'class',14,o6,x5,gg)
var cAB=e_[x[7]].i
_ai(cAB,x[8],e_,x[7],25,38)
var oBB=_v()
_(o0,oBB)
var lCB=_oz(z,16,o6,x5,gg)
var aDB=_gd(x[7],lCB,e_,d_)
if(aDB){
var tEB=_1z(z,15,o6,x5,gg) || {}
var cur_globalf=gg.f
oBB.wxXCkey=3
aDB(tEB,tEB,oBB,gg)
gg.f=cur_globalf
}
else _w(lCB,x[7],26,50)
cAB.pop()
_(h9,o0)
_(f7,h9)
return f7
}
b3.wxXCkey=2
_2z(z,9,o4,e,s,gg,b3,'item','index','index')
}
else if(_oz(z,17,e,s,gg)){t1.wxVkey=2
}
var e2=_v()
_(aZ,e2)
if(_oz(z,18,e,s,gg)){e2.wxVkey=1
}
t1.wxXCkey=1
e2.wxXCkey=1
_(lY,aZ)
_(r,lY)
var oX=_v()
_(r,oX)
if(_oz(z,19,e,s,gg)){oX.wxVkey=1
var eFB=_v()
_(oX,eFB)
if(_oz(z,20,e,s,gg)){eFB.wxVkey=1
}
eFB.wxXCkey=1
}
else{oX.wxVkey=2
var bGB=_n('join-group-footer')
_rz(z,bGB,'gid',21,e,s,gg)
_(oX,bGB)
}
var oHB=_mz(z,'vip-renewal-modal',['avatar',22,'class',1,'gid',2],[],e,s,gg)
_(r,oHB)
oX.wxXCkey=1
oX.wxXCkey=3
return r
}
e_[x[7]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx0_8()
var oJB=_v()
_(r,oJB)
if(_oz(z,0,e,s,gg)){oJB.wxVkey=1
var fKB=_mz(z,'form',['bindsubmit',1,'reportSubmit',1],[],e,s,gg)
var cLB=_n('view')
_rz(z,cLB,'class',3,e,s,gg)
var oNB=_v()
_(cLB,oNB)
var cOB=function(lQB,oPB,aRB,gg){
var eTB=_v()
_(aRB,eTB)
if(_oz(z,6,lQB,oPB,gg)){eTB.wxVkey=1
var bUB=_v()
_(eTB,bUB)
if(_oz(z,7,lQB,oPB,gg)){bUB.wxVkey=1
var oVB=_v()
_(bUB,oVB)
if(_oz(z,8,lQB,oPB,gg)){oVB.wxVkey=1
}
oVB.wxXCkey=1
}
else{bUB.wxVkey=2
var xWB=_v()
_(bUB,xWB)
if(_oz(z,9,lQB,oPB,gg)){xWB.wxVkey=1
}
xWB.wxXCkey=1
}
bUB.wxXCkey=1
}
eTB.wxXCkey=1
return aRB
}
oNB.wxXCkey=2
_2z(z,4,cOB,e,s,gg,oNB,'item','index','key')
var hMB=_v()
_(cLB,hMB)
if(_oz(z,10,e,s,gg)){hMB.wxVkey=1
}
hMB.wxXCkey=1
_(fKB,cLB)
_(oJB,fKB)
}
oJB.wxXCkey=1
return r
}
e_[x[9]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx0_9()
return r
}
e_[x[10]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx0_10()
return r
}
e_[x[11]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx0_11()
var h1B=_mz(z,'wechat-work-cell',['buttonText',0,'plugid',1,'style',1,'styleType',2],[],e,s,gg)
_(r,h1B)
return r
}
e_[x[12]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx0_12()
var c3B=_v()
_(r,c3B)
if(_oz(z,0,e,s,gg)){c3B.wxVkey=1
}
c3B.wxXCkey=1
return r
}
e_[x[13]]={f:m11,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['sp1/pages/createAdward.json'] = {"navigationBarTitleText":"新建奖状","usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp1/pages/createAdward.wxml'] = [$gwx0, './sp1/pages/createAdward.wxml'];else __wxAppCode__['sp1/pages/createAdward.wxml'] = $gwx0( './sp1/pages/createAdward.wxml' );
		__wxAppCode__['sp1/pages/credit.json'] = {"navigationBarTitleText":"我的积分","navigationBarBackgroundColor":"#fff","usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp1/pages/credit.wxml'] = [$gwx0, './sp1/pages/credit.wxml'];else __wxAppCode__['sp1/pages/credit.wxml'] = $gwx0( './sp1/pages/credit.wxml' );
		__wxAppCode__['sp1/pages/creditstate.json'] = {"navigationBarTitleText":"积分说明","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#fff","usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp1/pages/creditstate.wxml'] = [$gwx0, './sp1/pages/creditstate.wxml'];else __wxAppCode__['sp1/pages/creditstate.wxml'] = $gwx0( './sp1/pages/creditstate.wxml' );
		__wxAppCode__['sp1/pages/graduated.json'] = {"navigationBarTitleText":"结课班级","enablePullDownRefresh":true,"usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp1/pages/graduated.wxml'] = [$gwx0, './sp1/pages/graduated.wxml'];else __wxAppCode__['sp1/pages/graduated.wxml'] = $gwx0( './sp1/pages/graduated.wxml' );
		__wxAppCode__['sp1/pages/invitation.json'] = {"navigationBarBackgroundColor":"#fff","navigationBarTitleText":"我的邀请","enablePullDownRefresh":false,"usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp1/pages/invitation.wxml'] = [$gwx0, './sp1/pages/invitation.wxml'];else __wxAppCode__['sp1/pages/invitation.wxml'] = $gwx0( './sp1/pages/invitation.wxml' );
		__wxAppCode__['sp1/pages/ledger.json'] = {"navigationBarTitleText":"明细","usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp1/pages/ledger.wxml'] = [$gwx0, './sp1/pages/ledger.wxml'];else __wxAppCode__['sp1/pages/ledger.wxml'] = $gwx0( './sp1/pages/ledger.wxml' );
		__wxAppCode__['sp1/pages/ledgerlist.json'] = {"navigationBarTitleText":"账本","usingComponents":{"vip-renewal-modal":"/wx_components/vip_renewal_modal/index","join-group-footer":"/wx_components/join_group_footer/index","txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp1/pages/ledgerlist.wxml'] = [$gwx0, './sp1/pages/ledgerlist.wxml'];else __wxAppCode__['sp1/pages/ledgerlist.wxml'] = $gwx0( './sp1/pages/ledgerlist.wxml' );
		__wxAppCode__['sp1/pages/notification_setting.json'] = {"navigationBarTitleText":"提醒设置","enablePullDownRefresh":false,"usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp1/pages/notification_setting.wxml'] = [$gwx0, './sp1/pages/notification_setting.wxml'];else __wxAppCode__['sp1/pages/notification_setting.wxml'] = $gwx0( './sp1/pages/notification_setting.wxml' );
		__wxAppCode__['sp1/pages/personal.json'] = {"navigationBarTitleText":"个人中心","usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp1/pages/personal.wxml'] = [$gwx0, './sp1/pages/personal.wxml'];else __wxAppCode__['sp1/pages/personal.wxml'] = $gwx0( './sp1/pages/personal.wxml' );
		__wxAppCode__['sp1/pages/store.json'] = {"navigationBarBackgroundColor":"#fff","navigationBarTitleText":"积分商城","usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp1/pages/store.wxml'] = [$gwx0, './sp1/pages/store.wxml'];else __wxAppCode__['sp1/pages/store.wxml'] = $gwx0( './sp1/pages/store.wxml' );
		__wxAppCode__['sp1/pages/update_info.json'] = {"navigationBarTitleText":"更新内容","enablePullDownRefresh":true,"usingComponents":{"wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell","txv-video":"plugin://wxa75efa648b60994b/video"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp1/pages/update_info.wxml'] = [$gwx0, './sp1/pages/update_info.wxml'];else __wxAppCode__['sp1/pages/update_info.wxml'] = $gwx0( './sp1/pages/update_info.wxml' );
		__wxAppCode__['sp1/pages/webpage.json'] = {"navigationBarTitleText":"使用手册","enablePullDownRefresh":true,"usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp1/pages/webpage.wxml'] = [$gwx0, './sp1/pages/webpage.wxml'];else __wxAppCode__['sp1/pages/webpage.wxml'] = $gwx0( './sp1/pages/webpage.wxml' );
	
	__wxRoute = 'sp1/pages/graduated';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp1/pages/graduated.js';	define("sp1/pages/graduated.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var u=t[a](o),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_dateformat=require("./../../utils/dateformat.js"),_dateformat2=_interopRequireDefault(_dateformat),_timeformat=require("./../../utils/timeformat.js"),_timeformat2=_interopRequireDefault(_timeformat),_clientUtil=require("./../../utils/clientUtil.js"),_config=require("./../../config.js"),_request=require("./../../utils/request.js"),_request2=_interopRequireDefault(_request),_group=require("./../../mixins/group.js"),_group2=_interopRequireDefault(_group),EndupGroups=function(e){function t(){var e,r,n,a;_classCallCheck(this,t);for(var o=arguments.length,u=Array(o),i=0;i<o;i++)u[i]=arguments[i];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.config={navigationBarTitleText:"结课班级",enablePullDownRefresh:!0},n.data={groups:[],page:1,pageTotal:1,loadingList:!1},n.methods={viewGroup:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.navigateTo({url:"/pages/group?gid="+t});case 2:case"end":return e.stop()}},e,this)}));return e}(),onPageScroll:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.loadingList,r=this.page,n=this.pageTotal,t||!(1===r||1!=r&&n>=r+1)){e.next=5;break}return e.next=4,this.fetchGroups(++this.page);case 4:this.$apply();case 5:case"end":return e.stop()}},e,this)}));return e}()},a=r,_possibleConstructorReturn(n,a)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshData();case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"onPullDownRefresh",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshData();case 2:return e.next=4,_wepy2.default.stopPullDownRefresh();case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"onRoute",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=_wepy2.default.getStorageSync("GRADUATED_LIST_NEED_REFRESH"))){e.next=4;break}return e.next=4,this.refreshData();case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"refreshData",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.page=1,this.$apply(),this.fetchGroups(),_wepy2.default.removeStorageSync("GRADUATED_LIST_NEED_REFRESH");case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"fetchGroups",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,a,o,u,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.showLoading({title:"加载中...",mask:!0});case 2:return e.next=4,_wepy2.default.$instance.logined();case 4:return t=e.sent,r=t.user,e.next=8,(0,_request2.default)({url:_config.api.group.list.url,data:{page:i,pageSize:20,status:2}});case 8:n=e.sent,n.data&&n.data.cmd&&(a=n.data.result,o=a.list,u=a.pagination,this.pageTotal=Math.ceil(u.total/u.pageSize)||0,this.groups=1===i?o:[].concat(_toConsumableArray(this.groups),_toConsumableArray(o))),this.$apply(),(0,_clientUtil.hideLoading)();case 12:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(EndupGroups,"sp1/pages/graduated")); 
 			}); 	require("sp1/pages/graduated.js");
 		__wxRoute = 'sp1/pages/store';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp1/pages/store.js';	define("sp1/pages/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_config=require("./../../config.js"),_request=require("./../../utils/request.js"),_request2=_interopRequireDefault(_request),Store=function(e){function t(){var e,r,o,n;_classCallCheck(this,t);for(var i=arguments.length,u=Array(i),s=0;s<i;s++)u[s]=arguments[s];return r=o=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.config={navigationBarBackgroundColor:"#fff",navigationBarTitleText:"积分商城"},n=r,_possibleConstructorReturn(o,n)}return _inherits(t,e),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Store,"sp1/pages/store")); 
 			}); 	require("sp1/pages/store.js");
 		__wxRoute = 'sp1/pages/credit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp1/pages/credit.js';	define("sp1/pages/credit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,i){try{var u=t[a](i),s=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_interfaces=require("./../../interfaces/index.js"),_interfaces2=_interopRequireDefault(_interfaces),_config=require("./../../config.js"),_request=require("./../../utils/request.js"),_request2=_interopRequireDefault(_request),_clientUtil=require("./../../utils/clientUtil.js"),SOURCES={AHW:"发布作业",RHW:"批改作业",SHW:"提交作业",STN:"成功邀请",EXC:"兑换礼品"},Credit=function(e){function t(){var e,r,n,a;_classCallCheck(this,t);for(var i=arguments.length,u=Array(i),s=0;s<i;s++)u[s]=arguments[s];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.config={navigationBarTitleText:"我的积分",navigationBarBackgroundColor:"#fff"},n.data={user:null,list:null,currentPage:null,isLoading:!1,total:null,reload:!1},n.methods={toNext:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="1"===e.t0?3:"2"===e.t0?7:"3"===e.t0?11:15;break;case 3:return e.next=5,_wepy2.default.navigateTo({url:"/sp1/pages/invitation"});case 5:return this.reload=!0,e.abrupt("break",15);case 7:return e.next=9,_wepy2.default.navigateTo({url:"/sp1/pages/creditstate"});case 9:return this.reload=!0,e.abrupt("break",15);case 11:return e.next=13,_wepy2.default.navigateTo({url:"/sp1/pages/store?uid="+this.user.uid});case 13:return this.reload=!0,e.abrupt("break",15);case 15:case"end":return e.stop()}},e,this)}));return e}(),lower:function(e){this.refreshData()}},a=r,_possibleConstructorReturn(n,a)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initialize();case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"parseData",value:function(e){for(var t=0;t<e.length;t++)this.parseType(e[t]),e[t].time=this.parseDate(new Date(e[t].updated_at))}},{key:"parseType",value:function(e){return e.source_detail.hid&&e.homework?(e.type=e.homework.name,void(e.detail=e.sources.map(function(e){return SOURCES[e]}).join("、"))):e.source_detail.uids&&-1!=e.sources.indexOf("STN")?(e.type=e.sources.map(function(e){return SOURCES[e]}),void(e.detail="邀请好友"+e.source_detail.uids.length+"人")):e.source_detail.goods&&-1!=e.sources.indexOf("EXC")?(e.type=e.sources.map(function(e){return SOURCES[e]}),void(e.detail=e.source_detail.goods)):void 0}},{key:"parseDate",value:function(e){return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+this.addZero(e.getDate())}},{key:"addZero",value:function(e){return e<10?"0"+e:e}},{key:"onPullDownRefresh",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initialize();case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"initialize",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.showLoading({title:"加载中...",mask:!0});case 2:return e.next=4,_wepy2.default.$instance.logined();case 4:return t=e.sent,r=t.user,this.user=r,n={url:_config.api.user.point.url,data:{page:1}},e.next=10,(0,_request2.default)(n);case 10:return a=e.sent,i=a.data,this.list=i.result.list,this.total=i.result.pagination.total,this.currentPage=1,this.parseData(this.list),this.$apply(),e.next=19,_wepy2.default.stopPullDownRefresh();case 19:(0,_clientUtil.hideLoading)();case 20:case"end":return e.stop()}},e,this)}));return e}()},{key:"refreshData",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isLoading){e.next=2;break}return e.abrupt("return");case 2:if(!(this.list.length>=this.total)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,_wepy2.default.showLoading({title:"加载中...",mask:!0});case 6:return this.currentPage++,this.isLoading=!0,t={url:_config.api.user.point.url,data:{page:this.currentPage}},e.next=11,(0,_request2.default)(t);case 11:r=e.sent,n=r.data,a=n.result.list,this.list=this.list.concat(a),this.parseData(this.list),n.cmd&&(this.isLoading=!1),(0,_clientUtil.hideLoading)(),this.$apply();case 19:case"end":return e.stop()}},e,this)}));return e}()},{key:"onShow",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.reload){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.initialize();case 4:this.reload=!1;case 5:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Credit,"sp1/pages/credit")); 
 			}); 	require("sp1/pages/credit.js");
 		__wxRoute = 'sp1/pages/creditstate';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp1/pages/creditstate.js';	define("sp1/pages/creditstate.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_config=require("./../../config.js"),_request=require("./../../utils/request.js"),_request2=_interopRequireDefault(_request),State=function(e){function t(){var e,r,n,o;_classCallCheck(this,t);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),n.config={navigationBarTitleText:"积分说明",enablePullDownRefresh:!1,navigationBarBackgroundColor:"#fff"},n.data={a1:"可通过以下方式获得：<br />• 老师或家委登记作业，每份作业可获得5积分。<br />• 老师批改作业，每批改完一个学生作业可获得1积分。每份作业可能有多个学生作业，例如布置了一份语文作业，老师批改了20个学生作业，则老师能获得20积分。<br />• 家长提交作业，每提交一份作业可获得1积分。例如今天完成了数学作业、语文作业、英语作业共3份，则家长能获得3积分。<br />• 成功邀请新用户（分享小程序链接，新用户点击进入小程序），分享者可获得10积分。<br />",a2:"• 在积分商城进行兑换，兑换商品所需积分值须小于用户账户中可用的积分值，否则无法兑换。<br />• 完成兑换商品的积分支付后，将从用户积分账户中进行对应的积分值扣除。<br />• 积分兑换商品不支持无理由退换。如遇质量问题，可在收到商品后7天内联系客服进行退换货协商。若发生退货，退货订单完成后，用户所支付的积分将会返还。<br />"},o=r,_possibleConstructorReturn(n,o)}return _inherits(t,e),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(State,"sp1/pages/creditstate")); 
 			}); 	require("sp1/pages/creditstate.js");
 		__wxRoute = 'sp1/pages/invitation';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp1/pages/invitation.js';	define("sp1/pages/invitation.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,i){try{var o=t[a](i),u=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_interfaces=require("./../../interfaces/index.js"),_interfaces2=_interopRequireDefault(_interfaces),_config=require("./../../config.js"),_request=require("./../../utils/request.js"),_request2=_interopRequireDefault(_request),_clientUtil=require("./../../utils/clientUtil.js"),Credit=function(e){function t(){var e,r,n,a;_classCallCheck(this,t);for(var i=arguments.length,o=Array(i),u=0;u<i;u++)o[u]=arguments[u];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.config={navigationBarBackgroundColor:"#fff",navigationBarTitleText:"我的邀请",enablePullDownRefresh:!1},n.data={user:{uid:null},list:null,currentPage:1,isLoading:!1,total:null,total_point:null},n.methods={lower:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshData();case 2:case"end":return e.stop()}},e,this)}));return e}(),toNext:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.navigateTo({url:"/sp1/pages/creditstate"});case 2:case"end":return e.stop()}},e,this)}));return e}()},a=r,_possibleConstructorReturn(n,a)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_request2.default)({url:_config.api.user.share.url,data:{page:1}});case 2:t=e.sent,r=t.data,this.list=r.result.list,this.parseData(this.list),this.total=r.result.pagination.total,this.total_point=r.result.total_point,this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"refreshData",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isLoading){e.next=2;break}return e.abrupt("return");case 2:if(!(this.list.length>=this.total)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,_wepy2.default.showLoading({title:"加载中...",mask:!0});case 6:return this.currentPage++,this.isLoading=!0,t={url:_config.api.user.share.url,data:{page:this.currentPage}},e.next=11,(0,_request2.default)(t);case 11:r=e.sent,n=r.data,a=n.result.list,this.list=this.list.concat(a),this.parseData(this.list),n.cmd&&(this.isLoading=!1),(0,_clientUtil.hideLoading)(),this.$apply();case 19:case"end":return e.stop()}},e,this)}));return e}()},{key:"parseData",value:function(e){for(var t=0;t<e.length;t++)e[t].time=this.parseDate(new Date(e[t].created_at))}},{key:"parseDate",value:function(e){return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+this.addZero(e.getDate())}},{key:"addZero",value:function(e){return e<10?"0"+e:e}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Credit,"sp1/pages/invitation")); 
 			}); 	require("sp1/pages/invitation.js");
 		__wxRoute = 'sp1/pages/notification_setting';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp1/pages/notification_setting.js';	define("sp1/pages/notification_setting.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(i,a){try{var s=t[i](a),o=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_slicedToArray=function(){function e(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{!n&&o.return&&o.return()}finally{if(i)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_dec,_class,_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_config=require("./../../config.js"),_request=require("./../../utils/request.js"),_request2=_interopRequireDefault(_request),_delay=require("./../../utils/delay.js"),_delay2=_interopRequireDefault(_delay),_dateUtil=require("./../../utils/dateUtil.js"),_clientUtil=require("./../../utils/clientUtil.js"),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),NotificationSettingPage=(_dec=(0,_wepyRedux.connect)({group:function(e){return e.group.detail||null}},{getOrFetchGroup:_actions.getOrFetchGroup}))(_class=function(e){function t(){var e,r,n,i;_classCallCheck(this,t);for(var a=arguments.length,s=Array(a),o=0;o<a;o++)s[o]=arguments[o];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.config={navigationBarTitleText:"提醒设置",enablePullDownRefresh:!1},n.data={gid:null,user:{},settings:[{key:"joinedMsg2Admin",checked:!0,visible:!1,isVisible:function(e,t){return e.uid===t.admin_uid},text:"接收新成员加入班级提醒"},{key:"doneMsg2Admin",checked:!0,visible:!1,isVisible:function(e,t){return"T"===t.partner.type||t.partner.proxy},text:"接收作业完成通知"},{key:"approveMsg",checked:!0,visible:!1,isVisible:function(e,t){return"P"===t.partner.type||"S"===t.partner.type},text:"接收批改结果提醒"},{key:"dailyWorkMsg",checked:!0,visible:!1,isVisible:function(e,t){return"T"===t.partner.type},text:"接收打卡作业情况提醒"},{key:"ratingReplyMsg",checked:!0,visible:!1,isVisible:function(e,t){return"T"===t.partner.type||t.partner.proxy},text:"接收评分回复通知"},{key:"evaluationMsg",checked:!0,visible:!1,isVisible:function(e,t){return"P"===t.partner.type||"S"===t.partner.type},text:"接收课堂表现通知"},{key:"homeworkSms",checked:!0,visible:!1,isVisible:function(e,t){var r=t.partner.notification&&t.partner.notification.hasOwnProperty("homeworkMsg");return("P"===t.partner.type||"S"===t.partner.type)&&r},vipOnly:!0,text:"接收作业布置提醒(发送短信)"},{key:"homeworkMsg",checked:!0,visible:!1,isVisible:function(e,t){return"P"===t.partner.type||"S"===t.partner.type},vipOnly:!0,text:"接收作业布置提醒(公众号通知)"},{key:"scoreMsg",checked:!0,visible:!1,isVisible:function(e,t){return"P"===t.partner.type||"S"===t.partner.type},vipOnly:!0,text:"接收考试成绩通知"},{key:"alertMsg",checked:!0,visible:!1,isVisible:function(e,t){return"P"===t.partner.type||"S"===t.partner.type},vipOnly:!0,text:"接收班级公告通知"},{key:"dialogMsg",checked:!1,visible:!1,isVisible:function(e,t){return"T"===t.partner.type||t.partner.proxy||t.admin_uid===e.uid},text:"私信免打扰",ranges:["00:00","23:59"]}]},n.computed={contactSession:function(){var e=this.user;return e&&JSON.stringify({nickName:e.nickName,avatarUrl:e.avatar})},myVip:function(){var e=this.group||{},t=e.vips,r=void 0===t?[]:t,n=e.partner;return n&&r.find(function(e){return e.uid===n.uid})},isVip:function(){var e=this.myVip,t=this.group,r=(this.user,t||{}),n=r.vip_expired_at;return e||n&&new Date(n)>=new Date}},n.methods={toVipInfo:function(){_wepy2.default.navigateTo({url:"/pages/vip_feature?gid="+this.gid})},settingChange:function(e,t){this.settings.find(function(t){return t.key===e}).checked=t.detail.value},save:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,i,a,s,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.settings,n=this.gid,i=this.isVip,e.prev=1,a={gid:n},r.forEach(function(e){if(e.visible&&(!e.vipOnly||i)&&(a[e.key]=e.checked,"dialogMsg"===e.key&&e.checked)){var t=_slicedToArray(e.ranges,2),r=t[0],n=t[1],s=r.split(":"),o=_slicedToArray(s,2),u=o[0],c=o[1],l=n.split(":"),p=_slicedToArray(l,2),f=p[0],d=p[1],y=new Date,g=new Date;y.setHours(u),y.setMinutes(c),g.setHours(f),g.setMinutes(d),y>=g&&g.setDate(g.getDate()+1),a[e.key]=[y.toISOString(),g.toISOString()]}}),s={url:_config.api.user.notificationSetting.url,data:a},e.next=7,(0,_request2.default)(s);case 7:if(o=e.sent,!o.data.cmd||!o.data.result){e.next=21;break}return e.next=11,this.methods.getOrFetchGroup(this.gid,!0);case 11:return e.next=13,this.getSettings();case 13:return this.settings=e.sent,this.$apply(),_wepy2.default.showToast({title:"设置成功",icon:"success",duration:1500}),e.next=18,(0,_delay2.default)(1500);case 18:_wepy2.default.navigateBack(),e.next=22;break;case 21:throw new Error(o.data.msg);case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(1),_wepy2.default.showModal({title:"提示",content:e.t0.message||"设置出错",showCancel:!1});case 27:case"end":return e.stop()}},e,this,[[1,24]])}));return e}(),bindDateStartChange:function(e){var t=this.settings,r=t.find(function(e){return"dialogMsg"===e.key});r&&r.ranges.splice(0,1,e.detail.value)},bindDateEndChange:function(e){var t=this.settings,r=t.find(function(e){return"dialogMsg"===e.key});r&&r.ranges.splice(1,1,e.detail.value)}},i=r,_possibleConstructorReturn(n,i)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.gid=t.gid,this.$apply();case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"onShow",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return _wepy2.default.showLoading({title:"加载中",mask:!0}),e.next=3,_wepy2.default.$instance.logined(!0);case 3:return t=e.sent,r=t.user,this.user=r,e.next=8,this.methods.getOrFetchGroup(this.gid);case 8:return e.next=10,this.getSettings();case 10:this.settings=e.sent,this.$apply(),(0,_clientUtil.hideLoading)();case 13:case"end":return e.stop()}},e,this)}));return e}()},{key:"getSettings",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.settings,r=this.user,n=this.group,i=this.group.partner,t=t.map(function(e){return _extends({},e,{visible:e.isVisible(r,n)})}),i&&i.notification&&t.forEach(function(e){if(e.key in i.notification){var t=i.notification[e.key];e.checked=Boolean(t),"dialogMsg"===e.key&&(e.ranges=t?[(0,_dateUtil.getTimeStr)(t[0]),(0,_dateUtil.getTimeStr)(t[1])]:["00:00","23:59"])}}),e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page))||_class;Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(NotificationSettingPage,"sp1/pages/notification_setting")); 
 			}); 	require("sp1/pages/notification_setting.js");
 		__wxRoute = 'sp1/pages/ledger';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp1/pages/ledger.js';	define("sp1/pages/ledger.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function a(n,i){try{var u=t[n](i),s=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}return a("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_dec,_class,_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_dateformat=require("./../../utils/dateformat.js"),_dateformat2=_interopRequireDefault(_dateformat),_timeformat=require("./../../utils/timeformat.js"),_timeformat2=_interopRequireDefault(_timeformat),_clientUtil=require("./../../utils/clientUtil.js"),_config=require("./../../config.js"),_request=require("./../../utils/request.js"),_request2=_interopRequireDefault(_request),_upload=require("./../../utils/upload.js"),_upload2=_interopRequireDefault(_upload),_cdnurl=require("./../../utils/cdnurl.js"),_cdnurl2=_interopRequireDefault(_cdnurl),_loading=require("./../../mixins/loading.js"),_loading2=_interopRequireDefault(_loading),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),LedgerPage=(_dec=(0,_wepyRedux.connect)({group:function(e){return e.group.detail||null}}))(_class=function(e){function t(){var e,r,a,n;_classCallCheck(this,t);for(var i=arguments.length,u=Array(i),s=0;s<i;s++)u[s]=arguments[s];return r=a=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.config={navigationBarTitleText:"明细"},a.data={gid:null,lid:null,user:{},group:{},type:[{value:"C",name:"支出"},{value:"I",name:"收入"}],typeIndex:"C",images:[],files:[],date:(0,_dateformat2.default)(new Date),time:(0,_timeformat2.default)(new Date),name:"",price:null,remark:"",record_man:"",avatar:"",creator:null,size:"-128"},a.mixins=[_loading2.default],a.methods={bindTypeChange:function(e){this.typeIndex=e.detail.value},bindDateChange:function(e){this.date=(0,_dateformat2.default)(e.detail.value)},bindTimeChange:function(e){this.time=e.detail.value},chooseImage:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_clientUtil.chooseImage)({count:9-this.images.length});case 2:r=e.sent,a=r.tempFilePaths,(t=this.images).push.apply(t,_toConsumableArray(a)),this.$apply();case 6:case"end":return e.stop()}},e,this)}));return e}(),previewImage:function(e,t){_wepy2.default.previewImage({current:e,urls:t})},deleteImage:function(e){this.images.splice(e,1),this.$apply()},save:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,a,n,i,u,s,o,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.showLoading({title:"提交中...",mask:!0});case 2:if(this.name=t.detail.value.name,this.price=t.detail.value.price,this.remark=t.detail.value.remark,e.prev=5,this.name){e.next=8;break}throw new Error("内容不能为空");case 8:if(this.price){e.next=10;break}throw new Error("金额不能为空");case 10:e.next=18;break;case 12:return e.prev=12,e.t0=e.catch(5),(0,_clientUtil.hideLoading)(),e.next=17,_wepy2.default.showModal({title:"提示",content:e.t0.message||"保存账目出错",showCancel:!1});case 17:return e.abrupt("return");case 18:return r=(100*parseFloat(this.price)).toFixed(0),"C"==this.typeIndex&&(r=-r),a=this.date+" "+this.time,e.prev=21,n={name:this.name,price:""+r,date:a,remark:this.remark,gid:this.gid},e.next=25,(0,_request2.default)({url:_config.api.ledger.create.url,data:n});case 25:if(i=e.sent,!i.data.cmd){e.next=51;break}if(u=i.data.result.id,!(this.images.length>0)){e.next=49;break}s=0;case 30:if(!(s<this.images.length)){e.next=49;break}return o=this.images[s],l=this.gid+"/ledger/"+u+"/image/"+(s+1)+"/"+Date.now(),e.prev=33,e.next=36,(0,_upload2.default)({url:_config.qiniu,filePath:o,name:"file",formData:{key:l,ledger_record_id:u,flag:"ledger"}});case 36:e.next=46;break;case 38:return e.prev=38,e.t1=e.catch(33),e.next=42,(0,_request2.default)({url:_config.api.ledger.delete.url,data:{ledger_record_id:u}});case 42:return(0,_clientUtil.hideLoading)(),e.next=45,_wepy2.default.showModal({title:"保存账目失败",content:e.t1.message||"上传附图出错!",showCancel:!1});case 45:return e.abrupt("return",e.sent);case 46:s++,e.next=30;break;case 49:e.next=52;break;case 51:throw new Error(i.data.msg);case 52:return(0,_clientUtil.hideLoading)(),e.next=55,_wepy2.default.showToast({title:"保存成功",icon:"success",duration:2e3,mask:!0});case 55:return e.next=57,_wepy2.default.navigateBack({delta:1});case 57:return e.abrupt("return",e.sent);case 60:return e.prev=60,e.t2=e.catch(21),(0,_clientUtil.hideLoading)(),e.next=65,_wepy2.default.showModal({title:"提示",content:e.t2.message||"保存账目出错",showCancel:!1});case 65:return e.abrupt("return");case 66:case"end":return e.stop()}},e,this,[[5,12],[21,60],[33,38]])}));return e}(),deleteLedger:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.showModal({title:"提示",content:"确认删除这条明细吗?"});case 2:if(t=e.sent,t.confirm){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,(0,_request2.default)({url:_config.api.ledger.delete.url,data:{ledger_record_id:this.lid}});case 7:if(r=e.sent,!r.data||!r.data.cmd){e.next=14;break}return e.next=11,_wepy2.default.showModal({title:"提示",content:"删除成功",showCancel:!1});case 11:return e.next=13,_wepy2.default.navigateBack({delta:1});case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}},e,this)}));return e}()},n=r,_possibleConstructorReturn(a,n)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.lid=t.lid,e.next=3,this.showLoading({title:"加载中",mask:!0});case 3:return e.next=5,this.hideLoading();case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"onRoute",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,a,n,i,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.gid=this.group?this.group.gid:null,e.next=3,_wepy2.default.$instance.logined();case 3:return t=e.sent,r=t.user,this.user=r,this.$apply(),this.date=(0,_dateformat2.default)(new Date),this.record_man="",this.typeIndex="C",this.images=[],this.name="",this.price=null,this.remark="",this.avatar="",e.next=17,_wepy2.default.showLoading({title:"加载中...",mask:!0});case 17:if(!this.lid){e.next=36;break}return a={url:_config.api.ledger.record.url,data:{ledger_record_id:this.lid}},e.next=21,(0,_request2.default)(a);case 21:n=e.sent,i=n.data.result,this.gid=i.gid,this.name=i.name,this.price=(i.price/100).toFixed(2),this.remark=i.remark,this.remark||(this.remark="未填写"),this.date=(0,_dateformat2.default)(i.date),this.time=(0,_timeformat2.default)(i.date),this.record_man=i.user.nickname,this.avatar=i.user.avatar,this.creator=i.user,this.price<0?this.typeIndex="C":this.typeIndex="I",i.images&&(u=(0,_cdnurl2.default)(i.images,null),this.files=i.images.map(function(e){return{thumbnail:(0,_cdnurl2.default)(e,64),url:(0,_cdnurl2.default)(e,null),list:u}})),this.$apply();case 36:(0,_clientUtil.hideLoading)();case 37:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page))||_class;Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(LedgerPage,"sp1/pages/ledger")); 
 			}); 	require("sp1/pages/ledger.js");
 		__wxRoute = 'sp1/pages/ledgerlist';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp1/pages/ledgerlist.js';	define("sp1/pages/ledgerlist.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var i=t[a](o),s=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_dec,_class,_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_config=require("./../../config.js"),_request=require("./../../utils/request.js"),_request2=_interopRequireDefault(_request),_dateformat=require("./../../utils/dateformat.js"),_dateformat2=_interopRequireDefault(_dateformat),_timeformat=require("./../../utils/timeformat.js"),_timeformat2=_interopRequireDefault(_timeformat),_loading=require("./../../mixins/loading.js"),_loading2=_interopRequireDefault(_loading),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),_showVipRenewalIfNearExpired=require("./../../utils/showVipRenewalIfNearExpired.js"),_showVipRenewalIfNearExpired2=_interopRequireDefault(_showVipRenewalIfNearExpired),Ledgerlist=(_dec=(0,_wepyRedux.connect)({group:function(e){return e.group.detail||null}},{getOrFetchGroup:_actions.getOrFetchGroup}))(_class=function(e){function t(){var e,r,n,a;_classCallCheck(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.config={navigationBarTitleText:"账本",usingComponents:{"vip-renewal-modal":"/wx_components/vip_renewal_modal/index","join-group-footer":"/wx_components/join_group_footer/index"}},n.data={user:null,group:null,records:[],income:0,expense:0,balance:0,incomeText:"0.0",expenseText:"0.0",balanceText:"0.0",page:1,pageTotal:1,loadingList:!1,scrollViewHeight:467},n.mixins=[_loading2.default],n.methods={showNum:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.hideToast();case 2:return e.next=4,_wepy2.default.showToast({title:t,icon:"none",duration:3e3,mask:!1});case 4:case"end":return e.stop()}},e,this)}));return e}(),toLedger:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.navigateTo({url:"/sp1/pages/ledger"});case 2:case"end":return e.stop()}},e,this)}));return e}(),toLedgerDetail:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.navigateTo({url:"/sp1/pages/ledger?lid="+t});case 2:case"end":return e.stop()}},e,this)}));return e}(),onPageScroll:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.loadingList,r=this.page,n=this.pageTotal,t||!(1===r||1!=r&&n>=r+1)){e.next=6;break}return e.next=4,this.getRecords(r+1);case 4:this.page+=1,this.$apply();case 6:case"end":return e.stop()}},e,this)}));return e}()},a=r,_possibleConstructorReturn(n,a)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,o=t.gid;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.gid=o,e.next=3,this.showLoading({title:"加载中",mask:!0});case 3:return r=_wepy2.default.getSystemInfoSync(),n=r.pixelRatio,a=r.screenHeight,this.scrollViewHeight=a-80-120,e.next=7,this.hideLoading();case 7:this.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"onPullDownRefresh",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshData(!0);case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"onShow",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshData();case 2:(0,_showVipRenewalIfNearExpired2.default)(this);case 3:case"end":return e.stop()}},e,this)}));return e}()},{key:"refreshData",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.$instance.logined();case 2:return this.user=e.sent.user,e.next=5,this.methods.getOrFetchGroup(this.gid,t);case 5:this.records=[],this.page=1,this.$apply(),this.getRecords();case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"getRecords",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,a=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loadingList=!0,t={url:_config.api.ledger.list.url,data:{gid:this.gid,page:o,pageSize:10}},e.next=4,(0,_request2.default)(t);case 4:return r=e.sent,t={url:_config.api.ledger.detail.url,data:{gid:this.gid}},e.next=8,(0,_request2.default)(t);case 8:return n=e.sent,r.data&&r.data.cmd&&n.data&&n.data.cmd&&function(){for(var e=r.data.result,t=e.list,i=e.pagination,s=n.data.result,u=s.income,c=s.expense,l=s.balance,p=0;p<t.length;p++)!function(e){var r=t[e].price/100;t[e].price=r,t[e].priceText=(r<0?"-":"")+"￥"+a.formatAmount(r),t[e].isVipUser=a.group.vips.findIndex(function(r){return r.uid===t[e].uid})>-1}(p);a.pageTotal=Math.ceil(i.total/i.pageSize)||0,a.records=1===o?t:[].concat(_toConsumableArray(a.records),_toConsumableArray(t));for(var p=0;p<a.records.length;p++)a.records[p].day=(0,_dateformat2.default)(a.records[p].date),a.records[p].time=(0,_timeformat2.default)(a.records[p].date);a.income=Math.abs((u/100).toFixed(2)),a.expense=Math.abs((c/100).toFixed(2)),a.balance=(l/100).toFixed(2),a.incomeText="￥"+a.formatAmount(u/100),a.expenseText="￥"+a.formatAmount(c/100),a.balanceText=(l<0?"-":"")+"￥"+a.formatAmount(l/100)}(),e.next=12,_wepy2.default.stopPullDownRefresh();case 12:this.loadingList=!1,this.$apply();case 14:case"end":return e.stop()}},e,this)}));return e}()},{key:"formatAmount",value:function(e){e=Math.abs(e);var t=function(e){return(Math.floor(100*e)/100).toFixed(2).replace(".00","")};return e/Math.pow(10,8)>=1?(console.log(e/Math.pow(10,8)),t(e/Math.pow(10,8))+"亿"):e/Math.pow(10,7)>=1?t(e/Math.pow(10,7))+"千万":e/1e4>=1?t(e/1e4)+"万":e}},{key:"onShareAppMessage",value:function(){_wepy2.default.$instance.onShareAppMessage();return{title:"快看看'作业登记簿'啦!",path:"/sp1/pages/ledgerlist?gid="+this.gid}}}]),t}(_wepy2.default.page))||_class;Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Ledgerlist,"sp1/pages/ledgerlist")); 
 			}); 	require("sp1/pages/ledgerlist.js");
 		__wxRoute = 'sp1/pages/createAdward';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp1/pages/createAdward.js';	define("sp1/pages/createAdward.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,i){try{var u=t[a](i),s=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_dec,_class,_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_config=require("./../../config.js"),_request=require("./../../utils/request.js"),_request2=_interopRequireDefault(_request),_cdnurl=require("./../../utils/cdnurl.js"),_cdnurl2=_interopRequireDefault(_cdnurl),_upload=require("./../../utils/upload.js"),_upload2=_interopRequireDefault(_upload),_deepclone=require("./../../utils/deepclone.js"),_deepclone2=_interopRequireDefault(_deepclone),_delay=require("./../../utils/delay.js"),_delay2=_interopRequireDefault(_delay),_sensitiveWordChecker=require("./../../utils/sensitiveWordChecker.js"),_sensitiveWordChecker2=_interopRequireDefault(_sensitiveWordChecker),_interfaces=require("./../../interfaces/index.js"),_interfaces2=_interopRequireDefault(_interfaces),_dateformat=require("./../../utils/dateformat.js"),_dateformat2=_interopRequireDefault(_dateformat),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),_clientUtil=require("./../../utils/clientUtil.js"),CreateAdward=(_dec=(0,_wepyRedux.connect)({group:function(e){return e.group.detail||null}},{getOrFetchGroup:_actions.getOrFetchGroup}))(_class=function(e){function t(){var e,r,n,a;_classCallCheck(this,t);for(var i=arguments.length,u=Array(i),s=0;s<i;s++)u[s]=arguments[s];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.config={navigationBarTitleText:"新建奖状"},n.data={collection_id:null,gid:null,name:"",member:"",remark:"",memberIndex:-1,memberList:[],user:null,group:null},n.computed={},n.methods={onNameChange:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.name=t.detail.value,this.$apply();case 2:case"end":return e.stop()}},e,this)}));return e}(),onMemberChange:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.memberIndex=t.detail.value,this.$apply();case 2:case"end":return e.stop()}},e,this)}));return e}(),onRemarkChange:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.remark=t.detail.value,this.$apply();case 2:case"end":return e.stop()}},e,this)}));return e}(),toNext:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_delay2.default)(300);case 2:if(this.name&&!(this.name.length>10)){e.next=6;break}return e.next=5,_wepy2.default.showModal({title:"提示",content:"奖励名称需1-20个字符",showCancel:!1});case 5:return e.abrupt("return",e.sent);case 6:if(-1!==this.memberIndex){e.next=10;break}return e.next=9,_wepy2.default.showModal({title:"提示",content:"请选择学生",showCancel:!1});case 9:return e.abrupt("return",e.sent);case 10:return e.next=12,_wepy2.default.showLoading({title:"正在生成奖状...",mask:!0});case 12:return e.next=14,this.drawAdward();case 14:return t=e.sent,e.next=17,_wepy2.default.showLoading({title:"正在保存...",mask:!0});case 17:return e.next=19,this.saveAdward(t);case 19:if(r=e.sent,(0,_clientUtil.hideLoading)(),!r){e.next=27;break}return e.next=24,(0,_clientUtil.setStorageSync)("FILE_LIST_NEED_REFRESH",!0);case 24:return e.next=26,_wepy2.default.navigateBack();case 26:return e.abrupt("return",e.sent);case 27:case"end":return e.stop()}},e,this)}));return e}()},a=r,_possibleConstructorReturn(n,a)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,i=t.collection_id,u=t.gid;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.collection_id=i,this.gid=u,this.$apply(),e.next=5,_wepy2.default.$instance.logined();case 5:return r=e.sent,n=r.user,this.user=n,e.next=10,this.methods.getOrFetchGroup(u);case 10:if(a=this.group){e.next=19;break}return e.next=14,_wepy2.default.showModal({title:"提示",content:"获取班级信息出错",showCancel:!1});case 14:return e.next=16,_wepy2.default.nagativeBack();case 16:return e.abrupt("return",e.sent);case 19:if(a.members){e.next=25;break}return e.next=22,_wepy2.default.showModal({title:"提示",content:"班级未设置学生花名册",showCancel:!1});case 22:return e.next=24,_wepy2.default.nagativeBack();case 24:return e.abrupt("return",e.sent);case 25:this.memberList=Object.keys(a.members).map(function(e){return a.members[e]}),this.$apply();case 27:case"end":return e.stop()}},e,this)}));return e}()},{key:"drawAdward",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,a,i,u,s,o,c,l,p,d,f=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.name,r=this.group,n=this.remark,a=this.user,i=this.memberList,u=this.memberIndex,e.next=3,_wepy2.default.createCanvasContext("sharecanvas");case 3:return s=e.sent,o=(0,_cdnurl2.default)("honor/honor.png",null,!0),e.next=7,_wepy2.default.downloadFile({url:o});case 7:return c=e.sent,l=c.tempFilePath,s.drawImage(l,0,0,800,565),s.restore(),s.save(),s.setTextBaseline("top"),s.setTextAlign("center"),s.setFillStyle("#8c4a1e"),s.setFontSize(40),s.fillText(t||"奖  状",400,122),s.setFontSize(16),s.fillText(r.school||"",400,200),s.fillText(n||"",400,286),s.setFillStyle("#000000"),s.setFontSize(12),s.fillText(a.nickname||"",258,353),s.fillText((0,_dateformat2.default)(new Date)||"",554,353),s.setFontSize(28),s.fillText(i[u]||"",400,235),s.restore(),s.save(),e.next=30,s.draw();case 30:return e.next=32,_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){setTimeout(_asyncToGenerator(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e();case 1:case"end":return t.stop()}},t,f)})),600)}));case 1:case"end":return e.stop()}},e,f)}))();case 32:return e.next=34,_wepy2.default.canvasToTempFilePath({canvasId:"sharecanvas",width:800,height:565,destWidth:800,destHeight:565});case 34:return p=e.sent,d=p.tempFilePath,e.abrupt("return",d);case 37:case"end":return e.stop()}},e,this)}));return e}()},{key:"saveAdward",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,i,u,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return _wepy2.default.showLoading({title:"保存中...",mask:!0}),e.next=3,(0,_delay2.default)(400);case 3:return r=this.collection_id,e.next=6,(0,_request2.default)({url:_config.api.file.create.url,data:{collection_id:r}});case 6:if(n=e.sent,a=n.data,a.cmd){e.next=13;break}return(0,_clientUtil.hideLoading)(),e.next=12,_wepy2.default.showModal({title:"提示",content:"获取上传凭据失败",showCancel:!1});case 12:return e.abrupt("return");case 13:return i=a.result.id,u=this.gid+"/collection/"+r+"/file/"+i+"/adward/1/"+Date.now(),e.next=17,(0,_upload2.default)({url:_config.qiniu,filePath:t,name:"file",formData:{key:u,file_id:i,type:"adward",flag:"collection"}});case 17:return s=e.sent,(0,_clientUtil.hideLoading)(),e.next=21,_wepy2.default.showModal({title:"提示",content:s?"保存奖状成功":"保存奖状出错",showCancel:!1});case 21:return e.abrupt("return",s);case 22:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page))||_class;Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(CreateAdward,"sp1/pages/createAdward")); 
 			}); 	require("sp1/pages/createAdward.js");
 		__wxRoute = 'sp1/pages/update_info';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp1/pages/update_info.js';	define("sp1/pages/update_info.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_config=require("./../../config.js"),UpdateInfo=function(e){function t(){var e,n,o,r;_classCallCheck(this,t);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return n=o=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.config={navigationBarTitleText:"更新内容",enablePullDownRefresh:!0,usingComponents:{"wechat-work-cell":"plugin://contactPlugin/cell"}},o.data={UPDATE_TIPS:_config.UPDATE_TIPS,VERSION:_config.VERSION},o.methods={goBack:function(){_wepy2.default.navigateBack()}},r=n,_possibleConstructorReturn(o,r)}return _inherits(t,e),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(UpdateInfo,"sp1/pages/update_info")); 
 			}); 	require("sp1/pages/update_info.js");
 		__wxRoute = 'sp1/pages/personal';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp1/pages/personal.js';	define("sp1/pages/personal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var u=t[a](o),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_config=require("./../../config.js"),_request=require("./../../utils/request.js"),_request2=_interopRequireDefault(_request),_fileUtil=require("./../../utils/fileUtil.js"),Personal=function(e){function t(){var e,r,n,a;_classCallCheck(this,t);for(var o=arguments.length,u=Array(o),i=0;i<o;i++)u[i]=arguments[i];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.config={navigationBarTitleText:"个人中心"},n.data={user:null},n.methods={goCredit:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.navigateTo({url:"/sp1/pages/credit"});case 2:case"end":return e.stop()}},e,this)}));return e}(),clearStorage:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(0,_fileUtil.clearSpace)(),_wepy2.default.showToast({title:"清理成功",icon:"success",duration:1500,mask:!0});case 2:case"end":return e.stop()}},e,this)}));return e}()},a=r,_possibleConstructorReturn(n,a)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return e}()},{key:"onPullDownRefresh",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshData();case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"onShow",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshData();case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"refreshData",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_request2.default)({url:_config.api.user.detail.url});case 3:t=e.sent,r=t.data.result,n=r.user,n.balance&&(n.balanceText=(n.balance/100).toFixed(2)),this.user=n,this.$apply(),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,_wepy2.default.showModal({title:"提示",content:e.t0.message||"获取用户信息出错,请稍后再试",showCancel:!1});case 15:case"end":return e.stop()}},e,this,[[0,11]])}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Personal,"sp1/pages/personal")); 
 			}); 	require("sp1/pages/personal.js");
 		__wxRoute = 'sp1/pages/webpage';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp1/pages/webpage.js';	define("sp1/pages/webpage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),Webpage=function(e){function t(){var e,r,n,o;_classCallCheck(this,t);for(var a=arguments.length,u=Array(a),i=0;i<a;i++)u[i]=arguments[i];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.config={navigationBarTitleText:"使用手册",enablePullDownRefresh:!0},n.data={url:""},n.methods={},o=r,_possibleConstructorReturn(n,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){this.url=decodeURIComponent(e.url)}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Webpage,"sp1/pages/webpage")); 
 			}); 	require("sp1/pages/webpage.js");
 	