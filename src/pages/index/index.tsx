import { View, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import sunImg from '../../assets/image/sun.jpg';

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View>
      <View>
        <Image
          style='width: 100%;height: 180px;background: #fff;'
          src='https://cdn.nlark.com/yuque/0/2024/jpeg/34903562/1704095411503-769d3114-96c1-490f-9f81-bee756a2e1d7.jpeg?x-oss-process=image%2Fresize%2Cw_1517%2Climit_0%2Finterlace%2C1'
        />
      </View>
      <View className='con-container'>
        132
      </View>
    </View>
  )
}
