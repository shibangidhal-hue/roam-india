const destinations = [
 {id:"goa",name:"Goa",region:"WEST INDIA",tagline:"Salt in the air, nowhere to be.",image:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",category:"beach"},
 {id:"kerala",name:"Kerala",region:"SOUTH INDIA",tagline:"Slow days, green ways.",image:"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",category:"nature"},
 {id:"rajasthan",name:"Rajasthan",region:"NORTH-WEST INDIA",tagline:"Stories carved in stone.",image:"https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",category:"culture"},
 {id:"kashmir",name:"Kashmir",region:"NORTH INDIA",tagline:"Closer to the clouds.",image:"https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",category:"nature"},
 {id:"odisha",name:"Odisha",region:"EAST INDIA",tagline:"Ancient wonders, open shores.",image:"https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?auto=format&fit=crop&w=800&q=80",category:"culture"},
 {id:"meghalaya",name:"Meghalaya",region:"NORTH-EAST INDIA",tagline:"Where the clouds come home.",image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",category:"nature"},
 {id:"agra",name:"Agra",region:"NORTH INDIA",tagline:"A timeless kind of love.",image:"https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",category:"culture"},
 {id:"sikkim",name:"Sikkim",region:"NORTH-EAST INDIA",tagline:"Find your mountain quiet.",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",category:"nature"}
];
const packages = [
 {id:"p1",name:"Goa, at your own pace",place:"Goa",duration:"4 days · 3 nights",price:12999,category:"beach",tag:"COASTAL FAVOURITE",image:destinations[0].image,description:"Beach time, local flavours and easy-going coastal days.",includes:"Illustrative package: stay, selected experiences and local guidance."},
 {id:"p2",name:"The Kerala slow escape",place:"Kerala",duration:"5 days · 4 nights",price:18999,category:"nature",tag:"SLOW TRAVEL",image:destinations[1].image,description:"Lush landscapes, backwater views and restorative moments.",includes:"Illustrative package: stay, selected experiences and local guidance."},
 {id:"p3",name:"Rajasthan's royal trail",place:"Rajasthan",duration:"5 days · 4 nights",price:22999,category:"culture",tag:"CULTURE & HERITAGE",image:destinations[2].image,description:"Discover forts, colourful markets and centuries of stories.",includes:"Illustrative package: stay, selected experiences and local guidance."},
 {id:"p4",name:"Kashmir mountain days",place:"Kashmir",duration:"6 days · 5 nights",price:27999,category:"nature",tag:"MOUNTAIN AIR",image:destinations[3].image,description:"Mountain scenery, lakeside strolls and memorable views.",includes:"Illustrative package: stay, selected experiences and local guidance."},
 {id:"p5",name:"Odisha temples & tides",place:"Odisha",duration:"3 days · 2 nights",price:9999,category:"culture",tag:"HERITAGE & COAST",image:destinations[4].image,description:"A thoughtful introduction to Odisha's heritage and coastline.",includes:"Illustrative package: stay, selected experiences and local guidance."},
 {id:"p6",name:"Meghalaya green trails",place:"Meghalaya",duration:"5 days · 4 nights",price:19999,category:"nature",tag:"OFF THE BEATEN PATH",image:destinations[5].image,description:"Waterfalls, green hills and the wonder of the Northeast.",includes:"Illustrative package: stay, selected experiences and local guidance."}
];
const hotels = [
 {id:"h1",name:"Palm & Tide Resort",city:"Candolim, Goa",region:"Goa",type:"resort",rating:"4.6",price:6800,image:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",description:"A relaxed coastal resort with a pool, tropical gardens and easy access to North Goa beaches.",amenities:["Pool","Wi-Fi","Breakfast","Parking"]},
 {id:"h2",name:"The Pink Courtyard",city:"Jaipur, Rajasthan",region:"Jaipur",type:"boutique",rating:"4.7",price:4200,image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",description:"A characterful boutique stay with warm hospitality, colourful courtyards and heritage-inspired details.",amenities:["Wi-Fi","Restaurant","Breakfast","AC"]},
 {id:"h3",name:"Backwater Grove Stay",city:"Alleppey, Kerala",region:"Kerala",type:"resort",rating:"4.5",price:5900,image:"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=1000&q=80",description:"A peaceful green retreat for exploring Kerala's backwaters, local food and slow riverside mornings.",amenities:["Garden","Wi-Fi","Restaurant","Parking"]},
 {id:"h4",name:"Lakeview House",city:"Srinagar, Kashmir",region:"Kashmir",type:"boutique",rating:"4.4",price:5100,image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",description:"A cosy, mountain-facing base for discovering Srinagar, nearby gardens and the Dal Lake area.",amenities:["Lake view","Wi-Fi","Heating","Breakfast"]},
 {id:"h5",name:"Metro Nest Bengaluru",city:"Bengaluru, Karnataka",region:"Bengaluru",type:"city",rating:"4.3",price:2900,image:"https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",description:"A practical modern city stay for work trips, weekend breaks and exploring Bengaluru's neighbourhoods.",amenities:["Wi-Fi","Work desk","AC","Restaurant"]},
 {id:"h6",name:"Desert Dune Retreat",city:"Jaisalmer, Rajasthan",region:"Jaisalmer",type:"resort",rating:"4.6",price:7900,image:"https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80",description:"A desert-inspired retreat with open skies, warm interiors and easy access to local heritage experiences.",amenities:["Pool","Restaurant","Wi-Fi","Tours"]},
 {id:"h7",name:"Temple Town Residency",city:"Puri, Odisha",region:"Puri",type:"city",rating:"4.2",price:2400,image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80",description:"A simple, comfortable base for a Puri visit, with local dining and popular sights within reach.",amenities:["Wi-Fi","AC","Parking","Restaurant"]},
 {id:"h8",name:"Hillside Fern Lodge",city:"Gangtok, Sikkim",region:"Gangtok",type:"boutique",rating:"4.5",price:3600,image:"https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=80",description:"A calm mountain lodge with cosy interiors and views of the green hills around Gangtok.",amenities:["Mountain view","Wi-Fi","Heating","Breakfast"]},
 {id:"h9",name:"Marine Drive City Hotel",city:"Kochi, Kerala",region:"Kochi",type:"city",rating:"4.3",price:3200,image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80",description:"A convenient city hotel for exploring Kochi's waterfront, cafés and historic neighbourhoods.",amenities:["Wi-Fi","Restaurant","AC","Parking"]}
];
let activeHotelFilter = "all";
let selectedHotel = null;
let activeMode = "packages";
let showAll = false;
let selectedItem = null;
const $ = id => document.getElementById(id);
const money = n => "₹" + Number(n).toLocaleString("en-IN");
const safe = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const originalModalContent = $("bookingModal").querySelector(".modal").innerHTML;

function renderDestinations(list=destinations){
 const shown = showAll ? list : list.slice(0,4);
 $("destinationGrid").innerHTML = shown.length ? shown.map(d=>`<article class="destination-card"><img src="${d.image}" alt="${safe(d.name)} destination" loading="lazy"><div class="destination-info"><small>${safe(d.region)}</small><h3>${safe(d.name)}</h3><p>${safe(d.tagline)}</p></div><button class="destination-arrow" data-destination="${d.id}" aria-label="Explore ${safe(d.name)}">↗</button></article>`).join("") : `<div class="empty-state"><h3>No destinations found</h3><p>Try a different city, state or experience.</p></div>`;
 $("showAllDestinations").textContent = showAll ? "Show fewer destinations ↑" : "Explore all destinations ↗";
}
function renderPackages(list=packages){
 $("packageGrid").innerHTML = list.length ? list.map(p=>`<article class="package-card"><div class="package-photo"><img src="${p.image}" alt="${safe(p.place)} tour" loading="lazy"><span class="package-tag">${safe(p.tag)}</span></div><div class="package-body"><div class="package-meta"><span>⌁ ${safe(p.duration)}</span><span>India · ${safe(p.place)}</span></div><h3>${safe(p.name)}</h3><p>${safe(p.description)}</p><div class="package-bottom"><div><span class="price-label">STARTING FROM / PERSON</span><span class="price">${money(p.price)} <small>onwards</small></span></div><button class="book-button" data-package-details="${p.id}">View details ↗</button></div></div></article>`).join("") : `<div class="empty-state"><h3>No matching trips yet</h3><p>Try another destination or budget.</p></div>`;
}
const packageDetails = {
 p1:{highlights:["Relaxed beach time","Goan food and local markets","Coastal viewpoints"],itinerary:[["Day 1","Arrive in Goa, check in and enjoy a relaxed evening by the coast."],["Day 2","Explore beaches and local cafés; free time for optional activities."],["Day 3","Discover a heritage quarter and local markets, with time at leisure."],["Day 4","Breakfast and departure." ]],includes:["Illustrative accommodation","Selected local experiences","Trip planning support"],excludes:["Flights or train tickets","Personal expenses","Optional activities not listed"]},
 p2:{highlights:["Kerala backwaters","Lush landscapes","Local cuisine"],itinerary:[["Day 1","Arrive in Kochi and explore the waterfront area."],["Day 2","Travel towards the backwaters and enjoy a scenic cruise experience."],["Day 3","Explore village life, local flavours and green landscapes."],["Day 4","Enjoy a flexible day for nature and cultural experiences."],["Day 5","Breakfast and departure." ]],includes:["Illustrative accommodation","Selected local experiences","Trip planning support"],excludes:["Flights or train tickets","Personal expenses","Optional activities not listed"]},
 p3:{highlights:["Historic forts and palaces","Colourful markets","Rajasthani food"],itinerary:[["Day 1","Arrive and explore a historic city centre."],["Day 2","Visit heritage forts and palace districts."],["Day 3","Browse local crafts and markets with time for regional cuisine."],["Day 4","Enjoy a flexible day for cultural experiences."],["Day 5","Breakfast and departure." ]],includes:["Illustrative accommodation","Selected local experiences","Trip planning support"],excludes:["Flights or train tickets","Personal expenses","Optional activities not listed"]},
 p4:{highlights:["Mountain and lake views","Garden visits","Scenic drives"],itinerary:[["Day 1","Arrive in Srinagar and settle in near the lake."],["Day 2","Explore lakeside sights and local gardens."],["Day 3","Enjoy a scenic excursion subject to weather and local conditions."],["Day 4","Spend time at leisure or choose an optional local experience."],["Day 5","Explore nearby viewpoints and local markets."],["Day 6","Breakfast and departure." ]],includes:["Illustrative accommodation","Selected local experiences","Trip planning support"],excludes:["Flights or train tickets","Personal expenses","Optional activities not listed"]},
 p5:{highlights:["Temple architecture","Odisha coastal heritage","Local cuisine"],itinerary:[["Day 1","Arrive in Bhubaneswar and explore local heritage sites."],["Day 2","Visit Puri and enjoy time near the coast."],["Day 3","Breakfast and departure." ]],includes:["Illustrative accommodation","Selected local experiences","Trip planning support"],excludes:["Flights or train tickets","Personal expenses","Optional activities not listed"]},
 p6:{highlights:["Green hills and waterfalls","Local culture","Nature trails"],itinerary:[["Day 1","Arrive in Shillong and explore the local area."],["Day 2","Discover scenic viewpoints and waterfalls, weather permitting."],["Day 3","Explore village landscapes and local food."],["Day 4","Enjoy a flexible nature-focused day."],["Day 5","Breakfast and departure." ]],includes:["Illustrative accommodation","Selected local experiences","Trip planning support"],excludes:["Flights or train tickets","Personal expenses","Optional activities not listed"]}
};
function openPackageDetails(p){
 const d=packageDetails[p.id]||packageDetails.p1;
 $("packageDetailImage").src=p.image;$("packageDetailImage").alt=p.place+" tour";
 $("packageDetailTag").textContent=p.tag;$("packageDetailTitle").textContent=p.name;$("packageDetailMeta").textContent=p.place+" · "+p.duration;
 $("packageDetailDescription").textContent=p.description;
 $("packageDetailPrice").textContent=money(p.price)+" per person";
 $("packageDetailHighlights").innerHTML=d.highlights.map(x=>`<span>${safe(x)}</span>`).join("");
 $("packageDetailItinerary").innerHTML=d.itinerary.map(x=>`<article class="itinerary-day"><b>${safe(x[0])}</b><p>${safe(x[1])}</p></article>`).join("");
 $("packageDetailIncludes").innerHTML=d.includes.map(x=>`<li>${safe(x)}</li>`).join("");
 $("packageDetailExcludes").innerHTML=d.excludes.map(x=>`<li>${safe(x)}</li>`).join("");
 $("packageBookButton").onclick=()=>{closePackageDetails();openBooking(p)};
 $("packageModal").classList.add("open");$("packageModal").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closePackageDetails(){$("packageModal").classList.remove("open");$("packageModal").setAttribute("aria-hidden","true");document.body.style.overflow="";}
function renderHotels(list=hotels){
 const grid=$("hotelGrid");
 grid.innerHTML=list.length?list.map(h=>`<article class="hotel-card"><div class="hotel-photo"><img src="${h.image}" alt="${safe(h.name)}" loading="lazy"><span class="hotel-type-tag">${safe(h.type)} stay</span></div><div class="hotel-card-body"><div class="hotel-location">⌖ ${safe(h.city)}</div><h3>${safe(h.name)}</h3><div class="hotel-rating">★ ${safe(h.rating)} <span style="color:#858c84">· Sample rating</span></div><p>${safe(h.description)}</p><div class="hotel-amenities">${h.amenities.slice(0,3).map(a=>`<span>${safe(a)}</span>`).join("")}</div><div class="hotel-card-bottom"><div><span class="hotel-price-label">SAMPLE PRICE / NIGHT</span><span class="hotel-price">${money(h.price)} <small>/ night</small></span></div><button class="book-button" data-hotel="${h.id}">View stay ↗</button></div></div></article>`).join(""):`<div class="empty-state"><h3>No matching hotels</h3><p>Try another destination, stay type or price range.</p></div>`;
}
function filterHotels(){
 const q=$("hotelSearchInput").value.trim().toLowerCase(), max=$("hotelPriceFilter").value;
 const list=hotels.filter(h=>(!q||[h.name,h.city,h.region,h.type,h.description,...h.amenities].some(v=>v.toLowerCase().includes(q)))&&(max==="all"||h.price<=Number(max))&&(activeHotelFilter==="all"||h.type===activeHotelFilter));
 renderHotels(list);toast(`${list.length} hotel${list.length===1?"":"s"} match your search`);
}
function hotelNights(){const a=$("hotelCheckIn").value,b=$("hotelCheckOut").value;if(!a||!b)return 1;return Math.max(1,Math.ceil((new Date(b+"T00:00:00")-new Date(a+"T00:00:00"))/86400000));}
function updateHotelEstimate(){if(!selectedHotel)return;const nights=hotelNights(),rooms=Number($("hotelRooms").value);$("hotelEstimateLabel").textContent=`Estimated total · ${nights} night${nights===1?"":"s"} · ${rooms} room${rooms===1?"":"s"}`;$("hotelEstimate").textContent=money(selectedHotel.price*nights*rooms);}
function openHotelDetails(h){
 selectedHotel=h;$("hotelDetailImage").src=h.image;$("hotelDetailImage").alt=h.name;$("hotelDetailType").textContent=h.type.toUpperCase()+" STAY · "+h.city.toUpperCase();$("hotelModalTitle").textContent=h.name;$("hotelDetailDescription").textContent=h.description+` Sample rate: ${money(h.price)} per room per night.`;$("hotelDetailAmenities").innerHTML=h.amenities.map(a=>`<span>${safe(a)}</span>`).join("");
 const min=new Date();min.setDate(min.getDate()+1);const next=new Date(min);next.setDate(next.getDate()+1);const fmt=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
 $("hotelCheckIn").min=fmt(min);$("hotelCheckIn").value=fmt(min);$("hotelCheckOut").min=fmt(next);$("hotelCheckOut").value=fmt(next);$("hotelGuests").value="2";$("hotelRooms").value="1";updateHotelEstimate();$("hotelModal").classList.add("open");$("hotelModal").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closeHotelDetails(){$("hotelModal").classList.remove("open");$("hotelModal").setAttribute("aria-hidden","true");document.body.style.overflow="";selectedHotel=null;}
function toast(message){const t=$("toast");t.textContent=message;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove("show"),3200)}
function getBookings(){try{return JSON.parse(localStorage.getItem("roamIndiaBookings")||"[]")}catch{return []}}
function setBookings(b){localStorage.setItem("roamIndiaBookings",JSON.stringify(b));updateBookingCount()}
function updateBookingCount(){$("bookingCount").textContent=getBookings().filter(b=>b.status!=="Cancelled").length}
function openBooking(item){
 selectedItem=item;
 $("selectedPackageId").value=item.id;
 $("modalTitle").textContent="Request your trip";
 $("modalDescription").textContent=item.name+" · "+item.duration+". "+item.includes;
 $("estimatedTotal").textContent=money(item.price*Number($("travellers").value||2));
 $("bookingTravellers").value=$("travellers").value||"2";
 const minDate=new Date();minDate.setDate(minDate.getDate()+1);
 $("startDate").min=minDate.toISOString().slice(0,10);
 $("startDate").value=minDate.toISOString().slice(0,10);
 $("bookingModal").classList.add("open");$("bookingModal").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closeModal(){$("bookingModal").classList.remove("open");$("bookingModal").setAttribute("aria-hidden","true");document.body.style.overflow=""}
function doSearch(){
 const q=$("destinationInput").value.trim().toLowerCase(), max=$("budget").value;
 if(activeMode==="destinations"){
  const results=destinations.filter(d=>!q||[d.name,d.region,d.tagline,d.category].some(s=>s.toLowerCase().includes(q)));
  showAll=true;renderDestinations(results);$("destinations").scrollIntoView({behavior:"smooth"});toast(`${results.length} destination${results.length===1?"":"s"} found`);return;
 }
 const results=packages.filter(p=>(!q||[p.name,p.place,p.description,p.category].some(s=>s.toLowerCase().includes(q)))&&(max==="all"||p.price<=Number(max)));
 renderPackages(results);$("packages").scrollIntoView({behavior:"smooth"});toast(`${results.length} trip${results.length===1?"":"s"} match your search`);
}
$("searchForm").addEventListener("submit",e=>{e.preventDefault();doSearch()});
document.querySelectorAll(".search-tabs button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".search-tabs button").forEach(b => {
      b.classList.remove("active");
    });

    btn.classList.add("active");
    activeMode = btn.dataset.mode;

    if (activeMode === "flights" || activeMode === "trains" || activeMode === "buses") {
      const travelType = activeMode === "buses" ? "bus" :
                         activeMode === "trains" ? "train" : "flight";

      const travelTab = document.querySelector(
        `.travel-booking-tabs button[data-travel="${travelType}"]`
      );

      if (travelTab) {
        travelTab.click();
        $("travel-booking").scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    if (activeMode === "hotels") {
      $("hotels").scrollIntoView({ behavior: "smooth" });
      return;
    }

    $("destinationInput").placeholder =
      activeMode === "packages"
        ? "City, state or experience"
        : "Where would you like to go?";

    $("searchHint").textContent =
      activeMode === "packages"
        ? "Search trips by destination and budget."
        : "Explore destinations across every region of India.";
  });
});
document.querySelectorAll(".chip").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".chip").forEach(b=>b.classList.remove("active"));btn.classList.add("active");const f=btn.dataset.filter;renderPackages(f==="all"?packages:packages.filter(p=>p.category===f))}));
$("showAllDestinations").addEventListener("click",()=>{showAll=!showAll;renderDestinations();if(showAll)$("destinationGrid").scrollIntoView({behavior:"smooth",block:"nearest"})});
document.addEventListener("click",e=>{
 const detail=e.target.closest("[data-package-details]");if(detail){const p=packages.find(x=>x.id===detail.dataset.packageDetails);if(p)openPackageDetails(p);return}
 const book=e.target.closest("[data-book]");if(book){const p=packages.find(x=>x.id===book.dataset.book);if(p)openBooking(p);return}
 const dest=e.target.closest("[data-destination]");if(dest){const d=destinations.find(x=>x.id===dest.dataset.destination);if(d){activeMode="packages";$("destinationInput").value=d.name;$("searchHint").textContent=`Showing travel inspiration for ${d.name}.`;doSearch()}return}
});
$("travellers").addEventListener("change",()=>{if(selectedItem)$("estimatedTotal").textContent=money(selectedItem.price*Number($("travellers").value))});
$("bookingTravellers").addEventListener("change",()=>{if(selectedItem)$("estimatedTotal").textContent=money(selectedItem.price*Number($("bookingTravellers").value))});
let appliedBookingCoupon = null;

$("applyBookingCoupon").addEventListener("click", async () => {
  try {
    if (!selectedItem) {
      throw new Error("Please select a package first.");
    }

    const code = $("bookingCouponCode").value.trim();
    const travellers = Number($("bookingTravellers").value || 2);
    const amount = selectedItem.price * travellers;

    const result = await apiRequest("/coupons/validate", {
      method: "POST",
      body: JSON.stringify({ code, amount })
    });

    appliedBookingCoupon = result;

    $("bookingCouponMessage").textContent =
      `Coupon applied! You saved ${money(result.discount)}.`;

  } catch (error) {
    appliedBookingCoupon = null;
    $("bookingCouponMessage").textContent = error.message;
  }
});
$("bookingForm").addEventListener("submit",e=>{
 e.preventDefault();if(!selectedItem)return;
 const booking={reference:"RI-"+Date.now().toString().slice(-8),itemId:selectedItem.id,itemName:selectedItem.name,place:selectedItem.place,price:selectedItem.price,customer:$("customerName").value.trim(),email:$("customerEmail").value.trim(),date:$("startDate").value,travellers:Number($("bookingTravellers").value),notes:$("customerNotes").value.trim(),status:"Request saved",createdAt:new Date().toISOString()};
 const bookings=getBookings();bookings.unshift(booking);setBookings(bookings);closeModal();$("bookingForm").reset();toast("Your demo booking request has been saved on this device.");showBookings();
});
function bookingTotal(b){return b.type==="hotel"?b.price*(b.nights||1)*(b.rooms||1):b.price*b.travellers}
function showBookings(){
 const bookings=getBookings();const backdrop=$("bookingModal");const modal=backdrop.querySelector(".modal");
 modal.innerHTML=`<button class="modal-close" id="closeBookings" aria-label="Close">×</button><div class="eyebrow dark-eyebrow">YOUR TRAVEL PLANS</div><h2>My bookings</h2><p class="modal-description">Requests saved on this browser are listed here. They are not confirmed reservations.</p><div class="booking-list">${bookings.length?bookings.map(b=>`<article class="saved-booking"><b>${safe(b.itemName)}</b><small>Reference: ${safe(b.reference)}<br>${b.type==="hotel"?"Hotel stay":"Trip request"}<br>Traveller: ${safe(b.customer)} · ${safe(b.travellers)} guest(s)<br>Start date: ${safe(b.date)}<br>Estimated total: ${money(bookingTotal(b))}${b.type==="hotel"?`<br>Check-out: ${safe(b.checkOut)} · ${safe(b.nights)} night(s) · ${safe(b.rooms)} room(s)`:""}<br>Status: ${safe(b.status)}</small>${b.status!=="Cancelled"?`<button class="cancel-request" data-cancel="${safe(b.reference)}">Cancel demo request</button>`:""}</article>`).join(""):`<div class="empty-state"><h3>No bookings yet</h3><p>Explore a package and save a booking request to see it here.</p></div>`}</div><p class="form-note">Demo only: requests stay in this browser's local storage. No company receives them.</p>`;
 backdrop.classList.add("open");backdrop.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
 $("closeBookings").addEventListener("click",()=>{closeModal();restoreModal()});
 modal.querySelectorAll("[data-cancel]").forEach(btn=>btn.addEventListener("click",()=>{const b=getBookings().map(x=>x.reference===btn.dataset.cancel?{...x,status:"Cancelled"}:x);setBookings(b);showBookings()}));
}
function restoreModal(){
 const modal=$("bookingModal").querySelector(".modal");
 modal.innerHTML=originalModalContent;
 $("closeModal").addEventListener("click",closeModal);
}
$("closePackageModal").addEventListener("click",closePackageDetails);
$("packageModal").addEventListener("click",e=>{if(e.target===$("packageModal"))closePackageDetails()});
$("hotelSearchButton").addEventListener("click",filterHotels);
$("hotelSearchInput").addEventListener("keydown",e=>{if(e.key==="Enter")filterHotels()});
$("hotelPriceFilter").addEventListener("change",filterHotels);
document.querySelectorAll("[data-hotel-filter]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("[data-hotel-filter]").forEach(b=>b.classList.remove("active"));btn.classList.add("active");activeHotelFilter=btn.dataset.hotelFilter;filterHotels()}));
document.addEventListener("click",e=>{const btn=e.target.closest("[data-hotel]");if(btn){const h=hotels.find(x=>x.id===btn.dataset.hotel);if(h)openHotelDetails(h)}});
["hotelCheckIn","hotelCheckOut","hotelRooms"].forEach(id=>$(id).addEventListener("change",()=>{if(id==="hotelCheckIn"){const d=new Date($(id).value+"T00:00:00");d.setDate(d.getDate()+1);const min=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;$("hotelCheckOut").min=min;if($("hotelCheckOut").value<min)$("hotelCheckOut").value=min;}updateHotelEstimate()}));
$("hotelBookingForm").addEventListener("submit",e=>{e.preventDefault();if(!selectedHotel)return;const checkIn=$("hotelCheckIn").value,checkOut=$("hotelCheckOut").value;if(checkOut<=checkIn){toast("Check-out must be after check-in.");return;}const nights=hotelNights();const booking={type:"hotel",reference:"RI-"+Date.now().toString().slice(-8),itemId:selectedHotel.id,itemName:selectedHotel.name,place:selectedHotel.city,price:selectedHotel.price,customer:$("hotelCustomerName").value.trim(),email:$("hotelCustomerEmail").value.trim(),date:checkIn,checkOut,nights,rooms:Number($("hotelRooms").value),travellers:Number($("hotelGuests").value),status:"Request saved",createdAt:new Date().toISOString()};const all=getBookings();all.unshift(booking);setBookings(all);closeHotelDetails();$("hotelBookingForm").reset();toast("Your demo hotel request has been saved on this device.");showBookings()});
$("closeHotelModal").addEventListener("click",closeHotelDetails);
$("hotelModal").addEventListener("click",e=>{if(e.target===$("hotelModal"))closeHotelDetails()});
$("myBookingsBtn").addEventListener("click",showBookings);
$("closeModal").addEventListener("click",closeModal);
$("bookingModal").addEventListener("click",e=>{if(e.target===$("bookingModal")){closeModal();restoreModal()}});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();restoreModal();closeHotelDetails()}});
$("newsletterForm").addEventListener("submit",e=>{e.preventDefault();const email=$("emailInput").value.trim();if(email){let list=[];try{list=JSON.parse(localStorage.getItem("roamIndiaNewsletter")||"[]")}catch{}if(!list.includes(email)){list.push(email);localStorage.setItem("roamIndiaNewsletter",JSON.stringify(list))}$("newsletterMessage").textContent="Thanks! Your demo subscription is saved on this device.";$("newsletterForm").reset()}});
$("menuToggle").addEventListener("click",()=>$("mainNav").classList.toggle("open"));
$("mainNav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>$("mainNav").classList.remove("open")));
const today=new Date().toISOString().slice(0,10);$("startDate").min=today;
renderDestinations();renderPackages();renderHotels();updateBookingCount();




// Connect the existing account UI to the Roam India backend
const API_BASE = "http://localhost:4000/api";

function getAuthUser() {
  try {
    return JSON.parse(localStorage.getItem("roamIndiaUser") || "null");
  } catch {
    return null;
  }
}

function getAuthToken() {
  return localStorage.getItem("roamIndiaToken");
}

async function apiRequest(path, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(getAuthToken()
      ? { Authorization: `Bearer ${getAuthToken()}` }
      : {}),
    ...(options.headers || {})
  };

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "Request failed. Please try again.");
  }

  return data;
}


