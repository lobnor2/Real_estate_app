import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import DefaultImage from "../assets/house.jpeg";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  return (
    <>
      <Link href={`/property/${externalID}`} passHref>
        <Flex
          flexWrap="wrap"
          flexGrow={1}
          w="420px"
          p="5"
          border="1px solid red"
          paddingTop="0"
          justifyContent="flex-start"
          m="5"
        >
          <Box border="1px solid blue" width="100">
            <Image
              src={coverPhoto ? coverPhoto.url : DefaultImage}
              alt="house"
              width={400}
              height={260}
            />
          </Box>
          <Box w="100%">
            <Flex
              paddingTop="2"
              border="1px solid green"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex alignItems="center" justifyContent="center">
                <Box paddingRight="3" color="green" marginTop="3">
                  {isVerified && <GoVerified />}
                </Box>
                <Text fontWeight="bold" fontSize="lg">
                  AED {millify(price)}
                  {rentFrequency && `/${rentFrequency}`}
                </Text>
              </Flex>
              <Box>
                <Avatar size="sm" src={agency?.logo?.url} width={100} />
              </Box>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" w="250px">
              {rooms}
              <FaBed />| {baths} <FaBath /> | {millify(area)} sqft{" "}
              <BsGridFill />
            </Flex>
            <Text fontSize="lg">
              {title.length > 30 ? `${title.substring(0, 30)}...` : title}
            </Text>
          </Box>
        </Flex>
      </Link>
    </>
  );
};

export default Property;
