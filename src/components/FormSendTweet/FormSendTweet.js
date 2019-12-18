import React, { useState } from "react";
import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";

import "./FormSendTweet.scss";

export default function FormSendTweet(props) {
  const { sendTweet } = props;
  const [formValue, setFormValue] = useState({ name: "", tweet: "" });

  const onFormChange = event => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet__title">Enviar Tweet</h2>
      <form
        className="form-send-tweet__form"
        onSubmit={event => sendTweet(event, formValue)}
        onChange={onFormChange}
      >
        <FormControl>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-name"
              type="text"
              name="name"
              label="Nombre de usuario"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-textarea"
              multiline
              row="8"
              name="tweet"
              label="Escribe tu Tweet"
              margin="normal"
              inputProps={{
                maxLength: 140
              }}
              helperText={`${formValue.tweet.length}/140`}
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" className="form-send-tweet__button-submit">
              Twittear
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
