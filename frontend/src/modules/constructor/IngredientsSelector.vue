<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>

    <ul class="ingredients__list">
      <li
        v-for="ingredientType in items"
        :key="ingredientType.id"
        class="ingredients__item"
      >
        <app-drag
          :data-transfer="ingredientType"
          :draggable="getValue(ingredientType.value) < MAX_INGREDIENT_COUNT"
        >
          <span class="filling" :class="`filling--${ingredientType.value}`">
            {{ ingredientType.name }}
          </span>
        </app-drag>
        <app-counter
          class="ingredients__counter"
          :value="getValue(ingredientType.value)"
          :max="MAX_INGREDIENT_COUNT"
          @input="setValue(ingredientType.value, $event)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import AppCounter from "@/common/components/AppCounter.vue";
import AppDrag from "@/common/components/AppDrag.vue";
import { MAX_INGREDIENT_COUNT } from "@/common/constants";
import { toRef } from "vue";

const props = defineProps({
  values: {
    type: Object,
    default: () => ({}),
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update"]);
const values = toRef(props, "values");

const getValue = (ingredient) => {
  return values.value[ingredient] ?? 0;
};
const setValue = (ingredient, count) => {
  emit("update", ingredient, Number(count));
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

//------------------------ingredients---------------------------//

.ingredients__filling {
  width: 100%;

  p {
    @include r-s16-h19;

    margin-top: 0;
    margin-bottom: 16px;
  }
}

.ingredients__list {
  @include clear-list;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.ingredients__item {
  width: 100px;
  min-height: 40px;
  margin-right: 17px;
  margin-bottom: 35px;
}

.ingredients__counter {
  width: 54px;
  margin-top: 10px;
  margin-left: 36px;
}

//------------------------filling---------------------------//

.filling {
  @include r-s14-h16;

  position: relative;

  display: block;

  padding-left: 36px;

  &::before {
    @include p_center-v;

    display: block;

    width: 32px;
    height: 32px;

    content: "";

    border-radius: 50%;
    background-color: $white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% 80%;
  }

  &--tomatoes::before {
    background-image: url("@/assets/img/filling/tomatoes.svg");
  }

  &--ananas::before {
    background-image: url("@/assets/img/filling/ananas.svg");
  }

  &--bacon::before {
    background-image: url("@/assets/img/filling/bacon.svg");
  }

  &--blue_cheese::before {
    background-image: url("@/assets/img/filling/blue_cheese.svg");
  }

  &--cheddar::before {
    background-image: url("@/assets/img/filling/cheddar.svg");
  }

  &--chile::before {
    background-image: url("@/assets/img/filling/chile.svg");
  }

  &--ham::before {
    background-image: url("@/assets/img/filling/ham.svg");
  }

  &--jalapeno::before {
    background-image: url("@/assets/img/filling/jalapeno.svg");
  }

  &--mozzarella::before {
    background-image: url("@/assets/img/filling/mozzarella.svg");
  }

  &--mushrooms::before {
    background-image: url("@/assets/img/filling/mushrooms.svg");
  }

  &--olives::before {
    background-image: url("@/assets/img/filling/olives.svg");
  }

  &--onion::before {
    background-image: url("@/assets/img/filling/onion.svg");
  }

  &--parmesan::before {
    background-image: url("@/assets/img/filling/parmesan.svg");
  }

  &--salami::before {
    background-image: url("@/assets/img/filling/salami.svg");
  }

  &--salmon::before {
    background-image: url("@/assets/img/filling/salmon.svg");
  }
}
</style>
