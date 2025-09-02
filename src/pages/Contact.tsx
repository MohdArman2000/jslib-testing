import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import FormField from '@/components/FormField';
import Layout from '@/components/Layout';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      title: "Email Support",
      detail: "support@formhub.com",
      description: "Get help with technical issues",
      icon: "📧"
    },
    {
      title: "Phone Support",
      detail: "+1 (555) 123-4567",
      description: "Available 24/7 for urgent matters",
      icon: "📞"
    },
    {
      title: "Live Chat",
      detail: "Available Now",
      description: "Instant support for quick questions",
      icon: "💬"
    },
    {
      title: "Business Hours",
      detail: "Mon-Fri, 9AM-6PM PST",
      description: "General business inquiries",
      icon: "🕒"
    }
  ];

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help! Reach out to us through 
            any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in-up">
            <Card className="shadow-extra border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{info.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm">{info.title}</h3>
                      <p className="text-primary font-medium">{info.detail}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Email</span>
                    <Badge variant="secondary">Within 24 hours</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Phone</span>
                    <Badge variant="secondary">Immediate</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Live Chat</span>
                    <Badge variant="secondary">Within 5 minutes</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <Card className="shadow-extra border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField label="Your Name" required>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </FormField>

                    <FormField label="Email Address" required>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </FormField>
                  </div>

                  <FormField label="Subject" required>
                    <Input
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      required
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </FormField>

                  <FormField label="Message" required>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={6}
                      required
                      className="transition-all duration-300 focus:shadow-glow resize-none"
                    />
                  </FormField>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:shadow-glow text-lg py-6"
                    >
                      Send Message
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="sm:w-auto hover:bg-muted transition-all duration-300"
                      onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
                    >
                      Clear Form
                    </Button>
                  </div>
                </form>

                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    🔐 Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 animate-fade-in-up">
          <Card className="shadow-extra border-0 bg-gradient-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <CardDescription>
                Quick answers to common questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">How quickly will I get a response?</h3>
                  <p className="text-sm text-muted-foreground">
                    We aim to respond to all inquiries within 24 hours. For urgent matters, 
                    please use our phone support.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Is my information secure?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, all information submitted through our forms is encrypted and 
                    handled according to our privacy policy.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Can I schedule a call?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! Mention your preferred time in your message and we'll 
                    coordinate a convenient call time.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do you offer technical support?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, our technical support team is available 24/7 to help with 
                    any platform-related issues.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;