interface Service {
    src: string;
    title: string;
    description: string;
}

const services: Service[] = [
    { src: '/local guide.webp', title: 'Local Guide', description: 'Explore with expert guidance and discover hidden gems.' },
    { src: '/private tour.webp', title: 'Private Tour', description: 'Enjoy a tailored experience designed just for you.' },
    { src: '/open trip.webp', title: 'Open Trip', description: 'Join a group adventure and make new friends.' },
    { src: '/personal planner.webp', title: 'Personal Planner', description: 'Let us handle the details for a perfect journey.' }
];

export default services;
