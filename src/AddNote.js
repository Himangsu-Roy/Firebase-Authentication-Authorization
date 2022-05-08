
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { addDoc, Timestamp } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/Auth.context";
import { notesColRef } from "./utils/firebase.config";

export default function AddNote() {
  const [note, setNote] = React.useState({
    title: "",
    description: "",
  });

  const { currentUser } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(notesColRef, {
      ...note,
      createdAt: Timestamp.fromDate(new Date()),
      user: {
        id: currentUser.uid,
        displayName: "Himu",  //currentUser.displayName,
      },
    })
      .then(() => {
        navigate("/notes");
        console.log("Note added successfully");
      })
      .catch((err) => console.log(err.message));
    console.log(note);
  };

  return (
    <Container maxWidth="xs">
      <Typography
        variant="h5"
        component="h1"
        textAlign="center"
        sx={{ mt: 2, color: "text.secondary" }}
      >
        Add A Note
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          name="title"
          label="Title"
          variant="filled"
          onChange={handleChange}
          value={note.title}
          fullWidth
          required
        />

        <TextField
          multiline
          required
          value={note.description}
          name="description"
          fullWidth
          variant="filled"
          label="Description"
          onChange={handleChange}
          rows="5"
        />
        <Button color="primary" variant="contained" type="submit">
          Add a Note
        </Button>
      </Box>
    </Container>
  );
}
