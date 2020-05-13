/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx6=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx6:"+m)}
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
var z=__WXML_GLOBAL__.ops_set.$gwx6 || [];
function gz$gwx6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_1)return __WXML_GLOBAL__.ops_cached.$gwx6_1
__WXML_GLOBAL__.ops_cached.$gwx6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[7],[3,'isAdmin']])
Z([3,'save'])
Z([3,'page__bd'])
Z([1,true])
Z([3,'cmn__cells'])
Z([[2,'&&'],[[7],[3,'gid']],[[2,'>'],[[6],[[7],[3,'group']],[3,'status']],[1,0]]])
Z([3,'bindStatusChange'])
Z([3,'selector'])
Z([[7],[3,'STATUES']])
Z([[7],[3,'statusIndex']])
Z([[2,'!='],[[7],[3,'value']],[1,0]])
Z([[2,'!'],[[7],[3,'gid']]])
Z([[2,'||'],[[6],[[7],[3,'dirty']],[3,'phone']],[[2,'!'],[[7],[3,'gettingPhone']]]])
Z([[7],[3,'gid']])
Z([3,'attach-img-container weui-cell__bd'])
Z([[7],[3,'avatar']])
Z([[2,'!'],[[7],[3,'avatar']]])
Z([3,'chooseImage'])
Z([3,'choose-image-btn'])
Z(z[17])
Z(z[14])
Z([[7],[3,'needPwd']])
Z(z[5])
Z([[2,'!'],[[7],[3,'enroll_id']]])
Z([3,'idx'])
Z([3,'student'])
Z([[7],[3,'students']])
Z(z[25])
Z([[6],[[7],[3,'students']],[3,'length']])
Z([3,'weui-cell weui-cell_input'])
Z([3,'showOptionList'])
Z([3,'weui-cell__hd'])
Z([[7],[3,'idx']])
Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'members_remark']],[[7],[3,'idx']]],[1,null]],[1,null],[[6],[[7],[3,'members_remark']],[[7],[3,'idx']]]])
Z([[2,'!='],[[6],[[7],[3,'members_remark']],[[7],[3,'idx']]],[1,null]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'enroll_id']]],[[2,'||'],[[2,'!'],[[7],[3,'gid']]],[[2,'=='],[[7],[3,'idx']],[[2,'-'],[[6],[[7],[3,'students']],[3,'length']],[1,1]]]]])
Z([[2,'&&'],[[2,'>'],[[7],[3,'countIndex']],[[2,'-'],[1,1]]],[[2,'<'],[[7],[3,'countIndex']],[[2,'-'],[1,99],[1,1]]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'gid']],[[7],[3,'group']]],[[2,'!'],[[7],[3,'isAdmin']]]],[[2,'!'],[[7],[3,'hasMembers']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx6_1);return __WXML_GLOBAL__.ops_cached.$gwx6_1
}
function gz$gwx6_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_2)return __WXML_GLOBAL__.ops_cached.$gwx6_2
__WXML_GLOBAL__.ops_cached.$gwx6_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'$tipsmodal$visible']])
Z([3,'cmpt__base-modal__inner'])
Z([[2,'==='],[[7],[3,'$tipsmodal$showClose']],[1,'true']])
Z([3,'cmpt__base-modal__content'])
Z([3,'content'])
Z([[2,'==='],[[7],[3,'$tipsmodal$showLogo']],[1,'true']])
})(__WXML_GLOBAL__.ops_cached.$gwx6_2);return __WXML_GLOBAL__.ops_cached.$gwx6_2
}
function gz$gwx6_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_3)return __WXML_GLOBAL__.ops_cached.$gwx6_3
__WXML_GLOBAL__.ops_cached.$gwx6_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'joinGroup'])
Z([3,'page__bd'])
Z([1,true])
Z([3,'flex-shrink:0;'])
Z([[2,'&&'],[[6],[[7],[3,'group']],[3,'password']],[[2,'!='],[[6],[[7],[3,'group']],[3,'admin_uid']],[[6],[[7],[3,'user']],[3,'uid']]]])
Z([[7],[3,'showTipsModal']])
})(__WXML_GLOBAL__.ops_cached.$gwx6_3);return __WXML_GLOBAL__.ops_cached.$gwx6_3
}
function gz$gwx6_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx6_4)return __WXML_GLOBAL__.ops_cached.$gwx6_4
__WXML_GLOBAL__.ops_cached.$gwx6_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page__bd'])
Z([[2,'!='],[[6],[[7],[3,'group']],[3,'admin_uid']],[[6],[[7],[3,'operator']],[3,'uid']]])
Z([3,'save'])
Z([1,true])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'group']],[3,'admin_uid']],[[6],[[7],[3,'operator']],[3,'uid']]],[[2,'==='],[[6],[[6],[[7],[3,'group']],[3,'partner']],[3,'uid']],[[6],[[7],[3,'operator']],[3,'uid']]]])
Z([3,'weui-cells weui-cells_after-title'])
Z([[2,'!='],[[7],[3,'roleValue']],[1,'S']])
Z([3,'weui-cell weui-cell_input weui-cell_vcode'])
Z([[2,'||'],[[6],[[7],[3,'dirty']],[3,'phone']],[[2,'!'],[[7],[3,'gettingPhone']]]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'operator']],[3,'uid']],[[6],[[7],[3,'partner']],[3,'uid']]],[[2,'==='],[[7],[3,'from']],[1,'join_confirm']]])
Z([[2,'||'],[[2,'=='],[[7],[3,'roleValue']],[1,'P']],[[2,'=='],[[7],[3,'roleValue']],[1,'S']]])
Z([[2,'&&'],[[2,'||'],[[2,'=='],[[7],[3,'roleValue']],[1,'P']],[[2,'=='],[[7],[3,'roleValue']],[1,'S']]],[[2,'=='],[[6],[[7],[3,'operator']],[3,'uid']],[[6],[[7],[3,'group']],[3,'admin_uid']]]])
Z([3,'bindAgreeChange'])
Z([[7],[3,'isAgree']])
Z([[6],[[7],[3,'partner']],[3,'name']])
Z([[2,'!='],[[6],[[7],[3,'group']],[3,'status']],[1,0]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'partner']],[3,'type']],[1,'P']],[[2,'=='],[[6],[[7],[3,'partner']],[3,'type']],[1,'S']]])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx6_4);return __WXML_GLOBAL__.ops_cached.$gwx6_4
}
__WXML_GLOBAL__.ops_set.$gwx6=z;
__WXML_GLOBAL__.ops_init.$gwx6=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./sp7/pages/group_edit.wxml','./sp7/pages/group_mode.wxml','./sp7/pages/join_confirm.wxml','./sp7/pages/profile.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx6_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
var fE=_mz(z,'form',['bindsubmit',2,'class',1,'reportSubmit',2],[],e,s,gg)
var hG=_n('view')
_rz(z,hG,'class',5,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,6,e,s,gg)){oH.wxVkey=1
var lK=_mz(z,'picker',['bindchange',7,'mode',1,'range',2,'value',3],[],e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,11,e,s,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
_(oH,lK)
}
var cI=_v()
_(hG,cI)
if(_oz(z,12,e,s,gg)){cI.wxVkey=1
var tM=_v()
_(cI,tM)
if(_oz(z,13,e,s,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
}
var oJ=_v()
_(hG,oJ)
if(_oz(z,14,e,s,gg)){oJ.wxVkey=1
var eN=_n('view')
_rz(z,eN,'class',15,e,s,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,16,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(eN,oP)
if(_oz(z,17,e,s,gg)){oP.wxVkey=1
var xQ=_mz(z,'view',['catchtap',18,'class',1],[],e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,20,e,s,gg)){oR.wxVkey=1
}
oR.wxXCkey=1
_(oP,xQ)
}
bO.wxXCkey=1
oP.wxXCkey=1
_(oJ,eN)
}
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
_(fE,hG)
var cF=_v()
_(fE,cF)
if(_oz(z,21,e,s,gg)){cF.wxVkey=1
var fS=_v()
_(cF,fS)
if(_oz(z,22,e,s,gg)){fS.wxVkey=1
}
fS.wxXCkey=1
}
var cT=_n('view')
var oV=_n('view')
_rz(z,oV,'class',23,e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,24,e,s,gg)){cW.wxVkey=1
}
var oX=_v()
_(oV,oX)
var lY=function(t1,aZ,e2,gg){
var o4=_v()
_(e2,o4)
if(_oz(z,29,t1,aZ,gg)){o4.wxVkey=1
var x5=_n('view')
_rz(z,x5,'class',30,t1,aZ,gg)
var f7=_mz(z,'view',['catchtap',31,'class',1,'data-wpyshowoptionlist-a',2,'data-wpyshowoptionlist-b',3],[],t1,aZ,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,35,t1,aZ,gg)){c8.wxVkey=1
}
c8.wxXCkey=1
_(x5,f7)
var o6=_v()
_(x5,o6)
if(_oz(z,36,t1,aZ,gg)){o6.wxVkey=1
}
o6.wxXCkey=1
_(o4,x5)
}
o4.wxXCkey=1
return e2
}
oX.wxXCkey=2
_2z(z,27,lY,e,s,gg,oX,'student','idx','idx')
cW.wxXCkey=1
_(cT,oV)
var hU=_v()
_(cT,hU)
if(_oz(z,37,e,s,gg)){hU.wxVkey=1
}
hU.wxXCkey=1
_(fE,cT)
cF.wxXCkey=1
_(xC,fE)
}
var oD=_v()
_(oB,oD)
if(_oz(z,38,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx6_2()
var o0=_v()
_(r,o0)
if(_oz(z,0,e,s,gg)){o0.wxVkey=1
var cAB=_n('view')
_rz(z,cAB,'class',1,e,s,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,2,e,s,gg)){oBB.wxVkey=1
}
var lCB=_mz(z,'view',['class',3,'slot',1],[],e,s,gg)
var aDB=_v()
_(lCB,aDB)
if(_oz(z,5,e,s,gg)){aDB.wxVkey=1
}
aDB.wxXCkey=1
_(cAB,lCB)
oBB.wxXCkey=1
_(o0,cAB)
}
o0.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx6_3()
var bGB=_mz(z,'form',['bindsubmit',0,'class',1,'reportSubmit',1,'style',2],[],e,s,gg)
var oHB=_v()
_(bGB,oHB)
if(_oz(z,4,e,s,gg)){oHB.wxVkey=1
}
oHB.wxXCkey=1
_(r,bGB)
var eFB=_v()
_(r,eFB)
if(_oz(z,5,e,s,gg)){eFB.wxVkey=1
}
eFB.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx6_4()
var oJB=_n('view')
_rz(z,oJB,'class',0,e,s,gg)
var fKB=_v()
_(oJB,fKB)
if(_oz(z,1,e,s,gg)){fKB.wxVkey=1
}
var hMB=_mz(z,'form',['bindsubmit',2,'reportSubmit',1],[],e,s,gg)
var oNB=_v()
_(hMB,oNB)
if(_oz(z,4,e,s,gg)){oNB.wxVkey=1
}
var cOB=_n('view')
_rz(z,cOB,'class',5,e,s,gg)
var oPB=_v()
_(cOB,oPB)
if(_oz(z,6,e,s,gg)){oPB.wxVkey=1
}
var aRB=_n('view')
_rz(z,aRB,'class',7,e,s,gg)
var tSB=_v()
_(aRB,tSB)
if(_oz(z,8,e,s,gg)){tSB.wxVkey=1
}
var eTB=_v()
_(aRB,eTB)
if(_oz(z,9,e,s,gg)){eTB.wxVkey=1
}
tSB.wxXCkey=1
eTB.wxXCkey=1
_(cOB,aRB)
var lQB=_v()
_(cOB,lQB)
if(_oz(z,10,e,s,gg)){lQB.wxVkey=1
var bUB=_v()
_(lQB,bUB)
if(_oz(z,11,e,s,gg)){bUB.wxVkey=1
}
bUB.wxXCkey=1
}
oPB.wxXCkey=1
lQB.wxXCkey=1
_(hMB,cOB)
var oVB=_n('checkbox-group')
_rz(z,oVB,'bindchange',12,e,s,gg)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,13,e,s,gg)){xWB.wxVkey=1
}
xWB.wxXCkey=1
_(hMB,oVB)
oNB.wxXCkey=1
_(oJB,hMB)
var cLB=_v()
_(oJB,cLB)
if(_oz(z,14,e,s,gg)){cLB.wxVkey=1
var oXB=_v()
_(cLB,oXB)
if(_oz(z,15,e,s,gg)){oXB.wxVkey=1
var fYB=_v()
_(oXB,fYB)
if(_oz(z,16,e,s,gg)){fYB.wxVkey=1
}
fYB.wxXCkey=1
}
oXB.wxXCkey=1
}
else if(_oz(z,17,e,s,gg)){cLB.wxVkey=2
}
fKB.wxXCkey=1
cLB.wxXCkey=1
_(r,oJB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['sp7/pages/group_edit.json'] = {"navigationBarTitleText":"班级设置","usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp7/pages/group_edit.wxml'] = [$gwx6, './sp7/pages/group_edit.wxml'];else __wxAppCode__['sp7/pages/group_edit.wxml'] = $gwx6( './sp7/pages/group_edit.wxml' );
		__wxAppCode__['sp7/pages/group_mode.json'] = {"navigationBarTitleText":"创建新班级","usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp7/pages/group_mode.wxml'] = [$gwx6, './sp7/pages/group_mode.wxml'];else __wxAppCode__['sp7/pages/group_mode.wxml'] = $gwx6( './sp7/pages/group_mode.wxml' );
		__wxAppCode__['sp7/pages/join_confirm.json'] = {"navigationBarTitleText":"作业登记簿","enablePullDownRefresh":false,"usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp7/pages/join_confirm.wxml'] = [$gwx6, './sp7/pages/join_confirm.wxml'];else __wxAppCode__['sp7/pages/join_confirm.wxml'] = $gwx6( './sp7/pages/join_confirm.wxml' );
		__wxAppCode__['sp7/pages/profile.json'] = {"navigationBarTitleText":"身份设置","enablePullDownRefresh":true,"usingComponents":{"txv-video":"plugin://wxa75efa648b60994b/video","wechat-work-cell":"plugin://wx104a1a20c3f81ec2/cell"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sp7/pages/profile.wxml'] = [$gwx6, './sp7/pages/profile.wxml'];else __wxAppCode__['sp7/pages/profile.wxml'] = $gwx6( './sp7/pages/profile.wxml' );
	
	__wxRoute = 'sp7/pages/group_edit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp7/pages/group_edit.js';	define("sp7/pages/group_edit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,i){try{var s=t[a](i),o=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_dec,_class,_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_config=require("./../../config.js"),_request=require("./../../utils/request.js"),_request2=_interopRequireDefault(_request),_deepclone=require("./../../utils/deepclone.js"),_deepclone2=_interopRequireDefault(_deepclone),_sensitiveWordChecker=require("./../../utils/sensitiveWordChecker.js"),_sensitiveWordChecker2=_interopRequireDefault(_sensitiveWordChecker),_interfaces=require("./../../interfaces/index.js"),_interfaces2=_interopRequireDefault(_interfaces),_upload=require("./../../utils/upload.js"),_upload2=_interopRequireDefault(_upload),_delay=require("./../../utils/delay.js"),_delay2=_interopRequireDefault(_delay),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),_constances=require("./../../utils/constances.js"),_clientUtil=require("./../../utils/clientUtil.js"),GroupEditPage=(_dec=(0,_wepyRedux.connect)({group:function(e){return e.group.detail||null},enroll:function(e){return e.enroll.detail||null},members:function(e){return console.log(this.$wxpage.option),e.enroll_member.list.items||[]}},{getOrFetchGroup:_actions.getOrFetchGroup,fetchEnrollMemberList:_actions.fetchEnrollMemberList}))(_class=function(e){function t(){var e,r,n,a;_classCallCheck(this,t);for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.config={navigationBarTitleText:"班级设置"},n.data={gid:null,isAdmin:!1,user:{},dirty:{},countIndex:-1,counts:[],students:[],hasMembers:!1,shareable:!0,loginCode:null,gettingPhone:!0,timeForNextSend:0,STATUES:["开课中","已结课"],GROUP_TYPES:[{key:10,value:"幼儿园"},{key:20,value:"小学"},{key:30,value:"初中"},{key:40,value:"高中"},{key:50,value:"大学"},{key:60,value:"培训机构"},{key:70,value:"职校"},{key:80,value:"社群"},{key:100,value:"其它"}],statusIndex:-1,groupTypeIndex:-1,isTestVersion:!1,agent_code:null,isSweepCode:!1,avatar:"",needPwd:!1,members_remark:{},STATUS_REMARK:_constances.MEMBER_STATUS_REMARK,enroll_id:null,member_ids:[]},n.computed={},n.methods={onNeedPwdChange:function(e){this.needPwd=e.detail.value,this.needPwd&&_wepy2.default.showModal({title:"提示",content:"开启密码验证后, 新成员需输入验证码才能加入班级",confirmText:"知道了",showCancel:!1})},passwordChange:function(e){this.dirty.password=e.detail.value},bindGroupTypeChange:function(e){this.groupTypeIndex=parseInt(e.detail.value),this.$apply()},bindStatusChange:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.statusIndex=parseInt(t.detail.value),e.next=3,(0,_clientUtil.setStorageSync)("GRADUATED_LIST_NEED_REFRESH",!0);case 3:this.$apply();case 4:case"end":return e.stop()}},e,this)}));return e}(),sendVcode:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.timeForNextSend>0)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,_request2.default)({url:_config.api.group.profileSms.url,data:{phone:this.dirty.phone}});case 5:if(t=e.sent,!t.data||!t.data.cmd){e.next=14;break}return e.next=9,_wepy2.default.showToast({title:"验证码已发送"});case 9:this.timeForNextSend=180,this.$apply(),r=setInterval(function(){var e=n.timeForNextSend;n.timeForNextSend=e-1,n.$apply(),e<=1&&clearInterval(r)},1e3),e.next=16;break;case 14:return e.next=16,_wepy2.default.showModal({title:"提示",content:"获取验证码失败, 稍后请重试",showCancel:!1});case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(2),e.next=22,_wepy2.default.showModal({title:"提示",content:"获取验证码失败, 稍后请重试",showCancel:!1});case 22:case"end":return e.stop()}},e,this,[[2,18]])}));return e}(),paste:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.getClipboardData();case 2:if(r=e.sent,(n=r.data)&&0!=n.trim().length&&-1!=n.indexOf("\n")){e.next=9;break}return e.next=7,_wepy2.default.showModal({title:"提示",content:"请您把班级名单按照一行一个名字进行复制后粘贴到这里(发送到微信给自己再复制过来)",showCancel:!1});case 7:e.next=18;break;case 9:n=n.trim(),a=!1,i=n.split("\n").map(function(e){return e.trim().slice(0,20)}).filter(function(e){return Boolean(e)}),i.length>99&&(a=!0,i=i.slice(0,99)),this.dirty.members=i,this.generateRoaster(i.length),this.countIndex=i.length-1,this.$apply(),a&&_wepy2.default.showModal({title:"提示",content:"单个班级最多只能设置99个学生",showCancel:!1});case 18:case"end":return e.stop()}},e,this)}));return e}(),bindStudentName:function(e){var t=e.detail.value,r=e.target.dataset.index;this.dirty.members[r]=t},deleteStudent:function(){function e(e,r){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t,r){var n,a=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_delay2.default)(100);case 2:n=Object.keys(this.dirty.members).map(function(e){return a.dirty.members[e]}),n.splice(t,1),this.dirty.members={},n.forEach(function(e,t){a.dirty.members[t]=e}),this.generateRoaster(n.length),this.countIndex-=1,this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}(),addMember:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.dirty.members[t]=null,this.countIndex=t,this.generateRoaster(t+1),this.$apply();case 4:case"end":return e.stop()}},e,this)}));return e}(),bindCountChange:function(e){var t=this;this.countIndex=parseInt(e.detail.value);var r=Object.keys(this.dirty.members).map(function(e){return t.dirty.members[e]});this.dirty.members={};for(var n=0;n<this.countIndex+1;n++)this.dirty.members[n]=r[n]||null;this.generateRoaster(this.countIndex+1)},nameChange:function(e){this.dirty.name=e.detail.value},schoolChange:function(e){this.dirty.school=e.detail.value},agentCodeChange:function(e){this.agent_code=e.detail.value},phoneChange:function(e){this.dirty.phone=e.detail.value.trim()},vcodeChange:function(e){this.dirty.vcode=e.detail.value.trim()},getPhoneNumber:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.detail&&t.detail.encryptedData&&t.detail.iv)){e.next=15;break}return r={code:this.loginCode,encryptedData:t.detail.encryptedData,iv:t.detail.iv},e.next=4,_interfaces2.default.getPhone(r);case 4:if(!(n=e.sent)){e.next=10;break}this.dirty.phone=n,this.$apply(),e.next=15;break;case 10:return e.next=12,_wepy2.default.showModal({title:"获取号码失败",content:"请选择自动获取，或手动输入",cancelText:"自动获取",confirmText:"手动输入"});case 12:a=e.sent,a.confirm?this.gettingPhone=!1:this.gettingPhone=!0,this.$apply();case 15:case"end":return e.stop()}},e,this)}));return e}(),save:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,a,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.showToast({title:"发送中...",icon:"loading",duration:1e4,mask:!0});case 2:return e.prev=2,e.next=5,(0,_delay2.default)(500);case 5:if(this.dirty.name&&!(this.dirty.name.length<2)){e.next=9;break}throw new Error("班级名不能少于2个字");case 9:if(!(0,_sensitiveWordChecker2.default)(this.dirty.name)){e.next=11;break}throw new Error("班级名包含敏感词汇，保存失败");case 11:if(this.dirty.school&&!(this.dirty.school.length<4)){e.next=15;break}throw new Error("学校名不能少于4个字");case 15:if(!(0,_sensitiveWordChecker2.default)(this.dirty.school)){e.next=17;break}throw new Error("学校名包含敏感词汇，保存失败");case 17:if(this.gid||this.dirty.phone||this.isTestVersion){e.next=19;break}throw new Error("请填写手机号");case 19:if(-1!==this.groupTypeIndex){e.next=21;break}throw new Error("请选择班级分类");case 21:if(this.gettingPhone||this.dirty.vcode){e.next=23;break}throw new Error("请输入手机验证码");case 23:if(!this.agent_code||/^[a-zA-Z0-9_]{4,11}$/.test(this.agent_code)){e.next=25;break}throw Error("邀请码不正确");case 25:if(!this.needPwd||/^[a-zA-Z0-9_]{4,8}$/.test(this.dirty.password)){e.next=27;break}throw Error("班级验证码不正确");case 27:e.next=36;break;case 29:return e.prev=29,e.t0=e.catch(2),e.next=33,_wepy2.default.hideToast();case 33:return e.next=35,_wepy2.default.showModal({title:"提示",content:e.t0.message,showCancel:!1});case 35:return e.abrupt("return");case 36:if(t={name:this.dirty.name,school:this.dirty.school,phone:this.dirty.phone,agent_code:this.agent_code,type:this.GROUP_TYPES[this.groupTypeIndex].key,password:this.needPwd?this.dirty.password:null},this.gettingPhone||(t.vcode=this.dirty.vcode),this.statusIndex>-1&&(t.status=this.statusIndex+1),!(this.students&&this.students.length>0)){e.next=57;break}r={},n=0;case 42:if(!(n<this.students.length)){e.next=54;break}if((a=this.dirty.members[n])&&!(a.length<2)){e.next=50;break}return e.next=47,_wepy2.default.hideToast();case 47:return e.next=49,_wepy2.default.showModal({title:"提示",content:a?n+1+"号学生名需至少2个字符":n+1+"号学生名不能为空",showCancel:!1});case 49:return e.abrupt("return");case 50:r[n]=this.dirty.members[n];case 51:n++,e.next=42;break;case 54:this.dirty.members=r,e.next=62;break;case 57:return e.next=59,_wepy2.default.hideToast();case 59:return e.next=61,_wepy2.default.showModal({title:"提示",content:"请填写至少一位学生的信息",showCancel:!1});case 61:return e.abrupt("return");case 62:t.members_remark=this.members_remark,t.members=this.dirty.members,this.gid?this.updateGroup(this.group.gid,t,this.avatar):(this.enroll_id&&this.dirty.memberList.length&&(t.enroll_id=this.enroll_id,t.enroll_members=function(){var e=[],t=i.dirty.memberList,r=void 0===t?[]:t,n=!0,a=!1,s=void 0;try{for(var o,u=r[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var c=o.value,l=!0,h=!1,d=void 0;try{for(var p,f=c.members[Symbol.iterator]();!(l=(p=f.next()).done);l=!0){var m=p.value;e.push(c.isChild?{child:c.child,name:c.title,member_id:m.id}:{child:null,lesson_name:c.title,member_id:m.id})}}catch(e){h=!0,d=e}finally{try{!l&&f.return&&f.return()}finally{if(h)throw d}}}}catch(e){a=!0,s=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw s}}return JSON.stringify(e)}()),this.createGroup(t));case 65:case"end":return e.stop()}},e,this,[[2,29]])}));return e}(),chooseImage:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_clientUtil.chooseImage)({count:1});case 2:t=e.sent,r=t.tempFilePaths,this.avatar=r[0],this.$apply();case 6:case"end":return e.stop()}},e,this)}));return e}(),showOptionList:function(){function e(e,r){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t,r){var n,a,i,s,o,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.keys(_constances.MEMBER_STATUS_REMARK).map(function(e){return{key:parseInt(e),value:"标记为"+_constances.MEMBER_STATUS_REMARK[e]}}).concat([{key:"CANCEL",value:"取消标记"}]),a=n.findIndex(function(e){return e.key==r}),a>-1?n.splice(a,1):n.splice(n.length-1,1),e.prev=3,e.next=6,(0,_clientUtil.showActionSheet)({itemList:n.map(function(e){return e.value})});case 6:i=e.sent,s=i.tapIndex,s>=0&&(o=n[s],u="CANCEL"===o.key?null:_constances.MEMBER_STATUS_REMARK[o.key],u?this.members_remark[t]=parseInt(o.key):delete this.members_remark[t],this.$apply()),e.next=16;break;case 11:if(e.prev=11,e.t0=e.catch(3),"showActionSheet:fail cancel"===e.t0.errMsg){e.next=16;break}return e.next=16,_wepy2.default.showModal({title:"提示",content:e.t0.errMsg||e.t0.message||"标记出错",showCancel:!1});case 16:case"end":return e.stop()}},e,this,[[3,11]])}));return e}()},a=r,_possibleConstructorReturn(n,a)}return _inherits(t,e),_createClass(t,[{key:"updateGroup",value:function(){function e(e,r,n){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t,r,n){var a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_request2.default)({url:_config.api.group.update.url+t,method:_config.api.group.update.method,data:r});case 3:if(a=e.sent,!n||n.startsWith(_config.CDN_HOST)){e.next=8;break}return i=t+"/avatar/"+Date.now(),e.next=8,this.handleUploadFile(_config.qiniu,n,{gid:t,key:i,flag:"group"});case 8:return e.next=10,_wepy2.default.hideToast();case 10:if(!a.data.cmd){e.next=17;break}return e.next=13,this.methods.getOrFetchGroup(this.gid,!0);case 13:return e.next=15,_wepy2.default.navigateBack();case 15:e.next=19;break;case 17:return e.next=19,_wepy2.default.showModal({title:"提示",content:a.data.msg,showCancel:!1});case 19:e.next=28;break;case 21:return e.prev=21,e.t0=e.catch(0),console.log("保存群设置出错: ",e.t0),e.next=26,_wepy2.default.hideToast();case 26:return e.next=28,_wepy2.default.showModal({title:"提示",content:e.t0.message||"保存班级设置出错, 请联系管理员",showCancel:!1});case 28:case"end":return e.stop()}},e,this,[[0,21]])}));return e}()},{key:"createGroup",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_request2.default)({url:_config.api.group.create.url,data:t});case 3:return r=e.sent,n=r.data,e.next=7,_wepy2.default.hideToast();case 7:if(!n.cmd){e.next=13;break}return t.enroll_id&&this.methods.fetchEnrollMemberList({enroll_id:t.enroll_id,page:1,pageSize:20}),e.next=11,_wepy2.default.redirectTo({url:"/sp7/pages/join_confirm?gid="+n.result.gid});case 11:e.next=15;break;case 13:return e.next=15,_wepy2.default.showModal({title:"提示",content:n.msg,showCancel:!1});case 15:e.next=25;break;case 17:return e.prev=17,e.t0=e.catch(0),console.log("保存群设置出错: ",e.t0),e.next=22,_wepy2.default.hideToast();case 22:return e.next=24,_wepy2.default.showModal({title:"提示",content:e.t0.message||"创建班级出错, 请联系管理员",showCancel:!1});case 24:t.enroll_id&&(this.methods.fetchEnrollMemberList({enroll_id:t.enroll_id,page:1,pageSize:20}),_wepy2.default.navigateBack());case 25:case"end":return e.stop()}},e,this,[[0,17]])}));return e}()},{key:"generateRoaster",value:function(e){for(var t=[e],r=0;r<e;r++)t[r]=this.dirty.members[r]||"";this.students=t}},{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,i,s=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isTestVersion=_wepy2.default.$instance.isTestVersion(),t.agent_code&&(this.agent_code=t.agent_code,this.isSweepCode=!0),t.gid&&(this.gid=t.gid),t.enroll_id&&t.member_ids)this.member_ids=t.member_ids.split(","),this.enroll_id=t.enroll_id;else{for(r=[],n=1;n<100;n++)r.push(n+"人");this.counts=r}if(this.loginCode){e.next=9;break}return e.next=7,_wepy2.default.login();case 7:a=e.sent,this.loginCode=a.code;case 9:return this.$apply(),e.next=12,this.refreshData(!1);case 12:this.enroll_id&&this.member_ids.length&&(i=function(){var e=s.member_ids,t=void 0===e?[]:e,r=s.members,n=void 0===r?[]:r,a=[],i={},o=[],u=!0,c=!1,l=void 0;try{for(var h,d=n[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var p=h.value,f=p.child_name,m=(p.lesson_name,p.type),y=p.name,_=p.id;-1!==t.indexOf(_)&&("P"===m?i[f]=[].concat(_toConsumableArray(i[f]||[]),[p]):"S"===m?i[y]=[].concat(_toConsumableArray(i[y]||[]),[p]):o.push(p))}}catch(e){c=!0,l=e}finally{try{!u&&d.return&&d.return()}finally{if(c)throw l}}var g=0;for(var v in i)a.push({child:++g,members:i[v],isChild:!0,studentCount:i[v].filter(function(e){return"S"===e.type}).length,title:v,key:v});var w=!0,x=!1,b=void 0;try{for(var k,R=o[Symbol.iterator]();!(w=(k=R.next()).done);w=!0){var C=k.value;a.push({members:[C],isChild:!1,studentCount:0,title:C.lesson_name,key:C.id})}}catch(e){x=!0,b=e}finally{try{!w&&R.return&&R.return()}finally{if(x)throw b}}return a}(),this.dirty=_extends({},this.dirty,{name:this.enroll.title,phone:this.enroll.phone,members:i.filter(function(e){return e.isChild}).map(function(e){return e.title}),memberList:i}),this.generateRoaster(this.dirty.members.length),this.$apply());case 13:case"end":return e.stop()}},e,this)}));return e}()},{key:"onPullDownRefresh",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshData(!0);case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"refreshData",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,a,i,s,o=this,u=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.gid){e.next=31;break}return e.next=3,_wepy2.default.showLoading({title:"加载中...",mask:!0});case 3:return e.next=5,_wepy2.default.$instance.logined();case 5:return t=e.sent,r=t.user,this.user=r,e.prev=8,e.next=11,this.methods.getOrFetchGroup(this.gid,u);case 11:this.dirty=(0,_deepclone2.default)(this.group),this.needPwd=Boolean(this.dirty.password),this.group.admin_uid?this.isAdmin=r&&r.uid==this.group.admin_uid:this.isAdmin=!0,this.hasMembers=Object.keys(this.group.members).length>0,n=3,this.group.members&&(n=Object.keys(this.group.members).length||n),this.countIndex=n-1,a=parseInt(this.group.status),this.statusIndex=isNaN(a)?-1:a-1,this.groupTypeIndex=this.GROUP_TYPES.findIndex(function(e){return parseInt(e.key)===parseInt(o.group.type)}),this.generateRoaster(n),this.avatar=this.group.avatar?_config.CDN_HOST+this.group.avatar:null,this.members_remark=this.group.members_remark||{},e.next=29;break;case 26:e.prev=26,e.t0=e.catch(8),console.log("获取群数据出错: ",e.t0);case 29:e.next=40;break;case 31:return e.next=33,_wepy2.default.$instance.logined();case 33:i=e.sent,s=i.user,this.user=s,this.group=null,this.dirty={members:{}},this.isAdmin=!0,this.hasMembers=!1;case 40:return e.next=42,_wepy2.default.stopPullDownRefresh();case 42:(0,_clientUtil.hideLoading)(),this.$apply();case 44:case"end":return e.stop()}},e,this,[[8,26]])}));return e}()},{key:"handleUploadFile",value:function(){function e(e,r,n){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t,r,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_upload2.default)({url:t,filePath:r,name:"file",formData:n});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error(e.t0.message);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));return e}()}]),t}(_wepy2.default.page))||_class;Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(GroupEditPage,"sp7/pages/group_edit")); 
 			}); 	require("sp7/pages/group_edit.js");
 		__wxRoute = 'sp7/pages/group_mode';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp7/pages/group_mode.js';	define("sp7/pages/group_mode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,o){function r(n,i){try{var a=t[n](i),s=a.value}catch(e){return void o(e)}if(!a.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_config=require("./../../config.js"),_delay=require("./../../utils/delay.js"),_delay2=_interopRequireDefault(_delay),_base_modal=require("./../../components/base_modal.js"),_base_modal2=_interopRequireDefault(_base_modal),GroupEditPage=function(e){function t(){var e,o,r,n;_classCallCheck(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return o=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.config={navigationBarTitleText:"创建新班级"},r.$repeat={},r.$props={tipsmodal:{showLogo:"false",showClose:"true",className:"tips-modal"}},r.$events={},r.components={tipsmodal:_base_modal2.default},r.data={mode:0,showTipsModal:!1},r.computed={},r.methods={toggleTipsModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];arguments[1];this.showTipsModal=e,this.$invoke("tipsmodal",e?"show":"hide")},toConfig:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.navigateTo({url:"/sp7/pages/group_edit"});case 2:this.showTipsModal=!1,this.$invoke("tipsmodal","hide"),this.$apply();case 5:case"end":return e.stop()}},e,this)}));return e}(),onModeChange:function(e){this.mode=parseInt(e.detail.value)},onSubmit:function(e){var t=e.detail.value.mode;if(0==t)this.methods.toggleTipsModal.call(this,!0);else if(1==t)return _wepy2.default.navigateTo({url:"/sp8/pages/enroll_edit"})}},n=o,_possibleConstructorReturn(r,n)}return _inherits(t,e),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(GroupEditPage,"sp7/pages/group_mode")); 
 			}); 	require("sp7/pages/group_mode.js");
 		__wxRoute = 'sp7/pages/join_confirm';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp7/pages/join_confirm.js';	define("sp7/pages/join_confirm.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function n(o,a){try{var i=r[o](a),u=i.value}catch(e){return void t(e)}if(!i.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}return n("next")})}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),_dec,_class,_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_config=require("./../../config.js"),_request=require("./../../utils/request.js"),_request2=_interopRequireDefault(_request),_avatar=require("./../../utils/avatar.js"),_avatar2=_interopRequireDefault(_avatar),_cdnurl=require("./../../utils/cdnurl.js"),_cdnurl2=_interopRequireDefault(_cdnurl),_delay=require("./../../utils/delay.js"),_delay2=_interopRequireDefault(_delay),_join_group_header=require("./../../components/join_group_header.js"),_join_group_header2=_interopRequireDefault(_join_group_header),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),_clientUtil=require("./../../utils/clientUtil.js"),JoinConfirmPage=(_dec=(0,_wepyRedux.connect)({group:function(e){return e.group.detail||null}},{getOrFetchGroup:_actions.getOrFetchGroup}))(_class=function(e){function r(){var e,t,n,o;_classCallCheck(this,r);for(var a=arguments.length,i=Array(a),u=0;u<a;u++)i[u]=arguments[u];return t=n=_possibleConstructorReturn(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(i))),n.config={navigationBarTitleText:"作业登记簿",enablePullDownRefresh:!1},n.components={joingroupheader:_join_group_header2.default},n.data={CDN_HOST:_config.CDN_HOST,PARTNER_TYPES:[{key:"T",label:"老师",icon:"icon-fenxishiliebiao",remarks:["布置作业","批改作业","发布成绩","统计分析"]},{key:"P",label:"家长",icon:"icon-renqun",remarks:["查看作业","提交作业","查看成绩","参考作业"]},{key:"S",label:"学生",icon:"icon-xueshimao",remarks:["查看作业","提交作业","查看成绩"]}],partnerType:"P",showTipsModal:!1,user:null,password:null},n.methods={passwordChange:function(e){this.password=e.detail.value},onPartnerTypeChange:function(e){this.partnerType=e.detail.value},backToHome:function(){_wepy2.default.reLaunch({url:"/pages/index"})},toggleTipsModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];arguments[1];this.showTipsModal=e},joinGroup:function(){function e(e){return r.apply(this,arguments)}var r=_asyncToGenerator(regeneratorRuntime.mark(function e(r){var t,n,o,a,i,u,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.gid,n=this.partnerType,o=this.password,a=this.group,i=this.user,!a.password||a.admin_uid==i.uid){e.next=21;break}if(o&&/^[a-zA-Z0-9_]{4,8}$/.test(o)){e.next=4;break}return e.abrupt("return",_wepy2.default.showModal({title:"提示",content:"请输入4-8位的验证码, 如不清楚请询问班级管理员",showCancel:!1}));case 4:return _wepy2.default.showLoading({title:"验证中",mask:!0}),e.prev=5,e.next=8,(0,_request2.default)({url:_config.api.group.checkPassword.url,data:{password:o,gid:t}});case 8:if(u=e.sent,s=u.data,!s.cmd||!s.result){e.next=14;break}_wepy2.default.navigateTo({url:"/sp7/pages/profile?gid="+t+"&only="+n+"&from=join_confirm"}),e.next=15;break;case 14:throw new Error(s.msg||"验证失败");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),_wepy2.default.showModal({title:"提示",content:e.t0.message||"验证失败",showCancel:!1});case 20:return e.abrupt("return",(0,_clientUtil.hideLoading)());case 21:_wepy2.default.navigateTo({url:"/sp7/pages/profile?gid="+t+"&only="+n+"&from=join_confirm&pid="+(a.partner?a.partner.id:"")});case 22:case"end":return e.stop()}},e,this,[[5,17]])}));return e}()},o=t,_possibleConstructorReturn(n,o)}return _inherits(r,e),_createClass(r,[{key:"onLoad",value:function(){function e(e){return r.apply(this,arguments)}var r=_asyncToGenerator(regeneratorRuntime.mark(function e(r){var t=r.gid;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.gid=t,e.next=3,_wepy2.default.$instance.logined();case 3:return this.user=e.sent.user,e.next=6,this.methods.getOrFetchGroup(t);case 6:this.partnerType=this.user&&this.group.admin_uid===this.user.uid?"T":"P",this.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"onShow",value:function(){function e(){return r.apply(this,arguments)}var r=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.methods.toggleTipsModal.call(this,!0);case 1:case"end":return e.stop()}},e,this)}));return e}()}]),r}(_wepy2.default.page))||_class;Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(JoinConfirmPage,"sp7/pages/join_confirm")); 
 			}); 	require("sp7/pages/join_confirm.js");
 		__wxRoute = 'sp7/pages/profile';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sp7/pages/profile.js';	define("sp7/pages/profile.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,i){try{var s=t[a](i),o=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_dec,_class,_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_config=require("./../../config.js"),_interfaces=require("./../../interfaces/index.js"),_interfaces2=_interopRequireDefault(_interfaces),_request=require("./../../utils/request.js"),_request2=_interopRequireDefault(_request),_delay=require("./../../utils/delay.js"),_delay2=_interopRequireDefault(_delay),_join_group_header=require("./../../components/join_group_header.js"),_join_group_header2=_interopRequireDefault(_join_group_header),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),_clientUtil=require("./../../utils/clientUtil.js"),GroupUser=(_dec=(0,_wepyRedux.connect)({group:function(e){return e.group.detail||null}},{getOrFetchGroup:_actions.getOrFetchGroup}))(_class=function(e){function t(){var e,r,n,a;_classCallCheck(this,t);for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.config={navigationBarTitleText:"身份设置",enablePullDownRefresh:!0},n.$repeat={},n.$props={joingroupheader:{"xmlns:wx":""}},n.$events={},n.components={joingroupheader:_join_group_header2.default},n.data={pid:null,from:null,user:{},partner:{},operator:{},dirty:{},isAgree:!1,isProxy:!1,locked:!1,roles:[{value:"T",name:"老师"},{value:"P",name:"家长"},{value:"S",name:"学生"}],onlyRole:{},roleValue:"V",roleIndex:3,members:[],memberIndex:0,loginCode:null,only:"",gettingPhone:!0,timeForNextSend:0,pageLoaded:!1,typeSameAsApply:!0},n.computed={membersLabel:function(){var e=this.members,t=void 0===e?[]:e,r=this.roleValue;return"S"===(void 0===r?"V":r)?t.map(function(e){return e.label+(e.hasStudentPartner?" (已被关联)":"")}):t.map(function(e){return e.label})}},n.methods={quitGroup:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.showModal({title:"温馨提示",content:"退出后将不再显示当前班级"});case 2:if(r=e.sent,!r.confirm){e.next=16;break}return n={pid:this.group.partner.id},e.next=7,(0,_request2.default)({url:_config.api.group.quit.url,data:n});case 7:if(a=e.sent,i=a.data,!i.cmd){e.next=14;break}return e.next=12,_wepy2.default.reLaunch({url:"/pages/index"});case 12:e.next=16;break;case 14:return e.next=16,_wepy2.default.showModal({title:"提示",content:i.msg,showCancel:!1});case 16:case"end":return e.stop()}},e,this)}));return e}(),gettingVcode:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.timeForNextSend>0)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,_request2.default)({url:_config.api.group.profileSms.url,data:{phone:this.dirty.phone}});case 5:if(t=e.sent,!t.data||!t.data.cmd){e.next=14;break}return e.next=9,_wepy2.default.showToast({title:"验证码已发送"});case 9:this.timeForNextSend=180,this.$apply(),r=setInterval(function(){var e=n.timeForNextSend;n.timeForNextSend=e-1,n.$apply(),e<=1&&clearInterval(r)},1e3),e.next=16;break;case 14:return e.next=16,_wepy2.default.showModal({title:"提示",content:"获取验证码失败, 稍后请重试",showCancel:!1});case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(2),e.next=22,_wepy2.default.showModal({title:"提示",content:"获取验证码失败, 稍后请重试",showCancel:!1});case 22:case"end":return e.stop()}},e,this,[[2,18]])}));return e}(),getPhoneNumber:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.detail&&t.detail.encryptedData&&t.detail.iv)){e.next=19;break}return r={code:this.loginCode,encryptedData:t.detail.encryptedData,iv:t.detail.iv},e.next=4,_interfaces2.default.getPhone(r);case 4:if(!(n=e.sent)){e.next=10;break}this.dirty.phone=n,this.$apply(),e.next=14;break;case 10:return e.next=12,_wepy2.default.showModal({title:"获取号码失败",content:"请选择自动获取，或手动输入",cancelText:"自动获取",confirmText:"手动输入"});case 12:a=e.sent,a.confirm?this.gettingPhone=!1:this.gettingPhone=!0;case 14:return e.next=16,_wepy2.default.login();case 16:i=e.sent,this.loginCode=i.code,this.$apply();case 19:case"end":return e.stop()}},e,this)}));return e}(),bindMemberChange:function(e){var t=this.members,r=this.roleValue,n=void 0===r?"V":r,a=this.group,i=this.operator,s=e.detail.value,o=a&&a.admin&&a.admin.nickname,u=i&&a&&a.admin_uid===i.uid,l=t[s];if(l)return"S"===n&&l.hasStudentPartner?_wepy2.default.showModal({title:"提示",content:u?'该学生身份已被关联，请选择 "家长" 身份，或修改花名册':'该学生身份已被关联，请返回选择 "家长" 身份，或联系班级管理员 "'+o+'" 修改花名册'}):void(this.memberIndex=e.detail.value)},bindRoleChange:function(e){if(!this.only){var t=e.detail.value;this.roleIndex=t,this.roleValue=this.roles[t].value,this.memberIndex=0,"V"!=this.roleValue&&(this.dirty.remark=""),this.isProxy=!1}},bindAgreeChange:function(e){this.isAgree="agree"==e.detail.value[0]},bindProxyChange:function(e){this.isProxy=e.detail.value},nameChange:function(e){this.dirty.name=e.detail.value.trim()},phoneChange:function(e){this.dirty.phone=e.detail.value.trim()},vcodeChange:function(e){this.dirty.vcode=e.detail.value.trim()},remarkChange:function(e){this.dirty.remark=e.detail.value.trim()},save:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,i,s,o,u,l,p,c,h,d,f,y,m,g,_,x;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.detail.formId,e.next=3,_wepy2.default.showLoading({title:"提交中...",mask:!0});case 3:return e.next=5,(0,_delay2.default)(500);case 5:if(n=this.dirty,a=n.name,i=n.phone,s=n.remark,o=n.vcode,u=this.roleValue,l=this.memberIndex,p=this.members,c=this.partner,h=this.isAgree,d=this.isProxy,f=this.group,y=this.operator,m=this.gettingPhone,e.prev=6,"S"==u||a&&!(a.length<2)){e.next=9;break}throw new Error("姓名不能少于2个字");case 9:if(i){e.next=11;break}throw new Error("请填写手机号");case 11:if(m||o){e.next=13;break}throw new Error("请填写验证码");case 13:if("T"!=u){e.next=18;break}if(s&&!(s.length<2)){e.next=16;break}throw new Error("科目名称不能少于2个字");case 16:e.next=22;break;case 18:if(0!=p.length){e.next=20;break}throw new Error("请等待管理员登记学生列表");case 20:if(0!=l&&p[l]){e.next=22;break}throw new Error("S"==u?"必须选择关联的学生":"家长必须选择关联学生");case 22:e.next=30;break;case 24:return e.prev=24,e.t0=e.catch(6),(0,_clientUtil.hideLoading)(),e.next=29,_wepy2.default.showModal({title:"提示",content:e.t0.message,showCancel:!1});case 29:return e.abrupt("return",e.sent);case 30:if(g=f&&f.admin.nickname?" "+f.admin.nickname+" ":"",e.prev=31,_={gid:"join_confirm"===this.from?this.gid:c.gid,uid:"join_confirm"===this.from?this.operator.uid:c.uid,name:a,phone:i,type:u,privacy:h,formId:r},m||(_.vcode=o),"T"==_.type?_.remark=s:"P"!=_.type&&"S"!=_.type||(_.child=l,_.remark=f.members[l-1],y.uid==f.admin_uid&&(_.proxy=d,_.isProxy=d),"S"==_.type&&(_.name=f.members[l-1])),"V"!==_.type||this.group.admin_uid==this.operator.uid){e.next=39;break}return e.next=38,_wepy2.default.showModal({title:"提示",content:"请选择浏览者以外的身份",showCancel:!1});case 38:return e.abrupt("return",e.sent);case 39:return e.next=41,(0,_request2.default)({url:"join_confirm"===this.from?_config.api.group.join.url:_config.api.group.profile.url,data:_});case 41:if(x=e.sent,(0,_clientUtil.hideLoading)(),!x.data.cmd){e.next=64;break}return e.next=46,_wepy2.default.$instance.logined(!0);case 46:return e.next=48,this.methods.getOrFetchGroup(this.gid,!0);case 48:if(!(this.group.admin_uid===this.operator.uid||this.partner&&Object.keys(this.partner).length&&this.partner.apply===this.dirty.type)){e.next=54;break}return _wepy2.default.showToast({title:"保存成功",icon:"success",duration:1500}),e.next=52,(0,_delay2.default)(1500);case 52:e.next=56;break;case 54:return e.next=56,_wepy2.default.showModal({title:"提示",content:"保存成功, 请通知管理员"+g+"审核身份",confirmText:"好的",showCancel:!1});case 56:if("join_confirm"!==this.from){e.next=60;break}if(this.group.admin_uid!==this.operator.uid){e.next=59;break}return e.abrupt("return",_wepy2.default.redirectTo({url:"/pages/success?type=GROUP_JOINED&gid="+this.gid}));case 59:return e.abrupt("return",_wepy2.default.navigateBack({delta:2}));case 60:return e.next=62,_wepy2.default.navigateBack();case 62:e.next=65;break;case 64:_wepy2.default.showModal({title:"提示",content:x.data.msg,showCancel:!1});case 65:e.next=71;break;case 67:e.prev=67,e.t1=e.catch(31),console.log(e.t1),_wepy2.default.showModal({title:"提示",content:"保存群用户信息出错, 请联系管理员"+g,showCancel:!1});case 71:return e.prev=71,(0,_clientUtil.hideLoading)(),e.finish(71);case 74:case"end":return e.stop()}},e,this,[[6,24],[31,67,71,74]])}));return e}()},a=r,_possibleConstructorReturn(n,a)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.pid=t.pid,this.only=t.only,this.from=t.from,this.gid=t.gid,this.only&&(this.setRoleValue(this.only),this.onlyRole=this.roles.find(function(e){return e.value===n.only})),this.loginCode){e.next=10;break}return e.next=8,_wepy2.default.login();case 8:r=e.sent,this.loginCode=r.code;case 10:return this.$apply(),e.next=13,_wepy2.default.$instance.logined();case 13:if(this.operator=e.sent.user,!this.gid||!this.only){e.next=18;break}return e.next=17,this.initProfile();case 17:return e.abrupt("return",e.sent);case 18:if(!this.pid){e.next=21;break}return e.next=21,this.getProfile();case 21:case"end":return e.stop()}},e,this)}));return e}()},{key:"onShow",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.pageLoaded||!this.pid){e.next=3;break}return e.next=3,this.refreshProfileType();case 3:case"end":return e.stop()}},e,this)}));return e}()},{key:"onPullDownRefresh",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshProfileType();case 2:return e.next=4,_wepy2.default.stopPullDownRefresh();case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"refreshProfileType",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.typeSameAsApply){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,_request2.default)({url:_config.api.group.profile.url,data:{pid:this.pid}});case 4:if(t=e.sent,!t.data||!t.data.cmd){e.next=15;break}if(r=t.data.result,r.type!==r.apply){e.next=15;break}return this.typeSameAsApply=!0,this.dirty.type=r.type,this.$apply(),e.next=13,_wepy2.default.showModal({title:"温馨提示",content:"您的身份审核已经通过",cancelText:"进入班级",showCancel:!0});case 13:n=e.sent,n.cancel&&"V"!=this.partner.apply?_wepy2.default.reLaunch({url:"/pages/group?gid="+this.partner.gid}):(this.locked=!0,this.$apply());case 15:case"end":return e.stop()}},e,this)}));return e}()},{key:"setRoleValue",value:function(e){var t=this.roles;this.roleIndex=t.findIndex(function(t){return t.value===e}),this.roleValue=e}},{key:"initProfile",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,a,i,s=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.methods.getOrFetchGroup(this.gid);case 2:t=this.group.partners.filter(function(e){return"S"===e.apply&&s.operator.uid!=e.uid}),r=[{key:-1,label:"学号.姓名",hasStudentPartner:!1}],n=function(e){var n=parseInt(e),a=n+1;r[a]={key:n,child:a,label:a+". "+s.group.members[e],hasStudentPartner:t.some(function(e){return e.child==a})}};for(a in this.group.members)n(a);if(this.members=r,!this.pid){e.next=12;break}return e.next=10,(0,_request2.default)({url:_config.api.group.profile.url,data:{pid:this.pid}});case 10:i=e.sent,i.data&&i.data.cmd&&(this.partner=i.data.result);case 12:return this.dirty=Object.assign({name:null,child:1,remark:null,phone:null,privacy:!1,proxy:!1},this.partner,{type:this.only}),this.memberIndex=0,this.locked=!1,this.isAgree=!1,this.isProxy="join_confirm"===this.from&&this.group.admin_uid===this.operator.uid,this.setRoleValue(this.only),e.abrupt("return",this.$apply());case 19:case"end":return e.stop()}},e,this)}));return e}()},{key:"getProfile",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,a,i,s,o,u,l=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_request2.default)({url:_config.api.group.profile.url,data:{pid:this.pid}});case 2:if(t=e.sent,!t.data||!t.data.cmd){e.next=32;break}return this.partner=t.data.result,this.partner.type!=this.partner.apply&&(this.typeSameAsApply=!1),e.next=8,this.methods.getOrFetchGroup(this.partner.gid);case 8:this.gid=this.partner.gid,this.user=this.partner.user,r=this.partner.partners.filter(function(e){return"S"===e.apply&&l.partner.uid!=e.uid}),n=[{key:-1,label:"学号.姓名",hasStudentPartner:!1}],a=function(e){var t=parseInt(e),a=t+1;n[a]={key:t,child:t+1,label:a+". "+l.group.members[e],hasStudentPartner:r.some(function(e){return e.child===a})}};for(i in this.group.members)a(i);if(this.members=n,this.dirty=Object.assign({},this.partner),this.locked=!1,["P","S"].indexOf(this.partner.apply)>-1?(this.setRoleValue(this.partner.apply),s=this.partner.child,this.memberIndex=null==s?0:s,this.dirty.child=s+1):"T"==this.partner.apply&&this.setRoleValue("T"),this.partner.name&&this.operator.uid!==this.group.admin_uid&&"V"!=this.partner.apply&&this.partner.apply===this.partner.type&&(this.locked=!0),this.isAgree=this.partner.privacy,this.isProxy=this.partner.proxy,this.$apply(),this.pageLoaded||this.group.admin_uid==this.operator.uid||this.partner.apply==this.partner.type&&"V"!==this.partner.apply){e.next=28;break}return o=this.group&&this.group.admin.nickname?" "+this.group.admin.nickname+" ":"",e.next=26,_wepy2.default.showModal({title:"温馨提示",content:"V"===this.partner.apply?"您当前是浏览者, 请更改您的身份":"已成功提交身份信息, 请等待管理员"+o+"确认",cancelText:"返回首页",showCancel:"V"!=this.partner.apply});case 26:u=e.sent,u.cancel&&"V"!=this.partner.apply&&_wepy2.default.reLaunch({url:"/pages/index"});case 28:this.pageLoaded=!0,this.$apply(),e.next=34;break;case 32:return e.next=34,_wepy2.default.showModal({title:"提示",content:data.msg,showCancel:!1});case 34:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page))||_class;Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(GroupUser,"sp7/pages/profile")); 
 			}); 	require("sp7/pages/profile.js");
 	