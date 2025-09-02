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

const Suggestions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    priority: '',
    title: '',
    suggestion: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Suggestion Submitted!",
      description: "Thank you for helping us improve. We'll review your suggestion carefully.",
    });
    setFormData({ name: '', email: '', category: '', priority: '', title: '', suggestion: '' });
  };

  const categories = [
    { value: 'ui-ux', label: 'User Interface & Experience' },
    { value: 'features', label: 'New Features' },
    { value: 'performance', label: 'Performance' },
    { value: 'security', label: 'Security' },
    { value: 'accessibility', label: 'Accessibility' },
    { value: 'content', label: 'Content & Documentation' },
    { value: 'other', label: 'Other' }
  ];

  const recentSuggestions = [
    {
      title: "Add dark mode theme",
      author: "Sarah J.",
      category: "UI/UX",
      status: "In Progress",
      votes: 24
    },
    {
      title: "Export registration data",
      author: "Mike R.",
      category: "Features",
      status: "Planned",
      votes: 18
    },
    {
      title: "Faster page loading",
      author: "Emma K.",
      category: "Performance",
      status: "Completed",
      votes: 32
    },
    {
      title: "Mobile app version",
      author: "John D.",
      category: "Features",
      status: "Under Review",
      votes: 41
    }
  ];

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Suggestions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Help Us Improve
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your ideas matter! Share your suggestions to help us make FormHub even better. 
            Every suggestion is carefully reviewed by our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Suggestion Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <Card className="shadow-extra border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl">Submit Your Suggestion</CardTitle>
                <CardDescription className="text-lg">
                  Share your ideas for new features, improvements, or any other feedback.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField label="Category" required>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                      >
                        <SelectTrigger className="transition-all duration-300 focus:shadow-glow">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormField>

                    <FormField label="Priority Level" required>
                      <RadioGroup
                        value={formData.priority}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value }))}
                        className="flex space-x-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="low" id="low" />
                          <Label htmlFor="low">Low</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medium" id="medium" />
                          <Label htmlFor="medium">Medium</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="high" id="high" />
                          <Label htmlFor="high">High</Label>
                        </div>
                      </RadioGroup>
                    </FormField>
                  </div>

                  <FormField label="Suggestion Title" required>
                    <Input
                      type="text"
                      placeholder="Brief title for your suggestion"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      required
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </FormField>

                  <FormField label="Detailed Suggestion" required>
                    <Textarea
                      placeholder="Describe your suggestion in detail. What problem does it solve? How would it improve the user experience?"
                      value={formData.suggestion}
                      onChange={(e) => setFormData(prev => ({ ...prev, suggestion: e.target.value }))}
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
                      Submit Suggestion
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="sm:w-auto hover:bg-muted transition-all duration-300"
                      onClick={() => setFormData({ name: '', email: '', category: '', priority: '', title: '', suggestion: '' })}
                    >
                      Clear Form
                    </Button>
                  </div>
                </form>

                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    💡 <strong>Tip:</strong> The more detailed your suggestion, the better we can understand and implement it!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Suggestions & Info */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in-up">
            {/* Process Info */}
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">Our Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold">1</div>
                  <div>
                    <p className="text-sm font-medium">Review</p>
                    <p className="text-xs text-muted-foreground">We review all suggestions within 48 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold">2</div>
                  <div>
                    <p className="text-sm font-medium">Evaluate</p>
                    <p className="text-xs text-muted-foreground">Technical feasibility and impact assessment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold">3</div>
                  <div>
                    <p className="text-sm font-medium">Implement</p>
                    <p className="text-xs text-muted-foreground">Development and release to production</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Suggestions */}
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">Recent Suggestions</CardTitle>
                <CardDescription>See what others are suggesting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentSuggestions.map((suggestion, index) => (
                  <div key={index} className="border-b border-border/50 last:border-b-0 pb-4 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{suggestion.title}</h4>
                      <Badge 
                        variant={
                          suggestion.status === 'Completed' ? 'default' :
                          suggestion.status === 'In Progress' ? 'secondary' :
                          'outline'
                        }
                        className="text-xs"
                      >
                        {suggestion.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>by {suggestion.author}</span>
                      <div className="flex items-center space-x-2">
                        <span>{suggestion.category}</span>
                        <span>•</span>
                        <span>👍 {suggestion.votes}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Guidelines */}
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>✅ Be specific and detailed</p>
                <p>✅ Explain the problem you're solving</p>
                <p>✅ Consider user impact</p>
                <p>❌ Avoid duplicate suggestions</p>
                <p>❌ Don't request urgent fixes here</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Suggestions;