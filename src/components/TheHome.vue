<template>
  <section id="home" class="home">
    <div class="home_content">
      <img src="../assets/img/student.png" alt="" />
      <ul>
        <li>
          <h2>
            Grow Your Skills To Advance Your Career Path.
          </h2>
        </li>
        <li>
          <p>We have something big for you who want to level up!</p>
        </li>
        <li>
          <span>
            <input
              type="text"
              v-model="search"
              placeholder="What do you want to learn..."
            />
            <i @click="searchCourse(search)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Search</title>
                <path
                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                  fill="none"
                  stroke="#21e835"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="#21e835"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M338.29 338.29L448 448"
                />
              </svg>
            </i>
          </span>
        </li>
        <li>
          <p>Suggestions</p>
        </li>
        <li>
          <mark
            v-for="key in courses"
            :key="key.name"
            @click="searchCourse(key.name)"
          >
            {{ key.name }}
          </mark>
        </li>
      </ul>
    </div>
    <div class="home_features">
      <div class="home_features_item">
        <span>
          <img src="../assets/img/f1.png" alt="" />
          <h3>Get New Friends</h3>
        </span>
        <p>
          You will meet new friends in some of classes that you take. Say hello
          to them and make friends, it will be so much warm friendship!
        </p>
      </div>
      <div class="home_features_item">
        <span>
          <img src="../assets/img/f2.png" alt="" />
          <h3>Expert and Fun Mentor</h3>
        </span>
        <p>
          Learn with earnest and don’t forget to get relax too. Learn and enjoy
          the materials or classes with our expert mentors.
        </p>
      </div>
      <div class="home_features_item">
        <span>
          <img src="../assets/img/f3.png" alt="" />
          <h3>Flexible Access</h3>
        </span>
        <p>
          You can access materials or classes easily by our website also mobile.
          Access it everywhere and everytime, no limit for you to learn!
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "TheHome",
  data() {
    return {
      search: "",
      // keywords: [
      //   "UI UX Design",
      //   "CSS Fundamental",
      //   "3D Design Illustration",
      //   "Website Development",
      //   "Logo Design",
      //   "Icon Design",
      // ],
    };
  },
  computed: {
    ...mapState(["courses"]),
  },
  methods: {
    searchCourse(search) {
      this.$router.push({
        path: "courses",
        query: { search: search },
      });
    },
  },
};
</script>
