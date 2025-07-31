// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { ExternalLink, Github, Users, User } from 'lucide-react';

// const Projects = () => {
//   const projects = [
//     {
//       title: "Famstay - Full-Stack Rental Platform",
//       description: "A comprehensive rental platform built with MERN stack featuring user authentication, property listings, booking system, and payment integration. Developed as a team project with focus on scalability and user experience.",
//       image: "/api/placeholder/600/400",
//       technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "EJS"],
//       features: [
//         "User authentication and authorization",
//         "Property listing and search functionality", 
//         "Booking and payment processing",
//         "Responsive design for all devices",
//         "Admin dashboard for management"
//       ],
//       type: "Team Project",
//       icon: Users,
//       gradient: "gradient-primary"
//     },
//     {
//       title: "Weather App - Real-Time Forecasting",
//       description: "A modern weather application providing real-time weather data and forecasts. Built with React and integrated with OpenWeatherAPI to deliver accurate weather information with an intuitive user interface.",
//       image: "/api/placeholder/600/400", 
//       technologies: ["React.js", "OpenWeatherAPI", "Material UI", "JavaScript", "CSS3"],
//       features: [
//         "Real-time weather data",

//         "Location-based weather detection",
//         "Beautiful and intuitive UI",
//         "Responsive design"
//       ],
//       type: "Solo Project",
//       icon: User,
//       gradient: "gradient-accent"
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-secondary/20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//             Featured <span className="text-gradient-primary">Projects</span>
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Real-world applications showcasing my technical skills and problem-solving abilities
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 mb-12">
//           {projects.map((project, index) => (
//             <Card key={index} className="gradient-card border-primary/20 shadow-card hover:shadow-glow transition-smooth group overflow-hidden">
//               <div className="relative">
//                 <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
//                   <div className="text-6xl text-primary/30">🚀</div>
//                 </div>
//                 <div className="absolute top-4 right-4">
//                   <Badge className={`${project.gradient} text-white`}>
//                     <project.icon className="w-3 h-3 mr-1" />
//                     {project.type}
//                   </Badge>
//                 </div>
//               </div>
              
//               <CardHeader>
//                 <CardTitle className="text-xl font-bold group-hover:text-gradient-primary transition-smooth">
//                   {project.title}
//                 </CardTitle>
//               </CardHeader>
              
//               <CardContent className="space-y-6">
//                 <p className="text-muted-foreground leading-relaxed">
//                   {project.description}
//                 </p>

//                 <div>
//                   <h4 className="font-semibold mb-3 text-accent">Key Features:</h4>
//                   <ul className="space-y-2">
//                     {project.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
//                         <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <Badge 
//                         key={techIndex}
//                         variant="secondary"
//                         className="text-xs bg-secondary/50 text-foreground border border-primary/20"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex space-x-3 pt-4">
//                   <Button size="sm" className="flex-1 gradient-primary">
//                     <ExternalLink className="w-4 h-4 mr-2" />
//                     Live Demo
//                   </Button>
//                   <Button size="sm" variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
//                     <Github className="w-4 h-4 mr-2" />
//                     Code
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* View More Projects Button */}
       
//       </div>
//     </section>
//   );
// };

// export default Projects;







// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Github, Users, User } from 'lucide-react';
// import profileImage from '@/assets/wanderlust.jpg.png';
// import profileImage from '@/assets/weather.jpg.png';


// const Projects = () => {
//   const projects = [
//     {
//       title: "Famstay - Full-Stack Rental Platform",
//       description: "A comprehensive rental platform built with MERN stack featuring user authentication, property listings, booking system, and payment integration. Developed as a team project with focus on scalability and user experience.",
//       image: (
//         <img
//           src={profileImage}
//           alt="Aditya Gawas"
//           className="w-full h-auto object-cover aspect-square"
//         />
//       ),
//       technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "EJS"],
//       features: [
//         "User authentication and authorization",
//         "Property listing and search functionality",
//         "Booking and payment processing",
//         "Responsive design for all devices",
//         "Admin dashboard for management"
//       ],
//       type: "Team Project",
//       icon: Users,
//       gradient: "gradient-primary",
//       github: "https://github.com/adityagws45/airbnb12.git"
//     },
//     {
//       title: "Weather App - Real-Time Forecasting",
//       description: "A modern weather application providing real-time weather data and forecasts. Built with React and integrated with OpenWeatherAPI to deliver accurate weather information with an intuitive user interface.",
//      <img
//                   src={profileImage}
//                   alt="Aditya Gawas"
//                   className="w-full h-auto object-cover aspect-square"
//                 />
//       technologies: ["React.js", "OpenWeatherAPI", "Material UI", "JavaScript", "CSS3"],
//       features: [
//         "Real-time weather data",
//         "Location-based weather detection",
//         "Beautiful and intuitive UI",
//         "Responsive design"
//       ],
//       type: "Solo Project",
//       icon: User,
//       gradient: "gradient-accent",
//       github: "https://github.com/adityagws45/React-Weather-App"
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-secondary/20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//             Featured <span className="text-gradient-primary">Projects</span>
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Real-world applications showcasing my technical skills and problem-solving abilities
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 mb-12">
//           {projects.map((project, index) => (
//             <Card key={index} className="gradient-card border-primary/20 shadow-card hover:shadow-glow transition-smooth group overflow-hidden">
//               <div className="relative">
//                 <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
//                   <div className="text-6xl text-primary/30">🚀</div>
//                 </div>
//                 <div className="absolute top-4 right-4">
//                   <Badge className={`${project.gradient} text-white`}>
//                     <project.icon className="w-3 h-3 mr-1" />
//                     {project.type}
//                   </Badge>
//                 </div>
//               </div>

