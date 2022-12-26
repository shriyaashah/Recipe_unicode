/* import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo_2.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const [Name, setName] = useState('');
  const [DOB, setDOB] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Age, setAge] = useState('');
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const onHomePagePressed = () => {
    console.warn('onHomePagePressed');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Customer Profile</Text>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput placeholder="Name" value={Name} setValue={setName} />
        <CustomInput
          placeholder="Date Of Birth"
          value={DOB}
          setValue={setDOB}
        />
        <CustomInput placeholder="Email" value={Email} setValue={setEmail} />
        <CustomInput
          placeholder="Phone Number"
          value={PhoneNumber}
          setValue={setPhoneNumber}
        />
        <CustomInput placeholder="Age" value={Age} setValue={setAge} />

        <CustomButton
          text="Go back to Home Page"
          onPress={onHomePagePressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#008000',
    fontFamily: 'Cochin',
    margin: 10,
  },
});
export default ProfileScreen; */

import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const HomeScreen = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState();

  useEffect(() => {
    getRecipeData();
  }, []);

  const getRecipeData = () => {
    fetch(
      'https://api.spoonacular.com/recipes/random?number=10&apiKey=19efe83190de474794b8447dfc479665',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        var data = res;
        console.log(data);
        console.log(Object.keys(data.recipes[0]));
        setIsLoaded(false);
        setMyData(data.recipes);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // render the students cards
  const showUserData = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{uri: item.image}} />
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}> {item.title} </Text>
          </View>

          <View style={styles.mainContain}>
            <Text style={styles.myName}>
              {' '}
              health score: {item.healthScore}{' '}
            </Text>
            <Text style={styles.myName}>
              {' '}
              Ready in minutes: {item.readyInMinutes}{' '}
            </Text>
            <Text style={styles.myName}>
              {' '}
              Price per serving: {item.pricePerServing}{' '}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <Text style={styles.mainHeader}>Explore New Recipes</Text>
      <FlatList
        keyExtractor={item => item.id}
        data={myData}
        renderItem={showUserData}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  mainContainer: {
    width: '100%',
    minHeight: '100%',
    paddingVertical: 50,
    backgroundColor: '#e5e5cb',
  },
  card: {
    width: 350,
    height: 370,
    backgroundColor: '#d5cea3',
    borderRadius: 10,
    margin: 20,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  bioDataContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1a120b',
    paddingVertical: 10,
  },
  idNumber: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.5)',
    paddingRight: 10,
  },
  bioData: {
    paddingLeft: 20,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: '#e5e5cb',
  },
  mainHeader: {
    fontWeight: 'bold',
    textShadowColor: '#d5cea3',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 5,
    fontSize: 30,
    color: '#3c2a21',
    textAlign: 'center',
    paddingTop: 20,
  },
  imgContainer: {
    padding: 10,
    borderRadius: 10,
  },
  imgStyle: {
    width: '100%',
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: '#d5cea3',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
  },
});

export default HomeScreen;
