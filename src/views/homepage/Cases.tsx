import { FunctionComponent } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box, Container, Text, Heading, SimpleGrid, Center } from '@chakra-ui/react';

import Card from '@components/Card';
import CasesOneImage from '@assets/images/chef.jpeg';
import CasesTwoImage from '@assets/images/many.png';
import CasesThreeImage from '@assets/images/processor.jpeg';

const CASES_CARDS = [
  {
    image: CasesOneImage,
    title: 'xVA Solutions',
    texts: [
      'Calculating xVAs requires the ability to forecast credit losses (due to default), funding costs for collateral posted and received, costs of capital, and initial margin requirements at future maturities of a portfolio of securities. This calculation is based on Risk Factor Evolution (RFE) models, which simulate every market value driver (“risk factor”) in the future. The next step is calculating the future risk that drives CVA/DVA and FVA. the market risk at a simulated future point in time required for MVA and KVA.These simulations require robust and fast pricing and calculation  methods to deliver  value adjustments in a reasonable time.',
      'Built on open source libraries, Talanton possesses sophisticated quantitative models for all asset classes and a wide financial product range.',
    ],
  },
  {
    image: CasesTwoImage,
    title: 'Cutting-edge Research',
    texts: [
      'Our team is constantly developing new features, applications and benchmarks some of which we have explained in our white papers.',
      'At Talanton we strive to push frontiers in financial engineering and bring world class standards to our customers. We target improvement of the existing methods (better convergence, validation), as well as development of new approaches in model-based risk management.',
      'In our research we focus on topics of High Performance Computing, cloud computing, optimization of monte-carlo execution, and other financial engineering related topics. ',
    ],
  },
  {
    image: CasesThreeImage,
    title: 'Quant Finance Development',
    texts: [
      'Talanton develops software tools supporting quantitative analysis tasks from pricing structured products to portfolio market and credit risk analysis.',
      'Software services range from configuration and extension of clients’ existing solutions to development of new pricing and risk management tools and applications.',
      'We offer both support for clients’ development projects as well as independent software development and its adaptation to, and integration into, clients’ infrastructure.',
    ],
  },
];

type CasesCardProps = {
  image: StaticImageData;
  title: string;
  texts: string[];
};

const CasesCard: FunctionComponent<CasesCardProps> = ({ image, title, texts }) => (
  <Card p={6}>
    <Center pb={6} mb={6} borderBottom="1px" borderColor="gray.200">
      <Image src={image} alt={`${title} image`} width={330} height={271} />
    </Center>

    <Box>
      <Text fontWeight="bold" fontSize="xl" color="brand.900" mb={6}>
        {title}
      </Text>

      {texts.map((text) => (
        <Text key={text} mb={6} fontSize="sm">
          {text}
        </Text>
      ))}
    </Box>
  </Card>
);

const Cases: FunctionComponent = () => (
  <Container variant="section" id="use-cases" py={{ base: 16, lg: 20 }}>
    <Heading as="h2" size="h2" mb={6}>
    The Contemporary Industry Standard
    </Heading>

    <Text fontSize={{ lg: 'lg' }} mb={{ base: 12, lg: 16 }}>
    Learn how Talanton products can help you manage your market risk.
    </Text>

    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 6, lg: 10 }}>
      {CASES_CARDS.map((card) => (
        <CasesCard key={card.title} {...card} />
      ))}
    </SimpleGrid>
  </Container>
);

export default Cases;
