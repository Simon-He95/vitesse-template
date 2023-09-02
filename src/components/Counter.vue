<script lang="ts" setup>
import { useInc } from '../composables/inc'

interface VirtualWaterfallOption {
  rowKey?: string
  // item间隔
  gap?: number
  // 预加载屏数量
  preloadScreenCount?: number
  // 距离底部多少时触发加载更多的事件
  bottomDistance?: number
  // 内容区域最宽
  contentMaxWidth?: string | number
  // item最小宽度
  itemMinWidth?: number
  // 最大列数
  maxColumnCount?: number
  // 最小列数
  minColumnCount?: number
  // 是否正在加载数据
  loading?: boolean
  // 数据
  items?: any[]
  // 计算单个item高度的方法
  calcItemHeight?: (item: any, itemWidth: number) => number
}

const props = withDefaults(defineProps<VirtualWaterfallOption>(), {
  rowKey: 'id',
  gap: 15,
  preloadScreenCount: 1,
  bottomDistance: 2000,
  contentMaxWidth: '100%',
  itemMinWidth: 250,
  minColumnCount: 2,
  loading: false,
  items: () => [],
  calcItemHeight: (item: any, itemWidth: number) => 250,
})

const [n, inc] = useInc()
</script>

<template>
  <div class="custom-color" @click="inc()">
    counter: {{ n }}
  </div>
</template>
