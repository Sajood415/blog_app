import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { getPost, updatePost } from "../Service/api";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "50px 100px",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  textField: {
    flex: 1,
    margin: "0 30px",
    fontSize: 22,
  },
  textarea: {
    width: "100%",
    marginTop: 50,
    fontSize: 18,
  },
}));

const initialValues = {
  title: "",
  description: "",
  username: "Sajood Ur Rehman",
  createDate: new Date(),
};

const UpdateView = ({ match }) => {
  const [post, setPost] = useState(initialValues);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      setPost(data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const updatingPost = async () => {
    await updatePost(match.params.id, post);
    history.push(`/details/${match.params.id}`);
  };

  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <FormControl className={classes.form}>
        <InputBase
          placeholder="Enter your title"
          className={classes.textField}
          value={post.title}
          onChange={(e) => handleChange(e)}
          name="title"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => updatingPost()}
        >
          Update Blog
        </Button>
      </FormControl>
      <TextareaAutosize
        minRows={5}
        placeholder="Add Blog's Description"
        className={classes.textarea}
        value={post.description}
        onChange={(e) => handleChange(e)}
        name="description"
      />
    </Box>
  );
};

export default UpdateView;
