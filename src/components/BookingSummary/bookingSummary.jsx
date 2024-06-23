import { SummaryProperty } from "../SummaryProperty/Summaryproperty";
import { SummaryRoom } from "../SummaryRoom/Summaryroom";
import { SummaryDetail } from "../SummaryDetail/Summarydetail";
import { SummaryServices } from "../SummaryServices/Summaryservices";
import { SummaryCancal } from "../SummaryCancal/Summarycancal";
import "./BookingSummary.css"

const propertyData = {
  name: "Hotel Lefsní Zátiší",
  address: "Malohradské skály 347/21",
  city: "Malohradská ves",
  rating: "4.65"
};

const roomData = {
  name: "Pokoj 2",
  type: "Dvoulůžkový s dětskou přistýlkou",
  price: "1 800 Kč / noc"
};

const detailData = {
  title: "Detail rezervace",
  number: "Ćíslo: 459787-745",
  dates: "Pobyt: 13.6.2023 - 17.6.2026",
  guests: "Hosté: 2 dospělí, 1 dítě",
  services: "Stravování: žádné",
  roomTotal: "7 200 Kč",
  checkIn: "Check-in: 13.6.2023 do 18:00",
  checkOut: "Check-out: 17.6.2026 do 10:00"
};

const servicesData = {
  title: "Doplňkové služby",
  parking: "Parkování: 200 Kč / noc",
  breakfast: "Snídaně: 150 Kč / noc",
  wellness: "Wellness: Zdarma",
  wifi: "Wifi: Zdarma na všech pokojích"
};

const cancelData = {
  title: "Storno podmínky",
  text1: "Pokud zrušíte rezervaci do 14 dní před příjezdem, nebude Vám účtována žádná částka.",
  text2: "Pokud zrušíte rezervaci později nebo nedorazíte vůbec, bude Vám účtována částka za první noc pobytu."
};

export const BookingSummary = () => {
  return (
    <div className="summary">
      <h2>Booking Summary</h2>
      <div className="summary__head">
        <img className="summary__photo" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960"/>
        <SummaryProperty {...propertyData} />
        <SummaryRoom {...roomData} />
      </div>
      <SummaryDetail {...detailData} />
      <SummaryServices {...servicesData} />
      <SummaryCancal {...cancelData} />
    </div>
  );
};