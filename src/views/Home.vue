<template>
  <div class="home">
    <b-container>
      <BaseHeader :headerData="headerData" />
      <ScheduleList :tracks="data.tracks"/>
      <MeetupLink :eventType="data.eventType" :eventLink="data.eventLink"/>
      <Sponsors v-if="data.sponsors.length !== 0" :sponsors="data.sponsors" />
    </b-container>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import ScheduleList from '@/components/ScheduleList.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import Sponsors from '@/components/Sponsors.vue'
import MeetupLink from '@/components/MeetupLink.vue'
import data from '@/data/index'
import { mapMutations } from 'vuex'
export default {
  name: 'home',
  components: {
    BaseHeader,
    ScheduleList,
    BaseFooter,
    Sponsors,
    MeetupLink
  },
  data () {
    return {
      data
    }
  },
  computed: {
    headerData () {
      const { title, eventType, date, meetupLink, description, eventLink, isTimezoneSelectorEnabled } = data
      return {
        title,
        eventType,
        date,
        meetupLink,
        description,
        eventLink,
        isTimezoneSelectorEnabled
      }
    }
  },
  mounted () {
    if (localStorage.timezone) {
      this.setTimezone(localStorage.timezone)
    }
  },
  methods: {
    ...mapMutations({
      setTimezone: 'timezone/SET_CURRENTTIMEZONE'
    })
  }
}
</script>

<style lang="stylus">

</style>
