import {
	Notice,
	Plugin,
} from "obsidian";

import monkeyPatchConsole from "./obsidian-debug-mobile";

export default class SaveConsoleLog extends Plugin {
	async onload() {
		monkeyPatchConsole(this);
	}

}
