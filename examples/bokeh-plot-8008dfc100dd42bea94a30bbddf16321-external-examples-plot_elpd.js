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
    
      
      
    
      var element = document.getElementById("90c03e52-6737-41d5-aaa9-04ac81ba0747");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '90c03e52-6737-41d5-aaa9-04ac81ba0747' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1dd40eb5-a6e0-46e9-9542-3b2b80235628":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17328"},"major_label_policy":{"id":"17327"},"ticker":{"id":"17297"}},"id":"17296","type":"LinearAxis"},{"attributes":{},"id":"17290","type":"LinearScale"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17319","type":"Scatter"},{"attributes":{},"id":"17288","type":"LinearScale"},{"attributes":{},"id":"17331","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"17307","type":"HoverTool"},{"attributes":{},"id":"17286","type":"DataRange1d"},{"attributes":{"source":{"id":"17320"}},"id":"17322","type":"CDSView"},{"attributes":{},"id":"17328","type":"BasicTickFormatter"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17323","type":"Title"},{"attributes":{"axis":{"id":"17292"},"ticker":null},"id":"17295","type":"Grid"},{"attributes":{},"id":"17284","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"17310"}],"tools":[{"id":"17300"},{"id":"17301"},{"id":"17302"},{"id":"17303"},{"id":"17304"},{"id":"17305"},{"id":"17306"},{"id":"17307"}]},"id":"17338","type":"ProxyToolbar"},{"attributes":{},"id":"17301","type":"PanTool"},{"attributes":{"below":[{"id":"17292"}],"center":[{"id":"17295"},{"id":"17299"}],"height":288,"left":[{"id":"17296"}],"output_backend":"webgl","renderers":[{"id":"17321"}],"title":{"id":"17323"},"toolbar":{"id":"17310"},"toolbar_location":null,"width":432,"x_range":{"id":"17284"},"x_scale":{"id":"17288"},"y_range":{"id":"17286"},"y_scale":{"id":"17290"}},"id":"17283","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17306","type":"SaveTool"},{"attributes":{},"id":"17335","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"17338"},"toolbar_location":"above"},"id":"17339","type":"ToolbarBox"},{"attributes":{},"id":"17327","type":"AllLabels"},{"attributes":{},"id":"17300","type":"ResetTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17309","type":"PolyAnnotation"},{"attributes":{"formatter":{"id":"17331"},"major_label_policy":{"id":"17330"},"ticker":{"id":"17293"}},"id":"17292","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17308","type":"BoxAnnotation"},{"attributes":{},"id":"17297","type":"BasicTicker"},{"attributes":{"axis":{"id":"17296"},"dimension":1,"ticker":null},"id":"17299","type":"Grid"},{"attributes":{},"id":"17293","type":"BasicTicker"},{"attributes":{},"id":"17305","type":"UndoTool"},{"attributes":{},"id":"17303","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"17308"}},"id":"17302","type":"BoxZoomTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17334"},"selection_policy":{"id":"17335"}},"id":"17320","type":"ColumnDataSource"},{"attributes":{},"id":"17334","type":"Selection"},{"attributes":{"children":[[{"id":"17283"},0,0]]},"id":"17337","type":"GridBox"},{"attributes":{"children":[{"id":"17339"},{"id":"17337"}]},"id":"17340","type":"Column"},{"attributes":{"data_source":{"id":"17320"},"glyph":{"id":"17319"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17322"}},"id":"17321","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"17309"}},"id":"17304","type":"LassoSelectTool"},{"attributes":{"active_multi":null,"tools":[{"id":"17300"},{"id":"17301"},{"id":"17302"},{"id":"17303"},{"id":"17304"},{"id":"17305"},{"id":"17306"},{"id":"17307"}]},"id":"17310","type":"Toolbar"},{"attributes":{},"id":"17330","type":"AllLabels"}],"root_ids":["17340"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"1dd40eb5-a6e0-46e9-9542-3b2b80235628","root_ids":["17340"],"roots":{"17340":"90c03e52-6737-41d5-aaa9-04ac81ba0747"}}];
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