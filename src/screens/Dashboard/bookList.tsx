import React, { useState, useLayoutEffect } from 'react';
import { Block, Button, Modal, Text, Input, Image, Switch } from '../../components/';
import { ImageBackground, Dimensions, View, TouchableOpacity, FlatList } from 'react-native';
import { useTheme, useData } from '../../hooks/';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableWithoutFeedback } from 'react-native';
const Cards = (props) => {
  const { assets, colors, gradients, sizes } = useTheme();

  return (
    <Block >
      <Block row marginTop={10} style={{ height: 250 }}>
        <Block card marginRight={sizes.sm}  >
          <Image
            resizeMode="cover"
            source={{ uri: props.url_1 }}
            style={{ width: '100%', height: '50%' }}
          />
          <Block padding={sizes.s} justify="space-between">
            <Text p marginBottom={sizes.s}>
              New ways to meet your business goals.
            </Text>
          </Block>
        </Block>
        <Block card>
          <Image
            resizeMode="cover"
            source={{ uri: props.url_2 }}
            style={{ width: '100%', height: '50%' }}
          />
          <Block padding={sizes.s} justify="space-between">
            <Text p marginBottom={sizes.s}>
              The highest status people.
            </Text>
          </Block>
        </Block>
      </Block>

    </Block>
  );
};

