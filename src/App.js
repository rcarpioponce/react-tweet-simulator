import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import Header from "./components/Header";
import SendTweet from "./components/SendTweet";
import ListTweets from "./components/ListTweets";

import { TWEET_STORAGE } from "./utils/constants";

function App() {
  const [toastProps, setToastProps] = useState({ open: false, text: null });
  const [allTweets, setAllTweets] = useState([]);
  const [reloadTweets, setReloadTweets] = useState(false);

  useEffect(() => {
    const AllTweestStorage = localStorage.getItem(TWEET_STORAGE);
    const AllTweetsarray = JSON.parse(AllTweestStorage);
    setAllTweets(AllTweetsarray);
    setReloadTweets(false);
  }, [reloadTweets]);

  const deleteTweet = index => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEET_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
  };

  const onCloseSnackBar = event => {
    setToastProps({
      ...toastProps,
      open: false
    });
  };

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      >
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={toastProps.open}
        autoHideDuration={3000}
        onClose={onCloseSnackBar}
        message={<span id="message-id">{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;
