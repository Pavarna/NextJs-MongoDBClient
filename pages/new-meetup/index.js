import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/Head";
import { Fragment } from "react";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }); // since this is local dev use direct url api folder then file name
    // above code will send req to the api folder new-meetup file where mongodb is connected
    const data = await response.json();
    console.log(data);
    router.push("/"); // to navigate back to starting page & can use replace() if do not want to go back
  }
  return (
    <Fragment>
      <Head>
        <title>Add a new Meetup</title>
        <meta name="description" content="Add your own meetups" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
