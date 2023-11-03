import '../../App.css';

const BookingSlot = ({availableTimes}) => {

    /*
    version-02 [exercise-03-02]:
    const availableTimes = [
        { id: 1, availableTime: "17:00", selected: false }, { id: 2, availableTime: "18:00", selected: false },
        { id: 3, availableTime: "19:00", selected: false }, { id: 4, availableTime: "20:00", selected: false },
        { id: 5, availableTime: "21:00", selected: false }, { id: 6, availableTime: "22:00", selected: false }];
    */

  return (
    <>
      {
      /* Add available times based on the `availableTimes` data */
        availableTimes.map((availableTime) => (
            <option
                key={availableTime.id}
                value={availableTime.availableTime}
                children={availableTime.availableTime}
            />
        ))
      }
    </>
  );
}

export default BookingSlot;