function updateAccountButton() {
  const user = getAuthUser();
  const btn = $("accountBtn");

  if (btn) {
    btn.textContent = user
      ? `Hi, ${user.name.split(" ")[0]} · Sign out`
      : "Sign in";
  }
}

async function loadCoinBalance() {
  const balanceElement = $("coinBalance");
  const messageElement = $("coinMessage");

  if (!getAuthToken()) {
    if (balanceElement) balanceElement.textContent = "0 Coins";
    if (messageElement) {
      messageElement.textContent = "Sign in to view your rewards.";
    }
    return;
  }

  try {
    const result = await apiRequest("/coins/balance");

    if (balanceElement) {
      balanceElement.textContent = `${result.balance} Coins`;
    }

    if (messageElement) {
      messageElement.textContent = "Your Roam Coins balance.";
    }
  } catch (error) {
    if (messageElement) {
      messageElement.textContent = error.message;
    }
  }
}

function openAuth(mode = "login") {
  authMode = mode;
  renderAuthMode();
  $("authModal").classList.add("open");
  $("authModal").setAttribute("aria-hidden", "false");
  $("authEmail").focus();
}

function closeAuth() {
  $("authModal").classList.remove("open");
  $("authModal").setAttribute("aria-hidden", "true");
  $("authForm").reset();
}

