import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Code, Database, Smartphone, Palette, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web applications using modern technologies like React, Node.js, and MongoDB. From concept to deployment, I build scalable and efficient web solutions.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatibility"],
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Frontend Development", 
      description: "Creating engaging and intuitive user interfaces with React.js, JavaScript, and modern CSS frameworks. Focus on user experience and responsive design.",
      features: ["React.js Applications", "Interactive UI Components", "Mobile-First Design", "Modern CSS Frameworks"],
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side applications with Node.js and Express.js. Database design and API development for secure and scalable backend systems.",
      features: ["RESTful APIs", "Database Design", "Authentication Systems", "Server Optimization"],
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your website looks and works perfectly on all devices. Optimized for performance and user experience.",
      features: ["Mobile Optimization", "Touch-Friendly Interface", "Fast Loading Times", "Cross-Platform Compatibility"],
      color: "text-accent"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design approach focusing on creating intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Improving website speed, SEO, and overall performance through code optimization, image compression, and efficient resource management.",
      features: ["Speed Optimization", "SEO Enhancement", "Code Splitting", "Resource Optimization"],
      color: "text-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="gradient-card border-primary/20 shadow-card hover:shadow-glow transition-smooth group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary/20 transition-smooth">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-gradient-primary transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto gradient-primary/10 border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-accent">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Let's collaborate to create something amazing together. I'm here to help turn your vision into reality.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✅ Fast turnaround times</p>
                <p>✅ Regular project updates</p>
                <p>✅ Clean, maintainable code</p>
                <p>✅ Post-launch support</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;