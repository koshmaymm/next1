import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "@/app/components/meetups/MeetupDetail";

const MeetupDetailsPage = ({ meetupData }) => {
  return (
    <MeetupDetail
      img={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGODB_URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const myid = new ObjectId(meetupId);

  const client = await MongoClient.connect(process.env.MONGODB_URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  // https://www.mongodb.com/community/forums/t/findone-cannot-match-ids-as-they-are-of-different-type/128845
  const selectedMeetup = await meetupsCollection.findOne({ _id: myid });
  client.close();

  return {
    props: {
      meetupData: JSON.parse(
        JSON.stringify({
          ...selectedMeetup,
          id: selectedMeetup._id,
        })
      ),
    },
  };
};

export default MeetupDetailsPage;
