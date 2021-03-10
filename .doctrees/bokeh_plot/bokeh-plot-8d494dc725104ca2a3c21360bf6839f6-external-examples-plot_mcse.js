(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("eeb3b091-ab36-46a0-99ab-29229a347e5b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'eeb3b091-ab36-46a0-99ab-29229a347e5b' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js": "HjagQp6T0/7bxYTAXbLotF1MLAGWmhkY5siA1Gc/pcEgvgRPtMsRn0gQtMwGKiw1", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js": "ZEPPTjL+mdyqgIq+/pl9KTwzji8Kow2NnI3zWY8+sFinWP/SYJ80BnfeJsa45iYj", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js": "exLqv2ACDRIaV7ZK1iL8aGzGYQvKVuT3U2CT7FsQREBxRah6JrkVCoFy0koY1YqV"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"4d0c7d50-f5ad-48e3-8a98-465efe5152a4":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"children":[{"id":"35570"},{"id":"35568"}]},"id":"35571","type":"Column"},{"attributes":{"toolbar":{"id":"35569"},"toolbar_location":"above"},"id":"35570","type":"ToolbarBox"},{"attributes":{},"id":"35559","type":"AllLabels"},{"attributes":{"below":[{"id":"35485"}],"center":[{"id":"35488"},{"id":"35492"}],"height":500,"left":[{"id":"35489"}],"output_backend":"webgl","renderers":[{"id":"35529"},{"id":"35531"},{"id":"35532"},{"id":"35533"},{"id":"35536"}],"title":{"id":"35538"},"toolbar":{"id":"35503"},"toolbar_location":null,"width":500,"x_range":{"id":"35477"},"x_scale":{"id":"35481"},"y_range":{"id":"35479"},"y_scale":{"id":"35483"}},"id":"35476","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35560","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35514","type":"Circle"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35560"},"major_label_policy":{"id":"35559"},"ticker":{"id":"35486"}},"id":"35485","type":"LinearAxis"},{"attributes":{"below":[{"id":"35449"}],"center":[{"id":"35452"},{"id":"35456"}],"height":500,"left":[{"id":"35453"}],"output_backend":"webgl","renderers":[{"id":"35515"},{"id":"35517"},{"id":"35518"},{"id":"35519"},{"id":"35522"}],"title":{"id":"35524"},"toolbar":{"id":"35467"},"toolbar_location":null,"width":500,"x_range":{"id":"35441"},"x_scale":{"id":"35445"},"y_range":{"id":"35443"},"y_scale":{"id":"35447"}},"id":"35440","subtype":"Figure","type":"Plot"},{"attributes":{"end":1,"start":-0.05},"id":"35479","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35557"},"major_label_policy":{"id":"35556"},"ticker":{"id":"35490"}},"id":"35489","type":"LinearAxis"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35543"},"major_label_policy":{"id":"35542"},"ticker":{"id":"35454"}},"id":"35453","type":"LinearAxis"},{"attributes":{},"id":"35481","type":"LinearScale"},{"attributes":{},"id":"35483","type":"LinearScale"},{"attributes":{"callback":null},"id":"35500","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35513","type":"Circle"},{"attributes":{},"id":"35441","type":"DataRange1d"},{"attributes":{},"id":"35486","type":"BasicTicker"},{"attributes":{"axis":{"id":"35485"},"ticker":null},"id":"35488","type":"Grid"},{"attributes":{"end":1,"start":-0.05},"id":"35443","type":"DataRange1d"},{"attributes":{},"id":"35447","type":"LinearScale"},{"attributes":{},"id":"35563","type":"Selection"},{"attributes":{},"id":"35445","type":"LinearScale"},{"attributes":{"axis":{"id":"35489"},"dimension":1,"ticker":null},"id":"35492","type":"Grid"},{"attributes":{"axis":{"id":"35453"},"dimension":1,"ticker":null},"id":"35456","type":"Grid"},{"attributes":{},"id":"35490","type":"BasicTicker"},{"attributes":{},"id":"35564","type":"UnionRenderers"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"35517","type":"Span"},{"attributes":{"overlay":{"id":"35501"}},"id":"35495","type":"BoxZoomTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35546"},"major_label_policy":{"id":"35545"},"ticker":{"id":"35450"}},"id":"35449","type":"LinearAxis"},{"attributes":{"callback":null},"id":"35464","type":"HoverTool"},{"attributes":{},"id":"35494","type":"PanTool"},{"attributes":{},"id":"35458","type":"PanTool"},{"attributes":{},"id":"35493","type":"ResetTool"},{"attributes":{},"id":"35499","type":"SaveTool"},{"attributes":{},"id":"35450","type":"BasicTicker"},{"attributes":{},"id":"35496","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"35502"}},"id":"35497","type":"LassoSelectTool"},{"attributes":{},"id":"35498","type":"UndoTool"},{"attributes":{},"id":"35454","type":"BasicTicker"},{"attributes":{},"id":"35565","type":"Selection"},{"attributes":{"axis":{"id":"35449"},"ticker":null},"id":"35452","type":"Grid"},{"attributes":{},"id":"35477","type":"DataRange1d"},{"attributes":{"source":{"id":"35521"}},"id":"35523","type":"CDSView"},{"attributes":{"overlay":{"id":"35465"}},"id":"35459","type":"BoxZoomTool"},{"attributes":{},"id":"35542","type":"AllLabels"},{"attributes":{},"id":"35463","type":"SaveTool"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"35518","type":"Span"},{"attributes":{},"id":"35457","type":"ResetTool"},{"attributes":{},"id":"35543","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35519","type":"Span"},{"attributes":{},"id":"35460","type":"WheelZoomTool"},{"attributes":{"text":"tau"},"id":"35524","type":"Title"},{"attributes":{},"id":"35566","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"35457"},{"id":"35458"},{"id":"35459"},{"id":"35460"},{"id":"35461"},{"id":"35462"},{"id":"35463"},{"id":"35464"}]},"id":"35467","type":"Toolbar"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35520","type":"Scatter"},{"attributes":{"overlay":{"id":"35466"}},"id":"35461","type":"LassoSelectTool"},{"attributes":{"children":[[{"id":"35440"},0,0],[{"id":"35476"},0,1]]},"id":"35568","type":"GridBox"},{"attributes":{},"id":"35462","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35528","type":"Circle"},{"attributes":{"source":{"id":"35535"}},"id":"35537","type":"CDSView"},{"attributes":{"data_source":{"id":"35521"},"glyph":{"id":"35520"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35523"}},"id":"35522","type":"GlyphRenderer"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35551"},"selection_policy":{"id":"35552"}},"id":"35521","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35526"},"glyph":{"id":"35527"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35528"},"view":{"id":"35530"}},"id":"35529","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35527","type":"Circle"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35565"},"selection_policy":{"id":"35566"}},"id":"35535","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35563"},"selection_policy":{"id":"35564"}},"id":"35526","type":"ColumnDataSource"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35534","type":"Scatter"},{"attributes":{"text":"mu"},"id":"35538","type":"Title"},{"attributes":{"toolbars":[{"id":"35467"},{"id":"35503"}],"tools":[{"id":"35457"},{"id":"35458"},{"id":"35459"},{"id":"35460"},{"id":"35461"},{"id":"35462"},{"id":"35463"},{"id":"35464"},{"id":"35493"},{"id":"35494"},{"id":"35495"},{"id":"35496"},{"id":"35497"},{"id":"35498"},{"id":"35499"},{"id":"35500"}]},"id":"35569","type":"ProxyToolbar"},{"attributes":{},"id":"35545","type":"AllLabels"},{"attributes":{"data_source":{"id":"35512"},"glyph":{"id":"35513"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35514"},"view":{"id":"35516"}},"id":"35515","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35533","type":"Span"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"35532","type":"Span"},{"attributes":{},"id":"35546","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"35535"},"glyph":{"id":"35534"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35537"}},"id":"35536","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35501","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"35531","type":"Span"},{"attributes":{"source":{"id":"35526"}},"id":"35530","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35465","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35502","type":"PolyAnnotation"},{"attributes":{},"id":"35549","type":"Selection"},{"attributes":{},"id":"35550","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35466","type":"PolyAnnotation"},{"attributes":{},"id":"35556","type":"AllLabels"},{"attributes":{},"id":"35551","type":"Selection"},{"attributes":{},"id":"35557","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35549"},"selection_policy":{"id":"35550"}},"id":"35512","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"35493"},{"id":"35494"},{"id":"35495"},{"id":"35496"},{"id":"35497"},{"id":"35498"},{"id":"35499"},{"id":"35500"}]},"id":"35503","type":"Toolbar"},{"attributes":{},"id":"35552","type":"UnionRenderers"},{"attributes":{"source":{"id":"35512"}},"id":"35516","type":"CDSView"}],"root_ids":["35571"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"4d0c7d50-f5ad-48e3-8a98-465efe5152a4","root_ids":["35571"],"roots":{"35571":"eeb3b091-ab36-46a0-99ab-29229a347e5b"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();