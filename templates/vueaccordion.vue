<template>
  <div class="mmc-accordion">

    <ul class="mmc-accordion__wrapper">
      <li class="mmc-accordion__container" v-for="(screen, index) in jsonData.screens" :class="{'mmc-accordion__container--active': activeId === index}" :key="index" @click="activeId = index">
        <div class="mmc-accordion__content-container">
          <h2 class="mmc-accordion__headline" v-text="screen.data.headline"></h2>
          <p class="mmc-accordion__content" v-text="screen.data.content"></p>
        </div>
      </li>
    </ul>

    <div class="mmc-accordion__image-wrapper">
      <div class="mmc-accordion__image-container" v-for="(screen, index) in jsonData.screens" :key="index" :class="{ 'mmc-accordion__container--active': activeId === index}">
        <img class="mmc-accordion__image" :src="require(`~/assets/images/phase2/${screen.data.image.src}`)" :alt="screen.data.image.alt">
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'AppAccordion',
    props: {
      jsonData: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        activeId: 1
      }
    }
  }
</script>

<style lang="scss">
  .mmc-accordion {
    display: flex;
    position: relative;
    padding: 10px 0 100px;
    height: 900px;
  }

  .mmc-accordion__wrapper {
    display: flex;
    flex-direction: column;
    list-style: none;
    height: 200px;
    margin: 0 5% 0 10%;
    height: auto;

    .mmc-accordion__container {
      display: flex;
      .mmc-accordion__content-container {
        border-left: dashed;
        height: auto;
        .mmc-accordion__content {
          overflow: hidden;
          max-height: 0;
          transition: max-height 1.5s;
        }

        .mmc-accordion__headline {
          list-style: none;
          font-size: 35px;
          padding-bottom: 15px;
          position: relative;
          &:before {
            content: '';
            font-size: 16px;
            position: absolute;
            left: -45px;
          }
        }
      }
    }
    .mmc-accordion__container--active {
      .mmc-accordion__content-container {
        .mmc-accordion__content {
          max-height: 500px;
        }
        .mmc-accordion__headline--1 {
          &:before {
            content: '1';
            font-size: 16px;
            position: absolute;
            left: -45px;
          }
        }

        .mmc-accordion__headline--2 {
          &:before {
            content: '2';
          }
        }

        .mmc-accordion__headline--3 {
          &:before {
            content: '3';
          }
        }
      }
    }
  }

  .mmc-accordion__image-wrapper {
    width: 30%;
    .mmc-accordion__image-container {
      max-height: 0;
      transition: max-height 1.5s;
      .mmc-accordion__image {
        height: 0;
        transition: opacity 1.5s;
        opacity: 0;
      }
    }
    .mmc-accordion__container--active {
      max-height: 500px;
      .mmc-accordion__image {
        height: 100%;
        opacity: 1;
      }
    }
  }
</style>
