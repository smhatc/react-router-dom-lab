import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
      </Routes>
    </>
  );
};

export default App;