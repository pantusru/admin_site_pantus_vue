<template>
  <div class="breadcrumb py-1">
    <ul>
      <li
          v-for="(breadcrumb, idx) in breadcrumbList"
          :key="idx"
          @click="routeTo(idx)"
          :class="{'linked': !!breadcrumb.link}">

        {{ breadcrumb.name }}

      </li>
    </ul>
  </div>
</template>

<script>
export default {
name: "Breadcrumbs",

  data () {
    return {
      breadcrumbList: []
    }
  },
  mounted () { this.updateList() },
  watch: { '$route' () { this.updateList() } },
  methods: {
    routeTo (pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList () { this.breadcrumbList = this.$route.meta.breadcrumb }
  }


}
</script>

<style scoped>

.breadcrumb {
  padding: 0 20px;
}
ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}
ul > li {
  display: flex;
  float: left;
  /*height: 10px;*/
  width: auto;


  font-size: 1em;
  cursor: default;
  align-items: center;
}
ul > li:not(:last-child)::after {
  content: '/';
  float: right;
  font-size: 1em;
  margin: 0 .5em;

  cursor: default;
}
.linked {
  cursor: pointer;
  font-size: 1em;
  font-weight: normal;
  color: #047cff;
}

</style>
