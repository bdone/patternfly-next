webpackJsonp([0xbfb1048a1140],{48:function(a,e,r){var t=r(1);a.exports=(t.default||t).template({compiler:[7,">= 4.0.0"],main:function(a,e,r,t,d){var n,o;return'<div class="pf-c-card__body '+a.escapeExpression((o=null!=(o=r["pf-c-card__body-modifier"]||(null!=e?e["pf-c-card__body-modifier"]:e))?o:r.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"pf-c-card__body-modifier",hash:{},data:d}):o))+'">\n'+(null!=(n=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:d,indent:"  ",helpers:r,partials:t,decorators:a.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},126:function(a,e,r){var t=r(1);a.exports=(t.default||t).template({compiler:[7,">= 4.0.0"],main:function(a,e,r,t,d){var n,o;return'<div class="pf-c-card__footer '+a.escapeExpression((o=null!=(o=r["pf-c-card__footer-modifier"]||(null!=e?e["pf-c-card__footer-modifier"]:e))?o:r.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"pf-c-card__footer-modifier",hash:{},data:d}):o))+'">\n'+(null!=(n=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:d,indent:"  ",helpers:r,partials:t,decorators:a.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},127:function(a,e,r){var t=r(1);a.exports=(t.default||t).template({compiler:[7,">= 4.0.0"],main:function(a,e,r,t,d){var n,o;return'<div class="pf-c-card__header '+a.escapeExpression((o=null!=(o=r["pf-c-card__header-modifier"]||(null!=e?e["pf-c-card__header-modifier"]:e))?o:r.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"pf-c-card__header-modifier",hash:{},data:d}):o))+'">\n'+(null!=(n=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:d,indent:"  ",helpers:r,partials:t,decorators:a.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},49:function(a,e,r){var t=r(1);a.exports=(t.default||t).template({compiler:[7,">= 4.0.0"],main:function(a,e,r,t,d){var n,o;return'<div class="pf-c-card '+a.escapeExpression((o=null!=(o=r["pf-c-card-modifier"]||(null!=e?e["pf-c-card-modifier"]:e))?o:r.helperMissing,"function"==typeof o?o.call(null!=e?e:a.nullContext||{},{name:"pf-c-card-modifier",hash:{},data:d}):o))+'">\n'+(null!=(n=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:d,indent:"  ",helpers:r,partials:t,decorators:a.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},241:function(a,e,r){var t=r(1);a.exports=(t.default||t).template({1:function(a,e,r,t,d){var n;return" "+a.escapeExpression((n=null!=(n=r["card-upgrade-examples--modifier"]||(null!=e?e["card-upgrade-examples--modifier"]:e))?n:r.helperMissing,"function"==typeof n?n.call(null!=e?e:a.nullContext||{},{name:"card-upgrade-examples--modifier",hash:{},data:d}):n))},3:function(a,e,r,t,d){var n;return'    id="'+a.escapeExpression((n=null!=(n=r["pf-d-card-upgrade-examples__id"]||(null!=e?e["pf-d-card-upgrade-examples__id"]:e))?n:r.helperMissing,"function"==typeof n?n.call(null!=e?e:a.nullContext||{},{name:"pf-d-card-upgrade-examples__id",hash:{},data:d}):n))+'"\n  '},compiler:[7,">= 4.0.0"],main:function(a,e,r,t,d){var n,o=null!=e?e:a.nullContext||{};return'<div class="pf-d-card-upgrade-examples'+(null!=(n=r.if.call(o,null!=e?e["card-upgrade-examples--modifier"]:e,{name:"if",hash:{},fn:a.program(1,d,0),inverse:a.noop,data:d}))?n:"")+'"\n'+(null!=(n=r.if.call(o,null!=e?e["pf-d-upgrade-examples__id"]:e,{name:"if",hash:{},fn:a.program(3,d,0),inverse:a.noop,data:d}))?n:"")+">\n"+(null!=(n=a.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:d,indent:"  ",helpers:r,partials:t,decorators:a.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},794:function(a,e){a.exports="<h2 id=overview>Overview</h2> <p>When converting PatternFly 3 components to PatternFly 4 components, you must also take into consideration the layouts and sizings that PatternFly 3 utilized from Bootstrap 3.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>PF3 Class</th> <th>Applied To</th> <th>PF4 Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.card-pf</code></td> <td><code>&lt;div&gt;</code></td> <td><code>.pf-c-card</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a card containing content.</td> </tr> <tr> <td><code>.card-pf-heading</code></td> <td><code>&lt;div&gt;</code></td> <td><code>.pf-c-card__header</code></td> <td><code>.pf-c-card</code></td> <td>Creates the header of a card.</td> </tr> <tr> <td><code>.card-pf-body</code></td> <td><code>&lt;div&gt;</code></td> <td><code>.pf-c-card__body</code></td> <td><code>.pf-c-card</code></td> <td>Creates the body of a card. Required.</td> </tr> <tr> <td><code>.card-pf-footer</code></td> <td><code>&lt;div&gt;</code></td> <td><code>.pf-c-card__footer</code></td> <td><code>.pf-c-card</code></td> <td>Creates the footer of a card.</td> </tr> </tbody> </table> "},709:function(a,e,r){var t=r(1);a.exports=(t.default||t).template({1:function(a,e,r,t,d){return'<div class="cards-pf">\n  <div class="container-fluid container-cards-pf">\n    <div class="row row-cards-pf">\n      <div class="col-sm-3">\n        <div class="card-pf">\n          <div class="card-pf-heading">\n            <h2 class="card-pf-title">\n              Card Title\n            </h2>\n          </div>\n          <div class="card-pf-body">\n            <p>\n              Card Contents\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class="col-sm-3">\n        <div class="card-pf">\n          <div class="card-pf-heading">\n            <h2 class="card-pf-title">\n              Card Title\n            </h2>\n          </div>\n          <div class="card-pf-body">\n            <p>\n              Card Contents\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'},compiler:[7,">= 4.0.0"],main:function(a,e,t,d,n){var o;return null!=(o=a.invokePartial(r(241),e,{name:"card-upgrade-examples",fn:a.program(1,n,0),inverse:a.noop,data:n,helpers:t,partials:d,decorators:a.decorators}))?o:""},usePartial:!0,useData:!0})},710:function(a,e,r){var t=r(1);a.exports=(t.default||t).template({1:function(a,e,t,d,n){var o;return null!=(o=a.invokePartial(r(49),e,{name:"card",hash:{"pf-c-card-modifier":""},fn:a.program(2,n,0),inverse:a.noop,data:n,helpers:t,partials:d,decorators:a.decorators}))?o:""},2:function(a,e,t,d,n){var o;return(null!=(o=a.invokePartial(r(127),e,{name:"card-header",hash:{"pf-c-card__header-modifier":""},fn:a.program(3,n,0),inverse:a.noop,data:n,helpers:t,partials:d,decorators:a.decorators}))?o:"")+(null!=(o=a.invokePartial(r(48),e,{name:"card-body",hash:{"pf-c-card__content-modifier":""},fn:a.program(5,n,0),inverse:a.noop,data:n,helpers:t,partials:d,decorators:a.decorators}))?o:"")+(null!=(o=a.invokePartial(r(126),e,{name:"card-footer",hash:{"pf-c-card__footer-modifier":""},fn:a.program(7,n,0),inverse:a.noop,data:n,helpers:t,partials:d,decorators:a.decorators}))?o:"")},3:function(a,e,r,t,d){return"      Header\n"},5:function(a,e,r,t,d){return"      Body\n"},7:function(a,e,r,t,d){return"      Footer\n"},compiler:[7,">= 4.0.0"],main:function(a,e,t,d,n){var o;return null!=(o=a.invokePartial(r(241),e,{name:"card-upgrade-examples",fn:a.program(1,n,0),inverse:a.noop,data:n,helpers:t,partials:d,decorators:a.decorators}))?o:""},usePartial:!0,useData:!0})},301:function(a,e,r){"use strict";function t(a){return a&&a.__esModule?a:{default:a}}e.__esModule=!0,e.Docs=void 0;var d=r(3),n=t(d),o=r(10),l=t(o),i=r(11),c=t(i),s=r(794),p=t(s),f=r(709),u=t(f),m=r(710),v=t(m);r(949);var h=e.Docs=p.default;e.default=function(){var a=(0,u.default)(),e=(0,v.default)(),r="Card Migration";return n.default.createElement(l.default,{docs:h,heading:r},n.default.createElement(c.default,{heading:"PatternFly 3 Cards"},a),n.default.createElement(c.default,{heading:"PatternFly 4 Cards"},e))}},949:function(a,e){}});
//# sourceMappingURL=component---src-patternfly-upgrade-examples-card-upgrade-examples-examples-index-js-e79e6b452dd8c27328df.js.map