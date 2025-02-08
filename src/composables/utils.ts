export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// 选择位置
export function handleChooseMap(handleUpdate: (point: Point) => void) {
  uni.navigateTo({
    url: '/subpages/chooseLocation',
    events: {
      update: ({ latitude, longitude }: Point) => {
        handleUpdate({ latitude, longitude })
      },
    },
  })
}