const App = (props) => {
  const [showModal, setModal] = useState(false);
  const [quantity, setQuantity] = useState('01');

  const [tag_1, setTag_1] = useState('All');
  const [tag_2, setTag_2] = useState('All');
  const [tag_3, setTag_3] = useState('All');
  const [tag_4, setTag_4] = useState('All');

  const [showTag_1, setShowTag_1] = useState(false);
  const [showTag_2, setShowTag_2] = useState(false);
  const [showTag_3, setShowTag_3] = useState(false);
  const [showTag_4, setShowTag_4] = useState(false);

  const { assets, colors, gradients, sizes, icons, } = useTheme();
  const { isDark} = useData();
  return (
    <Block safeScroll flex={1}  >
      <Block padding={15} flex={1}   >
        <Input search placeholder="Search" />
        <Block row
          scroll
          horizontal
          paddingLeft={2} 
          renderToHardwareTextureAndroid
          showsHorizontalScrollIndicator={false}
          contentOffset={{ x: -sizes.padding, y: 0 }}
        >
          <Button
            flex={1}
            row
            style={{width:150,padding:3}}
            gradient={isDark?gradients.info:gradients.dark}
            onPress={() => setShowTag_1(true)}>
            <Block
              row
              align="center"
              justify="space-between"
              paddingHorizontal={sizes.sm}>
              <Text white bold transform="uppercase" marginRight={sizes.sm}>
              {tag_1}
              </Text>
              <Image
                source={assets.arrow}
                color={colors.white}
                transform={[{ rotate: '90deg' }]}
              />
            </Block>
          </Button>
          <Button
            flex={1}
            row
            style={{width:150,padding:3}}
            gradient={isDark?gradients.info:gradients.dark}
            onPress={() => setShowTag_2(true)}>
            <Block
              row
              align="center"
              justify="space-between"
              paddingHorizontal={sizes.sm}>
              <Text white bold transform="uppercase" marginRight={sizes.sm}>
                {tag_2}
              </Text>
              <Image
                source={assets.arrow}
                color={colors.white}
                transform={[{ rotate: '90deg' }]}
              />
            </Block>
          </Button>
          <Button
            flex={1}
            style={{width:150,padding:3}}
            row
            gradient={isDark?gradients.info:gradients.dark}
            onPress={() => setShowTag_3(true)}>
            <Block
              row
              align="center"
              justify="space-between"
              paddingHorizontal={sizes.sm}>
              <Text white bold transform="uppercase" marginRight={sizes.sm}>
                {tag_3}
              </Text>
              <Image
                source={assets.arrow}
                color={colors.white}
                transform={[{ rotate: '90deg' }]}
              />
            </Block>
          </Button>
          <Button
            flex={1}
            row
            style={{width:150,padding:3}}
            gradient={isDark?gradients.info:gradients.dark}
            onPress={() => setShowTag_4(true)}>
            <Block
              row
              align="center"
              justify="space-between"
              paddingHorizontal={sizes.sm}>
              <Text white bold transform="uppercase" marginRight={sizes.sm}>
                {tag_4}
              </Text>
              <Image
                source={assets.arrow}
                color={colors.white}
                transform={[{ rotate: '90deg' }]}
              />
            </Block>
          </Button>
        </Block>
      </Block>
      <Block padding={15} paddingTop={1} flex={1}   >
        <Cards url_1='https://edit.org/photos/editor/json/2021/10/01/f/1/f138d23cb50c92bff3b3b9200e09fa04_edit.org.jpg-376.jpg' url_2='https://edit.org/photos/editor/json/2021/10/01/e/4/e4c35da4496e6f5c47374a40820754b8_edit.org.jpg-376.jpg' />
        <Cards url_1='https://media.istockphoto.com/vectors/abstract-minimal-geometric-circle-background-for-business-annual-vector-id1210701957?k=20&m=1210701957&s=612x612&w=0&h=FcOUXSrxlHnJztn-U_JSQ0X-VyyUtLKRV4QXSHfprvs=' url_2='https://media.istockphoto.com/vectors/abstract-minimal-geometric-background-for-business-annual-report-book-vector-id1190811963?k=20&m=1190811963&s=612x612&w=0&h=ILE1Z1jVxjXLqMQFnnlp85o7h7ssAgqV1HiXdj0y7mI=' />
        <Cards url_1='https://media.istockphoto.com/vectors/minimalist-cover-design-vector-id1017650088?k=20&m=1017650088&s=612x612&w=0&h=bPP3nhFQGCaPIBUMJXxcZEiAVQsIFDtTaYyv626iZnE=' url_2='https://media.istockphoto.com/vectors/cover-design-for-product-presentation-creative-layout-of-booklet-vector-id1191649228?k=20&m=1191649228&s=612x612&w=0&h=kaW7PvKqsawcFEfN1H0FoIdZ8Mp50mYDBH9cw6Rvotg=' />
        <Cards url_1='https://media.istockphoto.com/vectors/corporate-book-cover-design-template-in-a4-vector-id1322433208?k=20&m=1322433208&s=612x612&w=0&h=rtwN1OMCR3ZY34QZ8ewc-PEsKgh-leGlJoS77PXAlzE=' url_2='data:image/jpeg;base64,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' />
        <Cards url_1='https://i.pinimg.com/originals/3f/56/fd/3f56fdacff697f8b003b7882aae2f179.jpg' url_2='https://marketplace.canva.com/EAD7WuSVrt0/1/0/1003w/canva-colorful-illustration-young-adult-book-cover-LVthABb24ik.jpg' />
        <Cards url_1='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/teal-and-orange-fantasy-book-cover-design-template-056106feb952bdfb7bfd16b4f9325c11.jpg?ts=1637018051' url_2='data:image/jpeg;base64,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' />
      </Block>


      <Modal position={"bottom"} visible={showTag_1} onRequestClose={() => setShowTag_1(false)}>
        <FlatList
          keyExtractor={(index) => `${index}`}
          data={['All','Full Book', 'Novel', 'Web Novel', 'Light Noverl']}
          renderItem={({ item }) => (
            <Button
              marginBottom={sizes.sm}
              onPress={() => {
                setTag_1(item);
                setShowTag_1(false);
              }}>
              <Text p semibold transform="uppercase">
                {item}
              </Text>
            </Button>
          )}
        />
      </Modal>
      <Modal position={"bottom"} visible={showTag_2} onRequestClose={() => setShowTag_2(false)}>
        <FlatList
          keyExtractor={(index) => `${index}`}
          data={['All','Kids', 'Women', 'Men', 'Old']}
          renderItem={({ item }) => (
            <Button
              marginBottom={sizes.sm}
              onPress={() => {
                setTag_2(item);
                setShowTag_2(false);
              }}>
              <Text p semibold transform="uppercase">
                {item}
              </Text>
            </Button>
          )}
        />
      </Modal>
      <Modal position={"bottom"} visible={showTag_3} onRequestClose={() => setShowTag_3(false)}>
        <FlatList
          keyExtractor={(index) => `${index}`}
          data={['All','Biography', 'Comedy', 'Crime', 'Historical', 'Motivation','Love']}
          renderItem={({ item }) => (
            <Button
              marginBottom={sizes.sm}
              onPress={() => {
                setTag_3(item);
                setShowTag_3(false);
              }}>
              <Text p semibold transform="uppercase">
                {item}
              </Text>
            </Button>
          )}
        />
      </Modal>
      <Modal position={"bottom"} visible={showTag_4} onRequestClose={() => setShowTag_4(false)}>
        <FlatList
          keyExtractor={(index) => `${index}`}
          data={['All','2022', '2021', '2020', '2019', '2018']}
          renderItem={({ item }) => (
            <Button
              marginBottom={sizes.sm}
              onPress={() => {
                setTag_4(item);
                setShowTag_4(false);
              }}>
              <Text p semibold transform="uppercase">
                {item}
              </Text>
            </Button>
          )}
        />
      </Modal>
    </Block >
  );

};
export default App;
