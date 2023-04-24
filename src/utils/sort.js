/**
 * 冒泡排序（Bubble Sort）：重复遍历数组，每次比较相邻的两个元素，如果顺序不对就交换位置，直到数组排好序。时间复杂度为 O(n^2)。
 * @param {*} arr
 * @returns
 */
export const bubbleSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let done = true;
    for (let j = 0; j < len - i - 1; j++) {
      // 一次内循环将本循环的最大数放到该放的最大位置
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        done = false;
      }
    }
    if (done) {
      break;
    }
  }
  return arr;
};

/**
 * 选择排序（Selection Sort）：每次从未排序的数组中选出最小的元素，将其放到已排序数组的末尾，直到数组排好序。时间复杂度为 O(n^2)。
 * @param {*} arr
 * @returns
 */
export const selectSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      // 一次内循环将本循环查找到的最小数放到该放的最小位置
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
};

/**
 * 插入排序（Insertion Sort）：将数组分为已排序和未排序两部分，每次从未排序部分取出一个元素，插入到已排序部分的正确位置，直到数组排好序。时间复杂度为 O(n^2)。
 * @param {*} arr
 * @returns
 */
export const insertSort = (arr) => {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i - 1;
    const temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

/**
 * 快速排序（Quick Sort）：选择一个基准元素，将数组分为小于基准和大于基准的两部分，然后递归地对两部分进行排序，直到数组排好序。时间复杂度为 O(nlogn)。
 * @param {*} arr
 * @returns
 */
export const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log('left', left, right);
  return quickSort(left).concat([pivot], quickSort(right));
};
