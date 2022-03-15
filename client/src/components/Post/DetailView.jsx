import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getPost, deletePost } from "../Service/api";

import { LoginContext } from "../../context/ContextProvider";

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "50px 100px",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    padding: 5,
    border: "1px solid #878787",
    borderRadius: 10,
  },
  heading: {
    fontSize: 38,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px 0 10px 0",
  },
  subHeading: {
    color: "#878787",
    display: "flex",
    margin: "40px 0",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const DetailView = ({ match }) => {
  const classes = useStyle();
  const [post, setPost] = useState({});
  const { account, setAccount } = useContext(LoginContext);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      console.log(data);
      setPost(data);
    };
    fetchData();
  }, []);

  const deleteBlog = async () => {
    await deletePost(post._id);
    history.push("/");
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.icons}>
        {account === post.username && (
          <>
            <Link to={`/update/${post._id}`}>
              <Edit className={classes.icon} color="primary" />
            </Link>
            <Link>
              <Delete
                onClick={() => deleteBlog()}
                className={classes.icon}
                color="error"
              />
            </Link>
          </>
        )}
      </Box>
      <Typography className={classes.heading}>{post.title}</Typography>
      <Box className={classes.subHeading}>
        <Typography>Author: {post.username}</Typography>
        <Typography style={{ marginLeft: "auto" }}>
          {new Date(post.createDate).toDateString() +
            " @ " +
            new Date(post.createDate).toLocaleString("PKR", {
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            })}
        </Typography>
      </Box>
      <Typography>{post.description}</Typography>
    </Box>
  );
};

export default DetailView;
