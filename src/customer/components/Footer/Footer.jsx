import React from "react";
import { Grid, Typography, Button } from "@mui/material"; 

const Footer = () => {
  return (
    <Grid
      container
      className="bg-black text-white text-center mt-10"
      sx={{ bgcolor: "black", color: "white", py: 3 }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6"> Company </Typography>
        <div>
            <Button className="pb-5" variant="h6" gutterbottom>About</Button>
        </div>
        <div>
            <Button className="pb-5" variant="h6" gutterbottom>Blog</Button>
        </div>
        <div>
            <Button className="pb-5" variant="h6" gutterbottom>Press</Button>
        </div>
        <div>
            <Button className="pb-5" variant="h6" gutterbottom>Jobs</Button>
        </div>
        
        
        <Button className="pb-5" variant="h6" gutterbottom>Partner</Button>

        
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6"> Solutions </Typography>
        <div>
            <Button className="pb-5" variant="h6" gutterbottom>Marketing</Button>
        </div>
        <div>
            <Button className="pb-5" variant="h6" gutterbottom>Analytics</Button>
        </div>
        <div>
            <Button className="pb-5" variant="h6" gutterbottom>Commerce</Button>
        </div>
        <div>
            <Button className="pb-5" variant="h6" gutterbottom>Insights</Button>
        </div>
        
        
        <Button className="pb-5" variant="h6" gutterbottom>Support</Button>

        
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6"> Documentation </Typography>
        <div>
            <Button className="pb-5" variant="h6" gutterbottom>Guides</Button>
        </div>
        <div>
            <Button className="pb-5" variant="h6" gutterbottom>API Status</Button>
        </div>
        

        
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6"> Legal</Typography>
        <div>
            <Button className="pb-5" variant="h6" gutterbottom>Claim</Button>
        </div>
        <div>
            <Button className="pb-5" variant="h6" gutterbottom>Privacy</Button>
        </div>
        <div>
            <Button className="pb-5" variant="h6" gutterbottom>Terms</Button>
        </div>
        

        
      </Grid>
      <Grid className="pt-20" item xs={12}>
        <Typography variant="body2" component="p" align="center">
            &copy; 2025 This is Melvin's Company. All Rights are reserved.
        </Typography>
        <Typography>
            Please stay away, Visitors will be Shot, Survivors will be SHOT again.
        </Typography>
        <Typography>
            Contact:7676802719
        </Typography>
        <Typography>
        Email:melvinm1391@gmail.com
        </Typography>

      </Grid>
    </Grid>
  );
};

export default Footer;
