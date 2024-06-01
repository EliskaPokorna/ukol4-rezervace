export const SummaryRoom = ({ name, type, price }) => {
    return (
        <div className="summary__head-room">
            <h3 className="summary__name">{name}</h3>
            <div className="summary__room-type">{type}</div>
            <div className="summary__room-price">{price}</div>
        </div>
    )
}
