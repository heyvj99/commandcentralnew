# AI Assistant Components

This directory contains the AI Assistant components for the Command Central application.

## Components

### ChatContainer
A reusable chat interface component that handles:
- Message display with user/assistant roles
- Input handling with keyboard shortcuts
- Loading states with animated indicators
- Responsive design

### SuggestedPromptCards
A component that displays categorized prompt suggestions:
- Emergency management focused prompts
- Category filtering (Incidents, Resources, Analytics, General)
- Click-to-use functionality
- Responsive grid layout

## Integration with AI Services

The current implementation includes simulated responses. To integrate with actual AI services:

1. **Replace the simulated response** in `AIAssiatant.tsx`:
   ```typescript
   // Replace this setTimeout simulation with actual AI API call
   const response = await fetch('/api/ai/chat', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ message, context: 'emergency-management' })
   });
   ```

2. **Add environment variables** for AI service configuration:
   ```env
   OPENAI_API_KEY=your_api_key
   AI_MODEL=gpt-4
   ```

3. **Consider adding**:
   - Message persistence
   - Context awareness
   - Error handling
   - Rate limiting
   - Streaming responses

## Usage

```tsx
import { ChatContainer } from '@/components/ai-assistant/chat-container';
import { SuggestedPromptCards } from '@/components/ai-assistant/suggested-prompt-cards';

// In your component
<ChatContainer
  messages={messages}
  onSendMessage={handleSendMessage}
  isLoading={isLoading}
/>

<SuggestedPromptCards
  onPromptSelect={handlePromptSelect}
  selectedCategory={selectedCategory}
/>
```

## Customization

- **Prompts**: Modify `suggestedPrompts` array in `suggested-prompt-cards.tsx`
- **Styling**: Update Tailwind classes for different themes
- **Icons**: Replace Lucide React icons with your preferred icon set
- **Categories**: Add new categories by updating the `category` type and filtering logic
