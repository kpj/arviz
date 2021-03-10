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
    
      
      
    
      var element = document.getElementById("7b7ebda5-0ec0-49fb-a7fe-7eec13d78d31");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7b7ebda5-0ec0-49fb-a7fe-7eec13d78d31' but no matching script tag was found.")
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
                    
                  var docs_json = '{"88c572f0-6cf2-4fef-b213-71608ce4c5ae":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"text":"sigma"},"id":"17856","type":"Title"},{"attributes":{},"id":"17821","type":"LinearScale"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17864"},"major_label_policy":{"id":"17863"},"ticker":{"id":"17824"}},"id":"17823","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"17841"}],"tools":[{"id":"17831"},{"id":"17832"},{"id":"17833"},{"id":"17834"},{"id":"17835"},{"id":"17836"},{"id":"17837"},{"id":"17838"}]},"id":"17871","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"17840"}},"id":"17835","type":"LassoSelectTool"},{"attributes":{},"id":"17819","type":"LinearScale"},{"attributes":{"toolbar":{"id":"17871"},"toolbar_location":"above"},"id":"17872","type":"ToolbarBox"},{"attributes":{"children":[[{"id":"17814"},0,0]]},"id":"17870","type":"GridBox"},{"attributes":{"callback":null},"id":"17838","type":"HoverTool"},{"attributes":{"source":{"id":"17850"}},"id":"17854","type":"CDSView"},{"attributes":{"axis":{"id":"17823"},"ticker":null},"id":"17826","type":"Grid"},{"attributes":{},"id":"17868","type":"UnionRenderers"},{"attributes":{},"id":"17834","type":"WheelZoomTool"},{"attributes":{},"id":"17867","type":"Selection"},{"attributes":{},"id":"17861","type":"BasicTickFormatter"},{"attributes":{},"id":"17837","type":"SaveTool"},{"attributes":{"data_source":{"id":"17850"},"glyph":{"id":"17851"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17852"},"view":{"id":"17854"}},"id":"17853","type":"GlyphRenderer"},{"attributes":{},"id":"17831","type":"ResetTool"},{"attributes":{},"id":"17860","type":"AllLabels"},{"attributes":{},"id":"17832","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17867"},"selection_policy":{"id":"17868"}},"id":"17850","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"17839"}},"id":"17833","type":"BoxZoomTool"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17855","type":"Span"},{"attributes":{},"id":"17863","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17852","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17839","type":"BoxAnnotation"},{"attributes":{},"id":"17817","type":"DataRange1d"},{"attributes":{},"id":"17828","type":"BasicTicker"},{"attributes":{},"id":"17864","type":"BasicTickFormatter"},{"attributes":{"active_multi":null,"tools":[{"id":"17831"},{"id":"17832"},{"id":"17833"},{"id":"17834"},{"id":"17835"},{"id":"17836"},{"id":"17837"},{"id":"17838"}]},"id":"17841","type":"Toolbar"},{"attributes":{"axis":{"id":"17827"},"dimension":1,"ticker":null},"id":"17830","type":"Grid"},{"attributes":{"below":[{"id":"17823"}],"center":[{"id":"17826"},{"id":"17830"}],"height":500,"left":[{"id":"17827"}],"output_backend":"webgl","renderers":[{"id":"17853"},{"id":"17855"}],"title":{"id":"17856"},"toolbar":{"id":"17841"},"toolbar_location":null,"width":500,"x_range":{"id":"17815"},"x_scale":{"id":"17819"},"y_range":{"id":"17817"},"y_scale":{"id":"17821"}},"id":"17814","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"17872"},{"id":"17870"}]},"id":"17873","type":"Column"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17840","type":"PolyAnnotation"},{"attributes":{},"id":"17815","type":"DataRange1d"},{"attributes":{},"id":"17824","type":"BasicTicker"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"17861"},"major_label_policy":{"id":"17860"},"ticker":{"id":"17828"}},"id":"17827","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17851","type":"Circle"},{"attributes":{},"id":"17836","type":"UndoTool"}],"root_ids":["17873"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"88c572f0-6cf2-4fef-b213-71608ce4c5ae","root_ids":["17873"],"roots":{"17873":"7b7ebda5-0ec0-49fb-a7fe-7eec13d78d31"}}];
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