function renderAuthMode() {
  const isRegister = authMode === "register";
  const phoneField = $("authPhone");
  const phoneLabel = $("authPhoneLabel") ||
    (phoneField ? phoneField.closest("label") || phoneField.parentElement : null);

  $("authTitle").textContent = isRegister
    ? "Create your account"
    : "Welcome back";

  $("authDescription").textContent = isRegister
    ? "Create your Roam India account."
    : "Sign in to plan your next trip.";

  $("authNameLabel").hidden = !isRegister;
  $("authName").required = isRegister;

  if (phoneLabel) phoneLabel.hidden = !isRegister;
  if (phoneField) phoneField.required = isRegister;

  $("authEmail").placeholder = isRegister
    ? "Enter your email address"
    : "Enter email or 10-digit mobile number";

  $("authEmail").required = true;
  $("authPassword").minLength = isRegister ? 10 : 1;
  $("authPassword").autocomplete = isRegister
    ? "new-password"
    : "current-password";

  $("authSubmit").disabled = false;
  $("authSubmit").innerHTML = isRegister
    ? 'Create account <span>→</span>'
    : 'Sign in <span>→</span>';

  $("loginTab").classList.toggle("active", !isRegister);
  } // closes renderAuthMode()

$("loginTab").addEventListener("click", () => {
  authMode = "login";
  renderAuthMode();
});