//               <CardHeader>
//                 <CardTitle className="text-xl font-bold group-hover:text-gradient-primary transition-smooth">
//                   {project.title}
//                 </CardTitle>
//               </CardHeader>

//               <CardContent className="space-y-6">
//                 <p className="text-muted-foreground leading-relaxed">
//                   {project.description}
//                 </p>

//                 <div>
//                   <h4 className="font-semibold mb-3 text-accent">Key Features:</h4>
//                   <ul className="space-y-2">
//                     {project.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
//                         <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <Badge
//                         key={techIndex}
//                         variant="secondary"
//                         className="text-xs bg-secondary/50 text-foreground border border-primary/20"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex pt-4">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1"
//                   >
//                     <Button
//                       size="sm"
//                       variant="outline"
//                       className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
//                     >
//                       <Github className="w-4 h-4 mr-2" />
//                       Code
//                     </Button>
//                   </a>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;







// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { ExternalLink, Github, Users, User } from 'lucide-react';

// // ✅ Import images with unique names
// import wanderlustImage from '@/assets/wanderlust.jpg.png';
// import weatherImage from '@/assets/weather.jpg.png';

// const Projects = () => {
//   const projects = [
//     {
//       title: "Famstay - Full-Stack Rental Platform",
//       description:
//         "Built a rental property management system with role-based dashboards. Admins can manage listings and agents; users can book or list rentals.",
//       type: "MERN",
//       icon: Users,
//       gradient: "bg-gradient-to-r from-yellow-400 to-red-500",
//       github: "https://github.com/adityagws45/Famstay",
//       live: "",
//       image: wanderlustImage,
//     },
//     {
//       title: "Weather App - Real-Time Forecasting",
//       description:
//         "A web app that fetches live weather data using OpenWeatherMap API. Displays temperature, condition, and location info with clean UI.",
//       type: "JS",
//       icon: User,
//       gradient: "bg-gradient-to-r from-sky-500 to-cyan-500",
//       github: "https://github.com/adityagws45/WeatherApp",
//       live: "",
//       image: weatherImage,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//       {projects.map((project, index) => (
//         <Card key={index} className="transition-all group hover:shadow-lg border border-border/40">
//           <div className="relative">
//             {/* ✅ Display Project Image */}
//             <div className="aspect-video overflow-hidden">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             {/* ✅ Badge with icon */}
//             <div className="absolute top-4 right-4">
//               <Badge className={`${project.gradient} text-white`}>
//                 <project.icon className="w-3 h-3 mr-1" />
//                 {project.type}
//               </Badge>
//             </div>
//           </div>
//           <CardHeader>
//             <CardTitle>{project.title}</CardTitle>
//           </CardHeader>
//           <CardContent className="flex flex-col gap-2">
//             <p className="text-muted-foreground text-sm">{project.description}</p>
//             <div className="flex items-center gap-4 mt-2">
//               {project.github && (
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:underline text-primary flex items-center gap-1"
//                 >
//                   <Github className="w-4 h-4" />
//                   GitHub
//                 </a>
//               )}
//               {project.live && (
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:underline text-primary flex items-center gap-1"
//                 >
//                   <ExternalLink className="w-4 h-4" />
//                   Live
//                 </a>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default Projects;








import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Users, User } from 'lucide-react';

import famstayImage from '@/assets/wanderlust.jpg.png';
import weatherImage from '@/assets/weather.jpg.png';

const Projects = () => {
  const projects = [
    {
      title: "Famstay - Full-Stack Rental Platform",
      description: "A comprehensive rental platform built with MERN stack featuring user authentication, property listings, booking system, and payment integration. Developed as a team project with focus on scalability and user experience.",
      image: famstayImage,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "EJS"],
      features: [
        "User authentication and authorization",
        "Property listing and search functionality",
        "Booking and payment processing",
        "Responsive design for all devices",
        "Admin dashboard for management"
      ],
      type: "Team Project",
      icon: Users,
      gradient: "gradient-primary",
      github: "https://github.com/adityagws45/airbnb12.git"
    },
    {
      title: "Weather App - Real-Time Forecasting",
      description: "A modern weather application providing real-time weather data and forecasts. Built with React and integrated with OpenWeatherAPI to deliver accurate weather information with an intuitive user interface.",
      image: weatherImage,
      technologies: ["React.js", "OpenWeatherAPI", "Material UI", "JavaScript", "CSS3"],
      features: [
        "Real-time weather data",
        "Location-based weather detection",
        "Beautiful and intuitive UI",
        "Responsive design"
      ],
      type: "Solo Project",
      icon: User,
      gradient: "gradient-accent",
      github: "https://github.com/adityagws45/React-Weather-App"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications showcasing my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="gradient-card border-primary/20 shadow-card hover:shadow-glow transition-smooth group overflow-hidden">
              <div className="relative">
                {/* ✅ RENDER THE IMAGE HERE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`${project.gradient} text-white`}>
                    <project.icon className="w-3 h-3 mr-1" />
                    {project.type}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-gradient-primary transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-accent">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-secondary/50 text-foreground border border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
