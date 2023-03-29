import React, {FC, useEffect, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Modal, Portal} from 'react-native-paper';

type Props = {
  source?: ImageSourcePropType;
  size: number;
  nonClickable: boolean;
};

const Avatar: FC<Props> = ({source, size, nonClickable}) => {
  const PLACEHOLDER_IMAGE =
    '///+VlZWpqan19fXV1dWzs7POzs7c3Nybm5vFxcWhoaHv7+/8/PyYmJjm5ubDw8PUYjtbAAACL0lEQVR4Xu3XsWtTURQG8FMbjZqS9AtJ1eATA04q6GRdhCro2gTcBNugqxBxcHFQ3Jz0P0g6OTgEwV1dBBcJgqtxcA9iNwWH9CV9ycX3vXOgbzm/PRfezXfv/Y6EOeecc86t777Gi61HYrd8AxPnLpuX+ovYd+NiKw8w8+29WLzFfhfEoDjEflFX9K4jqSZqBczbEK2HmHdClEpDzIsGovMRiy6KTgeL1pSRH2JRpAt/BSFj0biGkK/GoNrj2kRIVbX1CNNsfhFhXdPfaP8jDyOsJdkdR1hPsjuKsKeS3RLCVvNai/9G+97nmgl7Vu1nyH627XeO/S7M/Y7m3w77m2Z/a/PsAPZuYu9M9i5n75j27pt7J1//1a8PArNCqd24lHE0+hn/NjHDxGvflQzexd+UmK1m33xHaIV4y//MzXxfMBHx2XiFPY3kbwp97DklpGOYqj6RmU9NTL1UJLRxT2JX+tlTW0bC7clxLt1Ewkh11Zzcuv/41u4z1eXTAWNNezVrL+sj4GxLuqvgPKcSwanpnn5tGSiBNSC2nrWtqYPqgvgBrNOS5gdYZyTFSgcE8hS1wapLmj5YDVXjVbbgMngjotWzunTs7cGvgDcmjhApatFr2Q/kIfDOEhMoq6eZjJXT8hJ4q76Wdu/t+TrA3BfA2+CfbfvD3QSrqqg5+qLzGaw3RItmjRTV11B+K+CMD7iTS5mJRXUklGIbaepdIS1vnsf/7PyeVgnnnHPOuX/pixEWRBiVqwAAAABJRU5ErkJggg==';

  const [IsVisible, setIsVisible] = useState<boolean>(false);
  const [imageSource, setImageSource] = useState<ImageSourcePropType>({
    uri: `data:image/png;base64,${PLACEHOLDER_IMAGE}`,
  });

  useEffect(() => {
    if (source) {
      setImageSource(source);
    }
  }, [source]);

  const styles = StyleSheet.create({
    container: {
      borderColor: 'red',
      backgroundColor: 'transparent',
      elevation: 10
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 1,
      borderWidth: 10,
    },
    modalOpen: {
      alignItems: 'center',
      height: size,
      justifyContent: 'center',
      width: size,
    },
    mainImage: {
      height: size,
      width: size,
      borderRadius: nonClickable ? 10 : 2,
      borderWidth: 1,
      borderColor: 'black',
      elevation: 10
    },
  });

  return (
    <View style={styles.container}>
      <Portal>
        <Modal visible={IsVisible}>
          <View>
            <TouchableWithoutFeedback
              onPress={() => {
                setIsVisible(false);
              }}>
              <Image
                resizeMode={'contain'}
                source={imageSource}
                style={styles.image}
              />
            </TouchableWithoutFeedback>
          </View>
        </Modal>
      </Portal>
      <TouchableOpacity
        disabled={nonClickable ? true : false}
        style={styles.modalOpen}
        onPress={() => {
          setIsVisible(true);
        }}>
        <Image source={imageSource} style={styles.mainImage} />
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;
