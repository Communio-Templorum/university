yodasws.page('pageCourses').setRoute({
	title: 'Course Catalog',
	canonicalRoute: '/courses/',
	template(match, ...p) {
		const path = p.join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/courses/courses.html';
		}
		return {
			canonicalRoute: '/courses/' + path.join('/') + '/',
			template: 'pages/courses/' + path.join('.') + '.html',
		};
	},
	route: '/courses(/.*)*',
}).on('load', () => {
});
