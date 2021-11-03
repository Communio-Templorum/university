yodasws.page('pageAdmissions').setRoute({
	title: 'Admissions',
	canonicalRoute: '/admissions/',
	template(match, ...p) {
		const path = p.join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/admissions/admissions.html';
		}
		return {
			canonicalRoute: '/admissions/' + path.join('/') + '/',
			template: 'pages/admissions/' + path.join('.') + '.html',
		};
	},
	route: '/admissions(/.*)*',
}).on('load', () => {
});
