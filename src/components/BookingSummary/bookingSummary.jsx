import { SummaryProperty } from "../SummaryProperty/summaryproperty";
import { SummaryRoom } from "../SummaryRoom/summaryroom";
import { SummaryDetail } from "../SummaryDetail/summarydetail";
import { SummaryServices } from "../SummaryServices/summaryservices";
import { SummaryCancal } from "../SummaryCancal/cummarycancal";
import "./bookingSummary.css"

export const BookingSummary = () => {
    return (
      <div className="summary">
        <h2>Booking Summary</h2>
        <div className="summary__head">
          <img className="summary__photo" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960"/>

          <SummaryProperty name="Hotel Lefsní Zátiší" adress="Malohradské skály 347/21" city="Malohradská ves" rating="4.65" />
          
          <SummaryRoom name="Pokoj 2" type="Dvoulůžkový s dětskou přistýlkou" price="1 800 Kč / noc" />
        </div>

        <SummaryDetail title="Detail rezervace" number="Ćíslo: 459787-745" dates="Pobyt: 13.6.2023 - 17.6.2026" quests="Hosté: 2 dospělí, 1 dítě" services="Stravovávní: žádné" roomTotal="7 200 Kč" checkIn="Check-in: 13.6.2023 do 18:00" checkOut="Check-out: 17.6.2026 do 10:00" />

        <SummaryServices title="Doplňkové služby" parking="Parkování: 200 Kč / noc" breakfast="Snídaně: 150 Kč / noc" wellness="Wellness: Zdarma" wifi="Wifi: Zdarma na všech pokojích" />
        
        <SummaryCancal title="Storno podmínky" text1="Pokud zrušíte rezervaci do 14 dní před příjezdem, nebude Vám účtována žádná částka." text2="Pokud zrušíte rezervaci později nebo nedorazíte vůbec, bude Vám účtována částka za první noc pobytu." />
      </div>
    );
  };