import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, TouchableOpacity, StyleSheet, View } from 'react-native';
import Colors from './constants/colors';
import Fonts from './constants/fonts';
import { CountryPicker } from 'react-native-country-codes-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const UIScreen = () => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const handleCountrySelect = country => {
    setCountryCode(country.cca2);
    setShow(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.HeadingText}>Join us via phone number</Text>
      <Text style={styles.HeadingSubText}>We'll text a code to your phone</Text>
      <CountryPicker
        show={show}
        pickerButtonOnPress={item => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
      />
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={styles.pickerTo}>
        <View style={styles.txtinpView}>
          {countryCode ? (
            <Text style={styles.pickerTxt}>{countryCode}</Text>
          ) : (
            <MaterialIcons
              name="expand-circle-down"
              style={styles.pickerIcon}
            />
          )}
          <TextInput
            style={styles.textiS}
            autoCapitalize="none"
            placeholder="Phone Number"
            placeholderTextColor="white"
            keyboardType="number-pad"
          />
        </View>
      </TouchableOpacity>

      {show && (
        <CountryPicker
          {...{
            countryCode,
            withFilter: true,
            withFlag: true,
            withCountryNameButton: true,
            withAlphaFilter: true,
            onSelect: handleCountrySelect,
          }}
        />
      )}
      <TouchableOpacity style={styles.btnNext}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Joining our app means you agree with our {' '}
          <Text style={[styles.footerText, { textDecorationLine: 'underline' }]}>
            Terms of Use
          </Text>
          {' '} and {' '}
          <Text style={[styles.footerText, { textDecorationLine: 'underline' }]}>
            Privacy {'\n'} Policy
          </Text>
        </Text>
      </View>

    </SafeAreaView>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,

  },
  HeadingText: {
    marginTop: responsiveHeight(14),
    fontFamily: Fonts.PoppinsBold,
    fontSize: responsiveFontSize(2),
    color: Colors.white
  },
  HeadingSubText: {
    marginTop: responsiveHeight(1),
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(1.5),
    color: Colors.transparent
  },
  txtinpView: {
    marginTop: responsiveHeight(10),
    flexDirection: 'row',
    width: responsiveWidth(80),
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: Colors.grey,
    borderColor: Colors.skyBlue,
    borderWidth: 2,
    padding: 1.7,
    opacity: 0.5,
  },
  textiS: {
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    left: 10,
    flexWrap: 'wrap',
    color: Colors.white,
  },
  pickerTo: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    // alignItems: 'center',
  },
  pickerTxt: {
    padding: 12,
    marginLeft: 4,
    marginRight: 4,
    // fontSize: responsiveFontSize(2),
    width: responsiveWidth(16),
    height: responsiveHeight(5.3),
    color: Colors.white,
  },
  pickerIcon: {
    marginHorizontal: 10,
    fontSize: responsiveFontSize(2),
    color: Colors.white,
  },
  btnNext: {
    marginTop: responsiveHeight(2),
    width: responsiveWidth(80),
    height: responsiveHeight(5.3),
    backgroundColor: Colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(2),
    color: Colors.black
  },
  footerView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(3),
    justifyContent: 'center',
    alignContent: 'center'
  },
  footerText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(1.2),
    color: Colors.transparent,
    textAlign: 'center'
  }

});
export default UIScreen;

