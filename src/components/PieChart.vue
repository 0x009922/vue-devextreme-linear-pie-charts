<template>
  <dx-pie-chart
    id="pie"
    :data-source="data"
    title="Представление в виде пирога"
  >
    <dx-series
      :argument-field="argumentField"
      :value-field="valueField"
    >
      <dx-label :visible="true">
        <dx-connector
          :visible="true"
          :width="1"
        />
      </dx-label>
    </dx-series>
    <!-- <dx-size :width="500"/> -->
  </dx-pie-chart>
</template>

<script>
import DxPieChart, {
  DxSize,
  DxSeries,
  DxLabel,
  DxConnector,
} from 'devextreme-vue/pie-chart';

export default {
  name: 'PieChart',
  components: {
    DxPieChart,
    DxSize,
    DxSeries,
    DxLabel,
    DxConnector,
  },
  props: {
    data: Array,
    argumentField: String,
    valueField: String,
  },
};
</script>
