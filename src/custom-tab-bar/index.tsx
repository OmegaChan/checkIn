import { useState } from 'react';
import { CoverView, CoverImage } from '@tarojs/components';
import { TabBarlist, colorKeyValues } from './config';
import './index.scss';

export default function Tabbar() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <CoverView className='tabbar-container'>
      {
        _.map(TabBarlist, (item, index) => {
          return (
            <CoverView className='tabbar-container_item' onClick={() => setActiveIndex(index)}>
              <CoverImage
                className='tabbar-container_item_img'
                src={activeIndex === index ? item.selectedIconPath : item.iconPath}
              />
              <CoverView
                className='tabbar-container_item_text'
                style={{ color: activeIndex === index ? colorKeyValues.selectedColor : colorKeyValues.color }}
              >
                {item.text}
              </CoverView>
            </CoverView>
          );
        })
      }
    </CoverView>
  );
}