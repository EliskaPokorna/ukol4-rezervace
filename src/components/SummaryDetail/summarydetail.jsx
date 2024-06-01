export const SummaryDetail = ({ title, number, dates, quests, services, roomTotal, checkIn, checkOut }) => {
    return (
        <div className="summary__detail">
          <h3>{title}</h3>
          <div className="summary__number">{number}</div>
          <div className="summary__dates">{dates}</div>
          <div className="summary__guests">{quests}</div>
          <div className="summary__services">{services}</div>
          <div className="summary__room-total">{roomTotal}</div>
          <div className="summary__check-in">{checkIn}</div>
          <div className="summary__check-out">{checkOut}</div>
        </div>
    )
}