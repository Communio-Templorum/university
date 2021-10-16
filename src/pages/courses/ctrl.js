yodasws.page('pageCourses').setRoute({
	title: 'Course Catalog',
	template: 'pages/courses/courses.html',
	canonicalRoute: '/courses/',
	route: '/courses/?',
}).on('load', () => {
});
