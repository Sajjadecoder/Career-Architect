import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-img.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Empower Your Career Journey
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
                 Get AI-driven insights and personalized paths to optimize your resume and land your dream job.

            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={'register'} >
              <Button size="lg" className="font-semibold">
                
                Get Started
              </Button>
              </Link>

              <Link to={'/login'} >
              <Button size="lg" variant="outline" className="font-semibold">
                Login
              </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex items-center justify-center">
            <img
              src={heroIllustration}
              alt="Professional working at desk"
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm md:text-base">
            Upload your resume and job description to start receiving personalized feedback.
          </p>
        </div>
      </div>
    </section>
  );
}
