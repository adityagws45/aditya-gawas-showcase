import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Material UI", "Responsive Design"],
      color: "text-accent"
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "EJS Templating", "SQL"],
      color: "text-primary"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "C++", "SQL", "HTML", "CSS"],
      color: "text-accent"
    },
    {
      title: "Tools & Technologies",
      icon: Cpu,
      skills: ["Git", "GitHub", "VS Code", "OOP", "Version Control", "UI/UX Design"],
      color: "text-primary"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card border-primary/20 shadow-card hover:shadow-glow transition-smooth group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-smooth">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <span className="text-xl font-bold">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="px-3 py-1 bg-secondary/50 text-foreground border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-12">
          <Card className="gradient-primary/10 border-primary/30 shadow-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
                MERN Stack Developer
              </h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-3xl mx-auto">
                Specialized in full-stack development using MongoDB, Express.js, React.js, and Node.js. 
                Experienced in building scalable web applications with modern development practices.
              </p>
              <div className="flex justify-center space-x-4">
                {["MongoDB", "Express.js", "React.js", "Node.js"].map((tech, index) => (
                  <Badge 
                    key={index}
                    className="px-4 py-2 bg-primary text-primary-foreground font-semibold text-base shadow-glow"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;