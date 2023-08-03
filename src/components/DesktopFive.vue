<template>
  <div
    style="
      padding: 15px;
      height: 100vh;
      overflow-y: scroll;
      background: #f3ecf1;
    "
  >
    <v-row>
      <v-col cols="12" sm="8">
        <v-card v-for="(data, i) in personDetails" :key="i" style="padding-bottom: 20px">
          <v-card-title style="padding: 5px 20px">Flight Detail</v-card-title>
          <v-card-text style="padding: 10px 20px">
            <v-row>
              <v-col cols="12" sm="8" class="map-background">
                <v-row>
                  <v-col cols="6" sm="3">
                    <span class="map-title">FROM</span>
                    <span class="from-to">
                      {{ data.fromShortHand }}
                    </span>
                    <span>{{ data.from }}</span>
                    <span>{{ data.journeyStarts }}</span>
                    <span>{{ data.boardingTime }}</span>
                  </v-col>
                  <v-col
                    sm="6"
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    "
                    class="vector-background"
                  >
                    <img
                      :src="require('../assets/images/aeroplane-vector.png')"
                      width="10%"
                    />
                  </v-col>
                  <v-col
                    cols="6"
                    sm="3"
                    style="
                      display: flex;
                      justify-content: flex-end;
                      flex-direction: column;
                    "
                  >
                    <span class="map-title">TO</span>
                    <span class="from-to">{{ data.toShortHand }}</span>
                    <span>{{ data.to }}</span>
                    <span>{{ data.journeyEnds }}</span>
                    <span>{{ data.reachingTime }}</span>
                  </v-col>
                </v-row>
                <v-row style="padding-right: 10px">
                  <v-col cols="6" md="4" lg="4">
                    <span class="heading">Passanger Name</span>
                    <span class="content">{{ data.passengerName }}</span>
                  </v-col>
                  <v-col cols="6" md="4" lg="2">
                    <span class="heading">Flight</span>
                    <span class="content">{{ data.flightNumber }}</span>
                  </v-col>
                  <v-col cols="6" md="4" lg="2">
                    <span class="heading">Seat</span>
                    <span class="content">{{ data.seatNumber }}</span>
                  </v-col>
                  <v-col cols="6" md="4" lg="2">
                    <span class="heading">Gate</span>
                    <span class="content">{{ data.gateNumber }}</span>
                  </v-col>
                  <v-col cols="6" md="4" lg="2">
                    <span class="heading">Terminal</span>
                    <span class="content">{{ data.terminalNumber }}</span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" sm="4" style="border-left: 3px dashed silver">
                <v-row>
                  <v-col cols="6" class="from-content">
                    <p class="headings">FROM</p>
                    <p class="for-shorthand">{{ data.fromShortHand }}</p>
                    <p class="span-boarding-fromto">{{ data.from }}</p>
                    <p class="span-boarding">{{ data.boardingDate }}</p>
                    <p class="span-boarding">{{ data.boardingTime }}</p>
                  </v-col>
                  <v-col cols="6">
                    <p class="headings">TO</p>
                    <p class="for-shorthand">{{ data.toShortHand }}</p>
                    <p class="span-boarding-fromto">{{ data.to }}</p>
                    <p class="span-boarding">{{ data.reachingDate }}</p>
                    <p class="span-boarding">{{ data.reachingTime }}</p>
                  </v-col>
                </v-row>
                <v-row style="padding: 5px">
                  <v-col cols="8">
                    <span class="headings">Passenger Name</span>
                    <span class="passen">{{ data.passengerName }}</span>
                  </v-col>
                  <v-col cols="4">
                    <span class="headings">Flight</span>
                    <span class="passen">{{ data.flightNumber }}</span>
                  </v-col>
                  <v-col cols="4">
                    <span class="headings">Seat</span>
                    <span class="passen">{{ data.seatNumber }}</span>
                  </v-col>
                  <v-col cols="4">
                    <span class="headings">Gate</span>
                    <span class="passen">{{ data.gateNumber }}</span>
                  </v-col>
                  <v-col cols="4">
                    <span class="headings">Terminal</span>
                    <span class="passen">{{ data.terminalNumber }}</span>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-text>
            <h4>Important Information</h4>
            <h5>Check travel guidelines and baggage information below:</h5>
            <ul>
              <li v-for="(data, i) of ImportantInformation" :key="i">
                {{ data.info }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
        <v-card style="padding: 10px"
          ><div style="display: flex; align-items: center">
            <img :src="require('../assets/images/assured.png')" width="4%" />
            <h4 style="margin-left: 5px">Travel Insurance</h4>
          </div>
          <h5 style="padding: 0px 10px">₹ 249/Traveller (18% GST included)</h5>
          <v-row
            style="margin-top: 10px; display: flex; justify-content: center"
          >
            <v-col
              cols="12"
              sm="3"
              v-for="(data, i) of InsuranseDetails"
              :key="i"
              style="padding: 0px 15px"
            >
              <v-card class="insurance-card">
                <p style="font-size: 0.7rem">{{ data.amount }}</p>
                <p style="font-size: 0.7rem">{{ data.label }}</p>
              </v-card>
            </v-col>
          </v-row>
          <v-radio-group v-model="isSecure" mandatory>
            <v-radio label="Yes, Secure my trip" :value="true"></v-radio>
            <v-radio
              label="I do not wish to secure my trip"
              :value="false"
            ></v-radio>
          </v-radio-group>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4" class="fixed-card">
        <v-card
          style="padding: 2px; border-radius: 10px; border: 1px solid silver"
        >
          <h3 style="font-size: 1.25rem; padding: 10px">Price Summary</h3>
          <v-divider></v-divider>
          <div style="margin: 20px 0px">
            <v-row
              v-for="(data, i) of PriceSummary"
              :key="i"
            >
              <v-col cols="8" style="padding: 0px 20px">{{ data.label }}</v-col>
              <v-col
                cols="4"
                style="
                  display: flex;
                  justify-content: flex-end;
                  padding: 0px 20px;
                "
                >{{ data.amount ? toIndCurr(data.amount) : "" }}</v-col
              >
            </v-row>
          </div>
          <v-divider></v-divider>
          <v-row style="padding: 10px; color: #6a1438; font-weight: 700">
            <v-col cols="8">Grand Total</v-col>
            <v-col cols="4" style="display: flex; justify-content: flex-end">{{
              toIndCurr(14380)
            }}</v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    personDetails: [
      {
        passengerName: "John Doe",
        from: "Delhi",
        fromShortHand: "DEL",
        to: "Bangalore",
        toShortHand: "BLR",
        boardingDate: "Wed, 15 Mar",
        boardingTime: "12:00",
        reachingDate: "Wed, 15 Mar",
        reachingTime: "14:45",
        flightNumber: "A 0137",
        seatNumber: "27F",
        gateNumber: 18,
        terminalNumber: "2A",
        journeyStarts: "Mar 15, 2023",
        journeyEnds: "Mar 15, 2023",
      },
      {
        passengerName: "John Doe",
        from: "Delhi",
        fromShortHand: "DEL",
        to: "Bangalore",
        toShortHand: "BLR",
        boardingDate: "Wed, 15 Mar",
        boardingTime: "12:00",
        reachingDate: "Wed, 15 Mar",
        reachingTime: "14:45",
        flightNumber: "A 0137",
        seatNumber: "27F",
        gateNumber: 18,
        terminalNumber: "2A",
        journeyStarts: "Mar 15, 2023",
        journeyEnds: "Mar 15, 2023",
      },
    ],
    PriceSummary: [
      {
        label: "Adult * 1",
        amount: 7730,
      },
      {
        label: "Child * 1",
        amount: 5730,
      },
      {
        label: "Total Taxes",
        amount: 920,
      },
    ],
    ImportantInformation: [
      {
        info: "Wearing masks/face covers is no longer mandatory. However, all travellers are advised to wear them, in view of the threat posed by COVID-19.",
      },
      {
        info: "For the complete list of travel guidelines issued by Indian States and UTs,",
      },
      {
        info: "Carry no more than 1 check-in baggage and 1 hand baggage per passenger. If violated, airline may levy extra charges",
      },
    ],
    InsuranseDetails: [
      {
        amount: "Upto ₹ 3,000",
        label: "Missed flight connection",
      },
      {
        amount: "Upto ₹ 3,000",
        label: "Trip Cancellation",
      },
      {
        amount: "Upto ₹ 2,000",
        label: "Delay of Checked-in Baggage",
      },
      {
        amount: "Upto ₹ 50,000",
        label: "Personal Accident",
      },
      {
        amount: "Upto ₹ 1,500",
        label: "Trip Delay (+2 hours)",
      },
      {
        amount: "Upto ₹ 3,000",
        label: "Flight Diversion",
      },
      {
        amount: "Upto ₹ 2,000",
        label: "Baggage Damage",
      },
    ],
    isSecure: true,
  }),
  methods: {
    toIndCurr(value) {
      return value.toLocaleString("en-IN", {
        currency: "INR",
        minimumFractionDigits: 2,
        style: "currency",
      });
    },
  },
};
</script>
<style scoped>
.v-card__title {
  background-color: #6a1438;
  color: #ffffff;
}
.v-card {
  border-radius: 20px !important;
  margin-bottom: 10px;
}
h4 {
  font-size: 1.2rem;
  color: #6a1438;
}
h5 {
  font-size: 1rem;
}
ul {
  padding: 0px 25px;
}
ul li {
  font-size: 0.7rem;
  font-weight: 600;
  list-style-type: disc;
}
.map-title {
  font-family: Inter;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.11em;
}
.from-to {
  font-family: Inter;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  text-align: left;
  margin: 5px 0px;
  color: #811851;
}
span {
  display: flex;
}
.heading {
  font-family: Inter;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-align: left;
  color: #818181;
}

.content {
  font-family: Inter;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #585858;
  text-transform: uppercase;
}
.headings {
  font-family: Inter;
  font-size: 0.7rem;
  font-weight: 800;
  /* line-height: 15px; */
  letter-spacing: 0.11em;
  color: #8a8989;
}
.for-shorthand {
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.11rem;
  color: #801850;
}
.span-boarding {
  font-family: Inter;
  font-size: 0.8rem;
  font-weight: 450;
  letter-spacing: 0.1rem;
  color: #444444;
}
.span-boarding-fromto {
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  color: #444444;
}
.from-content {
  text-align: end;
}
.insurance-card {
  padding: 5px;
  min-height: 80px;
  background-color: #6a1438;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
::v-deep .v-radio .v-label {
  font-size: 0.8rem;
  height: 10px;
}
::v-deep .v-input--selection-controls__input {
  width: 14px;
  height: 10px;
}
@media screen and (min-width: 1024px) {
  .fixed-card {
    position: fixed;
    right: 0px;
  }
  .map-background {
    background-image: url("../assets/images/map-background.png");
    background-position: center;
    background-size: contain;
  }
  .vector-background {
    background-image: url("../assets/images/line-vector.png");
    background-position: center;
    background-size: contain;
  }
}
</style>
