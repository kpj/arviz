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
    
      
      
    
      var element = document.getElementById("c80b0d20-d166-4217-8072-f89643367c50");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c80b0d20-d166-4217-8072-f89643367c50' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6fc42b4a-57e8-437b-bac2-8c37b0def152":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"35693","type":"ResetTool"},{"attributes":{},"id":"35699","type":"SaveTool"},{"attributes":{},"id":"35696","type":"WheelZoomTool"},{"attributes":{"axis_label":"Value $\\\\pm$ MCSE for quantiles","formatter":{"id":"35727"},"major_label_policy":{"id":"35726"},"ticker":{"id":"35690"}},"id":"35689","type":"LinearAxis"},{"attributes":{"overlay":{"id":"35702"}},"id":"35697","type":"LassoSelectTool"},{"attributes":{},"id":"35698","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"35693"},{"id":"35694"},{"id":"35695"},{"id":"35696"},{"id":"35697"},{"id":"35698"},{"id":"35699"},{"id":"35700"}]},"id":"35703","type":"Toolbar"},{"attributes":{},"id":"35729","type":"AllLabels"},{"attributes":{"children":[{"id":"35740"},{"id":"35738"}]},"id":"35741","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"+Pb8QR1Vsj+MDk73BYq3PyGJcH1IOro/R5qJktxXvD8QN5uHrHi+P+EQ5SCCFsA/nVhJgBDHwD+XHUgZYI7BP8j2F6KAXsI/quCp6LMbwz/9bt2KgNHDP6iPWFCyiMQ/uNKGtzpMxT8aURts6RbGP6Hdfy6V9cY/RM+ntqz9xz+OhgC/8fHIP+aFOeHb5sk//PpdgzyUyz/cM4wQ6vPNPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35733"},"selection_policy":{"id":"35734"}},"id":"35712","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"35676"},0,0]]},"id":"35738","type":"GridBox"},{"attributes":{},"id":"35726","type":"AllLabels"},{"attributes":{},"id":"35727","type":"BasicTickFormatter"},{"attributes":{},"id":"35730","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35714","type":"Scatter"},{"attributes":{"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"35718","type":"MultiLine"},{"attributes":{"source":{"id":"35712"}},"id":"35716","type":"CDSView"},{"attributes":{"data_source":{"id":"35712"},"glyph":{"id":"35713"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35714"},"view":{"id":"35716"}},"id":"35715","type":"GlyphRenderer"},{"attributes":{"data":{"xs":[[0.05,0.05],[0.09736842105263158,0.09736842105263158],[0.14473684210526316,0.14473684210526316],[0.19210526315789472,0.19210526315789472],[0.23947368421052628,0.23947368421052628],[0.28684210526315784,0.28684210526315784],[0.33421052631578946,0.33421052631578946],[0.381578947368421,0.381578947368421],[0.4289473684210526,0.4289473684210526],[0.47631578947368414,0.47631578947368414],[0.5236842105263158,0.5236842105263158],[0.5710526315789474,0.5710526315789474],[0.618421052631579,0.618421052631579],[0.6657894736842105,0.6657894736842105],[0.7131578947368421,0.7131578947368421],[0.7605263157894736,0.7605263157894736],[0.8078947368421052,0.8078947368421052],[0.8552631578947368,0.8552631578947368],[0.9026315789473683,0.9026315789473683],[0.95,0.95]],"ys":[[0.06542507260989384,0.07779740932825195],[0.08783828101486021,0.09606135597316004],[0.09938050528645676,0.10552315572600299],[0.10794861576931342,0.11348270780810846],[0.11602734321885094,0.12203033330056018],[0.12350211909750375,0.12787167939093885],[0.12891616867169003,0.13323376159544686],[0.13473004088066556,0.13958486303584752],[0.14096481555257187,0.1460531576744907],[0.14714684275886325,0.15141900007039433],[0.15249024001585332,0.15717175454660753],[0.15761692093229293,0.16322637365277673],[0.16410729163047846,0.16867037944462424],[0.17025660267247006,0.17489182297617661],[0.17657098829958856,0.18216819265595885],[0.185369502560243,0.18948857007780892],[0.19264880841245133,0.19711830100588604],[0.20027922695307082,0.2044362824100993],[0.2124901683329975,0.2184324622519046],[0.23108929611368745,0.2369230522137875]]},"selected":{"id":"35735"},"selection_policy":{"id":"35736"}},"id":"35717","type":"ColumnDataSource"},{"attributes":{},"id":"35679","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35713","type":"Scatter"},{"attributes":{"source":{"id":"35717"}},"id":"35721","type":"CDSView"},{"attributes":{},"id":"35733","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35701","type":"BoxAnnotation"},{"attributes":{},"id":"35734","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"35719","type":"MultiLine"},{"attributes":{},"id":"35681","type":"LinearScale"},{"attributes":{"below":[{"id":"35685"}],"center":[{"id":"35688"},{"id":"35692"}],"height":500,"left":[{"id":"35689"}],"output_backend":"webgl","renderers":[{"id":"35715"},{"id":"35720"}],"title":{"id":"35722"},"toolbar":{"id":"35703"},"toolbar_location":null,"width":500,"x_range":{"id":"35677"},"x_scale":{"id":"35681"},"y_range":{"id":"35679"},"y_scale":{"id":"35683"}},"id":"35676","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35730"},"major_label_policy":{"id":"35729"},"ticker":{"id":"35686"}},"id":"35685","type":"LinearAxis"},{"attributes":{"text":"sigma_a"},"id":"35722","type":"Title"},{"attributes":{"toolbars":[{"id":"35703"}],"tools":[{"id":"35693"},{"id":"35694"},{"id":"35695"},{"id":"35696"},{"id":"35697"},{"id":"35698"},{"id":"35699"},{"id":"35700"}]},"id":"35739","type":"ProxyToolbar"},{"attributes":{},"id":"35686","type":"BasicTicker"},{"attributes":{"callback":null},"id":"35700","type":"HoverTool"},{"attributes":{},"id":"35683","type":"LinearScale"},{"attributes":{"toolbar":{"id":"35739"},"toolbar_location":"above"},"id":"35740","type":"ToolbarBox"},{"attributes":{"axis":{"id":"35685"},"ticker":null},"id":"35688","type":"Grid"},{"attributes":{},"id":"35735","type":"Selection"},{"attributes":{"data_source":{"id":"35717"},"glyph":{"id":"35718"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35719"},"view":{"id":"35721"}},"id":"35720","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35702","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"35689"},"dimension":1,"ticker":null},"id":"35692","type":"Grid"},{"attributes":{},"id":"35690","type":"BasicTicker"},{"attributes":{},"id":"35677","type":"DataRange1d"},{"attributes":{"overlay":{"id":"35701"}},"id":"35695","type":"BoxZoomTool"},{"attributes":{},"id":"35736","type":"UnionRenderers"},{"attributes":{},"id":"35694","type":"PanTool"}],"root_ids":["35741"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"6fc42b4a-57e8-437b-bac2-8c37b0def152","root_ids":["35741"],"roots":{"35741":"c80b0d20-d166-4217-8072-f89643367c50"}}];
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