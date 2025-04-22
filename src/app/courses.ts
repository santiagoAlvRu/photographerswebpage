import { Course } from './courses.model';

export const courses: Course[] = [
    {
        id: 1,
        name: 'Beginner Photography',
        description: 'Learn the basics of photography, including camera settings, composition, and lighting.',
        start: 15/1/2026,
        cost: '$150',
        button: 'Enroll Now'
    },
    {
        id: 2,
        name: 'Portrait Photography',
        description: 'Master the art of capturing stunning portraits with techniques for posing, lighting, and editing.',
        start: 7/3/2026,
        cost: '$200',
        button: 'Enroll Now'
    },
    {
        id: 3,
        name: 'Landscape Photography',
        description: 'Explore the beauty of nature through your lens. Learn to capture breathtaking landscapes with expert tips.',
        start: 1/6/2026,
        cost: '$180',
        button: 'Enroll Now'
    }
];