$("registerTab").addEventListener("click", () => {
  authMode = "register";
  renderAuthMode();
});

$("accountBtn").addEventListener("click", () => {
  if (getAuthToken()) {
    localStorage.removeItem("roamIndiaToken");
    localStorage.removeItem("roamIndiaUser");
    updateAccountButton();
    loadCoinBalance();
    toast("You have signed out.");
  } else {
    openAuth("login");
  }
});



$("closeAuthModal").addEventListener("click", closeAuth);

$("authModal").addEventListener("click", e => {
  if (e.target.id === "authModal") closeAuth();
});



$("authForm").addEventListener("submit", async e => {
  e.preventDefault();

  const email = $("authEmail").value.trim().toLowerCase();
const phone = $("authPhone") ? $("authPhone").value.replace(/\D/g, "") : "";
const password = document.querySelector("#authForm #authPassword").value;
  

  if (authMode === "register" && (password.trim().length < 10 || password.trim().length > 72)) {
  toast("Password must contain between 10 and 72 characters.");
  return;
  }

  

  const name = $("authName").value.trim();

  if (authMode === "register" && name.length < 2) {
    toast("Please enter your full name.");
    return;
  }

  const submitButton = $("authSubmit");
  submitButton.disabled = true;
  submitButton.textContent = "Please wait...";

  try {
    const endpoint = authMode === "register"
      ? "/auth/register"
      : "/auth/login";

    const isMobileLogin = /^[6-9]\d{9}$/.test(email);

const payload = authMode === "register"
  ? { name, email, phone, password }
  : {
      email: isMobileLogin ? "" : email,
      phone: isMobileLogin ? email : "",
      password
    };

    const result = await apiRequest(endpoint, {
      method: "POST",
      body: JSON.stringify(payload)
    });

    localStorage.setItem("roamIndiaToken", result.token);
    localStorage.setItem("roamIndiaUser", JSON.stringify(result.user));

    closeAuth();
    updateAccountButton();
    loadCoinBalance();

    toast(
      authMode === "register"
        ? "Your account was created successfully!"
        : `Welcome back, ${result.user.name.split(" ")[0]}!`
    );
  } catch (error) {
    toast(error.message);
  } finally {
    submitButton.disabled = false;
    renderAuthMode();
  }
});

