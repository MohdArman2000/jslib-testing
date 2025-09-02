import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const About = () => {
  const features = [
    {
      title: "Secure Registration",
      description: "Advanced security measures to protect your personal information",
      icon: "🔐"
    },
    {
      title: "User-Friendly Interface",
      description: "Clean, modern design that's easy to navigate and use",
      icon: "✨"
    },
    {
      title: "Fast & Reliable",
      description: "Quick processing and reliable service you can count on",
      icon: "⚡"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your needs",
      icon: "🛟"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
    { number: "5 Star", label: "Rating" }
  ];

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            About FormHub
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Your Trusted Registration Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FormHub is designed to provide a seamless, secure, and user-friendly experience for all your 
            registration and form submission needs. We prioritize your privacy and make the process as 
            simple as possible.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in-up">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-card rounded-lg p-6 shadow-medium">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mb-16 animate-fade-in-up">
          <Card className="shadow-extra border-0 bg-gradient-card">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold mb-4">Our Mission</CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                To simplify online registrations and form submissions while maintaining the highest 
                standards of security and user experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-muted-foreground leading-relaxed">
                  We believe that filling out forms online should be straightforward, secure, and efficient. 
                  Our platform is built with modern technologies and best practices to ensure your data is 
                  protected while providing you with an intuitive interface that makes registration a breeze.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose FormHub?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've built our platform with you in mind, focusing on the features that matter most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-medium border-0 bg-gradient-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center animate-fade-in-up">
          <Card className="shadow-extra border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-3xl font-bold mb-4">Our Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We're committed to continuously improving our platform based on user feedback and 
                  emerging technologies. Your success is our success, and we're here to support you 
                  every step of the way.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Privacy First</Badge>
                  <Badge variant="secondary">User-Centric Design</Badge>
                  <Badge variant="secondary">Continuous Innovation</Badge>
                  <Badge variant="secondary">Reliable Service</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;