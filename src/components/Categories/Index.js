import React from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CategoryStyle from './styles';


const Categories = ({categories, selectedCategory, onCategoryPress}) => {
    return (
      <View>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={item => String(item?.value)}
          showsHorizontalScrollIndicator={false}
          style = {{paddingHorizontal: 20}}
          renderItem={({item, index}) => {
            const selected = selectedCategory === item?.value;
            const displayName = item?.label
            return (
              <TouchableOpacity
                onPress={() => onCategoryPress(item?.value)}
                style={[
                  CategoryStyle.itemConatiner,
                  selected ? CategoryStyle.selectedItemContainer : {},
                ]}>
                <Text
                  style={[
                    CategoryStyle.item,
                    selected ? CategoryStyle.selectedItem : {},
                  ]}>
                  {displayName}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };
  
  export default Categories;
  