export interface ProjectDetail {
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    techStack: string[];
    github: string;
    liveDemo?: string;
    icon: string;
    features: string[];
    challenges: string[];
}

export const projectDetails: ProjectDetail[] = [
    {
        title: "Bus Ticket Booking Portal",
        slug: "bus-ticket-booking-portal",
        description:
            "A full-stack web application for booking bus tickets with user authentication, seat selection, and payment integration.",
        longDescription:
            "This comprehensive bus ticket booking portal provides a seamless experience for travelers to search for routes, select seats, and complete bookings. Built with Spring Boot on the backend, it features robust user authentication, real-time seat availability, and integrated payment processing. The system handles multiple bus operators, route management, and booking confirmations via email.",
        techStack: ["Spring Boot", "SQL", "RESTful API", "Java"],
        github: "https://github.com/Rahul-kumar-43/Bus-Ticket-Portal",
        icon: "🚌",
        features: [
            "User authentication and authorization",
            "Real-time seat availability tracking",
            "Route search with filters",
            "Booking confirmation via email",
            "Admin panel for bus and route management",
            "Payment integration",
        ],
        challenges: [
            "Handling concurrent seat selections to prevent double bookings",
            "Designing an efficient database schema for routes and schedules",
            "Implementing real-time seat maps with responsive design",
        ],
    },
    {
        title: "Fast Bike and Taxi Application",
        slug: "fast-bike-and-taxi",
        description:
            "A driver-focused transportation app for bike and taxi drivers to manage rides, track earnings, accept bookings, and navigate efficiently with real-time GPS tracking.",
        longDescription:
            "Fast Bike and Taxi is a driver-centric transportation platform designed to empower drivers with tools for ride management, earnings tracking, and efficient navigation. The React frontend provides a smooth, responsive interface while the Spring Boot backend handles ride matching, payment processing, and real-time GPS tracking. The application supports both bike and taxi services with dedicated workflows for each.",
        techStack: ["React", "Spring Boot", "SQL", "RESTful API", "GPS API"],
        github: "https://github.com/Rahul-kumar-43/Fast-Bike-and-Taxi--application",
        liveDemo: "https://fast-bike-and-taxi-application.vercel.app/",
        icon: "🏍️",
        features: [
            "Real-time GPS tracking and navigation",
            "Ride acceptance and management dashboard",
            "Earnings tracking with detailed reports",
            "Booking management system",
            "Driver profile and ratings",
            "Multi-vehicle type support (bike and taxi)",
        ],
        challenges: [
            "Implementing real-time GPS tracking with minimal battery drain",
            "Designing an efficient ride-matching algorithm",
            "Building a responsive dashboard that works on mobile devices",
        ],
    },
    {
        title: "Pulse Chat",
        slug: "pulse-chat",
        description:
            "A real-time group chat application enabling multiple users to communicate simultaneously in chat rooms identified by unique session keypins with WebSocket technology.",
        longDescription:
            "Pulse Chat is a real-time group communication platform built with WebSocket technology. Users can create or join chat rooms using unique session keypins, enabling private group conversations without traditional authentication. The application features real-time message delivery, typing indicators, file sharing, and an admin dashboard for room management. Built with a modern tech stack including React, TypeScript, and Socket.IO for reliable real-time communication.",
        techStack: ["React", "TypeScript", "Node.js", "Express.js", "Socket.IO", "Tailwind CSS"],
        github: "https://github.com/Rahul-kumar-43/Pulse-Chat",
        liveDemo: "https://pulse-chat3.onrender.com/",
        icon: "💬",
        features: [
            "Real-time messaging with WebSockets",
            "Unique session keypin-based room access",
            "Typing indicators",
            "File sharing and preview",
            "User presence tracking",
            "Admin dashboard for room management",
        ],
        challenges: [
            "Managing WebSocket connections at scale",
            "Implementing reliable message delivery with Socket.IO",
            "Building file sharing with preview capabilities",
        ],
    },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
    return projectDetails.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projectDetails.map((p) => p.slug);
}
