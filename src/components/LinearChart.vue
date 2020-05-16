<template>
  <dx-chart
    id="chart"
    :data-source="data"
    palette="Violet"
  >
    <dx-common-series-settings
      :argument-field="mainField"
    />
    <dx-series
      v-for="val in series"
      :key="val"
      :value-field="val"
      :name="val"
    />
    <dx-argument-axis
      :value-margins-enabled="false"
      discrete-axis-division-mode="crossLabels"
    >
      <dx-grid :visible="true"/>
    </dx-argument-axis>
    <dx-legend
      vertical-alignment="bottom"
      horizontal-alignment="center"
      item-text-position="bottom"
    />
    <dx-title text="Представление линейных данных" />
    <dx-tooltip :enabled="true"/>
  </dx-chart>
</template>

<script>
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxGrid,
  DxLegend,
  DxTitle,
  DxTooltip
} from 'devextreme-vue/chart';

export default {
  name: 'LinearChart',
  components: {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxGrid,
    DxLegend,
    DxTitle,
    DxTooltip,
  },
  props: {
    data: Array,
    mainField: String,
    series: Array,
  },
};
</script>
