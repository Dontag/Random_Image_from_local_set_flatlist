import { useRef, useState } from 'react';
import { FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { images } from './src/utilities/images';
import BasicButton from './src/components/button/BasicButton';
import { isIOS } from '@rneui/base';
import { colors } from './src/utilities/colors';
import { StatusBarHeight, width } from './src/utilities/utilities';

export default function App() {
  const permissionListRef = useRef<FlatList | null>(null);
  const [permissionList, setPermissionList] = useState([
    {
      key: 1,
      title: 'Hey! It seems like we might need your location?',
      subTitle: 'Play Store requires that we check that you are residing in Montana before we continue. Please enable location services to use the app.',
      image: images.locationPermission,
      type: 'location'
    },
    {
      key: 2,
      title: 'Hey! Wanna share the love with your friends and get rewarded? Easy!',
      subTitle: 'Earn $10 store credit each referral! Enable contact access to send referrals to your friends and family',
      image: images.contactPermission,
      type: 'contact'
    },
    {
      key: 3,
      title: 'Get exclusive local deals by enabling notifications!',
      subTitle: 'Stay up to date local news, product launches and exclusive deals by enabling push notifications',
      image: images.notificationPermission,
      type: 'notification'
    }

  ])

  const getImageStyles = (index: number) => {
    switch (index) {
      case 0: {
        return { height: 258.5, width: 320 }
      }

      case 1: {
        return { height: 230, width: 230 }
      }

      case 2: {
        return { height: 220, width: 106.13 }
      }

      default: {
        return { height: 220, width: 320 }
      }
    }
  }


  const renderPermissionView = ({ item, index }: { item: any, index: number }): JSX.Element => {
    return (
      <View style={[styles.__permissionItemContainer, !isIOS && { marginTop: StatusBarHeight }]}>
        <View>
          <Text style={styles.__permissionTitle}>{item?.title}</Text>
          <Text style={styles.__permissionSubTitle}>{item?.subTitle}</Text>
        </View>
        <View style={styles.__imageContainer}>
          <ImageBackground
            source={item?.image}
            style={getImageStyles(index)}
            // style={styles.__permissionImageContent}
            resizeMode='contain' />
        </View>
        <View style={styles.__permissionBtnContainer}>
          <BasicButton
            title="Don't Allow"
            onPress={() => {
              if (index == permissionList.length - 1) {
                //setPermission
              } else {
                permissionListRef.current.scrollToIndex({ index: index + 1, animated: true })
              }
            }}
            textStyles={styles.__permissionBtnText}
            otherStyle={styles.__secondaryPermissionBtn}
            backgroundColor={colors.white}
          />

          <BasicButton
            title='Allow Access'
            onPress={() => { }}
            textStyles={styles.__permissionBtnText}
            otherStyle={styles.__primaryPermisionButton}
          />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.__container}>
      <View style={styles.__container}>
        <FlatList
          scrollEnabled={false}
          ref={permissionListRef}
          keyExtractor={(_, index) => index.toString()}
          data={permissionList}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          nestedScrollEnabled={true}
          renderItem={renderPermissionView}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  __container: {
    flex: 1,
    backgroundColor: colors.white
  },
  __permissionItemContainer: {
    flex: 1,
    width: width,
    padding: 20,
    backgroundColor: colors.white,
  },
  __permissionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
    textAlign: 'center'
  },
  __permissionSubTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primary,
    textAlign: 'center',
    marginTop: 20
  },
  __imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  __permissionImage: {
    height: '100%',
    width: '100%'
  },
  __permissionImageContent: {
    width: 250,
    height: 250
  },
  __permissionBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    height: 39,
    width: width - 40,
    alignSelf: 'center',
  },
  __secondaryPermissionBtn: {
    height: 39,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    borderColor: colors.veryLightGreen,
  },
  __primaryPermisionButton: {
    borderWidth: 0,
    flex: 1,
    backgroundColor: colors.veryLightGreen
  },
  __permissionBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary
  },
  __dealTitle: {
    marginHorizontal: 15,
    marginTop: 20,
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold'
  },
})