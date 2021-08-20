import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Emanuel Vitor</Text>
        <Text color="gray.300" fontSize="small">
          teste@email.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Emanuel Vitor"
        src="https://github.com/emanuelv15.png"
      />
    </Flex>
  );
}
