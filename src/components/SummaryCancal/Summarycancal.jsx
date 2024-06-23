export const SummaryCancal = ({ title, text1, text2 }) => {
    return (
        <div className="summary__cancal">
          <h3>{title}</h3>
          <div className="summary__cancel-text">
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
        </div>
    )
}