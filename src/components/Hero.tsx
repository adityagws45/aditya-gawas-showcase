import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/aditya-profile.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center particles-bg gradient-bg relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-accent text-lg font-medium">Hi, I'm</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-gradient-primary">Aditya Gawas</span>
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
                  Aspiring Full-Stack Developer
                </h2>
                <p className="text-lg text-accent font-medium">
                  MERN Stack Enthusiast
                </p>
              </div>

              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Final-year IT student passionate about creating innovative web solutions. 
                Experienced in MongoDB, Express.js, React.js, and Node.js with hands-on project experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="gradient-primary glow-primary transition-bounce hover:scale-105"
                  onClick={() => scrollToSection('#projects')}
                >
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-bounce hover:scale-105"
                  onClick={() => scrollToSection('#contact')}
                >
                  Contact Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 pt-4">
                <a 
                  href="https://github.com/adityagws45" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-accent transition-smooth hover:scale-110 glow-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/aditya-gawas-b785bb257/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-accent transition-smooth hover:scale-110 glow-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 max-w-md lg:max-w-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img
                  src={profileImage}
                  alt="Aditya Gawas"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('#about')}
          className="p-2 rounded-full text-muted-foreground hover:text-accent transition-smooth"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;