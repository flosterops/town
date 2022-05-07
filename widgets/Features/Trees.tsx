import { TreesWrapper } from './styles';
// @ts-ignore
import tree1 from 'public/assets/features/trees/features_slider_01_trees_ul.png';
// @ts-ignore
import tree2 from 'public/assets/features/trees/features_slider_02_trees_ul.png';
// @ts-ignore
import tree3 from 'public/assets/features/trees/features_slider_03_trees_ul.png';
// @ts-ignore
import tree4 from 'public/assets/features/trees/features_slider_04_trees_ul.png';
// @ts-ignore
import tree5 from 'public/assets/features/trees/features_slider_05_trees_ul.png';
import React from 'react';

export function Trees (props: { slide: number }) {
  return <TreesWrapper>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {props.slide === 0 && <img className='tree1' src={tree1.src} alt='tree'/>}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {props.slide === 1 && <img className='tree2' src={tree2.src} alt='tree'/>}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {props.slide === 2 && <img className='tree3' src={tree3.src} alt='tree'/>}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {props.slide === 3 && <img className='tree4' src={tree4.src} alt='tree'/>}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {props.slide === 4 && <img className='tree5' src={tree5.src} alt='tree'/>}
  </TreesWrapper>;
}
