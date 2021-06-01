import './About.svelte.css.proxy.js';
/* src/About.svelte generated by Svelte v3.32.3 */
import {
	HtmlTag,
	SvelteComponent,
	action_destroyer,
	attr,
	detach,
	element,
	empty,
	handle_promise,
	init,
	insert,
	noop,
	safe_not_equal,
	text
} from "../_snowpack/pkg/svelte/internal.js";

import { useFocus } from "../_snowpack/pkg/svelte-navigator.js";
import { PageService } from "./services/page-service.js";

function create_catch_block(ctx) {
	let t_value = /*error*/ ctx[4] + "";
	let t;

	return {
		c() {
			t = text(t_value);
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (32:2) {:then html}
function create_then_block(ctx) {
	let html_tag;
	let raw_value = /*html*/ ctx[3] + "";
	let html_anchor;

	return {
		c() {
			html_anchor = empty();
			html_tag = new HtmlTag(html_anchor);
		},
		m(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert(target, html_anchor, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(html_anchor);
			if (detaching) html_tag.d();
		}
	};
}

// (30:27)      <h1 class="about-page-hidden" use:registerFocus>The about page is being loaded...</h1>   {:then html}
function create_pending_block(ctx) {
	let h1;
	let registerFocus_action;
	let mounted;
	let dispose;

	return {
		c() {
			h1 = element("h1");
			h1.textContent = "The about page is being loaded...";
			attr(h1, "class", "about-page-hidden svelte-14uiwey");
		},
		m(target, anchor) {
			insert(target, h1, anchor);

			if (!mounted) {
				dispose = action_destroyer(registerFocus_action = /*registerFocus*/ ctx[0].call(null, h1));
				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(h1);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let div;
	let promise;

	let info = {
		ctx,
		current: null,
		token: null,
		hasCatch: true,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block,
		value: 3,
		error: 4
	};

	handle_promise(promise = /*aboutPageRequest*/ ctx[1], info);

	return {
		c() {
			div = element("div");
			info.block.c();
			attr(div, "class", "about-page-wrapper svelte-14uiwey");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			info.block.m(div, info.anchor = null);
			info.mount = () => div;
			info.anchor = null;
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;

			{
				const child_ctx = ctx.slice();
				child_ctx[3] = child_ctx[4] = info.resolved;
				info.block.p(child_ctx, dirty);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
			info.block.d();
			info.token = null;
			info = null;
		}
	};
}

function instance($$self) {
	const registerFocus = useFocus();
	const pageService = new PageService();
	const aboutPageRequest = pageService.getAboutPageData();
	return [registerFocus, aboutPageRequest];
}

class About extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default About;