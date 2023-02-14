import MeetupDetail from "@/app/components/meetups/MeetupDetail";

function MeetupDetailsPage() {
  return (
    <MeetupDetail
      img="https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080__340.jpg"
      title="Some title"
      address="Some Adress"
      description="This is desctiption 1"
    />
  );
}

// export async function getStaticPaths() {
//   return {
//     fallback: true,
//     paths: [
//       {
//         params: {
//           meetupId: "m1",
//         }
//       },
//       {
//         params: {
//           meetupId: "m2",
//         }
//       },
//       {
//         params: {
//           meetupId: "m3",
//         }
//       }
//     ]
//   }
// }

// export const getStaticProps = async () => {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 3600
//   };
// };

export default MeetupDetailsPage;
