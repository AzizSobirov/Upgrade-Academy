<template>
  <section class="view_course">
    <div class="course" v-if="getCourses">
      <ul>
        <li v-for="item in course" :key="item">{{ item.name }}</li>
      </ul>
    </div>
    <h2 v-else>Not Found</h2>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      course: [],
    };
  },
  mounted() {
    console.log(this.course);
  },
  computed: {
    ...mapState(["courses"]),
    getCourses() {
      // include the course
      for (let i = 0; i < this.courses.length; i++) {
        if (
          this.courses[i].name
            .toLowerCase()
            .includes(this.$route.query.search.toLowerCase())
        ) {
          this.course.push(this.courses[i]);
        }
      }
      if (this.course.length === 0) {
        return false;
      } else {
        return this.course;
      }
    },
  },
};
</script>
