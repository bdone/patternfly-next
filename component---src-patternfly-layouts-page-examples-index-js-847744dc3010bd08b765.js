webpackJsonp([0xf716b734a9a5],{562:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>This layout provides the basic chrome for a page, including sidebar, header and main areas.</p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>role=&quot;banner&quot;</code></td> <td><code>.pf-l-page__header</code></td> <td>.</td> </tr> <tr> <td><code>role=&quot;main&quot;</code></td> <td><code>.pf-l-page__main</code></td> <td>.</td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-page</code></td> <td><code>&lt;div&gt;</code></td> <td>Declares the page layout chrome.</td> </tr> <tr> <td><code>.pf-l-page__header</code></td> <td><code>&lt;header&gt;</code></td> <td>Declares the page header.</td> </tr> <tr> <td><code>.pf-l-page__header-sidebar</code></td> <td><code>&lt;section&gt;</code></td> <td>Declares the sidebar section of the header.</td> </tr> <tr> <td><code>.pf-l-page__header-main</code></td> <td><code>&lt;section&gt;</code></td> <td>Declares the main section of the header.</td> </tr> <tr> <td><code>.pf-l-page__sidebar</code></td> <td><code>&lt;div&gt;</code></td> <td>Declares the page sidebar.</td> </tr> <tr> <td><code>.pf-l-page__main</code></td> <td><code>&lt;main&gt;</code></td> <td>Declares the main page area.</td> </tr> </tbody> </table> "},219:function(e,t,a){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var r=a(3),o=d(r),l=a(8),n=d(l),i=a(9),c=d(i),s=a(562),p=d(s),h=a(512),u=d(h);a(674);var f=t.Docs=p.default;t.default=function(){var e=(0,u.default)();return o.default.createElement(n.default,{docs:f,className:"is-layout-page"},o.default.createElement(c.default,{heading:"Page Example"},e))}},512:function(e,t,a){var d=a(1);e.exports=(d.default||d).template({1:function(e,t,a,d,r){return"Page Layout Content"},compiler:[7,">= 4.0.0"],main:function(e,t,d,r,o){var l;return(null!=(l=e.invokePartial(a(513),t,{name:"page",fn:e.program(1,o,0),inverse:e.noop,data:o,helpers:d,partials:r,decorators:e.decorators}))?l:"")+"\n"},usePartial:!0,useData:!0})},513:function(e,t,a){var d=a(1);e.exports=(d.default||d).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,d,r){var o,l;return'<div class="pf-l-page '+e.escapeExpression((l=null!=(l=a.modifierClass||(null!=t?t.modifierClass:t))?l:a.helperMissing,"function"==typeof l?l.call(null!=t?t:e.nullContext||{},{name:"modifierClass",hash:{},data:r}):l))+'">\n  <header role="banner" class="pf-l-page__header">\n    <section class="pf-l-page__header-sidebar">\n      Left\n    </section>\n    <section class="pf-l-page__header-main">\n      Right\n    </section>\n  </header>\n  <div class="pf-l-page__sidebar">\n    Nav\n  </div>\n  <main role="main" class="pf-l-page__main">\n'+(null!=(o=e.invokePartial(d["@partial-block"],t,{name:"@partial-block",data:r,indent:"    ",helpers:a,partials:d,decorators:e.decorators}))?o:"")+"  </main>\n</div>\n\n"},usePartial:!0,useData:!0})},674:function(e,t){}});
//# sourceMappingURL=component---src-patternfly-layouts-page-examples-index-js-847744dc3010bd08b765.js.map