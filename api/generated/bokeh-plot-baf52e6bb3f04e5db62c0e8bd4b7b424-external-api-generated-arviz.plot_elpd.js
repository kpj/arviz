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
    
      
      
    
      var element = document.getElementById("3cb241eb-9dee-4098-8b00-2522e7deb133");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3cb241eb-9dee-4098-8b00-2522e7deb133' but no matching script tag was found.")
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
                    
                  var docs_json = '{"08f91243-7012-4d7e-ad30-986e2adf1595":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"14227","type":"SaveTool"},{"attributes":{},"id":"14256","type":"UnionRenderers"},{"attributes":{"below":[{"id":"14213"}],"center":[{"id":"14216"},{"id":"14220"}],"height":288,"left":[{"id":"14217"}],"output_backend":"webgl","renderers":[{"id":"14242"}],"title":{"id":"14244"},"toolbar":{"id":"14231"},"toolbar_location":null,"width":432,"x_range":{"id":"14205"},"x_scale":{"id":"14209"},"y_range":{"id":"14207"},"y_scale":{"id":"14211"}},"id":"14204","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14221","type":"ResetTool"},{"attributes":{},"id":"14251","type":"AllLabels"},{"attributes":{},"id":"14214","type":"BasicTicker"},{"attributes":{},"id":"14207","type":"DataRange1d"},{"attributes":{"overlay":{"id":"14230"}},"id":"14225","type":"LassoSelectTool"},{"attributes":{},"id":"14252","type":"BasicTickFormatter"},{"attributes":{},"id":"14222","type":"PanTool"},{"attributes":{"axis":{"id":"14213"},"ticker":null},"id":"14216","type":"Grid"},{"attributes":{"data_source":{"id":"14241"},"glyph":{"id":"14240"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14243"}},"id":"14242","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"14228","type":"HoverTool"},{"attributes":{},"id":"14211","type":"LinearScale"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14255"},"selection_policy":{"id":"14256"}},"id":"14241","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"14217"},"dimension":1,"ticker":null},"id":"14220","type":"Grid"},{"attributes":{},"id":"14224","type":"WheelZoomTool"},{"attributes":{"active_multi":null,"tools":[{"id":"14221"},{"id":"14222"},{"id":"14223"},{"id":"14224"},{"id":"14225"},{"id":"14226"},{"id":"14227"},{"id":"14228"}]},"id":"14231","type":"Toolbar"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14249"},"major_label_policy":{"id":"14248"},"ticker":{"id":"14218"}},"id":"14217","type":"LinearAxis"},{"attributes":{},"id":"14255","type":"Selection"},{"attributes":{"text":"centered model - non centered model"},"id":"14244","type":"Title"},{"attributes":{},"id":"14209","type":"LinearScale"},{"attributes":{},"id":"14218","type":"BasicTicker"},{"attributes":{},"id":"14248","type":"AllLabels"},{"attributes":{"children":[[{"id":"14204"},0,0]]},"id":"14258","type":"GridBox"},{"attributes":{"children":[{"id":"14260"},{"id":"14258"}]},"id":"14261","type":"Column"},{"attributes":{"toolbar":{"id":"14259"},"toolbar_location":"above"},"id":"14260","type":"ToolbarBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14229","type":"BoxAnnotation"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14240","type":"Scatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14230","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"14229"}},"id":"14223","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"14252"},"major_label_policy":{"id":"14251"},"ticker":{"id":"14214"}},"id":"14213","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"14231"}],"tools":[{"id":"14221"},{"id":"14222"},{"id":"14223"},{"id":"14224"},{"id":"14225"},{"id":"14226"},{"id":"14227"},{"id":"14228"}]},"id":"14259","type":"ProxyToolbar"},{"attributes":{"source":{"id":"14241"}},"id":"14243","type":"CDSView"},{"attributes":{},"id":"14205","type":"DataRange1d"},{"attributes":{},"id":"14249","type":"BasicTickFormatter"},{"attributes":{},"id":"14226","type":"UndoTool"}],"root_ids":["14261"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"08f91243-7012-4d7e-ad30-986e2adf1595","root_ids":["14261"],"roots":{"14261":"3cb241eb-9dee-4098-8b00-2522e7deb133"}}];
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