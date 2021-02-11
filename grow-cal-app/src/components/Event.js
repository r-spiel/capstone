
const Event = ({singleEvent}) => {
  const dateStart = Date.parse(singleEvent.startTime)
  const dateStartReadable = dateStart.toString

  return (
    <div className="card" key={singleEvent.id}>
      {/* {console.log(singleEvent.startTime)}
      {console.log(typeof singleEvent.startTime)}
      {console.log(typeof singleEvent.startTime)} */}
      <p>Event title: {singleEvent.title}</p>
      <p>Start Date/Time: {dateStartReadable}</p>
      <p>End Date/Time: {singleEvent.endTime}</p>
    </div>
  )

}

export default Event