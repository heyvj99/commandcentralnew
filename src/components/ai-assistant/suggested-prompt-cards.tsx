import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  MapPin, 
  BarChart3, 
  Users, 
  Clock, 
  TrendingUp,
  Shield,
  Activity
} from 'lucide-react';

interface SuggestedPrompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  icon: React.ReactNode;
  category: 'incidents' | 'resources' | 'analytics' | 'general';
}

const suggestedPrompts: SuggestedPrompt[] = [
  {
    id: '1',
    title: 'Active Incidents',
    description: 'Get an overview of current emergency incidents',
    prompt: 'Show me all active incidents and their current status',
    icon: <AlertTriangle className="w-5 h-5" />,
    category: 'incidents'
  },
  {
    id: '2',
    title: 'Resource Allocation',
    description: 'Check resource distribution and availability',
    prompt: 'What resources are currently deployed and where?',
    icon: <MapPin className="w-5 h-5" />,
    category: 'resources'
  },
  {
    id: '3',
    title: 'Response Times',
    description: 'Analyze emergency response performance',
    prompt: 'What are the average response times for different types of incidents?',
    icon: <Clock className="w-5 h-5" />,
    category: 'analytics'
  },
  {
    id: '4',
    title: 'Team Status',
    description: 'Check availability of emergency personnel',
    prompt: 'Show me the current status of all emergency response teams',
    icon: <Users className="w-5 h-5" />,
    category: 'resources'
  },
  {
    id: '5',
    title: 'Trend Analysis',
    description: 'Understand patterns in emergency incidents',
    prompt: 'What trends do you see in emergency incidents over the past month?',
    icon: <TrendingUp className="w-5 h-5" />,
    category: 'analytics'
  },
  {
    id: '6',
    title: 'Safety Protocols',
    description: 'Get information about emergency procedures',
    prompt: 'What are the standard operating procedures for a major incident?',
    icon: <Shield className="w-5 h-5" />,
    category: 'general'
  },
  {
    id: '7',
    title: 'System Health',
    description: 'Monitor system performance and alerts',
    prompt: 'Are there any system alerts or performance issues I should know about?',
    icon: <Activity className="w-5 h-5" />,
    category: 'general'
  },
  {
    id: '8',
    title: 'Incident Reports',
    description: 'Generate summary reports',
    prompt: 'Generate a summary report of all incidents from yesterday',
    icon: <BarChart3 className="w-5 h-5" />,
    category: 'analytics'
  }
];

interface SuggestedPromptCardsProps {
  onPromptSelect: (prompt: string) => void;
  selectedCategory?: string;
}

export function SuggestedPromptCards({ onPromptSelect, selectedCategory }: SuggestedPromptCardsProps) {
  const filteredPrompts = selectedCategory && selectedCategory !== 'all'
    ? suggestedPrompts.filter(prompt => prompt.category === selectedCategory)
    : suggestedPrompts;

  const categories = [
    { id: 'all', name: 'All', count: suggestedPrompts.length },
    { id: 'incidents', name: 'Incidents', count: suggestedPrompts.filter(p => p.category === 'incidents').length },
    { id: 'resources', name: 'Resources', count: suggestedPrompts.filter(p => p.category === 'resources').length },
    { id: 'analytics', name: 'Analytics', count: suggestedPrompts.filter(p => p.category === 'analytics').length },
    { id: 'general', name: 'General', count: suggestedPrompts.filter(p => p.category === 'general').length },
  ];

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id || (!selectedCategory && category.id === 'all') ? 'default' : 'outline'}
            size="sm"
            onClick={() => onPromptSelect(`filter:${category.id}`)}
            className="text-xs"
          >
            {category.name} ({category.count})
          </Button>
        ))}
      </div>

      {/* Prompt Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
        {filteredPrompts.map((prompt) => (
          <Card 
            key={prompt.id} 
            className="cursor-pointer hover:shadow-md transition-shadow duration-200 hover:border-primary/50"
            onClick={() => onPromptSelect(prompt.prompt)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <div className="text-primary">
                  {prompt.icon}
                </div>
                <CardTitle className="text-sm font-medium">
                  {prompt.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-xs mb-3">
                {prompt.description}
              </CardDescription>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  onPromptSelect(prompt.prompt);
                }}
              >
                Use this prompt
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPrompts.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <p>No prompts found for the selected category.</p>
        </div>
      )}
    </div>
  );
}
