import React, { useState } from 'react';
import { Block, Button, Modal, Text, Input, Image } from '../components/';
import { View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme, useData } from '../hooks/';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';




const App = (props) => {
    const navigation = props.navigation;
    const { translations, isDark } = useData();
    const { assets, colors, gradients, sizes } = useTheme();
    const [showModal, setModal] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // <Modal visible={showSuccessModal} onRequestClose={() => setSuccessModal(false)}>
    const [showSuccessModal, setSuccessModal] = useState(false);
    const [showFailModal, setFailModal] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [filePath, setFilePath] = useState('https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg');

    return (
        <Block safeScroll flex={1} scroll padding={20} paddingTop={0}>
            <Block shadow={true} flex={0}  >
                <Image
                    // height={170}
                    height={200}
                    width={'100%'}
                    resizeMode="cover"
                    source={require('../../assets/radio.png')}
                    // source={{ uri:'https://img.freepik.com/free-psd/isolated-grey-hoodie-front_125540-1234.jpg?w=1060&t=st=1661433900~exp=1661434500~hmac=1ecd591a1f20a703fcb7ae38c81737fc311fdbcef132f3b0edb1e99b23e24a3f'}}
                />
                <Text h3 marginBottom={'5%'}>{translations.signup.title}</Text>
                {/* <Block justify="center" align="center" >
                    <TouchableOpacity onPress={() => {
                        ImagePicker.openPicker({
                            multiple: false
                        }).then(images => {
                            setFilePath(images.path);
                        });;
                    }}>
                        <Image
                            source={{ uri: filePath }}
                            radius={360}
                            style={{
                                width: 100, height: 100,
                            }} />

                    </TouchableOpacity>
                </Block> */}
                {/* <Text h5 bold marginLeft={4}>{translations.signup.firstNameLabel}</Text> */}
                <Input styleBox={{ borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0 }} onChangeText={(value) => { setFirstName(value) }} placeholder={translations.signup.firstNameInput} marginBottom={sizes.sm} />
                {/* <Text h5 bold marginLeft={4}>{translations.signup.lastNameLabel}</Text> */}
                <Input styleBox={{ borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0 }} onChangeText={(value) => { setLastName(value) }} placeholder={translations.signup.lastNameInput} marginBottom={sizes.sm} />
                {/* <Text h5 bold marginLeft={4}>{translations.signup.emailLabel}</Text> */}
                <Input styleBox={{ borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0 }} onChangeText={(value) => { setEmail(value) }} vactoricon vactorIconSize={20} vactorIconName="email" vactorIconType="Entypo" vactorIconColor={colors.contrasting} placeholder={translations.signup.emailInput} marginBottom={sizes.sm} />
                {/* <Text h5 bold marginLeft={4}>{translations.signup.passwordLabel}</Text> */}
                <Input styleBox={{ borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0 }} onPress={() => { setPasswordVisibility(!passwordVisibility) }} password secureTextEntry={passwordVisibility} onChangeText={(value) => { setPassword(value) }} vactoricon vactorIconSize={22} vactorIconName="lock" vactorIconType="Entypo" vactorIconColor={colors.contrasting} placeholder={translations.signup.passwordInput} marginBottom={sizes.sm} />
                {/* <Button onPress={() => setModal(true)}>
                    <Text p >{translations.signup.text1}<Text p bold italic>{translations.signup.text2}</Text> {translations.signup.text3} <Text p bold italic>{translations.signup.text4}</Text></Text>
                </Button>  */}
                <Button
                    marginVertical={sizes.s}
                    marginHorizontal={sizes.sm}
                    onPress={async () => {
                        if (firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0 && filePath !== 'https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg') {
                            setFailModal(true);
                            setErrorMessage("Ready To go");
                        }
                    }}
                    gradient={isDark ? gradients.info : gradients.dark}>
                    <Text bold white transform="uppercase">
                        {translations.signup.signUpLabel}
                    </Text>
                </Button>
            </Block>
         

            <Modal visible={showSuccessModal} onRequestClose={() => setSuccessModal(false)}>

                <ScrollView >
                    <Block flex={1} justify="center" align="center" >
                        <Image
                            // height={170}
                            height={170}
                            width={170}
                            resizeMode="cover"
                            source={assets.success}
                        />
                    </Block>
                    <Block justify="center" align="center" marginBottom={'5%'} marginTop={'5%'} flex={1}>
                        <Text h5 >Account Created Successfully</Text>
                    </Block>
                </ScrollView>
            </Modal>
            <Modal visible={showFailModal} onRequestClose={() => setFailModal(false)}>
                <ScrollView >
                    <Block flex={1} justify="center" align="center" >
                        <Image
                            // height={170}
                            height={170}
                            width={170}
                            resizeMode="cover"
                            source={assets.fail}
                        />
                    </Block>
                    <Block justify="center" align="center" marginBottom={'5%'} marginTop={'5%'} flex={1}>
                        <Text h5 >{ErrorMessage}</Text>
                    </Block>
                </ScrollView>
            </Modal> 


            <Block justify={'center'} flex={0} marginTop={'1%'} marginHorizontal={sizes.sm} align={'center'}>
                <Button onPress={() => { navigation.push(translations.navigation.Login) }}>
                    <Text>Already have an account?<Text color={colors.primary}>{translations.signup.signInLabel}</Text></Text>
                </Button>
            </Block>
        </Block>

    );

};
export default App;
