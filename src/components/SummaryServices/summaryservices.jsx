export const SummaryServices = ({ title, parking, breakfast, wellness, wifi }) => {
    return (
        <div className="summary__services">
          <h3>{title}</h3>
          <div className="summary__service">{parking}</div>
          <div className="summary__service">{breakfast}</div>
          <div className="summary__service">{wellness}</div>
          <div className="summary__service">{wifi}</div>
        </div>
    )
}