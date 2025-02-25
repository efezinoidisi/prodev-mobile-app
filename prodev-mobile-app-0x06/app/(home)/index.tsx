import PropertyListing from '@/components/PropertyListing';
import { FILTERS, SAMPLE_DATA } from '@/constants/data';
import { styles } from '@/styles/_mainstyle';
import { Feather } from '@expo/vector-icons';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <View style={{}}>
          <View style={{}}>
            <Text style={{}}>Where to?</Text>
            <TextInput style={{}} placeholder='Location . Date . Add guest' />
          </View>
          <View style={{}}>
            <Feather name='search' size={24} color='white' />
          </View>
        </View>
      </View>

      <View
        style={{
          height: 72,
          backgroundColor: 'white',
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{}}>
            {FILTERS.map((filter, index) => (
              <View style={{}} key={index}>
                <Image
                  style={{
                    flex: 1,
                  }}
                  source={require('@/assets/images/sample-image.png')}
                  resizeMode='contain'
                />
                <Text>{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView style={{}}>
        <PropertyListing listings={SAMPLE_DATA} />
        <View style={{}}>
          <TouchableHighlight style={{}}>
            <Text style={{}}>Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
