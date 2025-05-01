//import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/Head";
import { Fragment } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Bukit_Bintang_Junction_in_2023.jpg",
    address: "Some address 1",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Bukit_Bintang_Junction_in_2023.jpg",
    address: "Some address 2",
    description: "This is a second meetup",
  },
];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS); //DUMMY_MEETUPS will be rendered second time as using useEffect. First time is []
  // }, []);

  //Head is to show the meta data for the website which helps in SEO 
  //Meta helps when users searchs for the website to show the details  by search engines 
  
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of active meetups"/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// this function will run after deployment
// export async function getServerSideProps(context) {
//   // getServerSideProps reserved func by nextjs
//   // this function only runs on server, this guarantee to run at every request so no need of revalidate
//   const req = context.req;
//   const res = context.res;
//   // can do fetch data from API here
//   return {
//     props: {
//       // props will be sent to getStaticProps
//       meetups: DUMMY_MEETUPS, // this props will be sent to HomePage
//     },
//   };
// }

// //this function is to overcome pre-rendering issue when using useeffect
export async function getStaticProps(props) {
  // to pre-render details and great for SEO, page will be faster when used by this than getServerSideProps
  // getStaticProps reserved func by nextjs this function will only work in pages component files
  // this code will execute on build process, it will never execute on client side
  // can call the API nextjs allowers to use fetch in server side too

  // THIS CODE MUST NOT RUN ON CLIENT AS IT EXPOSE PWD and connect returns a promise
  const client = await MongoClient.connect(
    "mongodb+srv://subbupavar:zTGgF0tKjPN2RLqf@cluster0.8ysfkbe.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  ); // the connection string is taken from mongodb atlas, here meetups is a database
  // can use try catch for handling error
  const db = client.db();
  const meetupsCollection = db.collection("meetups"); //Mongodb is no sql DB that works with connection ( table ) with documents(entries of table)
  // it will create collection if not exists

  const meetups = await meetupsCollection.find().toArray(); // to get back an array
  client.close();
  return {
    props: {
      // props will be sent to getStaticProps
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(), // as MongoDB generate automatic id value this need to be converted to show
      })),
    }, // this props will be sent to HomePage
    revalidate: 10, // incremental static generation to get latest data - regenerated pages must be seconds
  }; // always need to return obj
}

export default HomePage;
