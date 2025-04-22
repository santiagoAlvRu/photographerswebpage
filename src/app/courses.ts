import { Course } from './courses.model';

export const courses: Course[] = [
    {
        id: 1,
        name: 'Beginner Photography',
        description: 'Learn the basics of photography, including camera settings, composition, and lighting.',
        start: '05/01/2026',
        cost: '$150',
        button: 'Enroll Now'
    },
    {
        id: 2,
        name: 'Portrait Photography',
        description: 'Master the art of capturing stunning portraits with techniques for posing, lighting, and editing.',
        start: '07/03/2026',
        cost: '$200',
        button: 'Enroll Now'
    },
    {
        id: 3,
        name: 'Landscape Photography',
        description: 'Explore the beauty of nature through your lens. Learn to capture breathtaking landscapes with expert tips.',
        start: '01/06/2026',
        cost: '$180',
        button: 'Enroll Now'
    }
];