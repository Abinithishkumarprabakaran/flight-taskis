<template>
  <div>
    <v-row style="height: 324px; background-image: linear-gradient(to right, #470625, #a32456);"></v-row>
    <v-card class="card-container">
      <v-row class="contact-details">
        <v-col cols="12" class="heading">Booking Details will be sent to</v-col>
        <v-col cols="12" class="contact-email">
          <p>EMAIL</p>
          <div class="textfield">
            <v-text-field label="Email" outlined></v-text-field>
          </div>
        </v-col>
        <v-col cols="12" class="contact-phone">
          <p>PHONE NO</p>
          <div class="textfield">
            <v-text-field label="Phone No" outlined></v-text-field>
          </div>
        </v-col>
      </v-row>

      <div class="traveller-details">
        <h5 class="heading">Traveller Details</h5>
        <div class="traveller">
          <div class="traveller-rect">
            <p class="rect-text">ADULT 1</p>

            <v-container>
              <v-form>
                <div class="container">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <div class="contents">
                        <label>Title</label>
                        <v-text-field
                          label="Title"
                          hide-details
                          outlined
                        ></v-text-field>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <div class="contents">
                        <label>First Name</label>
                        <v-text-field
                          label="First Name"
                          outlined
                          hide-details
                        ></v-text-field>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <div class="contents">
                        <label>Last Name</label>
                        <v-text-field
                          label="Last Name"
                          outlined
                          hide-details
                        ></v-text-field>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-form>
            </v-container>
          </div>
        </div>

        <div class="traveller">
          <div class="traveller-rect">
            <p class="rect-text">CHILD 1</p>

            <v-container>
              <v-form>
                <div class="container">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <div class="contents">
                        <label>Title</label>
                        <v-text-field label="Title" hide-details outlined></v-text-field>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <div class="contents">
                        <label>First Name</label>
                        <v-text-field
                          label="First Name"
                          outlined
                          hide-details
                        ></v-text-field>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <div class="contents">
                        <label>Last Name</label>
                        <v-text-field
                          label="Last Name"
                          outlined
                          hide-details
                        ></v-text-field>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-form>
            </v-container>
          </div>
        </div>
      </div>

      <section class="seat-meal-container">
        <div class="seat-meal-rect">
          <div>
            <div class="options">
              <div
                class="option"
                :class="{ selected: selectedOption === 'seat' }"
                @click="selectOption('seat')"
              >
                Seat
              </div>
              <div
                class="option"
                :class="{ selected: selectedOption === 'meals' }"
                @click="selectOption('meals')"
              >
                Meals
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="actions">
        <div>
          <v-btn class="gradient-button" @click.prevent="BackButton" dark>
            Back
          </v-btn>
        </div>
        <div>
          <v-btn class="gradient-button" dark @click.prevent="ConfirmButton">
            Confirm
          </v-btn>
        </div>
      </section>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
    BackButton() {
      console.log("Back Button is Clicked");
    },
    ConfirmButton() {
      console.log("Confirm Button is Clicked");
    },
  },
};
</script>

<style scoped>

.card-container {
  position: absolute;
  width: 100%;
  max-width: 1073px;
  height: auto;
  margin: 0 auto;
  top: 94px;
  left: 0;
  right: 0;
  border-radius: 33px;
  box-shadow: 0px 0px 14px 10px #0000001a;
}

.contact-details {
  width: 100%;
  max-width: 1004px;
  border-radius: 33px;
  border: 2px solid #470625;
  margin: 0 auto;
  margin-top: 32px;
  padding: 0 20px;
}

.heading {
  font-family: Inter;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: 0.11em;
  text-align: left;
  color: #6e193d;
}

.contact-email {
  width: 100%;
  max-width: 730px;
  height: 48px;
  margin: 31px auto 0;
  padding: 0 20px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.contact-email p {
  width: 99px;

  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.11em;
  text-align: left;
  color: #6a6a6a;
  padding-bottom: 15px;
}

.contact-phone {
  width: 100%;
  max-width: 730px;
  height: 48px;
  margin: 31px auto 0;
  padding: 0 20px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.contact-phone p {

  width: 99px;

  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.11em;
  text-align: left;
  color: #6a6a6a;
  /* padding-right: 25px; */

  padding-bottom: 15px;
}

.traveller-details {
  width: 100%;
  max-width: 1004px;
  height: 693px;
  margin: 30px auto;
  padding: 0 20px;
  position: relative;
  border-radius: 33px;
  border: 2px solid #470625;
}

.traveller {
  width: 100%;
  max-width: 873px;
  height: 239px;
  margin: 40px auto 0;
  position: relative;
  border-radius: 33px;
  border: 2px solid #470625;
}

@media (max-width: 600px) {
  .traveller {
    height: 400px;
  }

  .traveller-details {
    height: 993px;
  }
}

.traveller-rect {
  width: 100%;
  max-width: 900px;
  height: 61px;
  margin: 0 auto;
  position: relative;
  border-radius: 30px 30px 0px 0px;
  background: linear-gradient(90.07deg, #873256 0.57%, #671136 99.97%);
}

.rect-text {
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.11em;
  text-align: left;

  color: #ffffff;

  padding: 19px 0px 18px 25px;
}

.contents {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contents label {

  width: 70px;

  margin-bottom: 1px;

  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0.11em;
  text-align: left;

  color: #6a6a6a;
}

.seat-meal-container {
  width: 100%;
  max-width: 1004px;
  height: 693px;
  border-radius: 33px;
  border: 2px solid #470625;
  margin: 30px auto;
}

.seat-meal-rect {
  width: 100%;
  max-width: 1002px;
  height: 61px;
  border-radius: 30px 30px 0 0;
  background: linear-gradient(90.07deg, #873256 0.57%, #671136 99.97%);

  display: flex;
  justify-content: start;
  padding: 10px;
}

.options {
  display: flex;
}

.option {
  padding: 10px;
  cursor: pointer;

  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.11em;
  text-align: left;

  color: #ffffff;
}

.selected {
  border-bottom: 2px solid white;
}

.actions {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  margin: 35px 52px;
}

.gradient-button {
  width: 100%;
  max-width: 200px;
  height: 56px;
  border-radius: 9px;
  margin-left: 20px;
  background: linear-gradient(92.27deg, #490726 0%, #a22456 103.13%);
  font-size: 1rem;
}

@media (max-width: 1150px) {
  .card-container {
    width: 90%;
    max-width: none;
  }

  .contact-details {
    width: 90%;
    max-width: none;
  }

  .traveller-details {
    width: 90%;
    max-width: none;
  }

  .seat-meal-container {
    width: 90%;
    max-width: none;
  }

  .seat-meal-rect {
    font-size: 1rem;
    padding: 5px;
  }

  .actions {
    flex-direction: column;
    justify-content: center;
  }

  .gradient-button {
    max-width: none;
    margin: 10px;
    font-size: 1rem;
  }
}

.actions div {
  margin-left: 10px;
}

.textfield {
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
</style>
