import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import FormField from '@/components/FormField';
import Layout from '@/components/Layout';

const Registration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    gender: '',
    dateOfBirth: '',
    hobbies: [] as string[],
    education: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful!",
      description: "Please check your email for confirmation.",
    });
  };

  const handleHobbyChange = (hobby: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      hobbies: checked 
        ? [...prev.hobbies, hobby]
        : prev.hobbies.filter(h => h !== hobby)
    }));
  };

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Welcome to FormHub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community by registering below. Please fill in all details carefully and correctly.
          </p>
        </div>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-extra border-0 bg-gradient-card animate-fade-in-up">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold">Create Your Account</CardTitle>
              <CardDescription className="text-lg">
                Registration starts here - let's get you set up!
              </CardDescription>
              <div className="mt-4 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <p className="text-sm text-warning-foreground">
                  <strong>Note:</strong> Please enter a password that is at least 8 characters long.
                </p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
                  
                   <FormField label="Full Name">
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </FormField>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <FormField label="Phone Number">
                      <Input
                        type="tel"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </FormField>

                     <FormField label="Date of Birth">
                      <Input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </FormField>
                  </div>

                   <FormField label="Email Address">
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </FormField>

                   <FormField label="Password">
                    <Input
                      type="password"
                      placeholder="Enter a secure password (optional)"
                      value={formData.password}
                      onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </FormField>

                  <FormField label="Gender">
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
                      className="flex space-x-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </FormField>
                </div>

                {/* Preferences */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">Preferences & Details</h3>
                  
                  <FormField label="Hobbies">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {['Singing', 'Dancing', 'Sports', 'Reading', 'Gaming', 'Cooking'].map((hobby) => (
                        <div key={hobby} className="flex items-center space-x-2">
                          <Checkbox
                            id={hobby}
                            checked={formData.hobbies.includes(hobby)}
                            onCheckedChange={(checked) => handleHobbyChange(hobby, checked as boolean)}
                          />
                          <Label htmlFor={hobby} className="text-sm">{hobby}</Label>
                        </div>
                      ))}
                    </div>
                  </FormField>

                  <FormField label="Education Qualification">
                    <Select
                      value={formData.education}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, education: value }))}
                    >
                      <SelectTrigger className="transition-all duration-300 focus:shadow-glow">
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10+2">10+2 / High School</SelectItem>
                        <SelectItem value="graduation">Bachelor's Degree</SelectItem>
                        <SelectItem value="postgraduation">Master's Degree</SelectItem>
                        <SelectItem value="doctorate">Doctorate</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>

                   <FormField label="Address">
                    <Textarea
                      placeholder="Enter your complete address (optional)"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                      rows={4}
                      className="transition-all duration-300 focus:shadow-glow resize-none"
                    />
                  </FormField>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:shadow-glow text-lg py-6"
                  >
                    Create Account
                  </Button>
                  <Button 
                    type="reset" 
                    variant="outline" 
                    className="flex-1 hover:bg-muted transition-all duration-300"
                    onClick={() => setFormData({
                      name: '', phone: '', email: '', password: '', gender: '',
                      dateOfBirth: '', hobbies: [], education: '', address: ''
                    })}
                  >
                    Reset Form
                  </Button>
                </div>
              </form>

              {/* Terms and existing user */}
              <div className="text-center space-y-4 pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  By clicking "Create Account", you agree to our{' '}
                  <span className="text-primary cursor-pointer hover:underline">Terms of Service</span> and{' '}
                  <span className="text-primary cursor-pointer hover:underline">Privacy Policy</span>.
                </p>
                <p className="text-sm">
                  Already have an account?{' '}
                  <span className="text-primary cursor-pointer hover:underline font-medium">
                    Sign in here
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  After registration, please check your email for a confirmation message.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="shadow-extra border-0 bg-gradient-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Explore More</CardTitle>
              <CardDescription>Navigate to different sections of our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href="/services.html" className="block">
                  <Button variant="outline" className="w-full h-20 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <div>
                      <div className="font-semibold">Services</div>
                      <div className="text-xs opacity-70">Our Offerings</div>
                    </div>
                  </Button>
                </a>
                <a href="/portfolio.html" className="block">
                  <Button variant="outline" className="w-full h-20 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <div>
                      <div className="font-semibold">Portfolio</div>
                      <div className="text-xs opacity-70">Our Work</div>
                    </div>
                  </Button>
                </a>
                <a href="/blog.html" className="block">
                  <Button variant="outline" className="w-full h-20 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <div>
                      <div className="font-semibold">Blog</div>
                      <div className="text-xs opacity-70">Latest News</div>
                    </div>
                  </Button>
                </a>
                <a href="/team.html" className="block">
                  <Button variant="outline" className="w-full h-20 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <div>
                      <div className="font-semibold">Team</div>
                      <div className="text-xs opacity-70">Meet Us</div>
                    </div>
                  </Button>
                </a>
                <a href="/pricing.html" className="block">
                  <Button variant="outline" className="w-full h-20 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <div>
                      <div className="font-semibold">Pricing</div>
                      <div className="text-xs opacity-70">Our Plans</div>
                    </div>
                  </Button>
                </a>
                <a href="/support.html" className="block">
                  <Button variant="outline" className="w-full h-20 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <div>
                      <div className="font-semibold">Support</div>
                      <div className="text-xs opacity-70">Get Help</div>
                    </div>
                  </Button>
                </a>
                <a href="/careers.html" className="block">
                  <Button variant="outline" className="w-full h-20 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <div>
                      <div className="font-semibold">Careers</div>
                      <div className="text-xs opacity-70">Join Us</div>
                    </div>
                  </Button>
                </a>
                <a href="/news.html" className="block">
                  <Button variant="outline" className="w-full h-20 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <div>
                      <div className="font-semibold">News</div>
                      <div className="text-xs opacity-70">Updates</div>
                    </div>
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;