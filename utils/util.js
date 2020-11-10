const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 *  公共请求方法
 */
function http (config) {
  wx.request({
    url: 'https://www.dongdong.design' + config.url,
    data: config.data,
    success (res) {
      if(res.statusCode === 200 && res.data.code === '200'){
        config.success && config.success(res.data.data);
      } else {
        console.err("请求异常", res);
      }
    },
    error (err) {
      console.err(err);
    }
  })
}

module.exports = {
  formatTime: formatTime,
  http
}