updateAccountButton();


/* Roam India: Detect My Location and display map */
let locationMap = null;
let userLocationMarker = null;
let nearbyMarkers = [];
function initializeLocationMap() {
  if (locationMap) return;

  locationMap = L.map("locationMap").setView(
    [20.2961, 85.8245],
    12
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(locationMap);
}

const detectButton = document.getElementById("detectLocationBtn");
const locationMessage = document.getElementById("locationMessage");

async function findNearbyPlaces(lat, lng) {
  const resultsContainer = document.getElementById("nearbyPlaces");

  resultsContainer.textContent = "Searching nearby places...";

  const query = `
    [out:json][timeout:25];
    (
      nwr(around:5000,${lat},${lng})["tourism"~"^(hotel|guest_house|hostel|attraction|museum|viewpoint)$"];
      nwr(around:5000,${lat},${lng})["amenity"="hotel"];
    );
    out center;
  `;

  try {
    const response = await fetch(
      "https://overpass-api.de/api/interpreter",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({ data: query })
      }
    );

    if (!response.ok) {
      throw new Error("Nearby places service is unavailable.");
    }

    const data = await response.json();
    const places = data.elements
      .map((place) => {
        const tags = place.tags || {};
        const point = place.type === "node"
          ? { lat: place.lat, lng: place.lon }
          : { lat: place.center?.lat, lng: place.center?.lon };

        return {
          id: `${place.type}-${place.id}`,
          name: tags.name || tags["name:en"] || "",
          category: tags.tourism || tags.amenity || "Place",
          ...point
        };
      })
      .filter((place) => place.name && place.lat != null && place.lng != null)
      .slice(0, 30);

    nearbyMarkers.forEach((marker) => locationMap.removeLayer(marker));
    nearbyMarkers = [];

    resultsContainer.replaceChildren();

    if (!places.length) {
      resultsContainer.textContent =
        "No mapped hotels or attractions found nearby. Try again later.";
      return;
    }

    places.forEach((place) => {
      const marker = L.marker([place.lat, place.lng])
        .addTo(locationMap)
        .bindPopup(place.name);

      nearbyMarkers.push(marker);

      const card = document.createElement("article");
      card.className = "nearby-place";

      const title = document.createElement("h4");
      title.textContent = place.name;

      const category = document.createElement("p");
      category.textContent = place.category.replaceAll("_", " ");

      const showButton = document.createElement("button");
      showButton.type = "button";
      showButton.textContent = "Show on map";
      showButton.addEventListener("click", () => {
        locationMap.setView([place.lat, place.lng], 17);
        marker.openPopup();
      });

      card.append(title, category, showButton);
      resultsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Nearby places error:", error);
    resultsContainer.textContent =
      "Could not load nearby places. Please try again in a moment.";
  }
}

async function findNearbyPlaces(lat, lng) {
  const resultsContainer = document.getElementById("nearbyPlaces");

  resultsContainer.textContent = "Searching nearby places...";

  const query = `
    [out:json][timeout:25];
    (
      nwr(around:5000,${lat},${lng})["tourism"~"^(hotel|guest_house|hostel|attraction|museum|viewpoint)$"];
      nwr(around:5000,${lat},${lng})["amenity"="hotel"];
    );
    out center;
  `;

  try {
    const response = await fetch(
      "https://overpass-api.de/api/interpreter",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({ data: query })
      }
    );

    if (!response.ok) {
      throw new Error("Nearby places service is unavailable.");
    }

    const data = await response.json();

    const places = data.elements
      .map((place) => {
        const tags = place.tags || {};
        const point = place.type === "node"
          ? { lat: place.lat, lng: place.lon }
          : {
              lat: place.center?.lat,
              lng: place.center?.lon
            };

        return {
          name: tags.name || tags["name:en"] || "",
          category: tags.tourism || tags.amenity || "Place",
          ...point
        };
      })
      .filter(
        (place) =>
          place.name && place.lat != null && place.lng != null
      )
      .slice(0, 30);

    nearbyMarkers.forEach((marker) => locationMap.removeLayer(marker));
    nearbyMarkers = [];
    resultsContainer.replaceChildren();

    if (!places.length) {
      resultsContainer.textContent =
        "No nearby hotels or attractions found.";
      return;
    }

    places.forEach((place) => {
      const marker = L.marker([place.lat, place.lng])
        .addTo(locationMap)
        .bindPopup(place.name);

      nearbyMarkers.push(marker);

      const card = document.createElement("article");
      card.className = "nearby-place";

      const title = document.createElement("h4");
      title.textContent = place.name;

      const category = document.createElement("p");
      category.textContent = place.category.replaceAll("_", " ");

      const showButton = document.createElement("button");
      showButton.type = "button";
      showButton.textContent = "Show on map";

      showButton.addEventListener("click", () => {
        locationMap.setView([place.lat, place.lng], 17);
        marker.openPopup();
      });

      card.append(title, category, showButton);
      resultsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Nearby places error:", error);
    resultsContainer.textContent =
      "Could not load nearby places. Please try again.";
  }
}

if (detectButton) {
  detectButton.addEventListener("click", () => {
    if (!navigator.geolocation) {
      locationMessage.textContent =
        "Your browser does not support location detection.";
      return;
    }

    locationMessage.textContent =
      "Detecting your location... Please allow access.";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        initializeLocationMap();
        locationMap.setView([lat, lng], 14);

        if (userLocationMarker) {
          userLocationMarker.setLatLng([lat, lng]);
        } else {
          userLocationMarker = L.marker([lat, lng])
            .addTo(locationMap);
        }

        userLocationMarker
          .bindPopup("Your current location")
          .openPopup();

        locationMessage.textContent =
          `Location detected: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;

          findNearbyPlaces(lat, lng);

        setTimeout(() => locationMap.invalidateSize(), 100);
      },
      (error) => {
        const messages = {
          1: "Location permission denied. Allow location access in Safari settings.",
          2: "Your location is unavailable. Please try again.",
          3: "The location request timed out. Please try again."
        };

        locationMessage.textContent =
          messages[error.code] || "Could not detect your location.";
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 60000
      }
    );
  });
}


/* ===== Roam India AI Chat Controls ===== */

const aiChatButton = document.getElementById("aiChatButton");
const aiChatWindow = document.getElementById("aiChatWindow");
const aiChatClose = document.getElementById("aiChatClose");

if (aiChatButton && aiChatWindow && aiChatClose) {
  aiChatButton.addEventListener("click", () => {
    aiChatWindow.hidden = false;
    aiChatButton.hidden = true;
  });

  aiChatClose.addEventListener("click", () => {
    aiChatWindow.hidden = true;
    aiChatButton.hidden = false;
  });
}



/* ===== Roam India AI Message Sending ===== */

const aiChatForm = document.getElementById("aiChatForm");
const aiChatInput = document.getElementById("aiChatInput");
const aiChatMessages = document.getElementById("aiChatMessages");

if (aiChatForm && aiChatInput && aiChatMessages) {
  aiChatForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const message = aiChatInput.value.trim();
    if (!message) return;

    const userMessage = document.createElement("div");
    userMessage.className = "ai-message";
    userMessage.textContent = message;
    aiChatMessages.appendChild(userMessage);

    aiChatInput.value = "";

    const loadingMessage = document.createElement("div");
    loadingMessage.className = "ai-message";
    loadingMessage.textContent = "Roam India AI is thinking...";
    aiChatMessages.appendChild(loadingMessage);

    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;

    
    // Free demo replies — no API credits required
    const text = message.toLowerCase();
    let reply = "";

    if (text.includes("goa")) {
      reply = "🌴 Goa is a wonderful choice! For a 3-day trip, explore Baga Beach, Calangute Beach, Fort Aguada and Old Goa. Keep around ₹5,000–₹10,000 per person for a budget trip, excluding travel to Goa.";
    } else if (text.includes("odisha") || text.includes("bhubaneswar")) {
      reply = "🌸 Explore Odisha! Visit Bhubaneswar, Puri, Konark Sun Temple and Chilika Lake. A 3-day trip is a lovely way to experience Odisha's culture and beaches.";
    } else if (text.includes("kashmir")) {
      reply = "🏔️ Kashmir is beautiful! Visit Srinagar, Dal Lake, Gulmarg and Pahalgam. Plan at least 4–5 days to enjoy the mountains and scenery.";
    } else if (text.includes("budget") || text.includes("10000") || text.includes("₹")) {
      reply = "💰 For a budget trip, choose nearby destinations, compare transport options and book accommodation early. Tell me your destination and number of days for a suggested budget.";
    } else if (text.includes("hello") || text.includes("hi")) {
      reply = "👋 Hello! Welcome to Roam India. I can help you explore destinations, plan itineraries and estimate travel budgets. Where would you like to go?";
    } else {
      reply = "✈️ I'd love to help plan your journey! Try asking me about Goa, Kashmir, Odisha or budget travel. Tell me your destination and trip duration.";
    }

    loadingMessage.textContent = reply;


    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
  });
}


/* ===== Roam India Travel Booking Tabs ===== */

const travelTabs = document.querySelectorAll(".travel-booking-tabs button");

const travelForms = {
  train: document.getElementById("trainSearchForm"),
  bus: document.getElementById("busSearchForm"),
  flight: document.getElementById("flightSearchForm")
};


travelTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedTravel = tab.dataset.travel;
    const inlineTravelForms = document.getElementById("inlineTravelForms");

    travelTabs.forEach((button) => {
      button.classList.toggle("active", button === tab);
    });

    Object.entries(travelForms).forEach(([type, form]) => {
      if (!form) return;

      if (type === selectedTravel) {
        inlineTravelForms.appendChild(form);
        form.hidden = false;
      } else {
        form.hidden = true;
      }
    });

    inlineTravelForms.hidden = !travelForms[selectedTravel];

    document.getElementById("travelSearchResults").textContent = "";
  });
});


/* ===== End Travel Booking Tabs ===== */
