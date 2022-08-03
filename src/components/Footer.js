import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Link,
    Box
} from "@mui/material";
import {
    Security,
    Info
} from "@mui/icons-material";

const Footer = ({props}) => <>
<Box sx={{ flexGrow: 1 }}  m={1} p= {1}>
        <AppBar sx={{ bgcolor: "white" }} position="static" component="footer"  color="transparent" elevation={0} marginTop={20} >
            <Toolbar style={{ justifyContent: "center" }}>
            <>
                <Typography variant="body2" color="text.secondary" align="center" {...props}>
                    {'Copyright © '}
                    <Link color="inherit" href="https://github.com/ariefsamuel/">
                        arief samuel
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </>
            </Toolbar>
        </AppBar>
</Box>
    </>

export default Footer;