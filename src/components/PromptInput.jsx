import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  Button,
  IconButton,
  Text,
  VStack,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { AttachmentIcon, PhoneIcon } from '@chakra-ui/icons';

const PromptInput = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const toast = useToast();

  const handleSend = () => {
    if (prompt.trim()) {
      setResponse("Sure, here's the result based on your prompt");
      setPrompt('');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    toast({
      title: 'Copied to clipboard',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const handleRegenerate = () => {
    setResponse("Here's a regenerated response based on your prompt");
  };

  const handleFeedback = () => {
    toast({
      title: 'Thank you for your feedback!',
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={6} align="stretch" w="full">
      {/* Input Section */}
      <Box>
        <Flex gap={2} mb={4}>
          <Input
            placeholder="Enter your prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            borderColor="gray.300"
            _hover={{ borderColor: 'gray.400' }}
            _focus={{ borderColor: 'black', boxShadow: 'none' }}
            size="lg"
          />
          <IconButton
            icon={<AttachmentIcon />}
            aria-label="Attach file"
            variant="outline"
            size="lg"
          />
          <IconButton
            icon={<PhoneIcon />}
            aria-label="Voice input"
            variant="outline"
            size="lg"
          />
          <Button
            onClick={handleSend}
            variant="solid"
            size="lg"
            px={8}
          >
            Send
          </Button>
        </Flex>
      </Box>

      {/* Response Section */}
      {response && (
        <Box
          p={6}
          borderWidth={1}
          borderColor="gray.200"
          borderRadius="md"
          bg="gray.50"
        >
          <Text mb={4}>{response}</Text>
          <HStack spacing={3}>
            <Button
              size="sm"
              variant="outline"
              onClick={handleCopy}
            >
              Copy
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleRegenerate}
            >
              Regenerate
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleFeedback}
            >
              Feedback
            </Button>
          </HStack>
        </Box>
      )}
    </VStack>
  );
};

export default PromptInput;