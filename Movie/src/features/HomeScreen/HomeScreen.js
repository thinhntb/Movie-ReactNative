import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native'
import { styles } from './HomeScreenStyle/HomeScreenStyle'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ReadMore from '@fawazahmed/react-native-read-more'

export default Home = () => {
  const navigation = useNavigation()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isLike, setIsLike] = useState(false)
  const [pageCurrent, setPageCurrent] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [refreshing, setRefreshing] = useState(false)

  const onLogout = () => {
    AsyncStorage.clear()
    navigation.navigate('AuthStack')
  }

  const getListMovies = async () => {
    await axios({
      url: `http://training-movie.bsp.vn:82/movie/list?per_page=5&page=${pageCurrent}`,
      method: 'GET',
      headers: {
        app_token: 'dCuW7UQMbdvpcBDfzolAOSGFIcAec11a',
      },
    })
      .then((result) => {
        console.log(result)
        const list = result.data.data
        const total_pages = result.data.paging.total_pages
        const data = list.map((item) => {
          return {
            ...item,
            isLike: false,
          }
        })
        setData((pre) => pre.concat(data))
        setTotalPage(total_pages)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log('Request API Error : ', error)
      })
  }

  // const getListMovies = async () => {
  //   setIsLoading(true)
  //   await axios({
  //     url: `http://training-movie.bsp.vn:82/movie/list?current_page=5&per_page=${pageCurrent}&total_pages=1`,
  //     method: 'GET',
  //     headers: {
  //       app_token: 'dCuW7UQMbdvpcBDfzolAOSGFIcAec11a',
  //     },
  //   })
  //     .then((result) => {
  //       setIsLoading(true)
  //       console.log(result)
  //       const list = result.data.data
  //       const total_pages = result.data.paging.total_pages
  //       const data = list.map((item) => {
  //         return {
  //           ...item,
  //           isLike: false,
  //         }
  //       })
  //       setData(data)
  //       setTotalPage(total_pages)
  //       setIsLoading(false)
  //     })
  //     .catch((error) => {
  //       console.log('Request API Error : ', error)
  //     })
  //     .finally(() => console.log('err'))
  // }

  useEffect(() => {
    setIsLoading(true)
    getListMovies()
    return () => {}
  }, [pageCurrent])

  const renderFooter = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null
  }

  const onRefresh = () => {
    //Clear old data of the list
    // setData([])
    //Call the Service to get the latest data
    // getListMovies()
    // console.log(data)
  }

  const handleLoadMore = () => {
    // setPageCurrent(pageCurrent + 1)
    // setIsLoading(true)
    // console.log(pageCurrent, totalPage)
    // if (pageCurrent > totalPage) {
    //   console.log('pause')
    // }
    if (pageCurrent > totalPage) {
      setIsLoading(false)
    } else {
      setIsLoading(true)
      setPageCurrent(pageCurrent + 1)
    }
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  {
    /*Bắt sự kiện cho button xem phim khi chưa đăng nhập thì chuyển đăng nhập
 ngược lại thì nhảy vào detail  */
  }
  const handleChangeDetail = async (item /*Phải truyền Item  */) => {
    try {
      const token = await AsyncStorage.getItem('accessToken')
      if (token !== null) {
        navigation.push('Detail', {
          id: item.id,
          title: item.title,
          image: item.image,
          category: item.category,
          actor: item.actor,
          director: item.director,
          manufacturer: item.manufacturer,
          duration: item.duration,
          description: item.description,
          link: item.link,
          isLike: item.isLike,
        })
      } else {
        console.log('not token')
        navigation.navigate('AuthStack')
      }
    } catch (e) {
      console.log('er', e.message)
    }
  }

  /*Clear Token */
  // useEffect(() => {
  //   return () => {
  //     AsyncStorage.clear()
  //   }
  // }, [])

  const handleLiked = (item) => {
    item.isLike = !item.isLike
    const index = data.findIndex((movie) => movie.id === item.id)
    data[index] = item
    setData([...data])
  }

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.img}
          source={{
            uri: item.image,
          }}
          resizeMode="contain"
        />
        <View style={styles.warpText}>
          <View style={styles.viewIn}>
            <Text style={styles.fontSize}>{item.title} </Text>
            <Text style={styles.textView}>{'Lượt Xem: ' + item.views}</Text>
            <ReadMore
              numberOfLines={5}
              seeMoreText="Xem Thêm"
              seeLessText="Ít Hơn"
              style={styles.fontSize}>
              {item.description}
            </ReadMore>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btnLike}
              onPress={() => handleLiked(item)}>
              <Icon
                name={item.isLike ? 'heart' : 'heart'}
                size={20}
                color={item.isLike ? 'red' : 'white'}
              />
              <Text style={styles.textLike}>Thích</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnXemPhim}
              onPress={() => handleChangeDetail(item)}>
              <Text style={styles.textBtn}>Xem Phim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require('../../asset/img/bg.png')}>
        <View style={styles.container}>
          <View style={styles.viewLogOut}>
            <Text style={styles.textLogOut}>LogOut</Text>
            <TouchableOpacity style={styles.logOut} onPress={onLogout}>
              <Icon name="sign-out" size={30} color="white" />
            </TouchableOpacity>
          </View>
          {refreshing ? <ActivityIndicator /> : null}
          <FlatList
            style={styles.container}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id + index.toString()}
            extraData={data}
            ListFooterComponent={renderFooter}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
