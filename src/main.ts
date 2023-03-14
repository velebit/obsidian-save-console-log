import {
	Notice,
	Plugin,
} from "obsidian";

import { monkeyPatchConsole, getLogFile } from "./obsidian-debug-mobile";

export default class SaveConsoleLog extends Plugin {
	async onload() {
		const logFile = getLogFile(this);
		monkeyPatchConsole(this, logFile);
		new Notice("Saving Obsidian console log to " + logFile);
	}

}
