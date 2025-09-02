import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import FormField from '@/components/FormField';
import Layout from '@/components/Layout';

const Feedback = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experienceRating: '',
    feedbackType: '',
    subject: '',
    feedback: '',
    wouldRecommend: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Feedback Submitted!",
      description: "Thank you for your valuable feedback. We'll use it to improve our service.",
    });
    setFormData({ 
      name: '', email: '', experienceRating: '', feedbackType: '', 
      subject: '', feedback: '', wouldRecommend: '' 
    });
  };

  const feedbackTypes = [
    { value: 'bug', label: 'Bug Report' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'usability', label: 'Usability Issue' },
    { value: 'performance', label: 'Performance Issue' },
    { value: 'content', label: 'Content Feedback' },
    { value: 'general', label: 'General Feedback' }
  ];

  const ratingLabels = {
    '1': 'Very Poor',
    '2': 'Poor', 
    '3': 'Average',
    '4': 'Good',
    '5': 'Excellent'
  };

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Feedback
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Share Your Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your feedback helps us understand what's working well and what needs improvement. 
            We value every piece of feedback you share with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feedback Form */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <Card className="shadow-extra border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Tell Us About Your Experience</CardTitle>
                  <CardDescription className="text-lg">
                    If you're facing any problems or have suggestions, we'll solve them at the earliest.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField label="Your Name">
                        <Input
                          type="text"
                          placeholder="Enter your name (optional)"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="transition-all duration-300 focus:shadow-glow"
                        />
                      </FormField>

                      <FormField label="Email Address">
                        <Input
                          type="email"
                          placeholder="your.email@example.com (optional)"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="transition-all duration-300 focus:shadow-glow"
                        />
                      </FormField>
                    </div>

                    {/* Experience Rating */}
                    <FormField label="How would you rate your overall experience?" required>
                      <RadioGroup
                        value={formData.experienceRating}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, experienceRating: value }))}
                        className="grid grid-cols-5 gap-4"
                      >
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <div key={rating} className="flex flex-col items-center space-y-2">
                            <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                            <Label htmlFor={`rating-${rating}`} className="text-center">
                              <div className="text-2xl mb-1">
                                {'⭐'.repeat(rating)}
                              </div>
                              <div className="text-xs">{ratingLabels[rating.toString() as keyof typeof ratingLabels]}</div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormField>

                    {/* Feedback Type and Subject */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField label="Feedback Type" required>
                        <Select
                          value={formData.feedbackType}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, feedbackType: value }))}
                        >
                          <SelectTrigger className="transition-all duration-300 focus:shadow-glow">
                            <SelectValue placeholder="Select feedback type" />
                          </SelectTrigger>
                          <SelectContent>
                            {feedbackTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormField>

                      <FormField label="Subject" required>
                        <Input
                          type="text"
                          placeholder="Brief subject line"
                          value={formData.subject}
                          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                          required
                          className="transition-all duration-300 focus:shadow-glow"
                        />
                      </FormField>
                    </div>

                    {/* Detailed Feedback */}
                    <FormField label="Your Feedback" required>
                      <Textarea
                        placeholder="Please describe your experience, issue, or suggestion in detail..."
                        value={formData.feedback}
                        onChange={(e) => setFormData(prev => ({ ...prev, feedback: e.target.value }))}
                        rows={6}
                        required
                        className="transition-all duration-300 focus:shadow-glow resize-none"
                      />
                    </FormField>

                    {/* Recommendation */}
                    <FormField label="Would you recommend FormHub to others?" required>
                      <RadioGroup
                        value={formData.wouldRecommend}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, wouldRecommend: value }))}
                        className="flex space-x-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="definitely" id="definitely" />
                          <Label htmlFor="definitely">Definitely</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="probably" id="probably" />
                          <Label htmlFor="probably">Probably</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="maybe" id="maybe" />
                          <Label htmlFor="maybe">Maybe</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="no" />
                          <Label htmlFor="no">Probably not</Label>
                        </div>
                      </RadioGroup>
                    </FormField>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button 
                        type="submit" 
                        className="flex-1 bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:shadow-glow text-lg py-6"
                      >
                        Submit Feedback
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="sm:w-auto hover:bg-muted transition-all duration-300"
                        onClick={() => setFormData({ 
                          name: '', email: '', experienceRating: '', feedbackType: '', 
                          subject: '', feedback: '', wouldRecommend: '' 
                        })}
                      >
                        Clear Form
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1 space-y-6 animate-fade-in-up">
              {/* Why Feedback Matters */}
              <Card className="shadow-medium border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg">Why Your Feedback Matters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary">🎯</span>
                    <p className="text-muted-foreground">Helps us prioritize improvements</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary">🔧</span>
                    <p className="text-muted-foreground">Identifies bugs and issues quickly</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary">💡</span>
                    <p className="text-muted-foreground">Inspires new features and ideas</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary">👥</span>
                    <p className="text-muted-foreground">Improves experience for everyone</p>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="shadow-medium border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Acknowledgment</span>
                    <Badge variant="secondary">24 hours</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Initial Review</span>
                    <Badge variant="secondary">48 hours</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Resolution</span>
                    <Badge variant="secondary">3-7 days</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    We'll keep you updated on the progress via email if provided.
                  </div>
                </CardContent>
              </Card>

              {/* Feedback Stats */}
              <Card className="shadow-medium border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Improvements</CardTitle>
                  <CardDescription>Based on user feedback</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium">✅ Faster form loading</p>
                    <p className="text-xs text-muted-foreground">Reduced load time by 40%</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">✅ Better mobile experience</p>
                    <p className="text-xs text-muted-foreground">Improved responsive design</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">✅ Enhanced accessibility</p>
                    <p className="text-xs text-muted-foreground">Better screen reader support</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Feedback;