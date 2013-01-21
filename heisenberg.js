#! /usr/bin/env node

var shell = require("shelljs");
var output = function(out) {
  console.log("-> " + out);
};

output("Cloning heisenberg into the current directory");
shell.exec("git clone git@github.com:Heisenbergjs/heisenberg.git .", function(code, out) {
  output(out);
  output("Making sure pulldown exists");
  if(!shell.which("pulldown")) {
    output("Installing pulldown globally");
    shell.exec("npm install -g pulldown");
  }
  output("Running pulldown to satisfy dependencies");
  shell.exec("pulldown");

  output("Setting up a new Git project");
  shell.rm("-rf", ".git");
  shell.exec("git init");

  output("Done! Happy developing :)");
});

