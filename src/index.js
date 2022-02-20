import * as React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Main = (_props) => {
  return (
    <section>
      <Box sx={{flexGrow:1}}>
        <AppBar position='static'>
          <Toolbar>
            <Typography>CoderDojo 五反田</Typography>
          </Toolbar>
        </AppBar>
      </Box>
        <Typography m={2}>CoderDojo は7〜17歳の子どもを対象にしたプログラミング道場です。2011年にアイルランドで始まり、世界では100カ国・1,900の道場、日本では全国に160以上の道場があります。<br/>
CoderDojo五反田は日本でちょうど160番目の道場で、東京都品川区のfreeeさんのオフィスで毎月一回活動します。現在は、コロナウイルス感染防止の観点からオンラインイベントのみ行っております。</Typography>
      <Box>
        
      </Box>
      
      <Grid container spaceng={2}>
        <Grid item xs={6}>
          <img src={`${process.env.PUBLIC_URL}/images/sceen_offline.jpg`} style={{maxWidth:480}} />
        </Grid>
        <Grid item xs={6}>
          <Typography mb={2}>CoderDojo五反田は毎月第3土曜日に開催しています。</Typography>
          <Button variant="contained" href="https://coderdojo-gotanda.doorkeeper.jp/">
          参加する
        </Button>
        </Grid>
      </Grid>
    </section>
  );
};


ReactDOM.render(<Main />, document.querySelector('#root'));
