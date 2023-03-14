# Save Obsidian console log

[![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?color=7e6ad6&labelColor=34208c&label=Obsidian%20Downloads&query=$['obsidian-save-console-log'].downloads&url=https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json&)](obsidian://show-plugin?id=obsidian-save-console-log) ![GitHub stars](https://img.shields.io/github/stars/velebit/obsidian-save-console-log?style=flat)

This plugin can redirect the log from the Obsidian developer console to a file, which can be useful for debugging plugins.

---

## Functionality

The implementation was blatantly stolen from [this gist](https://gist.github.com/liamcain/3f21f1ee820cb30f18050d2f3ad85f3f) by [Liam Cain](https://github.com/liamcain). Please assume all features are Liam’s and all bugs are mine.

When this plugin is enabled, this plugin will redirect the log from the Obsidian developer console to a file named `logs.txt` in the plugin's folder (i.e. `.obsidian/plugins/obsidian-save-console-log/logs.txt` within your vault).

On the desktop, this is probably not what you want, since you can access the console within Developer Tools by pressing Ctrl+Shift+I (on Mac, Option+Cmd+I). On mobile, I don’t know how to access the developer console easily, so the redirect can provide a way to view the log information.

---

## Installation

To install, either:

1. Install manually with the zip in [Releases](http://github.com/velebit/obsidian-save-console-log/releases), or
2. Once this plugin is available in Obsidian’s Community Plugin library (if it ever is), download it [from there](obsidian://show-plugin?id=obsidian-save-console-log)

---

### Known Bugs and Interactions

- The console is redirected when the plugin is enabled, but it’s not restored when the plugin is disabled
- If you are using this plugin with a vault that uses Git, you probably want to add the log file path to your `.gitignore` file, so the log isn’t commited into Git:
```
/.obsidian/plugins/obsidian-save-console-log/logs.txt
```
