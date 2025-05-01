import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetails";
import Head from "next/head";
import { Fragment } from "react";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

//getStaticPaths IS NEED FOR DYNAMIC PAGES when using getStaticProps
export async function getStaticPaths() {
  // this tells for which dynamic value in the url the page must pre generate

  const client = await MongoClient.connect(
    "mongodb+srv://subbupavar:zTGgF0tKjPN2RLqf@cluster0.8ysfkbe.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  ); // the connection string is taken from mongodb atlas, here meetups is a database
  // can use try catch for handling error
  const db = client.db();
  const meetupsCollection = db.collection("meetups"); //Mongodb is no sql DB that works with connection ( table ) with documents(entries of table)
  // it will create collection if not exists
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // first {} for filter criteria, then second{} to define which field, here it states only id property with 1
  client.close();
  return {
    fallback: false, // if it is false then 404, if this is true this helps to show the pages instead of 404 page and helps with generate with missing ids
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    // [
    //   { params: { meetupId: "m1" } }, // params key is must have
    //   { params: { meetupId: "m2" } },
    // ],
  };
}

export async function getStaticProps(context) {
  // page is pre generated during build process
  // check this func explanation in pages/ index.js
  // cannot use react hooks here
  const meetupId = context.params.meetupId; // here meetupId is the file name [meetupId] identifier
  const client = await MongoClient.connect(
    "mongodb+srv://subbupavar:zTGgF0tKjPN2RLqf@cluster0.8ysfkbe.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  ); // the connection string is taken from mongodb atlas, here meetups is a database
  // can use try catch for handling error
  const db = client.db();
  const meetupsCollection = db.collection("meetups"); //Mongodb is no sql DB that works with connection ( table ) with documents(entries of table)

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId), //meetupId which is mongodb generated _id need to be converted
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
