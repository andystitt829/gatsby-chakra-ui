import PropTypes from "prop-types"
import React from "react"
import { Box, Heading, HStack } from "@chakra-ui/react"
import Headshot from "../components/headshot"

const Header = ({ siteTitle }) => (
  <Box 
    as="header"
    background="#E9DDC7"
  >
    <Box
      as="div"
      margin="0 auto"
      maxWidth="960px"
      py="3rem"
    >
      <HStack spacing="40px">
        <Headshot />
        <Heading
          as="h1"
          size="3xl"
        >
          {siteTitle}
        </Heading>
      </HStack>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
