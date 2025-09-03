import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Suggestions', href: '/suggestions' },
    { name: 'Feedback', href: '/feedback' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="/jslib-testing/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary"></div>
            <span className="gradient-text text-xl font-bold">FormHub</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              item.name === 'Home' ? (
                <a
                  key={item.name}
                  href="/jslib-testing/"
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button variant="outline" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <a href="/jslib-testing/" className="flex items-center space-x-2 mb-4">
                <div className="h-6 w-6 rounded bg-gradient-primary"></div>
                <span className="gradient-text font-bold">FormHub</span>
              </a>
              <p className="text-sm text-muted-foreground max-w-xs">
                Your trusted platform for registration, feedback, and seamless communication.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.name}>
                    {item.name === 'Home' ? (
                      <a 
                        href="/jslib-testing/"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link 
                        to={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 FormHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;