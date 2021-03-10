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
    
      
      
    
      var element = document.getElementById("7537ad0c-00b6-4be1-a997-7ed0b0346b62");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7537ad0c-00b6-4be1-a997-7ed0b0346b62' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e69b798b-5889-4078-91a9-ba20206a063c":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"17747"},"major_label_policy":{"id":"17746"},"ticker":{"id":"17709"}},"id":"17708","type":"LinearAxis"},{"attributes":{"data_source":{"id":"17737"},"glyph":{"id":"17736"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17739"}},"id":"17738","type":"GlyphRenderer"},{"attributes":{},"id":"17715","type":"WheelZoomTool"},{"attributes":{"source":{"id":"17731"}},"id":"17735","type":"CDSView"},{"attributes":{},"id":"17755","type":"Selection"},{"attributes":{},"id":"17698","type":"DataRange1d"},{"attributes":{},"id":"17700","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17720","type":"BoxAnnotation"},{"attributes":{},"id":"17718","type":"SaveTool"},{"attributes":{"data_source":{"id":"17731"},"glyph":{"id":"17732"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17733"},"view":{"id":"17735"}},"id":"17734","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"17720"}},"id":"17714","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"17719","type":"HoverTool"},{"attributes":{"overlay":{"id":"17721"}},"id":"17716","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"17759"},"toolbar_location":"above"},"id":"17760","type":"ToolbarBox"},{"attributes":{},"id":"17753","type":"Selection"},{"attributes":{"source":{"id":"17737"}},"id":"17739","type":"CDSView"},{"attributes":{},"id":"17754","type":"UnionRenderers"},{"attributes":{"axis":{"id":"17708"},"dimension":1,"ticker":null},"id":"17711","type":"Grid"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"17736","type":"Scatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17721","type":"PolyAnnotation"},{"attributes":{},"id":"17705","type":"BasicTicker"},{"attributes":{},"id":"17756","type":"UnionRenderers"},{"attributes":{},"id":"17750","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"17740","type":"Span"},{"attributes":{},"id":"17712","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17733","type":"Circle"},{"attributes":{"text":"mu"},"id":"17742","type":"Title"},{"attributes":{"children":[{"id":"17760"},{"id":"17758"}]},"id":"17761","type":"Column"},{"attributes":{},"id":"17713","type":"PanTool"},{"attributes":{"children":[[{"id":"17695"},0,0]]},"id":"17758","type":"GridBox"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17753"},"selection_policy":{"id":"17754"}},"id":"17731","type":"ColumnDataSource"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"17755"},"selection_policy":{"id":"17756"}},"id":"17737","type":"ColumnDataSource"},{"attributes":{},"id":"17717","type":"UndoTool"},{"attributes":{"axis":{"id":"17704"},"ticker":null},"id":"17707","type":"Grid"},{"attributes":{},"id":"17747","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"17722"}],"tools":[{"id":"17712"},{"id":"17713"},{"id":"17714"},{"id":"17715"},{"id":"17716"},{"id":"17717"},{"id":"17718"},{"id":"17719"}]},"id":"17759","type":"ProxyToolbar"},{"attributes":{},"id":"17696","type":"DataRange1d"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17750"},"major_label_policy":{"id":"17749"},"ticker":{"id":"17705"}},"id":"17704","type":"LinearAxis"},{"attributes":{"active_multi":null,"tools":[{"id":"17712"},{"id":"17713"},{"id":"17714"},{"id":"17715"},{"id":"17716"},{"id":"17717"},{"id":"17718"},{"id":"17719"}]},"id":"17722","type":"Toolbar"},{"attributes":{},"id":"17702","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17732","type":"Circle"},{"attributes":{},"id":"17749","type":"AllLabels"},{"attributes":{},"id":"17746","type":"AllLabels"},{"attributes":{},"id":"17709","type":"BasicTicker"},{"attributes":{"below":[{"id":"17704"}],"center":[{"id":"17707"},{"id":"17711"}],"height":500,"left":[{"id":"17708"}],"output_backend":"webgl","renderers":[{"id":"17734"},{"id":"17738"},{"id":"17740"},{"id":"17741"}],"title":{"id":"17742"},"toolbar":{"id":"17722"},"toolbar_location":null,"width":500,"x_range":{"id":"17696"},"x_scale":{"id":"17700"},"y_range":{"id":"17698"},"y_scale":{"id":"17702"}},"id":"17695","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17741","type":"Span"}],"root_ids":["17761"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"e69b798b-5889-4078-91a9-ba20206a063c","root_ids":["17761"],"roots":{"17761":"7537ad0c-00b6-4be1-a997-7ed0b0346b62"}}];
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