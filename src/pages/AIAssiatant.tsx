import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChatContainerRoot, ChatContainerContent, ChatContainerScrollAnchor } from '@/components/ui/chat-container';
import { Message, MessageAvatar, MessageContent, MessageActions } from '@/components/ui/message';
import { PromptSuggestion } from '@/components/ui/prompt-suggestion';
import { Bot, MessageSquare, Search, Settings, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PromptInput, PromptInputTextarea, PromptInputActions, PromptInputAction } from '@/components/ui/prompt-input';
import { Loader } from '@/components/ui/loader';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async (message: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand you're asking about: "${message}". This is a simulated response. In a real implementation, this would connect to your AI service to provide actual assistance with emergency management queries.`,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };



  const gettingStartedCards = [
    {
      id: '1',
      title: 'Active Incidents',
      description: 'Get an overview of current emergency incidents',
      icon: <Bot className="w-5 h-5" />,
      buttonText: 'View',
      action: () => handleSendMessage('Show me all active incidents and their current status')
    },
    {
      id: '2',
      title: 'Resource Allocation',
      description: 'Check resource distribution and availability',
      icon: <Settings className="w-5 h-5" />,
      buttonText: 'Check',
      action: () => handleSendMessage('What resources are currently deployed and where?')
    },
    {
      id: '3',
      title: 'Response Analytics',
      description: 'Analyze emergency response performance',
      icon: <Search className="w-5 h-5" />,
      buttonText: 'Analyze',
      action: () => handleSendMessage('What are the average response times for different types of incidents?')
    },
    {
      id: '4',
      title: 'Team Management',
      description: 'Manage emergency response teams and resources',
      icon: <Users className="w-5 h-5" />,
      buttonText: 'Manage',
      action: () => handleSendMessage('Show me the current status of all emergency response teams')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Central AI Interaction Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Hello!</h2>
          
          <div className="max-w-2xl mx-auto">
            <PromptInput
              value={inputValue}
              onValueChange={setInputValue}
              onSubmit={() => {
                if (inputValue.trim()) {
                  handleSendMessage(inputValue.trim());
                  setInputValue('');
                }
              }}
              isLoading={isLoading}
              className="mb-4"
            >
              <PromptInputTextarea
                placeholder="How can I help?"
                className="text-lg"
              />
              <PromptInputActions>
                <PromptInputAction tooltip="Send message">
                  <Button 
                    type="button" 
                    size="lg" 
                    disabled={!inputValue.trim() || isLoading}
                    onClick={() => {
                      if (inputValue.trim()) {
                        handleSendMessage(inputValue.trim());
                        setInputValue('');
                      }
                    }}
                  >
                    <MessageSquare className="w-5 h-5" />
                  </Button>
                </PromptInputAction>
              </PromptInputActions>
            </PromptInput>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Button variant="ghost" size="sm" className="text-sm">
                All connections
              </Button>
            </div>
          </div>
        </div>

        {/* Getting Started Cards */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Getting Started</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gettingStartedCards.map((card) => (
              <Card key={card.id} className="cursor-pointer hover:shadow-md transition-shadow duration-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary">
                      {card.icon}
                    </div>
                    <CardTitle className="text-base font-medium">
                      {card.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">
                    {card.description}
                  </p>
                  <Button 
                    onClick={card.action}
                    className="w-full"
                    size="sm"
                    variant="outline"
                  >
                    {card.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Chat Area - Only show when there are messages */}
        {messages.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat Assistant</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ChatContainerRoot className="h-[600px]">
                  <ChatContainerContent>
                    {messages.length === 0 ? (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        <div className="text-center">
                          <Bot className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <p className="text-lg">Start a conversation with the AI Assistant</p>
                          <p className="text-sm">Ask questions about incidents, resources, or emergency management</p>
                        </div>
                      </div>
                    ) : (
                      messages.map((message) => (
                        <Message key={message.id} className="p-4">
                          <MessageAvatar
                            src={message.role === 'user' ? '/user-avatar.png' : '/bot-avatar.png'}
                            alt={message.role === 'user' ? 'User' : 'AI Assistant'}
                            fallback={message.role === 'user' ? 'U' : 'AI'}
                          />
                          <div className="flex-1">
                            <MessageContent markdown={message.role === 'assistant'}>
                              {message.content}
                            </MessageContent>
                            <MessageActions>
                              <span className="text-xs text-muted-foreground">
                                {message.timestamp.toLocaleTimeString()}
                              </span>
                            </MessageActions>
                          </div>
                        </Message>
                      ))
                    )}
                    {isLoading && (
                      <Message className="p-4">
                        <MessageAvatar
                          src="/bot-avatar.png"
                          alt="AI Assistant"
                          fallback="AI"
                        />
                        <div className="flex-1">
                          <div className="rounded-lg p-2 text-foreground bg-secondary prose break-words whitespace-normal">
                            <div className="flex items-center space-x-2">
                              <Loader variant="typing" size="sm" />
                              <span className="text-sm text-muted-foreground">AI is thinking...</span>
                            </div>
                          </div>
                        </div>
                      </Message>
                    )}
                    <ChatContainerScrollAnchor />
                  </ChatContainerContent>
                </ChatContainerRoot>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Suggested Prompts - Only show when there are no messages */}
        {messages.length === 0 && (
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="border-b">
                <CardTitle className="text-lg">Suggested Prompts</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <PromptSuggestion
                    onClick={() => handleSendMessage('Show me all active incidents and their current status')}
                    className="w-full"
                  >
                    Show me all active incidents and their current status
                  </PromptSuggestion>
                  <PromptSuggestion
                    onClick={() => handleSendMessage('What resources are currently deployed and where?')}
                    className="w-full"
                  >
                    What resources are currently deployed and where?
                  </PromptSuggestion>
                  <PromptSuggestion
                    onClick={() => handleSendMessage('What are the average response times for different types of incidents?')}
                    className="w-full"
                  >
                    What are the average response times for different types of incidents?
                  </PromptSuggestion>
                  <PromptSuggestion
                    onClick={() => handleSendMessage('Show me the current status of all emergency response teams')}
                    className="w-full"
                  >
                    Show me the current status of all emergency response teams
                  </PromptSuggestion>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t bg-muted/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Bot className="w-4 h-4" />
              <span>Command Central AI</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Powered by</span>
              <span className="font-medium">Emergency Management AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
