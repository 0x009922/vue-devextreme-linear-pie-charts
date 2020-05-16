<template>
  <div id="root" class="app">
    <dx-button
      text="Создать график"
      type="default"
      @click="data = null, showDialog = true"
    />

    <dx-popup
      :visible.sync="showDialog"
      :drag-enabled="false"
      :close-on-outside-click="true"
      width="450px"
      height="300px"
      title="Создать график"
    >
      <div class="label">
        Выберите тип графика
      </div>
      <dx-select-box
        v-model="graphType"
        :data-source="availableGraphTypes"
        display-expr="name"
      />

      <div class="label">
        Выберите источник данных
      </div>
      <dx-select-box
        v-model="dataSource"
        :data-source="availableDataSources"
        display-expr="name"
      />

      <dx-button
        class="mt-4"
        text="Создать"
        type="default"
        @click="fetch()"
      />
    </dx-popup>


    <template v-if="data">
      <linear-chart
        v-if="actualGraphType === GRAPH_TYPES.linear"
        class="app__chart"
        :data="data"
        main-field="Дата"
        :series="['Месяц', 'Процент']"
      />

      <pie-chart
        v-else-if="actualGraphType === GRAPH_TYPES.pie"
        class="app__chart"
        :data="data"
        argument-field="Группа"
        value-field="Доля"
      />
    </template>
  </div>
</template>

<script>
import {
  DxButton,
  DxPopup,
  DxSelectBox,
} from 'devextreme-vue';

import LinearChart from './components/LinearChart';
import PieChart from './components/PieChart';
import api from './api';

/**
 * Доступные типы графиков
 */
const GRAPH_TYPES = {
  linear: Symbol('linear'),
  pie: Symbol('pie'),
};

/**
 * Доступные источники данных
 */
const DATA_SOURCES = {
  linear: '5ea85157da01cf25d4586101',
  pie: '5ea8513dda01cf25d45860ff',
};

export default {
  name: "app",
  components: {
    DxButton,
    DxPopup,
    DxSelectBox,
    LinearChart,
    PieChart,
  },
  data: () => ({
    showDialog: false,

    // Выбранный тип графика
    graphType: null,

    // Выбранный источник данных
    dataSource: null,
    
    GRAPH_TYPES,
    availableGraphTypes: [
      { type: GRAPH_TYPES.linear, name: 'Линейный' },
      { type: GRAPH_TYPES.pie, name: 'Пирог' },
    ],
    availableDataSources: [
      { id: DATA_SOURCES.linear, name: 'Данные для линейного графика' },
      { id: DATA_SOURCES.pie, name: 'Данные для пирога' },
    ],

    // Данные
    data: null,
  }),
  computed: {
    actualGraphType() {
      const { type = null } = this.graphType || {};
      return type;
    },
  },
  methods: {
    /**
     * Загрузка данных и скрытие диалога при успешном выполнении
     */
    async fetch() {
      const dataSourceId = this.dataSource.id;
      const { data } = await api.get(`${dataSourceId}/data`);
      this.data = data;
      this.showDialog = false;
    },
  },
};
</script>

<style lang="sass">
html,
body
  margin: 0px
  min-height: 100%
  height: 100%


#root
  height: 100%


*
  box-sizing: border-box


.app
  @import "./themes/generated/variables.base.scss"
  background-color: darken($base-bg, 5)
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  height: 100%
  width: 100%

  &__chart
    width: 90%
    margin: 16px
    height: 80vh


.dx-selectbox + .label
  margin-top: 16px


.mt-4
  margin-top: 16px !important
</style>
