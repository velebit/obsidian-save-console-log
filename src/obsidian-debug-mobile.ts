// Code originally taken from
//  https://gist.github.com/liamcain/3f21f1ee820cb30f18050d2f3ad85f3f

import { Plugin } from "obsidian";

function getLogFile(plugin: Plugin): string {
  return `${plugin.manifest.dir}/logs.txt`;
}

// Call this method inside your plugin's `onLoad` function
function monkeyPatchConsole(plugin: Plugin, logFile: string): void {
  const logs: string[] = [];
  const logMessages = (prefix: string) => (...messages: unknown[]) => {
    logs.push(`\n[${prefix}]`);
    for (const message of messages) {
      logs.push(String(message));
    }
    plugin.app.vault.adapter.write(logFile, logs.join(" "));
  };

  console.debug = logMessages("debug");
  console.error = logMessages("error");
  console.info = logMessages("info");
  console.log = logMessages("log");
  console.warn = logMessages("warn");
}

export { monkeyPatchConsole, getLogFile };
