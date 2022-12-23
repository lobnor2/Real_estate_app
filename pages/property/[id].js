import { Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <Box
    maxWidth="1000px"
    margin="auto"
    p="4"
    border="1px solid red"
    marginBottom={2}
  >
    {photos && <ImageScrollbar data={photos} />}
    <Box w="full" p="6" border="1px solid red">
      <Flex
        paddingTop="2"
        //   border="1px solid green"
        marginTop="1"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center" justifyContent="center">
          <Box paddingRight="1" color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            AED {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </Text>
        </Flex>
        <Box>
          <Avatar
            size="md"
            border="1px solid black"
            //   padding="2px"
            src={agency?.logo?.url}
            width={50}
          />
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="250px"
        //   border="1px solid green"
        marginTop={1}
        //   width="full"
        color="blue.500"
      >
        {rooms}
        <FaBed /> {baths} <FaBath />
        {millify(area)} sqft <BsGridFill />
      </Flex>
      <Box marginTop="2">
        <Text fontSize="lg" marginBottom="2">
          {title}
        </Text>
      </Box>
      <Box>
        <Text lineHeight="2" color="gray.500">
          {description}
        </Text>
      </Box>
      <Flex
        flexWrap="wrap"
        textTransform="uppercase"
        justifyContent="space-between"
      >
        <Flex
          justifyContent="space-between"
          w="400px"
          borderBottom="1px"
          borderColor="gray.100"
          p="3"
        >
          <Text>Type</Text>
          <Text fontWeight="bold">{type}</Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          w="400px"
          borderBottom="1px"
          borderColor="gray.100"
          p="3"
        >
          <Text>Purpose</Text>
          <Text fontWeight="bold">{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex
            // border="1px solid blue"
            justifyContent="space-between"
            w="400px"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text>Furnishing Status</Text>
            <Text fontWeight="bold">{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {amenities.length && (
          <Text fontSize="2xl" fontWeight="bold" marginTop="5">
            Aminities
          </Text>
        )}
        <Flex flexWrap="wrap">
          {amenities.map((item) =>
            item.amenities.map((amenity) => (
              <Text
                key={amenity.text}
                fontWeight="bold"
                color="blue.400"
                fontSize="lg"
                p="2"
                m="1"
                borderRadius="5"
                bg="gray.200"
              >
                {amenity.text}
              </Text>
            ))
          )}
        </Flex>
      </Box>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
