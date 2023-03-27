import React from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';

type HeroCarouselItem<T> = {
  item: T;
  index: number;
};

type HeroCarouselProps<T> = {
  items: T[];
  renderItem: (item: T) => JSX.Element;
  title?: string;
};

const HeroCarousel = <T extends {}>({
  items,
  renderItem,
  title,
}: HeroCarouselProps<T>): JSX.Element => {
  const {width: windowWidth} = Dimensions.get('window');
  const ITEM_WIDTH = windowWidth * 0.7;
  const ITEM_MARGIN = (windowWidth - ITEM_WIDTH) / 2;

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={items}
        keyExtractor={(item, index) => `${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + ITEM_MARGIN * 2}
        snapToAlignment="center"
        contentContainerStyle={styles.carousel}
        renderItem={({item, index}: HeroCarouselItem<T>) => (
          <View
            style={[
              styles.itemContainer,
              {
                marginLeft: index === 0 ? ITEM_MARGIN : 0,
                marginRight: index === items.length - 1 ? ITEM_MARGIN : 10,
              },
            ]}>
            {renderItem(item)}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  carousel: {
    paddingHorizontal: 0,
  },
  itemContainer: {
    width: 'auto',
    marginHorizontal: 5,
  },
});

export default HeroCarousel;
