import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Emanuel Vitor</Text>
          <Text color="gray.300" fontSize="small">
            teste@email.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Emanuel Vitor"
        src="https://github.com/emanuelv15.png"
      />
    </Flex>
  );
}
