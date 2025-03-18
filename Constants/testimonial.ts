interface Testimonial {
    name: string;
    service: string;
    details: string;
    message: string;
}

const testimonials: Testimonial[] = [
    {
        name: "John Doe",
        service: "Local Guide",
        details: "Bali, August 2024",
        message: "Exploring Bali with a knowledgeable local guide made the experience truly unforgettable!"
    },
    {
        name: "Jane Smith",
        service: "Personal Planner",
        details: "Japan, September 2024",
        message: "Everything was perfectly organized, from the bustling cities to the serene countryside. Highly recommended!"
    },
    {
        name: "Akira Tanaka",
        service: "Open Trip",
        details: "Nepal, October 2024",
        message: "Joining an open trip to Nepal was the best decision. Made new friends and unforgettable memories!"
    },
    {
        name: "Lisa Chen",
        service: "Private Tour",
        details: "Hong Kong, November 2024",
        message: "Having a private tour of Hong Kong was worth every moment. Exceptional service and great recommendations!"
    }
];

export default testimonials;
