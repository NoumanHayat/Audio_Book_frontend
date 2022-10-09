import React, { useState, useEffect } from 'react';
import { View, ImageBackground, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { Block, Button, Input, Image, Switch, Modal, Text } from '../components/';
import { useTheme, useData } from '../hooks/';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';


const Cards = (props) => {
  const { assets, colors, gradients, sizes, icons } = useTheme();

  return (

    <Block justify="center" marginTop={10} >
      <Block card marginRight={sizes.sm}  >
        <Block onPress={() => { alert("Pressable  ") }}>
          <Block row >
            <Block flex={0.4} padding={10} >
              <Image
                width={sizes.width * 0.20}
                height={sizes.width * 0.20}
                resizeMode="cover"
                padding={sizes.sm}
                paddingTop={0}
                source={assets.profileBackend}
              />
            </Block>
            <Block flex={1} padding={10} >
              <Block  >
                <Text b>Part1 <Text p > •</Text>2mins<Text p >•</Text> Dec 01,2021 </Text>
                <Text h5>1<Text h5 ></Text> Start of the war</Text>
              </Block>
              <Block row align="center" >
                <Image source={icons.location} marginRight={sizes.s} />
                <Text p size={12} semibold>
                  pll
                </Text>
                <Text p bold marginHorizontal={sizes.s}>
                  •
                </Text>
                <Image source={icons.star} marginRight={sizes.s} />
                <Text p size={12} semibold>
                  5/5
                </Text>
                <Image source={icons.star} marginRight={sizes.s} />
                <Text p size={12} semibold>
                  Comments
                </Text>
              </Block>

            </Block>
          </Block>
        </Block>
      </Block>
    </Block>

  );
};
const Episode = (props) => {
  const { translations } = useData();
  const { assets, colors, gradients, sizes, icons, } = useTheme();
  return (
    <Block>
      <Block align="center"  >
        <Block>
          <Block align="center" marginTop={'5%'}  >
            <Image
              width={sizes.width * 0.75}
              height={sizes.width * 0.60}
              resizeMode="cover"
              padding={sizes.sm}
              paddingTop={0}
              // radius={360}
              source={assets.profileBackend}
            />
          </Block>
          <Block marginTop={10}>
            <Button
              gradient={gradients.info}

              onPress={() => {
                alert(
                  ' <Button flex={1} gradient={gradients.info} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
                );
              }}>
              <Text white bold transform="uppercase">
                paly
              </Text>
            </Button>
          </Block>
        </Block>
      </Block>
      <Block marginLeft={'3%'} marginRight={'7%'} >
        <Text>BOOK SUMMARY | 127MINS</Text>
        <Text h4>The war and the heros</Text>
      </Block>
      {/* <Block row  marginLeft={'7%'} marginRight={'7%'} align="center" >
        <Image
          width={sizes.width * 0.15}
          height={sizes.width * 0.15}
          resizeMode="cover"
          padding={sizes.sm}
          paddingTop={0}
          radius={360}
          source={assets.profileBackend}
        />
        <Text h4>Avadhesh Srivastava</Text>
      </Block> */}
      <Block marginLeft={'7%'} marginRight={'7%'}>
        <Text sizes={22}>Paise banana ek art hai aur jo is kala mein maahir ho gaya, paise banana uske liye ek game ban jaata hai. Is khel mein maza toh boht aata hai magar saath risk bhi utni hi hoti hai. Lekn jaha risk.</Text>
      </Block>
      <Block row marginLeft={'7%'} marginRight={'7%'}>
        <Block>
          <Text h5>Urdu</Text>
        </Block>
        <Block>
          <Text h5>Listen 34,57,332</Text>
        </Block>
      </Block>
    </Block>
  )
}
const OldEpisodes = (props) => {
  return (
    <Block>
      <Block padding={15} flex={1}  >
        <Text h5>15 Episode</Text>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Block>
    </Block>
  )
}
const Comment = (props) => {
  const { translations } = useData();
  const { assets, colors, gradients, sizes, icons, } = useTheme();
  return (
    <Block >

      <Block row>
        <Block flex={0} padding={10}>
          <Image
            width={40}
            height={40}
            resizeMode="cover"
            padding={sizes.sm}
            paddingTop={0}
            radius={360}
            source={assets.profileBackend}
          />
        </Block>
        <Block>
          <Text h5>Avadhesh Srivastava</Text>
          <Text b>Paise banana ek art hai aur jo is kala mein maahir ho gaya, paise banana uske  </Text>
        </Block>
      </Block>
    </Block>
  )
}
const Comments = (props) => {
  const [showCommentsModal, setCommentsModal] = useState(false);
  const { translations } = useData();
  const { assets, colors, gradients, sizes, icons, } = useTheme();
  return (
    <Block padding={10} backgroundColor={'#F9F6F3'} >
      <Block onPress={() => { setCommentsModal(true) }} >
        <Block row padding={10} >
          <Block >
            <Text>Comments 28</Text>
          </Block>
          <Block justify="center" align="center">
            <Image
              height={10}
              width={13}
              source={assets.arrow}
              style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }} margin={undefined} marginVertical={undefined} marginHorizontal={undefined} marginLeft={undefined} marginRight={undefined} marginTop={undefined} marginBottom={undefined} padding={undefined} paddingVertical={undefined} paddingHorizontal={undefined} paddingLeft={undefined} paddingRight={undefined} paddingTop={undefined} paddingBottom={undefined} />
          </Block>
        </Block>
        <Comment />
      </Block>
      <Modal position={"bottom"} visible={showCommentsModal} onRequestClose={() => setCommentsModal(false)}>
        <ScrollView >
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </ScrollView>
      </Modal>
    </Block>
  )
}
export default function Home() {
  const { translations } = useData();

  const { assets, colors, gradients, sizes, icons, } = useTheme();
  {/* <Block onPress={() => { alert("Pressable  ") }}> */ }

  return (
    <Block safeScroll flex={1}  >
      <Episode />
      <Comments />
      <OldEpisodes />
      {/* ======================================================================================== */}
      {/* ======================================================================================== */}
    </Block >
  );
} 