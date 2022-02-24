import React, {useState} from "react";
import { View, Text, StyleSheet , SafeAreaView, Image, Dimensions} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Icon from "react-native-vector-icons/Ionicons"

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const slides = [
  {
    key: 1,
    title: 'CÁ NHÂN HÓA THEO BÁC SĨ',
    text: 'Thông tin được cá nhân hóa theo tài khoản của bạn',
    image: require('../image/slider1.png'),
    backgroundColor: 'white',
    showPrevButton: true,
    showNextButton: true,
    showDoneButton: false,
  },
  {
    key: 2,
    title: 'Quản lý thông tin bệnh nhân',
    text: 'Thông tin bệnh nhân được lưu trữ nhanh chóng và hiệu quả',
    image: require('../image/slider2.png'),
    backgroundColor: 'white',
    showPrevButton: true,
    showNextButton: true,
    showDoneButton: false,
  },
  {
    key: 3,
    title: 'Lịch hẹn khám',
    text: 'Thông báo và nhắc nhở lịch hẹn khám và lịch tái khám',
    image: require('../image/slider3.png'),
    backgroundColor: 'white',
    showPrevButton: false,
    showNextButton: false,
    showDoneButton: true,
  }
];

const IntroSlider = () => {

  const [showRealApp, setShowRealApp] = useState(false);
  const done =()=>{
    setShowRealApp(true);
  }

  const renderItem = ({ item}) => {
    return (
      <View style={styles.slide} {...item.showPrevButton} {...item.showNextButton} {...item.showDoneButton}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{height: HEIGHT*4/4, width: WIDTH*3/4}} resizeMode='contain' source={item.image} />
        </View>
        <View style={styles.tab}>

        </View>
      </View>
    );
  }

  const renderPrevButton = () => {
    return (
      <View style={styles.button}>
        <Icon
          name="chevron-back"
          color="white"
          size={24}
        />
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.button}>
        <Icon
          name="chevron-forward"
          color="white"
          size={24}
        />
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.button} >
        
      </View>
    );
  };
    return(
    showRealApp ? <View>
        <Text>hung12345</Text>
      </View>
      : (
        <AppIntroSlider
          keyExtractor={(item)=> item.key}
          renderItem={renderItem} 
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          renderDoneButton={renderDoneButton}
          data={slides} 
          onDone={done}
          showPrevButton
          showNextButton
          showDoneButton
          
          // indicatorStyle: 
        />
        )
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    width: WIDTH,
    height: HEIGHT/2-20,
    position: 'absolute',
    backgroundColor: 'red',
    bottom: 0,
    
  },
  bottom: {
    backgroundColor: '#19769F',
    height: 40,
    width: 50,
  }
})

export default IntroSlider;