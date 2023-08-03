<template>
  <section class="main-banner">
    <v-row style="height: 250px; background-color: #651035"></v-row>
    <v-row>
      <v-card class="info-card">
        <v-row style="display: flex; align-items: center">
          <v-col cols="12" sm="8">
            <v-radio-group
              v-model="radioGroup"
              row
              hide-details
              dense
              style="padding: 0px; margin: 0px"
            >
              <v-radio label="ONE WAY" value="oneway"></v-radio>
              <v-radio label="ROUND TRIP" value="roundtrip"></v-radio>
              <v-radio c label="MULTI CITY" value="multicity"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="4" class="select-count">
            <v-select
              v-model="TravellerCount"
              dense
              hide-details
              outlined
              style="max-width: 200px"
              label="TRAVELLER COUNT"
              color="primary"
              :items="[
                '1 TRAVELLER',
                '2 TRAVELLER',
                '3 TRAVELLER',
                '4 TRAVELLER',
                '5 TRAVELLER',
              ]"
            />
          </v-col>
        </v-row>
        <v-row style="margin-left: 2px">
          <v-col
            cols="12"
            sm="5"
            class="bordered-column main-layout"
          >
            <v-col cols="12" sm="6" style="border-right: 1px solid silver">
              <div class="silver-text">FROM</div>
              <h1>{{ source }}</h1>
              <div class="silver-text">{{ sourceInfo }}</div>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="silver-text">TO</div>
              <h1>{{ destination }}</h1>
              <div class="silver-text">{{ destinationInfo }}</div>
            </v-col>
          </v-col>
          <v-col cols="12" sm="3" class="bordered-column column-3" style="margin:0px 3.5%;">
            <v-col cols="12">
              <div class="silver-text">DEPARTURE</div>
              <h1>{{ source }}</h1>
              <div class="silver-text">{{ sourceInfo }}</div>
            </v-col>
          </v-col>
          <v-col cols="12" sm="3" class="bordered-column">
            <v-col cols="12">
              <div class="silver-text">FROM</div>
              <h1>{{ source }}</h1>
              <div class="silver-text">{{ sourceInfo }}</div>
            </v-col>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </section>
</template>
<script>
export default {
  data() {
    return {
      radioGroup: "oneway",
      TravellerCount: null,
      source: "Delhi",
      sourceInfo: "DEL, Delhi Airport India",
      destination: "Bengalore",
      destinationInfo: "BLR, Benagalore International Airport India",
    };
  },
};
</script>

<style scoped>
section{
    height: 100vh;
    overflow-y: scroll;
}
.info-card {
  width: 100%;
  margin: 0% 10%;
  padding: 30px 20px;
  border-radius: 20px;
  margin-top: -125px;
}
.v-radio.theme--light .v-label {
  font-size: 0.8rem;
}
.v-input--radio-group.v-input--radio-group--row .v-radio {
  border: 1px solid silver;
  font-size: 10px;
  padding: 3px 10px;
  border-radius: 10px;
}
::v-deep .v-radio .v-label {
  font-size: 0.8rem;
}
.select-count {
  display: flex;
  justify-content: flex-end;
}
.silver-text {
  color: #8a8989;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.9px;
}
h1 {
  font-size: 2rem;
  margin: 5px 0px;
  font-weight: 600;
  color: #811851;
}
.bordered-column {
  border: 1px solid silver;
  border-radius: 10px;
}
.main-layout{
    display: flex;
}
/* .column-3{
    margin: 0px 10px;
} */
@media (max-width: 767px) {
  .v-radio {
    margin: 2px;
  }
  .select-count {
    display: flex;
    justify-content: flex-start;
  }
  .main-layout{
    display: block;
}
.column-3{
    margin:10px 0px;
}
}
</style>