export default {
    'auth.login': '/v1/auth/login',
    'auth.me': '/v1/auth/me',
    'auth.refresh': '/v1/auth/refresh',
    'course.all': '/v1/courses',
    'course.getCourseBySlug': function (slug) {
        return `v1/course/${slug}`
    },
    'lesson.getLessonBySlug': function(slugCourse,slugLesson){
        return `v1/lesson/show/${slugCourse}/${slugLesson}`
    }
}