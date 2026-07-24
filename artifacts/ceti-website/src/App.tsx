import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import Home from '@/pages/home';
import About from '@/pages/about';
import Programs from '@/pages/programs';
import Publications from '@/pages/publications';
import Contact from '@/pages/contact';
import NotFound from '@/pages/not-found';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/programs" component={Programs} />
      <Route path="/publications" component={Publications} />
      <Route path="/insights" component={Publications} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <div className="flex flex-col min-h-[100dvh] bg-ceti-dark text-ceti-cream selection:bg-ceti-orange selection:text-white">
            <Navbar />
            <main className="flex-1 w-full">
              <Router />
            </main>
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
