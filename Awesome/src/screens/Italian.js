import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const Italian = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState();

  useEffect(() => {
    getRecipeData();
  }, []);

  const getRecipeData = () => {
    fetch(
      'https://api.spoonacular.com/recipes/complexSearch?cuisine=Italian&number=30&apiKey=19efe83190de474794b8447dfc479665',
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
        console.log(Object.keys(data.results[0]));
        setIsLoaded(false);
        setMyData(data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const showUserData = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{uri: item.image}} />
        </View>

        <View style={styles.bioDataContainer}>
          <Text style={styles.bioData}> {item.title} </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <Text style={styles.mainHeader}>Italian Recipes</Text>
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
    height: 250,
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
    color: '#fff',
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
    color: '#e5e5cb',
    marginBottom: 10,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
  },
});

export default Italian;
