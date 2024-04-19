// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Input, VStack, Heading, Text, Image, Link, useToast } from "@chakra-ui/react";
import { FaSearch, FaDownload, FaMusic, FaImage, FaVideo } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSearch = () => {
    toast({
      title: "Search initiated.",
      description: "We are searching for your media files...",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download started.",
      description: "Your download will begin shortly...",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={8} p={5}>
      <Heading as="h1" size="xl">
        Media Finder
      </Heading>
      <Text>Search and download music, images, and videos without registration using various network protocols.</Text>
      <Box>
        <Input placeholder="Search for music, images, videos..." size="lg" mr={2} />
        <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <VStack spacing={4}>
        <Button leftIcon={<FaMusic />} colorScheme="purple" onClick={handleDownload}>
          Download Music
        </Button>
        <Button leftIcon={<FaImage />} colorScheme="teal" onClick={handleDownload}>
          Download Images
        </Button>
        <Button leftIcon={<FaVideo />} colorScheme="orange" onClick={handleDownload}>
          Download Videos
        </Button>
      </VStack>
      <Link href="https://example.com" isExternal>
        <Text>Visit our full site for more features</Text>
      </Link>
      <Image src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnR8ZW58MHx8fHwxNzEzNTY4NTI3fDA&ixlib=rb-4.0.3&q=80&w=1080" />
    </VStack>
  );
};

export default Index;
