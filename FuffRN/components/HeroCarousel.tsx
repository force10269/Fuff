import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

interface CarouselItem {
  title: string;
}

interface HeroCarouselProps {
  items?: CarouselItem[];
}

const screenHeight = Dimensions.get('window').height;
const carouselHeight = screenHeight * 0.17;

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  items = [{title: 'Aenean leo'}, {title: 'In turpis'}, {title: 'Lorem Ipsum'}],
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const renderItem = ({item, index}: {item: CarouselItem; index: number}) => {
    return (
      <View style={styles.carouselItem}>
        <Text style={styles.carouselTitle}>{item.title}</Text>
      </View>
    );
  };

  return (
    <>
      <Carousel
        data={items}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width * 0.6}
        onSnapToItem={i => setActiveSlide(i)}
      />
      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    backgroundColor: '#CFB87C',
    height: carouselHeight,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },
  carouselTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  paginationContainer: {
    paddingTop: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: '#565A5C',
  },
  paginationInactiveDot: {
    backgroundColor: '#A2A4A3',
  },
});

export default HeroCarousel;
