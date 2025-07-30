import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, BookOpen, Trophy } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.E. Information Technology",
      institution: "RMD Sinhgad College of Engineering",
      period: "2022 - 2026",
      icon: GraduationCap,
      status: "Current"
    },
    {
      degree: "12th Grade - Science",
      institution: "Shriman Vs Gangan Jr. College, Ratnagiri",
      period: "2022",
      score: "73.83%",
      icon: BookOpen,
    },
    {
      degree: "10th Grade",
      institution: "Saint Thomas School, Ratnagiri", 
      period: "2020",
      score: "93.40%",
      icon: Trophy,
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about technology and driven to create impactful software solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="gradient-card border-primary/20 shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient-accent">My Journey</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I am Aditya Gawas, a final-year Information Technology student with a solid 
                    foundation in full-stack web development. I have hands-on experience with 
                    technologies such as HTML, CSS, JavaScript, MongoDB, Express.js, React.js, 
                    and Node.js.
                  </p>
                  <p>
                    During a recent live project internship, I contributed to the development of 
                    a responsive encyclopedia system. This experience enhanced my practical skills 
                    and gave me valuable insights into professional software development workflows.
                  </p>
                  <p>
                    I am actively seeking an opportunity to apply my skills in a professional 
                    environment, enhance my practical knowledge, and contribute to impactful 
                    software solutions that make a difference.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gradient-accent mb-6">Education Timeline</h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <Card key={index} className="gradient-card border-primary/20 shadow-card hover:shadow-glow transition-smooth group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {item.degree}
                          </h4>
                          {item.status && (
                            <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                              {item.status}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground font-medium mb-1">
                          {item.institution}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{item.period}</span>
                          {item.score && (
                            <span className="font-semibold text-accent">
                              {item.score}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;