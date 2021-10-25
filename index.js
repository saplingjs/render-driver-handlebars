/**
 * Handlebars driver for Sapling
 */


/* Dependencies */
import fs from 'node:fs';
import path from 'node:path';
import handlebars from 'handlebars';
import Interface from '@sapling/sapling/drivers/render/Interface.js';


import SaplingError from '@sapling/sapling/lib/SaplingError.js';


export default class Handlebars extends Interface {
	/**
	 * Initialise Handlebars
	 */
	constructor(App, viewsPath) {
		super();

		this.app = App;
		this.viewsPath = viewsPath;

		this.engine = handlebars;
	}


	/**
	 * Render a template file
	 *
	 * @param {string} template Path of the template file being rendered, relative to views/
	 * @param {object} data Object of data to pass to the template
	 */
	async render(template, data) {
		let rendered;

		try {
			const file = fs.readFileSync(path.join(this.viewsPath, template));
			rendered = this.engine.compile(file.toString());
		} catch (error) {
			return new SaplingError(error);
		}

		return rendered(data);
	}


	/**
	 * Register custom tags with the template engine
	 *
	 * @param {object} tags Object of functions
	 */
	async registerTags(tags) {
		for (const tag in tags) {
			if (Object.prototype.hasOwnProperty.call(tags, tag)) {
				if (tag === 'get') {
					this.engine.registerHelper(tag, (variable, eq, url, as, role) => {
						this[variable] = tags.get(url, role || null);
						return '';
					});
				} else {
					this.engine.registerHelper(tag, tags[tag]);
				}
			}
		}
	}
}
