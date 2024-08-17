import { Box, Link, Stack, Typography } from "@mui/material"

type props = {
    header : string,
    items : string[]
}

export default function FooterLinks(props: props) {
    return (
        <Box color={"#7d7d7d"}>
        <Typography variant="h6">{props.header}</Typography>
        <Stack mt={"1rem"} spacing={1}>
            {props.items.map((item, index) => (
                <Link href="/" sx={{ textDecoration: "none", color: "inherit", whiteSpace:"nowrap"}}>{item}</Link>
            ))}
        </Stack>
        </Box>
    )
}