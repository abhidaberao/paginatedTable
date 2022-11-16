import { AppBar, Box, Table, Toolbar, Typography } from "@mui/material";
import { Component, ReactNode } from "react";
import PaginatedTable from "../components/PaginatedTable";

class AnimeList extends Component{

    render(): ReactNode {
        return (
            <Box>
                <AppBar>
                <Toolbar variant="dense">
                    <Typography>
                    Anime List
                    </Typography>
                </Toolbar>
                </AppBar>
                <Toolbar variant="dense"/>
                <Box sx={{padding : 5}}>
                    <PaginatedTable/>
                </Box> 
            </Box>
        );
    }
}

export default AnimeList;