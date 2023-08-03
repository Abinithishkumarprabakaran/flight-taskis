<template>
  <div>
    <v-row
      style="
        height: 250px;
        background-image: linear-gradient(to right, #470625, #a32456);
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <v-col sm="8">
        <v-card
          style="height: auto; background-color: #f1dae4; border-radius: 10px"
          v-for="(data, i) of BookingDetails"
          :key="i"
        >
          <v-row style="display: flex; align-items: center">
            <v-col
              sm="3"
              style="
                display: flex;
                justify-content: end;
                flex-direction: column;
                align-items: center;
              "
            >
              <div
                style="height: 30px; width: 30px; background-color: #651035"
              ></div>
              <div class="darken-content">{{ data.FlightName }}</div>
              <div class="content" style="margin-top: -5px">
                {{ data.Number }}
              </div>
            </v-col>
            <v-col sm="3">
              <div class="main-label">{{ data.FromTime }}</div>
              <div class="content">{{ data.FromLocation }}</div>
            </v-col>
            <v-col sm="3">
              <div style="font-size: 1rem">{{ data.EstimatedTime }}</div>
              <div style="display: flex">
                <div>{{ data.FromLoc }}</div>
                <div>
                  <v-icon x-small style="margin: 0px 5px">
                    fas fa-arrow-right
                  </v-icon>
                </div>
                <div>{{ data.ToLoc }}</div>
              </div>
            </v-col>
            <v-col sm="3">
              <div class="main-label">{{ data.ToTime }}</div>
              <div class="content">{{ data.ToLocation }}</div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="details-row" style="width: 100%">
      <v-col cols="12" sm="7">
        <v-row>
          <v-col cols="12" sm="12">
            <v-card>
              <div v-for="index in Adult" :key="index">
                <v-card-title>{{
                  firstName && title && lastName ? title + " " + firstName + " " + lastName : "Adult"
                }}</v-card-title>
                <v-card-text style="padding-bottom: 25px">
                  <v-row class="person" style="padding-bottom: 12px">
                    <v-col cols="12" sm="2">
                      <span>Title</span>
                      <v-select
                        label="Title"
                        :items="['Mr', 'Miss', 'Mrs']"
                        v-model="title"
                        hide-details
                        outlined
                        dense
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="5">
                      <span>First Name/Given Name</span>
                      <v-text-field
                        v-model="firstName"
                        label="First Name"
                        outlined
                        dense
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="5">
                      <span>Last Name/Surname</span>
                      <v-text-field
                        v-model="lastName"
                        label="Last Name"
                        outlined
                        dense
                        hide-details
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
              </div>

              <div v-if="Child">
                <div v-for="index in Child" :key="index">
                  <v-card-title>{{
                    firstName && title && lastName ? title + " " + firstName + " " + lastName : "Child"
                  }}</v-card-title>
                  <v-card-text style="padding-bottom: 25px">
                    <v-row class="person" style="padding-bottom: 12px">
                      <v-col cols="12" sm="2">
                        <span>Title</span>
                        <v-select
                          label="Title"
                          :items="['Mr', 'Miss', 'Mrs']"
                          v-model="title"
                          hide-details
                          outlined
                          dense
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="5">
                        <span>First Name/Given Name</span>
                        <v-text-field
                          v-model="firstName"
                          label="First Name"
                          outlined
                          dense
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="5">
                        <span>Last Name/Surname</span>
                        <v-text-field
                          v-model="lastName"
                          label="Last Name"
                          outlined
                          dense
                          hide-details
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </div>
              </div>

              <div v-if="Infant">
                <div v-for="index in Infant" :key="index">
                  <v-card-title>{{
                    firstName && title && lastName ? title + " " + firstName + " " + lastName : "Infant"
                  }}</v-card-title>
                  <v-card-text style="padding-bottom: 25px">
                    <v-row class="person" style="padding-bottom: 12px">
                      <v-col cols="12" sm="2">
                        <span>Title</span>
                        <v-select
                          label="Title"
                          :items="['Mr', 'Miss', 'Mrs']"
                          v-model="title"
                          hide-details
                          outlined
                          dense
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="5">
                        <span>First Name/Given Name</span>
                        <v-text-field
                          v-model="firstName"
                          label="First Name"
                          outlined
                          dense
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="5">
                        <span>Last Name/Surname</span>
                        <v-text-field
                          v-model="lastName"
                          label="Last Name"
                          outlined
                          dense
                          hide-details
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card style="height: auto">
              <v-card-title> Seat Selection (Optional) </v-card-title>
              <v-card-text class="seat-selection">
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                  "
                >
                  <v-btn
                    style="
                      border-radius: 20px;
                      background-color: #a32456;
                      color: #fff;
                    "
                    >Seat {{ /* Flight Number */ }}</v-btn
                  >
                  <p>Seats Selected: {{ this.seatNumber }}</p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="12">
            <v-card>
              <v-card-title
                >Your ticket will be sent to this email address</v-card-title
              >
              <v-card-text>
                <v-row class="person" style="padding-bottom: 12px">
                  <v-col cols="12" sm="6">
                    <span>Phone Number</span>
                    <v-text-field
                      v-model="phoneNumber"
                      label="Phone Number"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <span>Email</span>
                    <v-text-field
                      v-model="emailAddress"
                      label="Email Address"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="12">
            <v-card>
              <v-card-text style="display: flex; justify-content: center">
                <v-checkbox
                  v-model="cabFacilityEnabled"
                  color="#a32456"
                  style="margin: 0px 5px; padding: 0px"
                  hide-details
                ></v-checkbox>
                <p>
                  I authorize, its affiliates and associate partners to contact
                  me through mail, SMS or phone call to extend a special offer
                  on
                  <span style="font-weight: bold">
                    Airport Pickup/Drop Cab facility.
                  </span>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="12">
            <v-card>
              <v-card-text style="display: flex; justify-content: flex-start">
                <v-checkbox
                  v-model="termsAndConditions"
                  color="#a32456"
                  style="margin: 0px 5px; padding: 0px"
                  hide-details
                ></v-checkbox>
                <p>
                  I have read and agreee to the
                  <a
                    href="#"
                    style="
                      font-weight: bold;
                      text-decoration: none;
                      color: #a32456;
                    "
                  >
                    Terms and Conditions
                  </a>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="12">
            <v-btn
              :disabled="!cabFacilityEnabled || !termsAndConditions"
              style="border-radius: 5px; background-color: #a32456; color: #fff"
            >
              Proceed to Pay
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const DefualtFlightSearchForm = Object.freeze({
  SearchInputs: [
    {
      DepartureDate: null,
      ReturnDate: null,
      source: null,
      destination: null,
    },
  ],
  TripType: 1,
  AdultCount: 0,
  PreferedAirline: null,
  Class: null,
  sourceLocation: "Delhi",
  sourceInfo: "DEL, Delhi Airport India",
  destination: "Bengalore",
  destinationInfo: "BLR, Benagalore International Airport India",
});
export default {
  data() {
    return {
      FlightSearchForm: Object.assign({}, DefualtFlightSearchForm),
      title: "",
      firstName: "",
      lastName: "",
      seatNumber: null,
      phoneNumber: null,
      emailAddress: null,
      cabFacilityEnabled: false,
      termsAndConditions: false,
      BookingDetails: [
        {
          FlightName: "AIR INDIA",
          Number: "A1833",
          FromLoc: "DEL",
          FromTime: "12:00",
          FromDate: "Wed, 15 Mar",
          FromLocation: "New Delhi",
          ToLoc: "BLR",
          ToTime: "14:45",
          ToDate: "Wed, 15 Mar",
          ToLocation: "Bengalore",
          EstimatedTime: "02 h 45m",
          BookingCost: 7730,
          CheckInBaggage: "15kgs",
          CabinBaggage: "7kg",
          Class: "ECONOMY",
          Terminal: "Terminal - 1",
          showFlightDetails: false,
        },
      ],
      Adult: 2, /* Should be in true, Always */
      Child: 0,
      Infant: 0,
    };
  },
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
.details-row {
  justify-content: center;
}

.person {
  justify-content: space-around;
}

.seat-selection {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card__title {
  padding: 10px;
}
</style>