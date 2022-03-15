import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    border: "1px solid #d3cede",
    borderRadius: 10,
    margin: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: 200,
    width: 250,
    "& > *": {
      padding: "0 5px 5px 5px",
    },
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
  },
  detail: {
    fontSize: 14,
    wordBreak: "break-word",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
});

const Post = ({ post }) => {
  const classes = useStyle();

  const addElipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading}>
        {addElipsis(post.title, 10)}
      </Typography>
      <Typography className={classes.text}>Author: {post.username}</Typography>
      <Typography className={classes.detail}>
        {addElipsis(post.description, 50)}
      </Typography>
    </Box>
  );
};

export default Post;
