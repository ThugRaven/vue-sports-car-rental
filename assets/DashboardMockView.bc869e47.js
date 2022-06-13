import{_ as s,u as i,K as p,q as d,l as c,r as m,o as a,c as _,b as g,w as u,k as y,d as t,e as f}from"./index.bf3459fe.js";import{B as b}from"./ButtonPrimary.a8312c76.js";const w={components:{ButtonPrimary:b},data(){return{isLoading:!1}},created(){if(!i.user||i.user&&i.user.role!=="admin")return this.$router.push("/login")},methods:{async addCars(){this.isLoading=!0;let o=[{id_car:"1",license_plate:"S0RENT01",mileage:"32000",brand:"Seat",model:"Leon Cupra R",eng_power:"310",eng_torque:"380",eng_info:"TSI Turbo",eng_displacement:"2",drive:"FWD",time_100:"5.8",top_speed:"250",fuel_type:"Petrol",transmission_type:"Manual",doors:"5",seats:"5",weight:"1378",fuel_capacity:"50",rentable:"1",gallery:0,price_deposit:"550",price_no_deposit:"650",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"2",license_plate:"S0RENT02",mileage:"65000",brand:"Ford",model:"Focus RS",eng_power:"350",eng_torque:"470",eng_info:"EcoBoost Turbo",eng_displacement:"2.3",drive:"AWD",time_100:"4.7",top_speed:"265",fuel_type:"Petrol",transmission_type:"Manual",doors:"5",seats:"5",weight:"1524",fuel_capacity:"51",rentable:"1",gallery:0,price_deposit:"550",price_no_deposit:"650",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"4",license_plate:"S0RENT04",mileage:"23000",brand:"Renault",model:"Megane R.S. Trophy",eng_power:"300",eng_torque:"400",eng_info:"Turbo",eng_displacement:"1.8",drive:"FWD",time_100:"5.7",top_speed:"260",fuel_type:"Petrol",transmission_type:"Manual",doors:"5",seats:"5",weight:"1419",fuel_capacity:"50",rentable:"1",gallery:0,price_deposit:"550",price_no_deposit:"650",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"5",license_plate:"S0RENT05",mileage:"45200",brand:"Subaru",model:"Impreza WRX STI",eng_power:"280",eng_torque:"392",eng_info:"Turbo",eng_displacement:"2.5",drive:"AWD",time_100:"5.4",top_speed:"254",fuel_type:"Petrol",transmission_type:"Manual",doors:"4",seats:"5",weight:"1495",fuel_capacity:"60",rentable:"1",gallery:0,price_deposit:"550",price_no_deposit:"650",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"7",license_plate:"S0RENT07",mileage:"7800",brand:"Toyota",model:"GR Yaris",eng_power:"261",eng_torque:"360",eng_info:"R3 Turbo",eng_displacement:"1.6",drive:"AWD",time_100:"5.5",top_speed:"230",fuel_type:"Petrol",transmission_type:"Manual",doors:"2",seats:"4",weight:"1280",fuel_capacity:"50",rentable:"1",gallery:0,price_deposit:"550",price_no_deposit:"650",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"14",license_plate:"S0RENT14",mileage:"16500",brand:"Mercedes-Benz",model:"AMG A35",eng_power:"306",eng_torque:"400",eng_info:"Turbo",eng_displacement:"2",drive:"AWD",time_100:"4.7",top_speed:"250",fuel_type:"Petrol",transmission_type:"Automatic",doors:"5",seats:"5",weight:"1555",fuel_capacity:"51",rentable:"1",gallery:0,price_deposit:"550",price_no_deposit:"650",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"17",license_plate:"S0RENT17",mileage:"12525",brand:"Volkswagen",model:"Golf R",eng_power:"310",eng_torque:"380",eng_info:"TSI Turbo",eng_displacement:"2",drive:"AWD",time_100:"5.1",top_speed:"250",fuel_type:"Petrol",transmission_type:"Automatic",doors:"5",seats:"5",weight:"1408",fuel_capacity:"50",rentable:"1",gallery:0,price_deposit:"550",price_no_deposit:"650",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"30",license_plate:"S0RENT30",mileage:"30250",brand:"Nissan",model:"370z",eng_power:"328",eng_torque:"363",eng_info:"V6",eng_displacement:"3.7",drive:"RWD",time_100:"5.3",top_speed:"250",fuel_type:"Petrol",transmission_type:"Manual",doors:"3",seats:"2",weight:"1496",fuel_capacity:"72",rentable:"1",gallery:0,price_deposit:"550",price_no_deposit:"650",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"3",license_plate:"S0RENT03",mileage:"53520",brand:"Ford",model:"Mustang 5.0 V8 GT",eng_power:"416",eng_torque:"530",eng_info:"V8",eng_displacement:"5",drive:"RWD",time_100:"4.8",top_speed:"250",fuel_type:"Petrol",transmission_type:"Manual",doors:"2",seats:"4",weight:"1645",fuel_capacity:"61",rentable:"1",gallery:0,price_deposit:"750",price_no_deposit:"850",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"6",license_plate:"S0RENT06",mileage:"36780",brand:"Toyota",model:"Supra GR",eng_power:"340",eng_torque:"500",eng_info:"Twin-Scroll Turbo",eng_displacement:"3",drive:"RWD",time_100:"4.3",top_speed:"250",fuel_type:"Petrol",transmission_type:"Automatic",doors:"2",seats:"2",weight:"1530",fuel_capacity:"52",rentable:"1",gallery:0,price_deposit:"750",price_no_deposit:"850",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"12",license_plate:"S0RENT12",mileage:"45500",brand:"Mercedes-Benz",model:"AMG A45 S",eng_power:"421",eng_torque:"500",eng_info:"Twin-Turbo",eng_displacement:"2",drive:"AWD",time_100:"3.9",top_speed:"270",fuel_type:"Petrol",transmission_type:"Automatic",doors:"5",seats:"5",weight:"1550",fuel_capacity:"51",rentable:"1",gallery:0,price_deposit:"750",price_no_deposit:"850",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"16",license_plate:"S0RENT16",mileage:"12900",brand:"Chevrolet",model:"Camaro SS",eng_power:"455",eng_torque:"614",eng_info:"V8",eng_displacement:"6.2",drive:"RWD",time_100:"4.6",top_speed:"290",fuel_type:"Petrol",transmission_type:"Automatic",doors:"2",seats:"4",weight:"1697",fuel_capacity:"72",rentable:"1",gallery:0,price_deposit:"750",price_no_deposit:"850",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"27",license_plate:"S0RENT27",mileage:"14355",brand:"Lotus",model:"Evora",eng_power:"416",eng_torque:"410",eng_info:"V6 Supercharged",eng_displacement:"3.5",drive:"RWD",time_100:"4.2",top_speed:"300",fuel_type:"Petrol",transmission_type:"Manual",doors:"2",seats:"4",weight:"1325",fuel_capacity:"60",rentable:"1",gallery:0,price_deposit:"750",price_no_deposit:"850",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"34",license_plate:"S0RENT34",mileage:"3500",brand:"Tesla",model:"Model 3",eng_power:"450",eng_torque:"639",eng_info:"Performance",eng_displacement:null,drive:"AWD",time_100:"3.1",top_speed:"261",fuel_type:"Electric",transmission_type:"Automatic",doors:"5",seats:"5",weight:"1847",fuel_capacity:null,rentable:"1",gallery:0,price_deposit:"750",price_no_deposit:"850",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"8",license_plate:"S0RENT08",mileage:"25000",brand:"BMW",model:"M2 Competition",eng_power:"410",eng_torque:"550",eng_info:"Twin-Turbo",eng_displacement:"3",drive:"RWD",time_100:"4.2",top_speed:"250",fuel_type:"Petrol",transmission_type:"Automatic",doors:"2",seats:"4",weight:"1575",fuel_capacity:"52",rentable:"1",gallery:0,price_deposit:"950",price_no_deposit:"1000",km_limit:"350",deposit:"5000",additional_km:"3"},{id_car:"9",license_plate:"S0RENT09",mileage:"9600",brand:"Audi",model:"RS6",eng_power:"600",eng_torque:"800",eng_info:"V8",eng_displacement:"4",drive:"AWD",time_100:"3.6",top_speed:"280",fuel_type:"Petrol",transmission_type:"Automatic",doors:"5",seats:"4",weight:"2075",fuel_capacity:"73",rentable:"1",gallery:0,price_deposit:"1700",price_no_deposit:"1900",km_limit:"250",deposit:"5000",additional_km:"4"},{id_car:"10",license_plate:"S0RENT10",mileage:"13450",brand:"Porsche",model:"Taycan Turbo S",eng_power:"761",eng_torque:"1050",eng_info:"Dual-Motor",eng_displacement:null,drive:"AWD",time_100:"2.8",top_speed:"260",fuel_type:"Electric",transmission_type:"Automatic",doors:"4",seats:"4",weight:"2370",fuel_capacity:null,rentable:"1",gallery:0,price_deposit:"2250",price_no_deposit:"2500",km_limit:"150",deposit:"10000",additional_km:"5"},{id_car:"33",license_plate:"S0RENT33",mileage:"8500",brand:"Tesla",model:"Model S",eng_power:"778",eng_torque:"1140",eng_info:"Performance",eng_displacement:null,drive:"AWD",time_100:"2.3",top_speed:"261",fuel_type:"Electric",transmission_type:"Automatic",doors:"5",seats:"5",weight:"2162",fuel_capacity:null,rentable:"1",gallery:0,price_deposit:"2250",price_no_deposit:"2500",km_limit:"150",deposit:"10000",additional_km:"5"},{id_car:"15",license_plate:"S0RENT15",mileage:"19252",brand:"Nissan",model:"GT-R",eng_power:"570",eng_torque:"637",eng_info:"V6",eng_displacement:"3.8",drive:"AWD",time_100:"2.7",top_speed:"315",fuel_type:"Petrol",transmission_type:"Automatic",doors:"2",seats:"4",weight:"1752",fuel_capacity:"74",rentable:"1",gallery:0,price_deposit:"2000",price_no_deposit:"2200",km_limit:"150",deposit:"10000",additional_km:"5"},{id_car:"19",license_plate:"S0RENT19",mileage:"13000",brand:"Porsche",model:"911 Turbo S",eng_power:"650",eng_torque:"800",eng_info:"Flat-6 Twin-Turbo",eng_displacement:"3.8",drive:"AWD",time_100:"2.7",top_speed:"330",fuel_type:"Petrol",transmission_type:"Automatic",doors:"2",seats:"4",weight:"1715",fuel_capacity:"67",rentable:"1",gallery:0,price_deposit:"2000",price_no_deposit:"2200",km_limit:"150",deposit:"10000",additional_km:"5"},{id_car:"20",license_plate:"S0RENT20",mileage:"7900",brand:"Alfa Romeo",model:"Giulia Quadrifoglio",eng_power:"510",eng_torque:"600",eng_info:"V6 Twin-Turbo",eng_displacement:"2.9",drive:"RWD",time_100:"3.9",top_speed:"307",fuel_type:"Petrol",transmission_type:"Automatic",doors:"4",seats:"4",weight:"1580",fuel_capacity:"58",rentable:"1",gallery:0,price_deposit:"1100",price_no_deposit:"1300",km_limit:"300",deposit:"5000",additional_km:"3"},{id_car:"21",license_plate:"S0RENT21",mileage:"23760",brand:"Abarth",model:"124 Spider",eng_power:"170",eng_torque:"250",eng_info:"Multiair Turbo",eng_displacement:"1.4",drive:"RWD",time_100:"6.8",top_speed:"231",fuel_type:"Petrol",transmission_type:"Manual",doors:"2",seats:"2",weight:"1060",fuel_capacity:"45",rentable:"1",gallery:0,price_deposit:"135",price_no_deposit:"150",km_limit:"350",deposit:"2000",additional_km:"1"},{id_car:"13",license_plate:"S0RENT13",mileage:"27865",brand:"Porsche",model:"718 Cayman GTS",eng_power:"400",eng_torque:"420",eng_info:"Turbo",eng_displacement:"4",drive:"RWD",time_100:"4.5",top_speed:"292",fuel_type:"Petrol",transmission_type:"Automatic",doors:"2",seats:"2",weight:"1405",fuel_capacity:"64",rentable:"1",gallery:0,price_deposit:"1200",price_no_deposit:"1300",km_limit:"250",deposit:"7500",additional_km:"3"},{id_car:"22",license_plate:"S0RENT22",mileage:"35000",brand:"BMW",model:"i8 Protonic Frozen Black Edition",eng_power:"362",eng_torque:"570",eng_info:"Turbo",eng_displacement:"1.5",drive:"AWD",time_100:"4.4",top_speed:"250",fuel_type:"Petrol/Hyb",transmission_type:"Automatic",doors:"2",seats:"4",weight:"1485",fuel_capacity:"42",rentable:"1",gallery:0,price_deposit:"1200",price_no_deposit:"1300",km_limit:"250",deposit:"7500",additional_km:"3"},{id_car:"24",license_plate:"S0RENT24",mileage:"19525",brand:"Honda",model:"NSX",eng_power:"581",eng_torque:"645",eng_info:"V6 Hybrid Turbo",eng_displacement:"3.5",drive:"AWD",time_100:"3.2",top_speed:"307",fuel_type:"Petrol/Hyb",transmission_type:"Automatic",doors:"2",seats:"2",weight:"1776",fuel_capacity:"59",rentable:"1",gallery:0,price_deposit:"1200",price_no_deposit:"1300",km_limit:"250",deposit:"7500",additional_km:"3"},{id_car:"29",license_plate:"S0RENT29",mileage:"7500",brand:"Polestar",model:"2",eng_power:"408",eng_torque:"660",eng_info:"78kWh Dual Motor",eng_displacement:null,drive:"AWD",time_100:"4.5",top_speed:"330",fuel_type:"Electric",transmission_type:"Automatic",doors:"5",seats:"5",weight:"2123",fuel_capacity:null,rentable:"1",gallery:0,price_deposit:"1200",price_no_deposit:"1300",km_limit:"250",deposit:"7500",additional_km:"3"},{id_car:"11",license_plate:"S0RENT11",mileage:"37650",brand:"Toyota",model:"GT86",eng_power:"200",eng_torque:"205",eng_info:null,eng_displacement:"2",drive:"RWD",time_100:"7.6",top_speed:"225",fuel_type:"Petrol",transmission_type:"Manual",doors:"2",seats:"4",weight:"1270",fuel_capacity:"50",rentable:"1",gallery:0,price_deposit:"150",price_no_deposit:"200",km_limit:"350",deposit:"5000",additional_km:"1"},{id_car:"23",license_plate:"S0RENT23",mileage:"17500",brand:"Mazda",model:"MX-5",eng_power:"184",eng_torque:"205",eng_info:null,eng_displacement:"2",drive:"RWD",time_100:"6.5",top_speed:"218",fuel_type:"Petrol",transmission_type:"Manual",doors:"2",seats:"2",weight:"1127",fuel_capacity:"45",rentable:"1",gallery:0,price_deposit:"150",price_no_deposit:"200",km_limit:"350",deposit:"5000",additional_km:"1"},{id_car:"25",license_plate:"S0RENT25",mileage:"13255",brand:"Aston Martin",model:"DB11",eng_power:"503",eng_torque:"675",eng_info:"V8 Turbo",eng_displacement:"4",drive:"RWD",time_100:"4",top_speed:"300",fuel_type:"Petrol",transmission_type:"Automatic",doors:"2",seats:"4",weight:"1760",fuel_capacity:"80",rentable:"1",gallery:0,price_deposit:"1300",price_no_deposit:"1500",km_limit:"300",deposit:"5000",additional_km:"3"},{id_car:"26",license_plate:"S0RENT26",mileage:"23000",brand:"Audi",model:"RS4 Avant",eng_power:"450",eng_torque:"600",eng_info:"TFSI Turbo",eng_displacement:"2.9",drive:"AWD",time_100:"4.1",top_speed:"280",fuel_type:"Petrol",transmission_type:"Automatic",doors:"5",seats:"5",weight:"1745",fuel_capacity:"58",rentable:"1",gallery:0,price_deposit:"1100",price_no_deposit:"1300",km_limit:"300",deposit:"5000",additional_km:"3"},{id_car:"18",license_plate:"S0RENT18",mileage:"16250",brand:"Volkswagen",model:"Golf GTI",eng_power:"245",eng_torque:"370",eng_info:"TSI Turbo",eng_displacement:"2",drive:"FWD",time_100:"6.2",top_speed:"250",fuel_type:"Petrol",transmission_type:"Automatic",doors:"5",seats:"5",weight:"1340",fuel_capacity:"50",rentable:"1",gallery:0,price_deposit:"350",price_no_deposit:"400",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"31",license_plate:"S0RENT31",mileage:"13500",brand:"Ford",model:"Focus ST",eng_power:"280",eng_torque:"420",eng_info:"EcoBoost Turbo",eng_displacement:"2.3",drive:"FWD",time_100:"5.7",top_speed:"250",fuel_type:"Petrol",transmission_type:"Manual",doors:"5",seats:"5",weight:"1508",fuel_capacity:"52",rentable:"1",gallery:0,price_deposit:"350",price_no_deposit:"400",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"32",license_plate:"S0RENT32",mileage:"13000",brand:"Jaguar",model:"F-Type",eng_power:"450",eng_torque:"580",eng_info:"V8 Supercharged",eng_displacement:"5",drive:"RWD",time_100:"4.6",top_speed:"284",fuel_type:"Petrol",transmission_type:"Automatic",doors:"2",seats:"2",weight:"1660",fuel_capacity:"70",rentable:"1",gallery:0,price_deposit:"850",price_no_deposit:"950",km_limit:"350",deposit:"5000",additional_km:"2"},{id_car:"28",license_plate:"S0RENT28",mileage:"19840",brand:"Mercedes-Benz",model:"S560 AMG",eng_power:"469",eng_torque:"700",eng_info:"Turbo",eng_displacement:"4",drive:"RWD",time_100:"4.6",top_speed:"250",fuel_type:"Petrol",transmission_type:"Automatic",doors:"2",seats:"4",weight:"2075",fuel_capacity:"80",rentable:"0",gallery:0,price_deposit:"1800",price_no_deposit:"2000",km_limit:"250",deposit:"5000",additional_km:"4"},{id_car:"35",license_plate:"S0RENT35",mileage:"13300",brand:"Audi",model:"R8",eng_power:"602",eng_torque:"560",eng_info:"V10",eng_displacement:"5.2",drive:"AWD",time_100:"3.2",top_speed:"330",fuel_type:"Petrol",transmission_type:"Automatic",doors:"2",seats:"2",weight:"1630",fuel_capacity:"73",rentable:"1",gallery:1,price_deposit:"1800",price_no_deposit:"2000",km_limit:"250",deposit:"5000",additional_km:"4"}];for(const e of o)await p(d(c,"cars",e.id_car),{id_car:parseInt(e.id_car),license_plate:e.license_plate,mileage:parseInt(e.mileage),brand:e.brand,model:e.model,eng_power:parseInt(e.eng_power),eng_torque:parseInt(e.eng_torque),eng_info:e.eng_info,eng_displacement:e.eng_displacement?parseFloat(e.eng_displacement):null,drive:e.drive,time_100:parseFloat(e.time_100),top_speed:parseInt(e.top_speed),fuel_type:e.fuel_type,transmission_type:e.transmission_type,doors:parseInt(e.doors),seats:parseInt(e.seats),weight:parseInt(e.weight),fuel_capacity:e.fuel_capacity?parseInt(e.fuel_capacity):null,rentable:Boolean(parseInt(e.rentable)),gallery:e.gallery,price_deposit:parseInt(e.price_deposit),price_no_deposit:parseInt(e.price_no_deposit),km_limit:parseInt(e.km_limit),deposit:parseInt(e.deposit),additional_km:parseInt(e.additional_km)}),console.log("Added car: ",e);this.isLoading=!1}}},k={class:"flex flex-col items-center justify-center w-full h-full"},T=t("h2",{class:"text-2xl font-bold text-center"},"Dashboard - Mock Data",-1),h=f("Zresetuj samochody do domy\u015Blnych danych"),R={key:0,class:"col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col justify-center items-center p-8 bg-zinc-700"},S=t("svg",{class:"animate-spin h-24 w-24 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),A=[S];function v(o,e,E,N,n,r){const l=m("ButtonPrimary");return a(),_("div",k,[T,g(l,{class:"my-4",onClick:r.addCars},{default:u(()=>[h]),_:1},8,["onClick"]),n.isLoading?(a(),_("div",R,A)):y("",!0)])}var W=s(w,[["render",v]]);export{W as default};
