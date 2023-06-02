<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<svelte:head>
	<title>BIBLE</title>
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<NavBar />
	</svelte:fragment>
	<slot />
</AppShell>

<!-- CSS for the scriptures -->
<style>
	:global(.scripture-styles) {
		font-size: 18px;
		font-family: 'Noto Serif', serif;
		line-height: 25px;
		-webkit-font-smoothing: antialiased;
	}

	:global(
			.scripture-styles html,
			.scripture-styles body,
			.scripture-styles div,
			.scripture-styles span,
			.scripture-styles applet,
			.scripture-styles object,
			.scripture-styles iframe,
			.scripture-styles h1,
			.scripture-styles h2,
			.scripture-styles h3,
			.scripture-styles h4,
			.scripture-styles h5,
			.scripture-styles h6,
			.scripture-styles p,
			.scripture-styles blockquote,
			.scripture-styles pre,
			.scripture-styles a,
			.scripture-styles abbr,
			.scripture-styles acronym,
			.scripture-styles address,
			.scripture-styles big,
			.scripture-styles cite,
			.scripture-styles code,
			.scripture-styles del,
			.scripture-styles dfn,
			.scripture-styles em,
			.scripture-styles img,
			.scripture-styles ins,
			.scripture-styles kbd,
			.scripture-styles q,
			.scripture-styles s,
			.scripture-styles samp,
			.scripture-styles small,
			.scripture-styles strike,
			.scripture-styles strong,
			.scripture-styles sub,
			.scripture-styles sup,
			.scripture-styles tt,
			.scripture-styles var,
			.scripture-styles b,
			.scripture-styles u,
			.scripture-styles i,
			.scripture-styles center,
			.scripture-styles dl,
			.scripture-styles dt,
			.scripture-styles dd,
			.scripture-styles ol,
			.scripture-styles ul,
			.scripture-styles li,
			.scripture-styles fieldset,
			.scripture-styles form,
			.scripture-styles label,
			.scripture-styles legend,
			.scripture-styles table,
			.scripture-styles caption,
			.scripture-styles tbody,
			.scripture-styles tfoot,
			.scripture-styles thead,
			.scripture-styles tr,
			.scripture-styles th,
			.scripture-styles td,
			.scripture-styles article,
			.scripture-styles aside,
			.scripture-styles canvas,
			.scripture-styles details,
			.scripture-styles embed,
			.scripture-styles figure,
			.scripture-styles figcaption,
			.scripture-styles footer,
			.scripture-styles header,
			.scripture-styles hgroup,
			.scripture-styles menu,
			.scripture-styles nav,
			.scripture-styles output,
			.scripture-styles ruby,
			.scripture-styles section,
			.scripture-styles summary,
			.scripture-styles time,
			.scripture-styles mark,
			.scripture-styles audio,
			.scripture-styles video
		) {
		margin: 0;
		padding: 0;
		border: 0;
		font-family: inherit;
		vertical-align: baseline;
	}

	:global(
			.scripture-styles article,
			.scripture-styles aside,
			.scripture-styles details,
			.scripture-styles figcaption,
			.scripture-styles figure,
			.scripture-styles footer,
			.scripture-styles header,
			.scripture-styles hgroup,
			.scripture-styles menu,
			.scripture-styles nav,
			.scripture-styles section
		) {
		display: block;
	}

	:global(.scripture-styles ol, .scripture-styles ul) {
		list-style: none;
	}

	:global(.scripture-styles blockquote, .scripture-styles q) {
		quotes: none;
	}

	:global(
			.scripture-styles blockquote:before,
			.scripture-styles blockquote:after,
			.scripture-styles q:before,
			.scripture-styles q:after
		) {
		content: '';
		content: none;
	}

	:global(.scripture-styles table) {
		border-collapse: collapse;
		border-spacing: 0;
	}

	:global(.scripture-styles .c) {
		text-align: center;
		font-weight: bold;
		font-size: 1.3em;
	}

	:global(.scripture-styles .ca) {
		font-style: italic;
		font-weight: normal;
		color: #777;
	}

	:global(.scripture-styles .ca:before) {
		content: '(';
	}

	:global(.scripture-styles .ca:after) {
		content: ')' !important;
	}

	:global(.scripture-styles .cl) {
		text-align: center;
		font-weight: bold;
	}

	:global(.scripture-styles .cd) {
		margin-left: 1em;
		margin-right: 1em;
		font-style: italic;
	}

	:global(.scripture-styles .v, .scripture-styles .vp, .scripture-styles sup[class^='v']) {
		color: aqua;
		font-size: 0.7em;
		letter-spacing: -0.03em;
		vertical-align: 0.25em;
		line-height: 0;
		font-family: sans-serif;
		font-weight: bold;
		top: inherit;
	}

	:global(
			.scripture-styles .v:after,
			.scripture-styles .vp:after,
			.scripture-styles sup[class^='v']:after
		) {
		content: '\a0';
	}

	:global(.scripture-styles sup + sup:before) {
		content: '\a0';
	}

	:global(.scripture-styles .va) {
		font-style: italic;
	}

	:global(.scripture-styles .va:before) {
		content: '(';
	}

	:global(.scripture-styles .va:after) {
		content: ')' !important;
	}

	:global(.scripture-styles .x) {
		font-size: 16px;
		box-sizing: border-box;
		display: inline-block;
		position: relative;
		padding: 0 0.4em;
		margin: 0 0.1em;
		text-indent: 0;
		text-align: left;
		border-radius: 4px;
		border: 1px solid #dcdcdc;
	}

	:global(.scripture-styles .xo) {
		font-weight: bold;
	}

	:global(.scripture-styles .xk) {
		font-style: italic;
	}

	:global(.scripture-styles .xq) {
		font-style: italic;
	}

	:global(.scripture-styles .notelink) {
		text-decoration: underline;
		padding: 0.1em;
	}

	:global(
			.scripture-styles .notelink,
			.scripture-styles .notelink:hover,
			.scripture-styles .notelink:active,
			.scripture-styles .notelink:visited
		) {
		color: #6a6a6a;
	}

	:global(.scripture-styles .notelink sup) {
		font-size: 0.7em;
		letter-spacing: -0.03em;
		vertical-align: 0.25em;
		line-height: 0;
		font-family: sans-serif;
		font-weight: bold;
	}

	:global(.scripture-styles .notelink + sup:before) {
		content: '\a0';
	}

	:global(.scripture-styles .f) {
		font-size: 16px;
		display: inline-block;
		box-sizing: border-box;
		padding: 0 0.4em;
		margin: 0 0.1em;
		text-indent: 0;
		text-align: left;
		border-radius: 4px;
		border: 1px solid #dcdcdc;
	}

	:global(.scripture-styles .fr) {
		font-weight: bold;
	}

	:global(.scripture-styles .fk) {
		font-style: italic;
		font-variant: small-caps;
	}

	:global(.scripture-styles [class^='fq']) {
		font-style: italic;
	}

	:global(.scripture-styles .fl) {
		font-style: italic;
		font-weight: bold;
	}

	:global(.scripture-styles .fv) {
		color: #515151;
		font-size: 0.75em;
		letter-spacing: -0.03em;
		vertical-align: 0.25em;
		line-height: 0;
		font-family: sans-serif;
		font-weight: bold;
	}

	:global(.scripture-styles .fv:after) {
		content: '\a0';
	}

	:global(.scripture-styles .h) {
		text-align: center;
		font-style: italic;
	}

	:global(.scripture-styles [class^='imt'], .scripture-styles [class^='is']) {
		text-align: center;
		font-weight: bold;
		font-size: 27px;
		line-height: 50px;
		margin-top: 25px;
		margin-bottom: 25px;
	}

	:global(.scripture-styles [class^='ip']) {
		text-indent: 1em;
	}

	:global(.scripture-styles .ipi) {
		padding-left: 1em;
		padding-right: 1em;
	}

	:global(.scripture-styles .im) {
		text-indent: 0;
	}

	:global(.scripture-styles .imi) {
		text-indent: 0;
		margin-left: 1em;
		margin-right: 1em;
	}

	:global(.scripture-styles .ipq) {
		font-style: italic;
		margin-left: 1em;
		margin-right: 1em;
	}

	:global(.scripture-styles .imq) {
		margin-left: 1em;
		margin-right: 1em;
	}

	:global(.scripture-styles .ipr) {
		text-align: right;
		text-indent: 0;
	}

	:global(.scripture-styles [class^='iq']) {
		margin-left: 1em;
		margin-right: 1em;
	}

	:global(.scripture-styles .iq2) {
		text-indent: 1em;
	}

	:global(.scripture-styles [class^='ili']) {
		padding-left: 1em;
		text-indent: -1em;
	}

	:global(.scripture-styles .ili1) {
		margin-left: 1em;
		margin-right: 1em;
	}

	:global(.scripture-styles .ili2) {
		margin-left: 2em;
		margin-right: 1em;
	}

	:global(.scripture-styles .iot) {
		font-weight: bold;
		font-size: 18px;
		line-height: 25px;
		margin-top: 25px;
		margin-bottom: 0px;
	}

	:global(.scripture-styles .io, .scripture-styles .io1) {
		margin-left: 1em;
		margin-right: 0em;
	}

	:global(.scripture-styles .io2) {
		margin-left: 2em;
		margin-right: 0em;
	}

	:global(.scripture-styles .io3) {
		margin-left: 3em;
		margin-right: 0em;
	}

	:global(.scripture-styles .io4) {
		margin-left: 4em;
		margin-right: 0em;
	}

	:global(.scripture-styles .ior) {
		font-style: italic;
	}

	:global(.scripture-styles .iex) {
		text-indent: 1em;
	}

	:global(.scripture-styles .iqt) {
		text-indent: 1em;
		font-style: italic;
	}

	:global(.scripture-styles [class^='p']) {
		text-indent: 1em;
	}

	:global(.scripture-styles .m) {
		text-indent: 0 !important;
	}

	:global(.scripture-styles .pmo) {
		text-indent: 0;
		margin-left: 1em;
		margin-right: 0em;
	}

	:global(.scripture-styles .pm) {
		margin-left: 1em;
		margin-right: 0em;
	}

	:global(.scripture-styles .pmr) {
		text-align: right;
	}

	:global(.scripture-styles .pmc) {
		margin-left: 1em;
		margin-right: 0em;
	}

	:global(.scripture-styles .pi) {
		margin-left: 1em;
		margin-right: 0em;
	}

	:global(.scripture-styles .pi1) {
		margin-left: 2em;
		margin-right: 0em;
	}

	:global(.scripture-styles .pi2) {
		margin-left: 3em;
		margin-right: 0em;
	}

	:global(.scripture-styles .pi3) {
		margin-left: 4em;
		margin-right: 0em;
	}

	:global(.scripture-styles .mi) {
		margin-left: 1em;
		margin-right: 0em;
		text-indent: 0;
	}

	:global(.scripture-styles .pc) {
		text-align: center;
		text-indent: 0;
	}

	:global(.scripture-styles .cls) {
		text-align: right;
	}

	:global(.scripture-styles [class^='li']) {
		padding-left: 1em;
		text-indent: -1em;
		margin-left: 1em;
		margin-right: 0em;
	}

	:global(.scripture-styles .li2) {
		margin-left: 2em;
		margin-right: 0em;
	}

	:global(.scripture-styles .li3) {
		margin-left: 3em;
		margin-right: 0em;
	}

	:global(.scripture-styles .li4) {
		margin-left: 4em;
		margin-right: 0em;
	}

	:global(.scripture-styles .b) {
		height: 25px;
	}

	:global(.scripture-styles [class^='q']) {
		padding-left: 1em;
		text-indent: -1em;
		margin-left: 1em;
		margin-right: 0em;
	}

	:global(.scripture-styles .q2) {
		margin-left: 1.5em;
		margin-right: 0em;
	}

	:global(.scripture-styles .q3) {
		margin-left: 2em;
		margin-right: 0em;
	}

	:global(.scripture-styles .q4) {
		margin-left: 2.5em;
		margin-right: 0em;
	}

	:global(.scripture-styles .qr) {
		text-align: right;
		font-style: italic;
	}

	:global(.scripture-styles .qc) {
		text-align: center;
	}

	:global(.scripture-styles .qs) {
		font-style: italic;
		text-align: right;
	}

	:global(.scripture-styles .qa) {
		text-align: center;
		font-style: italic;
		font-size: 1.1em;
		margin-left: 0em;
		margin-right: 0em;
	}

	:global(.scripture-styles .qac) {
		margin-left: 0em;
		margin-right: 0em;
		padding: 0;
		text-indent: 0;
		font-style: italic;
	}

	:global(.scripture-styles .qm2) {
		margin-left: 1.5em;
		margin-right: 0em;
	}

	:global(.scripture-styles .qm3) {
		margin-left: 2em;
		margin-right: 0em;
	}

	:global(.scripture-styles .qt) {
		font-style: italic;
		text-indent: 0;
		padding: 0;
		margin: 0;
	}

	:global(.scripture-styles .bk) {
		font-style: italic;
	}

	:global(.scripture-styles .nd) {
		font-variant: small-caps;
	}

	:global(.scripture-styles .add) {
		font-style: italic;
	}

	:global(.scripture-styles .dc) {
		font-style: italic;
	}

	:global(.scripture-styles .k) {
		font-weight: bold;
		font-style: italic;
	}

	:global(.scripture-styles .lit) {
		text-align: right;
		font-weight: bold;
	}

	:global(.scripture-styles .pn) {
		font-weight: bold;
		text-decoration: underline;
	}

	:global(.scripture-styles .sls) {
		font-style: italic;
	}

	:global(.scripture-styles .tl) {
		font-style: italic;
	}

	:global(.scripture-styles .wj) {
		color: #cc0000;
	}

	:global(.scripture-styles .em) {
		font-style: italic;
	}

	:global(.scripture-styles .bd) {
		font-weight: bold;
	}

	:global(.scripture-styles .it) {
		font-style: italic;
	}

	:global(.scripture-styles .bdit) {
		font-weight: bold;
		font-style: italic;
	}

	:global(.scripture-styles .no) {
		font-weight: normal;
		font-style: normal;
	}

	:global(.scripture-styles .sc) {
		font-variant: small-caps;
	}

	:global(.scripture-styles .qt) {
		font-style: italic;
	}

	:global(.scripture-styles .sig) {
		font-weight: normal;
		font-style: italic;
	}

	:global(.scripture-styles table) {
		width: 100%;
		display: table;
	}

	:global(.scripture-styles .tr) {
		display: table-row;
	}

	:global(.scripture-styles [class^='th']) {
		font-style: italic;
		display: table-cell;
	}

	:global(.scripture-styles [class^='thr']) {
		text-align: right;
		padding: 0 25px;
	}

	:global(.scripture-styles [class^='tc']) {
		display: table-cell;
	}

	:global(.scripture-styles [class^='tcr']) {
		text-align: right;
		padding: 0 25px;
	}

	:global(.scripture-styles [class^='mt']) {
		text-align: center;
		font-weight: bold;
		letter-spacing: normal;
	}

	:global(.scripture-styles .mt, .scripture-styles .mt1, .scripture-styles .mt2) {
		font-size: 40px;
		line-height: 50px;
		margin-top: 25px;
		margin-bottom: 25px;
	}

	:global(.scripture-styles .mt2) {
		font-size: 34px;
		margin-top: -25px;
		font-style: italic;
		font-weight: normal;
	}

	:global(
			.scripture-styles [class^='ms'],
			.scripture-styles .ms,
			.scripture-styles .ms1,
			.scripture-styles .ms2,
			.scripture-styles .ms3
		) {
		text-align: center;
		font-weight: bold;
		font-size: 27px;
		line-height: 50px;
		margin-top: 25px;
		margin-bottom: 0px;
	}

	:global(.scripture-styles .mr) {
		font-size: 0.9em;
		margin-bottom: 25px;
		text-align: center;
		font-weight: normal;
		font-style: italic;
	}

	:global(
			.scripture-styles .s,
			.scripture-styles .s1,
			.scripture-styles .s2,
			.scripture-styles .s3,
			.scripture-styles .s4
		) {
		text-align: center;
		font-weight: bold;
		font-style: italic;
		font-size: inherit;
		margin-bottom: 15px;
		margin-top: 25px;
	}

	:global(.scripture-styles .sr) {
		font-weight: normal;
		font-style: italic;
		text-align: center;
		font-size: inherit;
		letter-spacing: normal;
	}

	:global(.scripture-styles .r) {
		font-size: 18px;
		font-weight: normal;
		font-style: italic;
		text-align: center;
		letter-spacing: normal;
	}

	:global(.scripture-styles .rq) {
		font-size: inherit;
		line-height: 25px;
		font-style: italic;
		text-align: right;
		letter-spacing: normal;
	}

	:global(.scripture-styles .d) {
		font-style: italic;
		text-align: center;
		font-size: inherit;
		letter-spacing: normal;
	}

	:global(.scripture-styles .sp) {
		text-align: left;
		font-weight: normal;
		font-style: italic;
		font-size: inherit;
		letter-spacing: normal;
	}
</style>
