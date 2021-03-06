(function() {
  (function() {
    var log, testObject;
    log = function() {
      var e;
      try {
        console.log.apply(console, arguments);
      } catch (_error) {
        e = _error;
        try {
          opera.postError.apply(opera, arguments);
        } catch (_error) {
          e = _error;
          alert(Array.prototype.join.call(arguments, " "));
        }
      }
    };
    testObject = void 0;
    testObject = {
      name: "Poplinr...",
      age: "23"
    };
    log(testObject);
    (function() {
      var assert, paused, queue, results, runTest;
      runTest = function() {
        if (!paused && queue.length) {
          queue.shift()();
          if (!paused) {
            resume();
          }
        }
      };
      queue = [];
      paused = false;
      results = void 0;
      this.test = function(name, fn) {
        queue.push(function() {
          results = document.getElementById("results");
          results = assert(true, name).appendChild(document.createElement("ul"));
          fn();
        });
        runTest();
      };
      this.pause = function() {
        paused = true;
      };
      this.resume = function() {
        paused = false;
        setTimeout(runTest, 1);
      };
      this.assert = assert = function(value, desc) {
        var li;
        li = document.createElement("li");
        li.className = (value ? "pass" : "fail");
        li.appendChild(document.createTextNode(desc));
        results.appendChild(li);
        if (!value) {
          li.parentNode.parentNode.className = "fail";
        }
        return li;
      };
    })();
    
    window.onload = function() {
      
      test("Async Test...", function() {
        pause();
        setTimeout((function() {
          assert(true, "Passing Test...");
          resume();
        }), 1000);
      });

      test("Another Async Test...", function() {
        pause();
        setTimeout((function() {
          assert(false, "Failing Test...");
          resume();
        }), 1000);
      });

      test("A Sync Test...", function() {
        pause();
        assert(true, "Passing Test...");
        resume();
      });
    
    };
  })();

}).call(this);