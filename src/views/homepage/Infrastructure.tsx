import { FunctionComponent } from 'react';
import { Flex, Box, Container, Text, SimpleGrid, Heading, useTheme } from '@chakra-ui/react';
import Image from 'next/image';

import InfrastructureImage from '@assets/images/infrastructure.png';
import InfrastructureBgImage from '@assets/images/infrastructure-bg.png';
import StepsLabel from '@components/StepsLabel';
import LineDivider from '@components/LineDivider';

const TEXTS = [
  [
    'At Talanton we ensure that our clients have access to state of the art financial engineering architecture which combines rapid prototyping and instant cloud deployment. These are complemented by the use of scalable GUI web applications and interactive applications such as the Jupyter notebook. We provide the best open-source software for your intensive computational needs.',

  ],

  [
    'We will take care of your regulatory credit risk assessments, and other quantitative finance related computations. We will also help you with these calculations by extending our services with specific quantitative models. Our goal is to provide you with a point-by-point pricing solution to complement your existing computational arsenal without incurring any downsides.',
  ],
];

const Infrastructure: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Flex position="relative" w="full">
      <Box
        display={{ base: 'none', lg: 'block' }}
        position="absolute"
        w="2000px"
        bottom={0}
        left="50%"
        transform="translateX(-50%) translateY(6px)"
      >
        <Image
          src={InfrastructureBgImage}
          alt="Infrastructure background image"
          width={2000}
          height={805}
          priority
          placeholder="blur"
        />
      </Box>

      <Container variant="section">
        <StepsLabel mb={6}>
          <LineDivider bottom="100%" h={{ base: 24, lg: 20 }} bg={gradients.tertiary} />
          2. Get Trust
        </StepsLabel>

        <Heading as="h2" size="h2" mb={{ base: 6, lg: 8 }}>
          Tackle Complex Computations
        </Heading>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacingX={16} mb={{ base: 16, lg: 24 }}>
          {TEXTS.map((column) => (
            <Box key={`${column[1]}column`} mb={{ lg: 8 }}>
              {column.map((text) => (
                <Text key={text} fontSize={{ lg: 'lg' }} mb={{ base: 4 }} _last={{ lg: { mb: 0 } }}>
                  {text}
                </Text>
              ))}
            </Box>
          ))}
        </SimpleGrid>

        <Box
          display={{ base: 'none', lg: 'initial' }}
          my={{ lg: 'auto' }}
          transform="translateY(6px)"
        >
          <Image
            src={InfrastructureImage}
            alt="Infrastructure image"
            width={1022}
            height={441}
            priority
            placeholder="blur"
          />
        </Box>
      </Container>
    </Flex>
  );
};

export default Infrastructure;
