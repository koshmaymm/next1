import MeetupList from "@/app/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    description: "This is a description",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
    description: "This is a description",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__340.jpg",
    description: "This is a description",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
