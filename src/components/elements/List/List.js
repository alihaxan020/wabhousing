import * as React from 'react';
import {FlatList} from 'react-native';
import useThemeColors from '../../../custom-hooks/useThemeColors';
import ListRowItem from './ListRowItem';
import styles from './styles';

const List = ({
  data,
  renderItem,
  contentContainerStyle,
  ItemSeparatorComponent,
  ...rest
}) => {
  const {card} = useThemeColors();

  const _renderDefaultItem = ({item}) => {
    return <ListRowItem {...item} />;
  };

  return (
    <FlatList
      {...rest}
      keyExtractor={(item, index) => `${item.id} - ${index}`}
      data={data}
      contentContainerStyle={[
        {
          backgroundColor: card,
        },
        styles.contentContainer,
        contentContainerStyle,
      ]}
      ItemSeparatorComponent={ItemSeparatorComponent}
      renderItem={renderItem || _renderDefaultItem}
    />
  );
};

export default List;
