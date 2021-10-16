yodasws.page('pagePrograms').setRoute({
	title: 'Programs',
	canonicalRoute: '/programs/',
	template(match, ...p) {
		const path = p.join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/programs/programs.html';
		}
		return {
			canonicalRoute: '/programs/' + path.join('/') + '/',
			template: 'pages/programs/' + path.join('.') + '.html',
		};
	},
	route: '/programs(/.*)*',
}).on('load', () => {
});
