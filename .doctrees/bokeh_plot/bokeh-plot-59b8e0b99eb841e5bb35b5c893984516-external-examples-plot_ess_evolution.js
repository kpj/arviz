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
    
      
      
    
      var element = document.getElementById("69842e95-cd05-4332-9f9d-e3095e841070");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '69842e95-cd05-4332-9f9d-e3095e841070' but no matching script tag was found.")
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
                    
                  var docs_json = '{"201b0043-1ddb-404e-8b7d-4b276067a190":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"above":[{"id":"17600"}],"below":[{"id":"17552"}],"center":[{"id":"17555"},{"id":"17559"}],"height":500,"left":[{"id":"17556"}],"output_backend":"webgl","renderers":[{"id":"17582"},{"id":"17587"},{"id":"17592"},{"id":"17597"},{"id":"17599"}],"title":{"id":"17603"},"toolbar":{"id":"17570"},"toolbar_location":null,"width":500,"x_range":{"id":"17544"},"x_scale":{"id":"17548"},"y_range":{"id":"17546"},"y_scale":{"id":"17550"}},"id":"17543","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"17589"},"glyph":{"id":"17590"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17591"},"view":{"id":"17593"}},"id":"17592","type":"GlyphRenderer"},{"attributes":{},"id":"17565","type":"UndoTool"},{"attributes":{},"id":"17553","type":"BasicTicker"},{"attributes":{},"id":"17560","type":"ResetTool"},{"attributes":{"source":{"id":"17579"}},"id":"17583","type":"CDSView"},{"attributes":{},"id":"17616","type":"Selection"},{"attributes":{"click_policy":"hide","items":[{"id":"17601"},{"id":"17602"}],"location":"center_right","orientation":"horizontal"},"id":"17600","type":"Legend"},{"attributes":{"data_source":{"id":"17584"},"glyph":{"id":"17585"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17586"},"view":{"id":"17588"}},"id":"17587","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"17552"},"ticker":null},"id":"17555","type":"Grid"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"17597"},{"id":"17592"}]},"id":"17602","type":"LegendItem"},{"attributes":{},"id":"17561","type":"PanTool"},{"attributes":{},"id":"17548","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17581","type":"Circle"},{"attributes":{},"id":"17607","type":"AllLabels"},{"attributes":{"toolbar":{"id":"17624"},"toolbar_location":"above"},"id":"17625","type":"ToolbarBox"},{"attributes":{},"id":"17619","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17596","type":"Circle"},{"attributes":{"source":{"id":"17594"}},"id":"17598","type":"CDSView"},{"attributes":{},"id":"17610","type":"AllLabels"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17590","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17618"},"selection_policy":{"id":"17619"}},"id":"17589","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17568","type":"BoxAnnotation"},{"attributes":{"source":{"id":"17589"}},"id":"17593","type":"CDSView"},{"attributes":{},"id":"17546","type":"DataRange1d"},{"attributes":{"axis":{"id":"17556"},"dimension":1,"ticker":null},"id":"17559","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17586","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17580","type":"Circle"},{"attributes":{},"id":"17611","type":"BasicTickFormatter"},{"attributes":{"active_multi":null,"tools":[{"id":"17560"},{"id":"17561"},{"id":"17562"},{"id":"17563"},{"id":"17564"},{"id":"17565"},{"id":"17566"},{"id":"17567"}]},"id":"17570","type":"Toolbar"},{"attributes":{"data_source":{"id":"17594"},"glyph":{"id":"17595"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17596"},"view":{"id":"17598"}},"id":"17597","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17595","type":"Circle"},{"attributes":{},"id":"17614","type":"Selection"},{"attributes":{"data_source":{"id":"17579"},"glyph":{"id":"17580"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17581"},"view":{"id":"17583"}},"id":"17582","type":"GlyphRenderer"},{"attributes":{},"id":"17617","type":"UnionRenderers"},{"attributes":{},"id":"17620","type":"Selection"},{"attributes":{},"id":"17544","type":"DataRange1d"},{"attributes":{"text":"b"},"id":"17603","type":"Title"},{"attributes":{"source":{"id":"17584"}},"id":"17588","type":"CDSView"},{"attributes":{},"id":"17608","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17591","type":"Line"},{"attributes":{},"id":"17550","type":"LinearScale"},{"attributes":{},"id":"17557","type":"BasicTicker"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17599","type":"Span"},{"attributes":{"overlay":{"id":"17569"}},"id":"17564","type":"LassoSelectTool"},{"attributes":{"children":[[{"id":"17543"},0,0]]},"id":"17623","type":"GridBox"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17616"},"selection_policy":{"id":"17617"}},"id":"17584","type":"ColumnDataSource"},{"attributes":{},"id":"17618","type":"Selection"},{"attributes":{},"id":"17566","type":"SaveTool"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"17611"},"major_label_policy":{"id":"17610"},"ticker":{"id":"17553"}},"id":"17552","type":"LinearAxis"},{"attributes":{},"id":"17615","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17585","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17620"},"selection_policy":{"id":"17621"}},"id":"17594","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"17570"}],"tools":[{"id":"17560"},{"id":"17561"},{"id":"17562"},{"id":"17563"},{"id":"17564"},{"id":"17565"},{"id":"17566"},{"id":"17567"}]},"id":"17624","type":"ProxyToolbar"},{"attributes":{},"id":"17621","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17569","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"17567","type":"HoverTool"},{"attributes":{"children":[{"id":"17625"},{"id":"17623"}]},"id":"17626","type":"Column"},{"attributes":{"axis_label":"ESS","formatter":{"id":"17608"},"major_label_policy":{"id":"17607"},"ticker":{"id":"17557"}},"id":"17556","type":"LinearAxis"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"17582"},{"id":"17587"}]},"id":"17601","type":"LegendItem"},{"attributes":{"overlay":{"id":"17568"}},"id":"17562","type":"BoxZoomTool"},{"attributes":{},"id":"17563","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17614"},"selection_policy":{"id":"17615"}},"id":"17579","type":"ColumnDataSource"}],"root_ids":["17626"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"201b0043-1ddb-404e-8b7d-4b276067a190","root_ids":["17626"],"roots":{"17626":"69842e95-cd05-4332-9f9d-e3095e841070"}}];
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