<template>
  <div
    class="btn-botton"
    :class="scrollTop > 150 ? 'show' : 'fade'"
    @click="backTop()"
  >
    <button class="btn">
      up
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.windowScroll);
  },
  methods: {
    windowScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
    },
    backTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      this.scrollTop = 0;
    },
  },
};
</script>

<style scoped lang="scss">
.btn-botton {
  height: 64px;
  width: 64px;
  background-color: #1867c0;
  border-color: #1867c0;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  right: 0;
  border-radius: 50%;
  button {
    outline: none;
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  &:active {
    transform: scale(0);
  }
  transition: all 0.5s;
}
.show {
  transform: scale(1);
}
.fade {
  transform: scale(0);
}
</style>
