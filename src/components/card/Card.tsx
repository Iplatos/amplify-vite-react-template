import { Card, Image, View, Heading, Flex, Text, useTheme, Divider } from '@aws-amplify/ui-react'

export const CardComponent = () => {
  const { tokens } = useTheme()
  return (
    <View
      backgroundColor={'#1e1b35'}
      padding={tokens.space.medium}
      width={'350px'}
      display={'flex'}
    >
      <Card backgroundColor={'#1e1b35'}>
        <Flex direction="column" alignItems="center">
          <Image alt="Road to milford sound" src="/../public/vite.svg" width="43%" />
          <Flex direction="column" alignItems="flex-start" gap={tokens.space.xs}>
            <Heading color={'white'} level={5}>
              New Zealand White Water Outdoor Adventure
            </Heading>
            <Text color={'white'} as="span">
              Join us on this beautiful outdoor adventure through the glittering rivers through the
              snowy peaks on New Zealand.
            </Text>
            <Divider orientation="horizontal" />
            {/* <Button variation="primary">Book it</Button> */}
            <Text color={'white'} as="span">
              5 mins read
            </Text>
          </Flex>
        </Flex>
      </Card>
    </View>
  )
}
