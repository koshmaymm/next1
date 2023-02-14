import NewMeetupForm from "@/app/components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  async function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);

    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("data ", data);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
