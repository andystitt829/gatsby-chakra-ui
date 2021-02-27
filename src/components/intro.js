import React from "react"
import { Link } from "gatsby"
import { Box, Heading, Text, Stack } from "@chakra-ui/react"

const Intro = () => {
    return(
        <Box
            as="div"
            margin="0 auto"
            maxWidth="960px"
            py="3rem"
        >
            <Stack spacing={4}>
                <Heading
                    as="h2"
                >
                    Web developer specializing in tech for good
                </Heading>
                <Text>
                    I started my tech career in the nonprofit world in 2008 when I managed my organization's static HTML website.
                </Text>
                <Text>
                    I have since grown in my tech career and have played the roles of digital marketing manager, project manager, layout designer, and front-end developer.
                </Text>
                <Text>
                    I spent over a decade in the nonprofit world, made a brief stop at a pharma marketing working with companies who treat rare diseases, and am now in state government.
                </Text>
                <Text>
                    I am the lead front-end developer at the Delaware Department of State's <Link to="https://gic.delaware.gov">Government Information Center</Link>.
                </Text>
            </Stack>
        </Box>
    )
}

export default Intro