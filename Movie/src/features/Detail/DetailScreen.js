import ReadMore from '@fawazahmed/react-native-read-more'
import { useRoute } from '@react-navigation/native'
import React, { useCallback, useState, useEffect } from 'react'
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import YoutubePlayer from 'react-native-youtube-iframe'
import { styles } from './styles/DetailStylesScreen'

export default Detail = ({ navigation }) => {
  const route = useRoute()
  const {
    title,
    description,
    category,
    actor,
    director,
    manufacturer,
    duration,
    image,
    link,
    isLike,
  } = route.params

  const titleFilm = title.split('/')
  const links = link.split('=')
  const [playing, setPlaying] = useState(false)
  const [Like, setIsLike] = useState(false)

  // const handleLiked = (item) => {
  //   item.isLike = !item.isLike
  //   const index = data.findIndex((movie) => movie.id === item.id)
  //   data[index] = item
  //   setData([...data])
  // }

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev)
  }, [])

  // useEffect(() => {
  //   console.log('link', link)
  // }, [link])

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../asset/img/bg.png')}>
      {/**tittle */}

      <View style={styles.viewTitle}>
        <View styly={styles.viewBtn}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => navigation.navigate('Home')}>
            <Icon name="angle-left" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textTitle}>{titleFilm.slice(0, 1)}</Text>
        </View>
      </View>

      {/*body */}
      <View style={styles.viewBody}>
        <View style={styles.viewImg}>
          <Image
            style={styles.img}
            source={{
              uri: image,
            }}
          />
        </View>
        <View style={styles.viewData}>
          <Text style={styles.txttitle}>{titleFilm.reverse().slice(0, 1)}</Text>
          <Text style={styles.title}>
            Genres:
            <Text style={styles.text}>{category}</Text>
          </Text>
          <Text style={styles.title}>
            Actor:
            <Text style={styles.text}>{actor}</Text>
          </Text>
          <Text style={styles.title}>
            Director:
            <Text style={styles.text}>{director}</Text>
          </Text>
          <Text style={styles.title}>
            Manufacturer
            <Text style={styles.text}>{manufacturer}</Text>
          </Text>
          <Text style={styles.title}>
            Thời Lượng Phim:
            <Text style={styles.text}>{duration}</Text>
          </Text>

          <View style={styles.btnLike}>
            <Icon
              name={isLike ? 'heart' : 'heart'}
              size={20}
              color={isLike ? 'red' : 'white'}
            />
            <Text style={styles.textBtnLike}>Thích</Text>
          </View>
        </View>
      </View>

      {/*Description */}
      <View style={styles.viewDes}>
        <ScrollView>
          <ReadMore
            style={styles.text}
            numberOfLines={3}
            seeMoreText="Xem Thêm"
            seeLessText="Ít Hơn">
            {description}
          </ReadMore>
        </ScrollView>
      </View>

      <View style={styles.viewYtb}>
        <Text style={styles.textTrailer}>Xem Trailer</Text>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={links.splice(1)}
          onChangeState={onStateChange}
        />
      </View>
    </ImageBackground>
  )
}
