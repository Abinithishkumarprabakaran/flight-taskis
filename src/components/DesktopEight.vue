<template>
  <v-row>
    <v-col cols="12">
      <v-card style="border-radius: 20px; min-height: 140px">
        <v-row>
          <v-col cols="12" sm="4">
            <div class="contents">
              <v-text-field
                label="Name / Phone No / Trip ID"
                hide-details
                outlined
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" sm="4">
            <div class="contents">
              <v-select
                :items="items"
                label="State"
                hide-details
                outlined
              ></v-select>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4">
      <v-card
        style="
          border-radius: 20px;
          height: calc(100vh - 200px);
          overflow-y: scroll;
        "
      >
        <div
          class="user-details"
          v-for="(item, index) in personDetails"
          :key="index"
          @click="getUserDetails(item, index)"
          :class="{ background: selectedIndex === index }"
        >
          <a>
            <label>{{ item.name }}</label>
            <div>
              <label>{{ item.phoneNumber }}</label>
              <label>{{ item.bookingCreatedAt }}</label>
              <label>{{ item.id }}</label>
            </div>
            <v-divider class="divider"></v-divider>
          </a>
        </div>
      </v-card>
    </v-col>

    <v-col col="12" sm="8">
      <v-card
        style="
          border-radius: 20px;
          min-height: calc(100vh - 200px);
          padding: 25px 0px;
        "
      >
        <v-row class="flight-details">
          <v-col
            cols="1.7"
            v-for="(item, index) of flightDetailsOne"
            :key="index"
          >
            <div style="padding: 12px;">
              <div class="items-label">{{ item.label }}</div>
              <div class="items-value">{{ item.value }}</div>
            </div>
          </v-col>
          <v-col cols="12" style="padding: 20px;">
            <v-row>
              <v-col
                :cols="$vuetify.breakpoint.mdAndDown ? 6 : 3"
                v-for="(item, index) of flightDetailsTwo"
                :key="index"
              >
                <div>
                  <div class="items-label">{{ item.label }}</div>
                  <div class="items-value">{{ item.value }}</div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="employee-details">
          <v-col
            :cols="$vuetify.breakpoint.mdAndDown ? 12 : 6"
            v-for="(item, index) of employeeDetails"
            :key="index"
          >
            <v-row>
              <v-col cols="6">
                <div class="items-emp-label">{{ item.label }}</div>
              </v-col>
              <v-col cols="6">
                <div class="items-emp-value">{{ item.value }}</div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items: ["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Telangana", "Kerala"],
    personDetails: [
      {
        id: 117552,
        name: "John Doe",
        phoneNumber: 7894561230,
        flightNumber: "A 0137",
        seatNumber: "27F",
        gateNumber: 18,
        terminalNumber: "2A",
        to: "DEL, Delhi Airport India",
        from: "BLR, Bangalore International Airport",
        boardingDate: "13 MAR 2023",
        bookingDate: "10 MAR 2023",
        bookingCreatedAt: "10 MAR 2023 01:40 PM",
        empId: "ID-1178",
        empMail: "john@gmail.com",
        reportingManager: "John Joe",
        branch: "Kerala",
        department: "sales team",
        airlineDetails: "AirIndia",
      },
      {
        id: 12345,
        name: "Tony Stark",
        phoneNumber: 1234567890,
        flightNumber: "Avengers 201",
        seatNumber: "Mark 47",
        gateNumber: 45,
        terminalNumber: "2A",
        to: "DME, Domodedovo International Airport",
        from: "BLR, Bangalore International Airport",
        boardingDate: "13 MAR 2023",
        bookingDate: "10 MAR 2023",
        bookingCreatedAt: "10 MAR 2023 01:40 PM",
        empId: "ID-1178",
        empMail: "tony@gmail.com",
        reportingManager: "Nick Fury",
        branch: "Chennai",
        department: "Manufacturing Team",
        airlineDetails: "Air Asia",
      },
      {
        id: 117552,
        name: "John Doe",
        phoneNumber: 7894561230,
        flightNumber: "A 0137",
        seatNumber: "27F",
        gateNumber: 18,
        terminalNumber: "2A",
        to: "DEL, Delhi Airport India",
        from: "BLR, Bangalore International Airport",
        boardingDate: "13 MAR 2023",
        bookingDate: "10 MAR 2023",
        bookingCreatedAt: "10 MAR 2023 01:40 PM",
        empId: "ID-1178",
        empMail: "john@gmail.com",
        reportingManager: "John Joe",
        branch: "Kerala",
        department: "sales team",
        airlineDetails: "AirIndia",
      },
      {
        id: 117552,
        name: "John Doe",
        phoneNumber: 7894561230,
        flightNumber: "A 0137",
        seatNumber: "27F",
        gateNumber: 18,
        terminalNumber: "2A",
        to: "DEL, Delhi Airport India",
        from: "BLR, Bangalore International Airport",
        boardingDate: "13 MAR 2023",
        bookingDate: "10 MAR 2023",
        bookingCreatedAt: "10 MAR 2023 01:40 PM",
        empId: "ID-1178",
        empMail: "john@gmail.com",
        reportingManager: "John Joe",
        branch: "Kerala",
        department: "sales team",
        airlineDetails: "AirIndia",
      },
      {
        id: 117552,
        name: "John Doe",
        phoneNumber: 7894561230,
        flightNumber: "A 0137",
        seatNumber: "27F",
        gateNumber: 18,
        terminalNumber: "2A",
        to: "DEL, Delhi Airport India",
        from: "BLR, Bangalore International Airport",
        boardingDate: "13 MAR 2023",
        bookingDate: "10 MAR 2023",
        bookingCreatedAt: "10 MAR 2023 01:40 PM",
        empId: "ID-1178",
        empMail: "john@gmail.com",
        reportingManager: "John Joe",
        branch: "Kerala",
        department: "sales team",
        airlineDetails: "AirIndia",
      },
      {
        id: 117552,
        name: "John Doe",
        phoneNumber: 7894561230,
        flightNumber: "A 0137",
        seatNumber: "27F",
        gateNumber: 18,
        terminalNumber: "2A",
        to: "DEL, Delhi Airport India",
        from: "BLR, Bangalore International Airport",
        boardingDate: "13 MAR 2023",
        bookingDate: "10 MAR 2023",
        bookingCreatedAt: "10 MAR 2023 01:40 PM",
        empId: "ID-1178",
        empMail: "john@gmail.com",
        reportingManager: "John Joe",
        branch: "Kerala",
        department: "sales team",
        airlineDetails: "AirIndia",
      },
      {
        id: 117552,
        name: "John Doe",
        phoneNumber: 7894561230,
        flightNumber: "A 0137",
        seatNumber: "27F",
        gateNumber: 18,
        terminalNumber: "2A",
        to: "DEL, Delhi Airport India",
        from: "BLR, Bangalore International Airport",
        boardingDate: "13 MAR 2023",
        bookingDate: "10 MAR 2023",
        bookingCreatedAt: "10 MAR 2023 01:40 PM",
        empId: "ID-1178",
        empMail: "john@gmail.com",
        reportingManager: "John Joe",
        branch: "Kerala",
        department: "sales team",
        airlineDetails: "AirIndia",
      },
    ],
    selectedIndex: 0,
    flightDetailsOne: null,
    flightDetailsTwo: null,
    employeeDetails: null,
  }),
  created() {
    this.flightDetailsOne = [
      {
        value: this.personDetails[this.selectedIndex].id,
        label: "ID",
      },
      {
        value: this.personDetails[this.selectedIndex].name,
        label: "Name",
      },
      {
        value: this.personDetails[this.selectedIndex].phoneNumber,
        label: "Number",
      },
      {
        value: this.personDetails[this.selectedIndex].flightNumber,
        label: "Flight",
      },
      {
        value: this.personDetails[this.selectedIndex].seatNumber,
        label: "Seat",
      },
      {
        value: this.personDetails[this.selectedIndex].gateNumber,
        label: "Gate",
      },
      {
        value: this.personDetails[this.selectedIndex].terminalNumber,
        label: "Terminal",
      },
    ];

    this.flightDetailsTwo = [
      {
        value: this.personDetails[this.selectedIndex].to,
        label: "To",
      },
      {
        value: this.personDetails[this.selectedIndex].from,
        label: "From",
      },
      {
        value: this.personDetails[this.selectedIndex].boardingDate,
        label: "Date",
      },
      {
        value: this.personDetails[this.selectedIndex].bookingDate,
        label: "Booking Date",
      },
    ];

    this.employeeDetails = [
      {
        value: this.personDetails[this.selectedIndex].empId,
        label: "EMP ID",
      },
      {
        value: this.personDetails[this.selectedIndex].empMail,
        label: "Employee Email",
      },
      {
        value: this.personDetails[this.selectedIndex].reportingManager,
        label: "Reporting Manager",
      },
      {
        value: this.personDetails[this.selectedIndex].branch,
        label: "Branch",
      },
      {
        value: this.personDetails[this.selectedIndex].department,
        label: "Department",
      },
      {
        value: this.personDetails[this.selectedIndex].airlineDetails,
        label: "Airline Details",
      },
    ];
  },
  methods: {
    getUserDetails(item, index) {
      this.flightDetailsOne = [
        {
          value: item.id,
          label: "ID",
        },
        {
          value: item.name,
          label: "Name",
        },
        {
          value: item.phoneNumber,
          label: "Number",
        },
        {
          value: item.flightNumber,
          label: "Flight",
        },
        {
          value: item.seatNumber,
          label: "Seat",
        },
        {
          value: item.gateNumber,
          label: "Gate",
        },
        {
          value: item.terminalNumber,
          label: "Terminal",
        },
      ];

      this.flightDetailsTwo = [
        {
          value: item.to,
          label: "To",
        },
        {
          value: item.from,
          label: "From",
        },
        {
          value: item.boardingDate,
          label: "Date",
        },
        {
          value: item.bookingDate,
          label: "Booking Date",
        },
      ];

      this.employeeDetails = [
        {
          value: item.empId,
          label: "EMP ID",
        },
        {
          value: item.empMail,
          label: "Employee Email",
        },
        {
          value: item.reportingManager,
          label: "Reporting Manager",
        },
        {
          value: item.branch,
          label: "Branch",
        },
        {
          value: item.department,
          label: "Department",
        },
        {
          value: item.airlineDetails,
          label: "Airline Details",
        },
      ];

      this.selectedIndex = index;
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #a0a0a026;
}

.contents {
  margin: 32px 12px;
}

.user-details {
  width: auto;
  margin: 0px 8px 0px 5px;
  border-radius: 10px;
  padding-top: 12px;
}

.user-details label {
  color: #6a0737;
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.11em;
  text-align: left;

  padding: 2px 0px;
  padding-left: 31px;
  display: block;
}

.user-details div label {
  font-family: Inter;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.11em;
  text-align: left;

  color: #808080;
}

.items-label {
  font-family: Inter;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.11em;
  text-align: left;
  color: #901d4c;

  padding-bottom: 6px;
}

.items-value {
  font-family: Inter;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.11em;
  text-align: left;
  color: #808080;
}

.items-emp-label {
  font-family: Inter;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.11em;
  text-align: left;
  color: #901d4c;

  padding-bottom: 6px;
}

.items-emp-value {
  font-family: Inter;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.11em;
  text-align: left;
  color: #808080;
}

.row {
  margin: 0px;
}

.flight-details {
  border-radius: 18px;
  border: 2px solid #b6b4b4;

  margin: 0px 25px;
}

.employee-details {
  border-radius: 18px;
  border: 2px solid #b6b4b4;

  margin: 25px;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
  margin: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #6a0737;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #6a0737;
}
</style>
