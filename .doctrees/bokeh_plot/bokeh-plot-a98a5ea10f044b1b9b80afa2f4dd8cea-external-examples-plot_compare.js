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
    
      
      
    
      var element = document.getElementById("7bb58f19-141d-4984-8cf9-ad424a3e92b1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7bb58f19-141d-4984-8cf9-ad424a3e92b1' but no matching script tag was found.")
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
                    
                  var docs_json = '{"3650a03e-3944-42b3-9bba-c7531029595f":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"15064","type":"Selection"},{"attributes":{},"id":"15058","type":"AllLabels"},{"attributes":{"overlay":{"id":"15015"}},"id":"15010","type":"LassoSelectTool"},{"attributes":{},"id":"14990","type":"DataRange1d"},{"attributes":{"source":{"id":"15027"}},"id":"15031","type":"CDSView"},{"attributes":{},"id":"15007","type":"PanTool"},{"attributes":{"source":{"id":"15037"}},"id":"15041","type":"CDSView"},{"attributes":{},"id":"15069","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15044","type":"MultiLine"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15064"},"selection_policy":{"id":"15065"}},"id":"15032","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15039","type":"Circle"},{"attributes":{},"id":"15070","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"15006"},{"id":"15007"},{"id":"15008"},{"id":"15009"},{"id":"15010"},{"id":"15011"},{"id":"15012"},{"id":"15013"}]},"id":"15016","type":"Toolbar"},{"attributes":{},"id":"14996","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"15014","type":"BoxAnnotation"},{"attributes":{},"id":"15068","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15066"},"selection_policy":{"id":"15067"}},"id":"15037","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"15014"}},"id":"15008","type":"BoxZoomTool"},{"attributes":{},"id":"15012","type":"SaveTool"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15052","type":"Span"},{"attributes":{"data_source":{"id":"15037"},"glyph":{"id":"15038"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15039"},"view":{"id":"15041"}},"id":"15040","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"14998"}],"center":[{"id":"15001"},{"id":"15005"}],"height":500,"left":[{"id":"15002"}],"output_backend":"webgl","renderers":[{"id":"15030"},{"id":"15035"},{"id":"15040"},{"id":"15045"},{"id":"15050"},{"id":"15052"}],"title":{"id":"15054"},"toolbar":{"id":"15016"},"toolbar_location":null,"width":500,"x_range":{"id":"14990"},"x_scale":{"id":"14994"},"y_range":{"id":"14992"},"y_scale":{"id":"14996"}},"id":"14989","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"15032"}},"id":"15036","type":"CDSView"},{"attributes":{"formatter":{"id":"15056"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15055"},"ticker":{"id":"15025"}},"id":"15002","type":"LinearAxis"},{"attributes":{},"id":"15065","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"14989"},0,0]]},"id":"15073","type":"GridBox"},{"attributes":{"toolbars":[{"id":"15016"}],"tools":[{"id":"15006"},{"id":"15007"},{"id":"15008"},{"id":"15009"},{"id":"15010"},{"id":"15011"},{"id":"15012"},{"id":"15013"}]},"id":"15074","type":"ProxyToolbar"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15043","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15049","type":"Circle"},{"attributes":{},"id":"15055","type":"AllLabels"},{"attributes":{"axis_label":"Log","formatter":{"id":"15059"},"major_label_policy":{"id":"15058"},"ticker":{"id":"14999"}},"id":"14998","type":"LinearAxis"},{"attributes":{"source":{"id":"15047"}},"id":"15051","type":"CDSView"},{"attributes":{},"id":"15006","type":"ResetTool"},{"attributes":{},"id":"15063","type":"UnionRenderers"},{"attributes":{},"id":"15059","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15070"},"selection_policy":{"id":"15071"}},"id":"15047","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"15042"},"glyph":{"id":"15043"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15044"},"view":{"id":"15046"}},"id":"15045","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"15027"},"glyph":{"id":"15028"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15029"},"view":{"id":"15031"}},"id":"15030","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"15047"},"glyph":{"id":"15048"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15049"},"view":{"id":"15051"}},"id":"15050","type":"GlyphRenderer"},{"attributes":{"end":0.5,"start":-1.5},"id":"14992","type":"DataRange1d"},{"attributes":{"source":{"id":"15042"}},"id":"15046","type":"CDSView"},{"attributes":{},"id":"15056","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"15013","type":"HoverTool"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15033","type":"MultiLine"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15062"},"selection_policy":{"id":"15063"}},"id":"15027","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15034","type":"MultiLine"},{"attributes":{},"id":"15009","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"14998"},"ticker":null},"id":"15001","type":"Grid"},{"attributes":{"children":[{"id":"15075"},{"id":"15073"}]},"id":"15076","type":"Column"},{"attributes":{},"id":"15067","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"15032"},"glyph":{"id":"15033"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15034"},"view":{"id":"15036"}},"id":"15035","type":"GlyphRenderer"},{"attributes":{},"id":"15062","type":"Selection"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15048","type":"Circle"},{"attributes":{},"id":"15066","type":"Selection"},{"attributes":{},"id":"15011","type":"UndoTool"},{"attributes":{},"id":"14994","type":"LinearScale"},{"attributes":{},"id":"15071","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15038","type":"Circle"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"15025","type":"FixedTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15029","type":"Scatter"},{"attributes":{"axis":{"id":"15002"},"dimension":1,"ticker":null},"id":"15005","type":"Grid"},{"attributes":{},"id":"15054","type":"Title"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15068"},"selection_policy":{"id":"15069"}},"id":"15042","type":"ColumnDataSource"},{"attributes":{},"id":"14999","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15028","type":"Scatter"},{"attributes":{"toolbar":{"id":"15074"},"toolbar_location":"above"},"id":"15075","type":"ToolbarBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"15015","type":"PolyAnnotation"}],"root_ids":["15076"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"3650a03e-3944-42b3-9bba-c7531029595f","root_ids":["15076"],"roots":{"15076":"7bb58f19-141d-4984-8cf9-ad424a3e92b1"}}];
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