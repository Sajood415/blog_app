import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../Service/api";
import { LoginContext } from "../../context/ContextProvider";

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
  username: "",
  createDate: new Date(),
};

const CreateView = () => {
  const classes = useStyle();
  const history = useHistory();

  const [post, setPost] = useState(initialValues);
  const { account, setAccount } = useContext(LoginContext);

  useEffect(() => {
    post.username = account;
  }, []);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const savePost = async () => {
    await createPost(post);
    history.push("/");
  };

  return (
    <Box className={classes.container}>
      <FormControl className={classes.form}>
        <InputBase
          onChange={(e) => handleChange(e)}
          placeholder="Enter your title"
          className={classes.textField}
          name="title"
        />
        <Button onClick={() => savePost()} variant="contained" color="primary">
          Add Blog
        </Button>
      </FormControl>
      <TextareaAutosize
        onChange={(e) => handleChange(e)}
        minRows={5}
        placeholder="Add Blog's Description"
        className={classes.textarea}
        name="description"
      />
    </Box>
  );
};

export default CreateView;
