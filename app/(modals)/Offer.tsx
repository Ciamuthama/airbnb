import { View, Text, Dimensions } from "react-native";
import React from "react";
import { ListingList } from "@/constants/listingsitems";
import TV from "@/assets/images/TV.svg";
import Kitchen from "@/assets/images/Kitchen.svg";
import Elevator from "@/assets/images/Elevator.svg";
import Heater from "@/assets/images/Heater.svg";
import Washer from "@/assets/images/Washer.svg";
import Essentials from "@/assets/images/Essential.svg";
import Wifi from "@/assets/images/Wifi.svg";
import Shampoo from "@/assets/images/Shampoo.svg";
import Hanger from "@/assets/images/Hanger.svg";
import Hairdryer from "@/assets/images/Hairdryer.svg";
import Iron from "@/assets/images/Iron.svg";
import Parking from "@/assets/images/Parking.svg";
import FireExt from "@/assets/images/FireExt.svg";
import Air from "@/assets/images/Air.svg";
import SmokeDet from "@/assets/images/SmokeDet.svg";
import FirstAid from "@/assets/images/FirstAid.svg";
import FirePlace from "@/assets/images/FirePlace.svg";
import Workspace from "@/assets/images/Workspace.svg";
import Dryer from "@/assets/images/Dryer.svg";
import Checkin from "@/assets/images/Checkin.svg";
import Smoking from "@/assets/images/Smoking.svg";
import Carbon from "@/assets/images/Carbon.svg";
import Fam from "@/assets/images/Fam.svg";
import Pet from "@/assets/images/Pet.svg";
import Gym from "@/assets/images/Gym.svg";
import Hotub from "@/assets/images/Hotub.svg";
const Offer = ({ listing }: any) => {
  const amenities: ListingList = listing;
  const { width } = Dimensions.get("window");
  return (
    <View style={{ gap: 10 }}>
      {/* <Text style={{fontFamily:"Nunito_600SemiBold",fontSize:15}}>{amenities.amenities.length}</Text>  */}
      {amenities.amenities.map((a, b) => (
        <View key={b}>
          {a === "TV" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <TV width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Kitchen" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Kitchen width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Elevator in building" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Elevator width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Heating" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Heater width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Family/kid friendly" ? (
            <View style={{ flexDirection: "row", alignItems: "flex-start",gap:10 }}>
              <Fam width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
              {a}
            </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Washer" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Washer width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Dryer" ? (
            <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
              <Dryer width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Essentials" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Essentials width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Smoke Detector" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <SmokeDet width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Carbon monoxide detector" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Carbon width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Smoking allowed" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Smoking width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Internet" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Wifi width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Shampoo" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Shampoo width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Hangers" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Hanger width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Hair dryer" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Hairdryer width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Iron" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Iron width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Cable TV" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <TV width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Free parking on premises" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Parking width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Pets Allowed" ? (
            <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
              <Pet width={20} height={20} fill={"#000000"} />

              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
              {a}
            </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Fire extinguisher" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <FireExt width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Laptop friendly workspace" ? (
            <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
              <Workspace width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Air Conditioning" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Air width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Gym" ? (
            <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
              <Gym width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
              {a}
            </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Hot Tub" ? (
            <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
              <Hotub width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
              {a}
            </Text>
            </View>
          ) : (
            ""
          )}
          {a === "First aid kit" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <FirstAid width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Indoor Fireplace" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <FirePlace width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "24-hour check-in" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Checkin width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
          {a === "Self Check-In" ? (
            <View
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
            >
              <Checkin width={20} height={20} fill={"#000000"} />
              <Text style={{ fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>
                {a}
              </Text>
            </View>
          ) : (
            ""
          )}
        </View>
      ))}
    </View>
  );
};

export default Offer;
