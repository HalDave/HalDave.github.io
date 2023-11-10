import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from './Image';

export default function BottomBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, top: 'auto', bottom: 0, paddingBottom: 1 }}>
        <Toolbar variant="dense" sx={{ display: "flex", width: "100%" }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 2,
            right: 0,
            position: 'absolute',
            alignItems: 'center',
            marginRight:2,
            gap:1
          }}>
            <Typography variant="body2" color="inherit" component="div">
              This site uses:
            </Typography>
            <Image src={'/ReactLogo.png'} alt={"React"} title={"React"} />
            <Image src={'/TsLogo.png'} alt={"TypeScript"} title={"TypeScript"} />
            <Image src={'/MaterialUILogo.png'} alt={"MaterialUI"} title={"MaterialUI"} />
            <Image src={'/NodeJSLogo.png'} alt={"Nodejs"} title={"Nodejs"} />
            <Image src={'/AzureLogo.png'} alt={"Azure"} title={"Azure"} />
            <Image src={'/CosmosdbLogo.png'} alt={"Cosmosdb"} title={"Cosmosdb"} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}