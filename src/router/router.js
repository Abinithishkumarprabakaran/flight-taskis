import Vue from 'vue';
import VueRouter from 'vue-router';

import BookingDetails from '../components/BookingDetails.vue';
import DesktopEight from '../components/DesktopEight.vue';
import DesktopFive from '../components/DesktopFive.vue';
import BookingInput from '../components/BookingInput.vue';
import LearnVue from '../components/LearnVue.vue';
import TheVuelidate from '../components/TheVuelidate.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/bookinginput',
      component: BookingInput,
    },
    {
      path: '/bookingdetails',
      component: BookingDetails,
    },
    {
      path: '/desktopeight',
      component: DesktopEight,
    },
    {
      path: '/desktopfive',
      component: DesktopFive,
    },
    {
      path: '/learn',
      component: LearnVue,
    },
    {
      path: '/vuelidate',
      component: TheVuelidate,
    }
  ]
})

export default router