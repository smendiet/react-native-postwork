import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Home from "./src/screen/container/Home";
import StyleSheetPreview from './src/css-learn/StyleSheetPreview';
import RefactorHtml from './src/css-learn/RefactorHtml';
import Challenge from './src/css-learn/Challenge';
import ExampleLayout from './src/layout-learn/ExampleLayout';
import VerticalStackLayout from './src/layout-learn/VerticalStackLayout';
import Reto from './src/layout-learn/Reto';
import GridLayout from './src/layout-learn/GridLayout';

import HorizontalStackLayout from "./src/layout-learn/HorizontalStackLayout";
import GridLayoutWithSpaceBetween from './src/layout-learn/GridLayoutWithSpaceBetween';
import AbsoluteLayout from "./src/layout-learn/AbsoluteLayout";

import ProfileLayout from "./src/layout-learn/ProfileLayout";

import Login from "./src/screen/container/Login"

export default function App() {
  return (
    <View style={{flex: 1}}>
     {/*
      <StyleSheetPreview />
      <RefactorHtml />
      <Challenge />


      <ExampleLayout />
      <VerticalStackLayout />
      <Reto />


      <GridLayout />
     */} 
      <Reto />
    </View>
  );
}
