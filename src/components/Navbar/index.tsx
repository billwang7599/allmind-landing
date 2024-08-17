import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material"
import { CatchingPokemon } from "@mui/icons-material"

export default async function Navbar() {
    return (
        <AppBar position="static" sx={{backgroundColor: "black"}}>
            <Toolbar>
                <IconButton size="large" edge='start' color="inherit">
                    <CatchingPokemon/>
                </IconButton>
                <Typography variant="h6" component='div' sx={{flexGrow : 1}}> Deskree </Typography>
                <Stack direction='row' spacing={30}>
                    <Stack direction='row' spacing={2}>
                        <Button>Products</Button>
                        <Button>Solutions</Button>
                        <Button>Pricing</Button>
                        <Button>Documentation</Button>
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <Button sx={{backgroundColor: "primary.main", px: "1.5rem"}}>Login</Button>
                        <Button sx={{border: '1px solid white', px: "1.5rem"}}>Signup</Button>
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}