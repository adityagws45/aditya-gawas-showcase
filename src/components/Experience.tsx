import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, Code, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Web Developer Intern",
      company: "Coding Savvy",
      location: "Remote",
      period: "December 2024 - January 2025",
      type: "Internship",
      project: "ISKCON Sanjeevani - Encyclopedia System",
      description: "Contributed to the development of a comprehensive encyclopedia system for ISKCON Sanjeevani, focusing on creating responsive and user-friendly interfaces.",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Git", "GitHub"],
      achievements: [
        "Developed responsive web pages using HTML, CSS, and Bootstrap",
        "Implemented interactive features with JavaScript",
        "Collaborated with team using Git and GitHub for version control",
        "Ensured cross-browser compatibility and mobile responsiveness",
        "Participated in code reviews and maintained coding standards"
      ],
      status: "Recent"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hands-on industry experience building real-world applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/30"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-glow"></div>
              
              <Card className="ml-16 gradient-card border-primary/20 shadow-card hover:shadow-glow transition-smooth">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gradient-primary mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Badge className="bg-accent/20 text-accent border-accent/30">
                          <Calendar className="w-3 h-3 mr-1" />
                          {experience.period}
                        </Badge>
                        {experience.status && (
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            {experience.status}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="bg-secondary/30 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Code className="w-4 h-4 text-accent" />
                        <span className="font-semibold text-accent">Project:</span>
                        <span className="font-medium">{experience.project}</span>
                      </div>
                      <p className="text-muted-foreground">
                        {experience.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary"
                            className="bg-secondary/50 text-foreground border border-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3 text-accent">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Future Opportunities */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto gradient-primary/10 border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-accent">
                Looking for New Opportunities
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                I'm actively seeking full-time positions where I can apply my MERN stack skills 
                and contribute to innovative software solutions.
              </p>
              <Badge className="bg-accent text-accent-foreground px-4 py-2 text-base">
                Available for Full-Time Roles
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;