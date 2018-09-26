
/**
 * Note: 16 进制颜色转 rgb 颜色数组
 * @param intColor
 * @returns {Array}
 */
export const getInt2RGB = function (intColor = '#fff') {
  let sColor = intColor.toLowerCase();
  if (sColor && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }

    //处理六位的颜色值
    let sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
    }
    return sColorChange;
  }
}


/**
 * Note: 获取 rgb 颜色
 * @param colorArr
 * @param level
 * @returns {string}
 */
export const getRGBStrByArr = function (colorArr = [], level = 0) {
  if (level !== 0) {
    for (let i = 0; i < 3; i++) {
      colorArr[i] += level;
    }
  }
  return `rgb(${colorArr.join(',')})`;
}


/**
 * @param startColor 开始hex颜色
 * @param endColor 结束hex颜色
 * @param step 阶段数
 * @param index 需要获取的阶段
 * @return {Array}
 */
export const getGradientColorByIndex = function (startColor, endColor, step = 10, index = 0) {
  let startRGB = colorRgb(startColor);//转换为rgb数组模式
  let endRGB = colorRgb(endColor);

  let startR = Number.parseInt(startRGB[0]);
  let startG = Number.parseInt(startRGB[1]);
  let startB = Number.parseInt(startRGB[2]);

  let sR = (Number.parseInt(endRGB[0]) - startR) / step; //总差值
  let sG = (Number.parseInt(endRGB[1]) - startG) / step;
  let sB = (Number.parseInt(endRGB[2]) - startB) / step;

  return `rgb(${sR * index + startR},${sG * index + startG},${sB * index + startB})`;
}

/**
 * rgb 字符串转 rgb 数组
 * @param rgbColorStr
 * @return {string[]}
 */
function colorRgb(rgbColorStr = 'rgb(0,0,0)') {
  return rgbColorStr.replace(/(?:\(|\)|rgb)*/g, '').split(',');
}

let color = getGradientColorByIndex('rgb(68,36,0)', 'rgb(232,68,133)', 20, 0);
console.log(color);//控制台输出

