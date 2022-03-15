import React from "react";
import Banner from "./Banner";
import Posts from "./Posts";

import { Grid, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  link: {
    textDecoration: "none",
  },
  btn: {
    margin: "5px"
  }
});

const Home = () => {
  const classes = useStyle();

  return (
    <>
      <Banner />
      <Link className={classes.link} to="/create">
        <Button className={classes.btn} variant="contained" color="primary">
          Create Blog
        </Button>
      </Link>
      <Grid container>
        <Grid container item>
          <Posts />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
