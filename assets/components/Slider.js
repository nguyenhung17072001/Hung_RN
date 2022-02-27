import React, {useState, useRef, useEffect} from "react";
import { 
    View, 
    Text, 
    StyleSheet ,
    SafeAreaView, 
    Image, 
    Dimensions, 
    TouchableOpacity,
    FlatList,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons"
import RealApp from "./RealApp";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const slides = [
  {
    key: 1,
    title: 'CÁ NHÂN HÓA THEO BÁC SĨ',
    text: 'Thông tin được cá nhân hóa theo tài khoản của bạn',
    image: require('../image/slider1.png'),
    backgroundColor: 'white',
    
  },
  {
    key: 2,
    title: 'Quản lý thông tin bệnh nhân',
    text: 'Thông tin bệnh nhân được lưu trữ nhanh chóng và hiệu quả',
    image: require('../image/slider2.png'),
    backgroundColor: 'white',
    
  },
  {
    key: 3,
    title: 'Lịch hẹn khám',
    text: 'Thông báo và nhắc nhở lịch hẹn khám và lịch tái khám',
    image: require('../image/slider3.png'),
    backgroundColor: 'white',
    
  }
];

const Slider = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [footer, setFooter] = useState(true)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const done =()=>{
    setShowRealApp(true);
  }
  useEffect(()=>{
      if(currentSlideIndex==2) {
          setFooter(false);
      }
      if(currentSlideIndex<2) {
          setFooter(true)
      }
  }, [currentSlideIndex])

  
  
  const updateCurrentSlideIndex = (e) => {
      const contentOffsetX = e.nativeEvent.contentOffset.x;
      const currentIndex = Math.round(contentOffsetX/WIDTH)
      setCurrentSlideIndex(currentIndex)
  } 
  
  const ref = useRef();
  const nextSlide = () => {
      const nextSlideIndex = currentSlideIndex +1;
      if(nextSlideIndex != slides.length) {
        const offset = nextSlideIndex * WIDTH;
        ref?.current.scrollToOffset({offset});
        setCurrentSlideIndex(nextSlideIndex);
        
      }
      
    
      
  }
  const backSlide=()=> {
      const backSlideIndex = currentSlideIndex - 1;
      if(backSlideIndex!= slides.length) {
          const offset = backSlideIndex * WIDTH;
          ref?.current.scrollToOffset({offset});
          setCurrentSlideIndex(backSlideIndex);
          return
      }

  }
    const Footer = () => {
        return (
            <View style={styles.tabbottom}><TouchableOpacity
                activeOpacity={0.8}
                onPress={backSlide}
                style={[styles.button, { backgroundColor: 'white', borderWidth: 1, borderColor: '#D6D6D6' }]}>
                <Icon
                    name="chevron-back"
                    color="#B9B8B8"
                    size={24} />
            </TouchableOpacity><View style={{ justifyContent: 'center', flexDirection: 'row' }}>

                    {slides.map((_, index) => (
                        <View key={index}
                            style={[styles.indicator, currentSlideIndex == index && {
                                backgroundColor: '#19769F',
                                width: 18,
                            }]} />
                    ))}

                </View><TouchableOpacity style={styles.button} onPress={nextSlide} activeOpacity={0.8}>
                    <Icon
                        name="chevron-forward"
                        color="white"
                        size={24} />
                </TouchableOpacity></View>
        )
    }
    return(
   
        showRealApp? <RealApp /> : (
            <SafeAreaView style={styles.container}>
            <FlatList
            data={slides}
            ref = {ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            key={(item)=>item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled

            renderItem={(({item})=>(
                <View style={styles.slide} >
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={{height: HEIGHT*4/4, width: WIDTH*3/4}} resizeMode='contain' source={item.image} />
                    </View>
                    <View style={styles.tab}>
                        <Text style={{fontSize: 20, marginTop: 20}}>{item.title}</Text>
                        <Text style={{fontSize: 14, marginTop: 16, textAlign: 'center'}}>{item.text}</Text>
                    </View>
                    
                </View>
            ))}
            
            />
            {footer? <Footer /> : (
                <View style={{justifyContent: 'center', alignItems: 'center', height: 100, width: WIDTH}}>
                    <TouchableOpacity style={styles.startButton} onPress={done}>
                        <Text style={{color: 'white'}}>Bắt đầu ngay</Text>
                        
                    </TouchableOpacity>
                </View>
                
            )}
        </SafeAreaView>
        )
        
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    width: WIDTH,
    height: HEIGHT/2-20,
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    alignItems: 'center'
  },
  
  tabbottom: {
      flexDirection: 'row',
      width: WIDTH,
      height: 100,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white'
  },
  button: {
    backgroundColor: '#19769F',
    height: 40,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  indicator: {
      width: 6,
      height: 6,
      borderRadius: 4,
      backgroundColor: "#B9B8B8",
      marginHorizontal: 2,
      
  },
  startButton: {
      backgroundColor: '#19769F',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      height: 54,
      width: WIDTH-80,
  }
})

export default Slider;